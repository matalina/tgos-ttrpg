<script lang="ts">
import DiceTray from '../components/DiceTray.svelte';
import DiceBox from '../components/DiceBox.svelte';
import { page, diceBoxOpen } from '../lib/stores';

let trayOpen = false;

function toggleDice() {
  $diceBoxOpen = !$diceBoxOpen;
}

function setPage(name: string) {
  $page = name;
}

function getResults(e: CustomEvent) {
  const results = e.detail;
  console.log(results);
}

function toggleDiceTray() {
  trayOpen = !trayOpen;
}

function displayResults() {
  trayOpen = false;
}

</script>

<header class="fixed top-0 left-0 w-full bg-teal-50 z-10">
  <nav>
    <button on:click={toggleDiceTray}><i class="fa-thin fa-dice-d20"></i></button>
    <button><i class="fa-sharp fa-scroll-old"></i></button>
    <button><i class="fa-sharp fa-solid fa-user-plus"></i></button>
    <button><i class="fa-regular fa-address-card"></i></button>
    <button><i class="fa-solid fa-dragon"></i></button>
    <button><i class="fa-solid fa-fort"></i></button>
    <button><i class="fa-regular fa-helmet-battle"></i></button>
    <button><i class="fa-solid fa-hand-holding-magic"></i></button>
    <button><i class="fa-regular fa-treasure-chest"></i></button>
    <button><i class="fa-regular fa-swords"></i></button>
    <button><i class="fa-regular fa-dungeon"></i></button>
  </nav>
</header>

<main class="bg-teal-700 w-full h-full pt-[4.45rem]">

</main>

{#if $diceBoxOpen}
<div id="dice">
  <DiceBox on:click={toggleDice} on:rolled={getResults}/>
</div>
{/if}

{#if trayOpen}
<div id="tray">
  <DiceTray on:shake={toggleDice} on:rolled={displayResults}/>
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
nav button:hover, nav button:focus {
  @apply bg-teal-600;
}

#tray {
  @apply absolute top-24 left-0 w-60;
  @apply bg-teal-50 text-teal-900 border-8 p-3 rounded-r-xl border-4 border-teal-900;;
}
</style>