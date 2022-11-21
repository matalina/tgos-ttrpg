<script lang="ts">
import DiceBox from './components/DiceBox.svelte';
let diceBoxOpen = false;
let page = 'home';

function toggleDice() {
  diceBoxOpen = !diceBoxOpen;
}

function setPage(name: string) {
  page = name;
}

</script>

<header class="absolute top-0 left-0 w-full bg-teal-50 z-50">
  <nav>
    <button on:click={toggleDice}><i class="fa-thin fa-dice-d20"></i></button>
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
nav button:hover, nav button:focus {
  @apply bg-teal-600;
}
</style>