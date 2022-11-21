<script lang="ts">
import DiceBox from './components/DiceBox.svelte';
let diceBoxOpen = false;

function toggleDice() {
  diceBoxOpen = !diceBoxOpen;
}

</script>

<header class="absolute top-0 left-0 w-full bg-slate-200 z-50">
  <nav>
    <button on:click={toggleDice}><i class="fa-thin fa-dice-d20"></i></button>
  </nav>
</header>

<main class="bg-teal-700 w-full h-full pt-[4.45rem]">

</main>

{#if diceBoxOpen}
<div id="dice">
  <DiceBox />
</div>
{/if}


<footer>

</footer>

<style class="postcss">

nav {
  @apply border-b-8 border-teal-800 p-3;
}
nav button {
  @apply text-xl py-2 px-5 border border-teal-900 bg-teal-700 text-teal-100 rounded-lg;
}
</style>