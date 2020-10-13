import { writable } from "svelte/store";
import _data from "./data.js";

export const data = writable(_data)
export const modify = writable("");