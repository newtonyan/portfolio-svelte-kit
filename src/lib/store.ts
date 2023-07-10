import { writable } from "svelte/store";
import type { ColorTheme } from "./types";
import { browser } from "$app/environment";

function isValidColorTheme(theme: ColorTheme): theme is ColorTheme {
	return theme === "light" || theme === "dark";
}

let initialValue: ColorTheme = "light";
if (browser) {
	const colorThemeLocalStorage: any = localStorage.getItem("colorTheme");

	if (isValidColorTheme(colorThemeLocalStorage)) {
		initialValue = colorThemeLocalStorage;
	}
}
export const colorTheme = writable<ColorTheme>(initialValue);
