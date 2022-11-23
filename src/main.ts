import './hmr';
import './main.css';
import DiceParser from '@3d-dice/dice-parser-interface'
import App from './pages/App.svelte';

window.DP = new DiceParser();

const app = new App({
  target: document.body
})

export default app
