import { writable } from "svelte/store";
import _data from "./data.js";

// Data.js is the default database.
// Week.svelte stores the later database in localStorage on first run.
const localStorage = window.localStorage.data;
export const data = writable(localStorage || _data);
export const modify = writable("");
