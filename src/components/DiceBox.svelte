<script type="ts">
import { diceFormula } from '../lib/stores';
import DiceBox from '@3d-dice/dice-box';
import { DisplayResults } from '@3d-dice/dice-ui';
import { createEventDispatcher, onMount } from 'svelte';

const dispatch = createEventDispatcher();
let diceBox;
const display = new DisplayResults();

onMount(async () => {
  diceBox = new DiceBox("#dice-box", {
    assetPath: '/assets/dice-box/' // include the trailing backslash
  });
  await diceBox.init({
    id: "dice-canvas",
    scale: 9
  });

  const result = await diceBox.roll($diceFormula);
  const output = await DP.parseFinalResults(result);
  display.showResults(output);
  dispatch('rolled', output);
});

function clear(e: Event) {
  dispatch('click', e);
  display.clear();
  const disps = document.getElementsByClassName('displayResults');
  for (const i in disps) {
    let item  = disps[i];
    document.body.removeChild(item);
  }

}
</script>

<div id="dice-box" on:click={clear}></div>