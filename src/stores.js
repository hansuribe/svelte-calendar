import { writable } from "svelte/store";
import _data from "./data.js";

const localStorage = window.localStorage.data;
export const data = writable(localStorage || _data);
export const modify = writable("");
