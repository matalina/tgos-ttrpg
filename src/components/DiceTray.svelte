<script type="ts">
import { diceFormula} from './../lib/stores';
import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();
$: diceInput = makeString(count, mods);
let count = {
  4: 0,
  6: 0,
  8: 0,
  10: 0,
  12: 0,
  20: 1,
  100: 0,
};
let mods = {
  kh: 0,
  kl: 0,
  dh: 0,
  dl: 0,
  add: 0,
  sub: 0,
}

function makeString(count: any) {
  let dice = [];
  let string = '';

  for(let die in count) {
    let num = count[die];
    if(num > 0)
      dice.push(`${num}d${die}`);
  }
  string += dice.join('+');

  for(let type in mods) {
    const value = mods[type];
    switch(type) {
      case 'add':
        if(value > 0)
          string += `+${value}`;
        break;
      case 'sub':
        if(value > 0)
          string += `-${value}`;
        break;
      case 'kh':
        if(value === 1)
          string += `kh`;
        else if (value > 1)
          string += `kh${value}`  ;
        break;
      case 'kl':
        if(value === 1)
          string += `kl`;
        else if (value > 1)
          string += `kl${value}`  ;
        break;
      case 'dh':
        if(value === 1)
          string += `dh`;
        else if (value > 1)
          string += `dh${value}`  ;
        break;
      case 'dl':
        if(value === 1)
          string += `dl`;
        else if (value > 1)
          string += `dl${value}`  ;
        break;
    }
  }
  return string;
}

function rollDice() {
  if (diceInput) {
    const notation = DP.parseNotation(diceInput);
    $diceFormula = notation;
    dispatch('shake');
  }
}

function addDice(sides: number) {
  let dice = count;
  dice[sides]++;
  count = {...dice};
}

function addMod(type: string) {
  let mod = mods;
  mod[type]++;
  mods = {...mod};
}

function clear() {
  count = {
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    20: 0,
    100: 0,
  };
  clearMods();
}
function clearMods() {
  mods = {
    kh: 0,
    kl: 0,
    dh: 0,
    dl: 0,
    add: 0,
    sub: 0,
  };
}
</script>

<form on:submit|preventDefault={rollDice} class="mb-3">
  <input type="text" placeholder="Dice Formula" bind:value={diceInput} disabled/>
  <div class="flex justify-between mt-1">
    <input type="submit" value="Throw" class="w-2/5 button"/>
    <input type="reset" value="Clear" class="w-2/5 button" on:click={clear}/>
  </div>
</form>

<div class="flex justify-between">
  <div class="flex flex-col items-center">
    <button on:click={() => addDice(4)}>
      <i class="fa-light fa-dice-d4"></i>
      {#if count[4] > 0}
        <div class="count">{count[4]}</div>
      {/if}
    </button>
    <button on:click={() => addDice(6)}>
      <i class="fa-light fa-dice-d6"></i>
      {#if count[6] > 0}
        <div class="count">{count[6]}</div>
      {/if}
    </button>
    <button on:click={() => addDice(8)}>
      <i class="fa-light fa-dice-d8"></i>
      {#if count[8] > 0}
        <div class="count">{count[8]}</div>
      {/if}
    </button>
    <button on:click={() => addDice(10)}>
      <i class="fa-light fa-dice-d10"></i>
      {#if count[10] > 0}
        <div class="count">{count[10]}</div>
      {/if}
    </button>
    <button on:click={() => addDice(12)}>
      <i class="fa-light fa-dice-d12"></i>
      {#if count[12] > 0}
        <div class="count">{count[12]}</div>
      {/if}
    </button>
    <button on:click={() => addDice(20)}>
      <i class="fa-light fa-dice-d20"></i>
      {#if count[20] > 0}
        <div class="count">{count[20]}</div>
      {/if}
    </button>
    <button on:click={() => addDice(100)}>
      <i class="fa-light fa-dice-d10"></i><i class="fa-light fa-dice-d10"></i>
      {#if count[100] > 0}
        <div class="count">{count[100]}</div>
      {/if}
    </button>
  </div>
  <div class="flex flex-col items-center">
    <button on:click={() => addMod('add')}>
      +
      {#if mods.add > 0}
        <div class="count">{mods.add}</div>
      {/if}
    </button>
    <button on:click={() => addMod('sub')}>
      -
      {#if mods.sub > 0}
        <div class="count">{mods.sub}</div>
      {/if}
    </button>
    <button on:click={() => addMod('kh')}>
      kh
      {#if mods.kh > 0}
        <div class="count">{mods.kh}</div>
      {/if}
    </button>
    <button on:click={() => addMod('kl')}>
      kl
      {#if mods.kl > 0}
        <div class="count">{mods.kl}</div>
      {/if}
    </button>
    <button on:click={() => addMod('dh')}>
      dh
      {#if mods.dh > 0}
        <div class="count">{mods.dh}</div>
      {/if}
    </button>
    <button on:click={() => addMod('dl')}>
      dl
      {#if mods.dl > 0}
        <div class="count">{mods.dl}</div>
      {/if}
    </button>
  </div>
</div>

<style lang="postcss">
input {
  @apply py-2 px-3 border-2 border-teal-900 text-teal-900 bg-teal-50 rounded;
}
.button {
  @apply bg-teal-900 text-teal-50;
}
.button[type="reset"] {
  @apply bg-teal-50 text-teal-900;
}
button {
  @apply py-2 px-3 text-teal-900 text-4xl relative  w-fit;
}
.count {
  @apply py-1 px-2 absolute top-0 right-0;
  @apply text-xs bg-teal-900 text-teal-100 rounded-full;
}
</style>