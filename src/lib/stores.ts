import { writable } from 'svelte/store';

export const page = writable('home');
export const diceBoxOpen = writable(false);
export const diceFormula = writable("1d20");