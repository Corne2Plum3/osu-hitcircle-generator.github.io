// name of elements
const input_color_picker = "demo_input_color";
const combo_color_picker = "demo_combo_color";
const result_element = "demo_final_color";

document.addEventListener('DOMContentLoaded', function(){ // when the page is loaded
	init()
	update_demo_color();
});

function init() { /* default value for the input and combo */
	document.getElementById(input_color_picker).value = "#EEEEEE";
	document.getElementById(combo_color_picker).value = "#009688";
}

function prod_colors(c1, c2) { /* returns the product of 2 colors "#rrggbb" */
	// get values
	var r1 = parseInt("0x" + c1[1] + c1[2]); // int 0-255
	var g1 = parseInt("0x" + c1[3] + c1[4]);
	var b1 = parseInt("0x" + c1[5] + c1[6]);
	var r2 = parseInt("0x" + c2[1] + c2[2]);
	var g2 = parseInt("0x" + c2[3] + c2[4]);
	var b2 = parseInt("0x" + c2[5] + c2[6]);
	// calc and convert
	var r3, g3, b3;
	// convert to hex
	// red
	if(Math.round(((r1*r2)/255)) < 16){ // to be sure to have 2 carcters hexa
		r3 = "0" + Math.round(((r1*r2)/255)).toString(16);
	} else {
		r3 = Math.round(((r1*r2)/255)).toString(16);  // Math.round(((r1*r2)/255)) = int 0-255
	}
	// green
	if(Math.round(((g1*g2)/255)) < 16){ // Math.round(((r1*r2)/255)) = int 0-255
		g3 = "0" + Math.round(((g1*g2)/255)).toString(16);
	} else {
		g3 = Math.round(((g1*g2)/255)).toString(16);
	}
	// blue
	if(Math.round(((b1*b2)/255)) < 16){ // Math.round(((r1*r2)/255)) = int 0-255
		b3 = "0" + Math.round(((b1*b2)/255)).toString(16);
	} else {
		b3 = Math.round(((b1*b2)/255)).toString(16);
	}
	return "#" + r3 + g3 + b3;
}

function update_demo_color() { /* update the combo color of the canvas result of demo of the mult blend mode */
	canvas = document.getElementById(result_element);
	ctx = canvas.getContext("2d");
	ctx.fillStyle = prod_colors(document.getElementById(input_color_picker).value, document.getElementById(combo_color_picker).value);
	ctx.fillRect(0, 0, canvas.width, canvas.height);
}
