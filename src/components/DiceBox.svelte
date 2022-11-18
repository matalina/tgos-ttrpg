<script type="ts">
import DiceBox from '@3d-dice/dice-box';
import DiceParser from '@3d-dice/dice-parser-interface';
import { AdvancedRoller } from '@3d-dice/dice-ui';
import { DicePicker } from '@3d-dice/dice-ui'
import { DisplayResults } from '@3d-dice/dice-ui'
import { onMount } from 'svelte';

const DP = new DiceParser();

let diceBox;
let display;
let dicePicker;
let roller;

let formula = '1d20';
let diceRoll = '';

onMount(async () => {
  diceBox = new DiceBox("#dice-box", {
    assetPath: '/assets/dice-box/' // include the trailing backslash
  });
  await diceBox.init({
    id: "dice-canvas",
    scale: 9
  });

  display = new DisplayResults("#dice-box");
  dicePicker = new DicePicker({
    target: '#dice-box',
    onSubmit: (notation) => diceBox.roll(notation),
    onClear: () => {
      diceBox.clear();
      display.clear();
    },
    onReroll: (rolls) => {
      // loop through parsed roll notations and send them to the Box
      rolls.forEach((roll) => diceBox.add(roll, roll.groupId));
    },
    onResults: (results) => {
      console.log(results);
      display.showResults(results);
    }
  });
  roller = new AdvancedRoller({
    target: "#dice-box",
    onSubmit: (notation) => diceBox.roll(notation),
    onClear: () => {
      diceBox.clear();
      display.clear();
    },
    onReroll: (rolls) => {
      // loop through parsed roll notations and send them to the Box
      rolls.forEach((roll) => diceBox.add(roll, roll.groupId));
    },
    onResults: (results) => {
      console.log(results);
      display.showResults(results);
    }
  });
  diceBox.onRollComplete = (results) => {
    roller.handleResults(results);
  };

});
</script>

<div id="dice-box"></div>