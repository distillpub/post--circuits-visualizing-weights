// Hot reloading
import * as _unused from "raw-loader!./index.ejs";


import ColabButton from "./diagrams/ColabButton.svelte";
import BigColabButton from "./diagrams/BigColabButton.svelte";


const diagrams = [
	["colab-button-1", ColabButton, {}],
	["colab-button-2", ColabButton, {}],
	["colab-button-3", ColabButton, {}],
	["colab-button-4", ColabButton, {}],
	["colab-button-5", ColabButton, {}],
	["colab-button-6", ColabButton, {}],
	["big-colab-button", BigColabButton, {}]
];


for(let [elementId, DiagramClass, props] of diagrams) {
	let target = document.getElementById(elementId);
	let example = new DiagramClass({ target, props});
}
