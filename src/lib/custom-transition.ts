import { elasticOut } from "svelte/easing";

export function tailwindAnimate(
	node: HTMLElement,
	params: {
		delay?: number;
		duration?: number;
		easing?: (t: number) => number;
		classList: string[];
	}
) {
	node.classList.add(...params.classList);

	return {
		delay: params.delay || 0,
		duration: params.duration || 400,
		easing: params.easing || elasticOut
	};
}
