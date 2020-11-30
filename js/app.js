// import librairies
// import { saveAs } from 'file-saver';

// global variables
const hitcircle_size = 117; // size in px (1x ver.) of the whole hitcircle
var amount_combo_colors = 4; // the number of combo color (4-8)

document.addEventListener('DOMContentLoaded', function(){ // when the page is loaded
	init();
	update_all(1);
	show_canvas_files(false); // hide all canvas files
});

/* INPUT FUNCTIONS */
function init() { /* initialize the page by define default value */
	document.getElementById("display_number").value = 1;
	document.getElementById("display_color").value = "#009688"; // same than combo_1_color
	document.getElementById("display_background").value = "1";
	
	document.getElementById("combo_1_color").value = "#4caf50";
	document.getElementById("combo_2_color").value = "#009688";
	document.getElementById("combo_3_color").value = "#2196f3";
	document.getElementById("combo_4_color").value = "#9c27b0";
	document.getElementById("combo_5_color").value = "#e91e63";
	document.getElementById("combo_6_color").value = "#f44336";
	document.getElementById("combo_7_color").value = "#ffc107";
	document.getElementById("combo_8_color").value = "#cddc39";
	
	document.getElementById("overlay_3d_effect").value = "0";
	document.getElementById("overlay_border_size").value = 8;
	document.getElementById("overlay_gradient_style").value = "none";
	document.getElementById("overlay_gradient_direction").value = 0;
	document.getElementById("overlay_color_1").value = "#FFFFFF";
	document.getElementById("overlay_alpha_1").value = 100;
	document.getElementById("overlay_color_2").value = "#EEEEEE";
	document.getElementById("overlay_alpha_2").value = 100;
	document.getElementById("overlay_shadow_style").value = "in/out";
	document.getElementById("overlay_shadow_blur").value = 6;
	document.getElementById("overlay_shadow_color").value = "#000000";
	document.getElementById("overlay_shadow_alpha").value = 100;
	
	document.getElementById("background_gradient_style").value = "none";
	document.getElementById("background_gradient_direction").value = 0;
	document.getElementById("background_color_1").value = "#707070";
	document.getElementById("background_alpha_1").value = 75;
	document.getElementById("background_color_2").value = "#999999";
	document.getElementById("background_alpha_2").value = 75;
	document.getElementById("background_shadow_style").value = "none";
	document.getElementById("background_shadow_blur").value = 8;;
	document.getElementById("background_shadow_color").value = "#FFFFFF";
	document.getElementById("background_shadow_alpha").value = 100;

	document.getElementById("ring_enabled").checked = false;
	document.getElementById("ring_gradient_style").value = "none"
	document.getElementById("ring_size").value = 96; // diameter in px (in 1x)
	document.getElementById("ring_border_size").value = 8; // in px
	document.getElementById("ring_gradient_direction").value = 180;
	document.getElementById("ring_gradient_direction").value = 0;
	document.getElementById("ring_color_1").value = "#EEEEEE";
	document.getElementById("ring_alpha_1").value = 100;
	document.getElementById("ring_color_2").value = "#D0D0D0";
	document.getElementById("ring_alpha_2").value = 100;
	
	document.getElementById("numbers_font_name").value = "Varela Round";
	document.getElementById("numbers_font_size").value = 56;
	document.getElementById("numbers_spacing").value = 0;
	document.getElementById("numbers_correction_y").value = -4;
	document.getElementById("numbers_gradient_style").value = "none";
	document.getElementById("numbers_gradient_direction").value = 0;
	document.getElementById("numbers_color_1").value = "#FFFFFF";
	document.getElementById("numbers_alpha_1").value = 100;
	document.getElementById("numbers_color_2").value = "#DDDDDD";
	document.getElementById("numbers_alpha_2").value = 100;
	document.getElementById("numbers_shadow_style").value = "none";
	document.getElementById("numbers_shadow_blur").value = 2;
	document.getElementById("numbers_shadow_color").value = "#000000";
	document.getElementById("numbers_shadow_alpha").value = 80;
}

function check_values(part) { /* verify if all of the elements have good values */
	/*
	 0. All
	 1. Display settings
	 2. Overlay
	 3. Colored part
	 4. Numbers
	*/
	
	function check_form_display(){
		var validity = (
			document.getElementById("display_color").checkValidity() && 
			document.getElementById("display_number").checkValidity() &&
			document.getElementById("display_background").checkValidity()
		);
		return validity; // if all of them is valid is valid, returns true, else returns false...
	}
	
	function check_form_overlay(){
		var validity = (
			document.getElementById("overlay_border_size").checkValidity() &&
			document.getElementById("overlay_3d_effect").checkValidity() &&
			document.getElementById("overlay_gradient_style").checkValidity() && 
			document.getElementById("overlay_gradient_direction").checkValidity() && 
			document.getElementById("overlay_color_1").checkValidity() && 
			document.getElementById("overlay_color_2").checkValidity() && 
			document.getElementById("overlay_alpha_1").checkValidity() && 
			document.getElementById("overlay_alpha_2").checkValidity() && 
			document.getElementById("overlay_shadow_style").checkValidity() && 
			document.getElementById("overlay_shadow_blur").checkValidity() && 
			document.getElementById("overlay_shadow_color").checkValidity() && 
			document.getElementById("overlay_shadow_alpha").checkValidity()
		);
		return validity;
	}
	
	function check_form_colored_part(){
		var validity = (
			document.getElementById("background_gradient_style").checkValidity() && 
			document.getElementById("background_gradient_direction").checkValidity() &&
			document.getElementById("background_color_1").checkValidity() && 
			document.getElementById("background_color_2").checkValidity() && 
			document.getElementById("background_alpha_1").checkValidity() && 
			document.getElementById("background_alpha_2").checkValidity() && 
			document.getElementById("background_shadow_style").checkValidity() && 
			document.getElementById("background_shadow_blur").checkValidity() && 
			document.getElementById("background_shadow_color").checkValidity() && 
			document.getElementById("background_shadow_alpha").checkValidity() && 
			document.getElementById("ring_size").checkValidity() &&
			document.getElementById("ring_border_size").checkValidity() &&
			document.getElementById("ring_gradient_style").checkValidity() && 
			document.getElementById("ring_gradient_direction").checkValidity() && 
			document.getElementById("ring_color_1").checkValidity() && 
			document.getElementById("ring_color_2").checkValidity() && 
			document.getElementById("ring_alpha_1").checkValidity() && 
			document.getElementById("ring_alpha_2").checkValidity()
		);
		return validity;
	}
	
	function check_form_numbers(){
		var validity = (
			document.getElementById("numbers_font_name").checkValidity() && 
			document.getElementById("numbers_font_size").checkValidity() && 
			document.getElementById("numbers_font_monospaced").checkValidity() && 
			document.getElementById("numbers_correction_y").checkValidity() && 
			document.getElementById("numbers_gradient_style").checkValidity() && 
			document.getElementById("numbers_gradient_direction").checkValidity() && 
			document.getElementById("numbers_color_1").checkValidity() && 
			document.getElementById("numbers_color_2").checkValidity() && 
			document.getElementById("numbers_alpha_1").checkValidity() && 
			document.getElementById("numbers_alpha_2").checkValidity() && 
			document.getElementById("numbers_shadow_style").checkValidity() && 
			document.getElementById("numbers_shadow_blur").checkValidity() && 
			document.getElementById("numbers_shadow_color").checkValidity() && 
			document.getElementById("numbers_shadow_alpha").checkValidity()
		);
		return validity;
	}
	
	var valid = true; // becomes false if something isn't valid
	switch(part){
		case 1:
			valid = check_form_display();
		case 2:
			valid = check_form_overlay();
		case 3:
			valid = check_form_colored_part();
		case 4:
			valid = check_form_numbers();
		default:
			valid = check_form_display() && check_form_overlay() && check_form_colored_part() && check_form_numbers();
	}
	return valid;
}

function update_all(execute_manage_hidden_inputs) { /* update the hidden values of some elements + orgazise the drawings */
	
	function manage_hidden_inputs() { /* manage the case if a element should be hidden or not */
		const opacity_disabled = 0.1; // value of disabled elements
		var t; // test who true = should be disabled
		
		/* GD = gradient direction ; CA2 = color+alpha 2 ; SH = shadow blur + color */
		// overlay color
		t = (document.getElementById("overlay_gradient_style").value == "none" || document.getElementById("overlay_gradient_style").value == "radial");
		document.getElementById("overlay_gradient_direction").disabled = t;
		document.getElementById("span_overlay_GD").style.opacity = 1 - (t * (1 - opacity_disabled));
		t = (document.getElementById("overlay_gradient_style").value == "none");
		document.getElementById("overlay_color_2").disabled = t;
		document.getElementById("overlay_color_2").disabled = t;
		document.getElementById("span_overlay_CA2").style.opacity = 1 - (t * (1 - opacity_disabled));
		// overlay shadow
		t = (document.getElementById("overlay_shadow_style").value == "none");
		document.getElementById("overlay_shadow_blur").disabled = t;
		document.getElementById("overlay_shadow_color").disabled = t;
		document.getElementById("overlay_shadow_alpha").disabled = t;
		document.getElementById("span_overlay_SH").style.opacity = 1 - (t * (1 - opacity_disabled));
		// background
		t = (document.getElementById("background_gradient_style").value == "none" || document.getElementById("background_gradient_style").value == "radial");
		document.getElementById("background_gradient_direction").disabled = t;
		document.getElementById("span_background_GD").style.opacity = 1 - (t * (1 - opacity_disabled));
		t = (document.getElementById("background_gradient_style").value == "none");
		document.getElementById("background_color_2").disabled = t;
		document.getElementById("background_color_2").disabled = t;
		document.getElementById("span_background_CA2").style.opacity = 1 - (t * (1 - opacity_disabled));
		// circle glow ("background shadow")
		t = (document.getElementById("background_shadow_style").value == "none");
		document.getElementById("background_shadow_blur").disabled = t;
		document.getElementById("background_shadow_color").disabled = t;
		document.getElementById("background_shadow_alpha").disabled = t;
		document.getElementById("span_background_SH").style.opacity = 1 - (t * (1 - opacity_disabled));
		// ring color
		t = (document.getElementById("ring_gradient_style").value == "none" || document.getElementById("ring_gradient_style").value == "radial");
		document.getElementById("ring_gradient_direction").disabled = t;
		document.getElementById("span_ring_GD").style.opacity = 1 - (t * (1 - opacity_disabled));
		t = (document.getElementById("ring_gradient_style").value == "none");
		document.getElementById("ring_color_2").disabled = t;
		document.getElementById("ring_color_2").disabled = t;
		document.getElementById("span_ring_CA2").style.opacity = 1 - (t * (1 - opacity_disabled));
		// font color
		t = (document.getElementById("numbers_gradient_style").value == "none" || document.getElementById("numbers_gradient_style").value == "radial");
		document.getElementById("numbers_gradient_direction").disabled = t;
		document.getElementById("span_numbers_GD").style.opacity = 1 - (t * (1 - opacity_disabled));
		t = (document.getElementById("numbers_gradient_style").value == "none");
		document.getElementById("numbers_color_2").disabled = t;
		document.getElementById("numbers_color_2").disabled = t;
		document.getElementById("span_numbers_CA2").style.opacity = 1 - (t * (1 - opacity_disabled));
		// font shadow
		t = (document.getElementById("numbers_shadow_style").value == "none");
		document.getElementById("numbers_shadow_blur").disabled = t;
		document.getElementById("numbers_shadow_color").disabled = t;
		document.getElementById("numbers_shadow_alpha").disabled = t;
		document.getElementById("span_numbers_SH").style.opacity = 1 - (t * (1 - opacity_disabled));
		
		/* combo colors 5-8 & combo -1/+1 buttons */
		t = (amount_combo_colors < 5);
		document.getElementById("remove_combo_color").disabled = t;
		document.getElementById("remove_combo_color").style.opacity = 1 - (t * (1 - opacity_disabled));
		document.getElementById("combo_5_color").hidden = t;
		document.getElementById("combo_5_button").hidden = t;
		t = (amount_combo_colors < 6);
		document.getElementById("combo_6_color").hidden = t;
		document.getElementById("combo_6_button").hidden = t;
		t = (amount_combo_colors < 7);
		document.getElementById("combo_7_color").hidden = t;
		document.getElementById("combo_7_button").hidden = t;
		t = (amount_combo_colors < 8);
		document.getElementById("combo_8_color").hidden = t;
		document.getElementById("combo_8_button").hidden = t;
		t = (amount_combo_colors >= 8);
		document.getElementById("add_combo_color").disabled = t;
		document.getElementById("add_combo_color").style.opacity = 1 - (t * (1 - opacity_disabled));
	}
	
	if(execute_manage_hidden_inputs){
		manage_hidden_inputs();
	}
	
	if(check_values(0)){ // if all of the values are valid
		draw_all_circles();
	}
	
	update_skin_ini();
}

function set_display_color_combo(c) { /* (used by combo buttons) set the display_color to combo_color_c */
	var color1 = document.getElementById("combo_"+(c.toString())+"_color").value;
	document.getElementById("display_color").value = color1;
	draw_preview();
}

function set_amount_combo_colors(mode) { /* set the amount of combo_color */
	if(mode == -1) { // remove last color
		amount_combo_colors -= 1;
	}
	if(mode == 1) { // add color
		amount_combo_colors += 1;
	}
	update_all(1);
}

function reset_editor(need_to_confirm) { /* reset all input from the editor */
	if(need_to_confirm == true){
		if(confirm("Are you sure to reset the editor?\nThis action cannot be undone.")) { // confirmation message
			init();
			update_all(1);
		}
	} else {
		init();
		update_all(1);
	}
}

function show_canvas_files(yes) { /* show or hide the <div> with all canvas files */
	document.getElementById("all_canvas_files").hidden = !yes;
}

/* TOOLS */
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

function hex_2_digits(n) { /* convert (int) 0-255 into hexadecimal with 2 caracters */
	if(n<16) {
		return "0" + n.toString(16);
	} else {
		return n.toString(16);
	}
}

/* DRAWING FUNCTIONS */
function draw_background(canvas, color1, color2, square_size) { /* draw a background of a canvas */
	var cv = document.getElementById(canvas);
	var ctx = cv.getContext('2d');
	var w = cv.width; // width in px of canvas
	var h = cv.height; // height in px of canvas
	var ss = square_size; // size in px of a square
	var sw = Math.round(w/ss+0.5); // num of squares in a row
	var sh = Math.round(h/ss+0.5); // num of squares in a column
	
	for(var i=0 ; i<(sw*sh) ; i++){
		if(i%2 == 0){
			ctx.fillStyle = color1;
		} else {
			ctx.fillStyle = color2;
		}
		ctx.fillRect((i%sw)*ss, ss*Math.round(i/sw-0.5), ss, ss);
		
	}
}

function draw_centered_circle(canvas_name, border_size, cs, gradient_style, gradient_direction, color1, color2, shadow_style, shadow_blur, shadow_color) { /* the function to draw circle */
	/* Arguments:
	 1. canvas_name (str): name of the canvas
	 2. border_size (int): 0=filled circle ; n=size in px of the stroke
	 3. cs (float): radius of the circle in px (border included)
	 4. gradient_style (str): "none", "linear", "radial"
	 5. gradient_direction (float): direction of the linear gradient
	 6. color1 (color): "rgba(r, g, b, a)" for exemple
	 7. color2 (color): "rgba(r, g, b, a)" for exemple
	 8. shadow_style (str): "none", "out", "in/out"
	 9. shadow_blur (int): shadow blur
	10. shadow_color (color): "rgba(r, g, b, a)" for exemple
	*/
			
	var canvas = document.getElementById(canvas_name);
	var ctx = canvas.getContext('2d');
			
	var gradient; // the gradient used to color the circle
			
	/* 1. define the gradient */
	switch(gradient_style){
		case "none":
			gradient = color1;
			break;
		case "linear":
			var x1 = Math.round((canvas.width/2) + (cs * Math.cos(Math.PI*gradient_direction/180-(Math.PI/2))));
			var y1 = Math.round((canvas.height/2) + (cs * Math.sin(Math.PI*gradient_direction/180-(Math.PI/2))));
			var x2 = canvas.width - x1;
			var y2 = canvas.height - y1;
			gradient = ctx.createLinearGradient(x1, y1, x2, y2);
			gradient.addColorStop(0, color1);
			gradient.addColorStop(1, color2);
			break;
		case "radial":
			// color1 = center ; color2 = out
			gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 1, (canvas.width)/2, (canvas.height)/2, cs);
			gradient.addColorStop(0, color1);
			gradient.addColorStop(1-(border_size/cs), color1);
			gradient.addColorStop(1, color2);
			break;
		}
			
		/* 2. define strokeStyle, fillStyle and lineWidth */
		if(border_size == 0){ // fill mode
			ctx.lineWidth = 0;
			ctx.fillStyle = gradient;
			ctx.strokeStyle = "rgba(0,0,0,0)";
		} else { // border mode
			ctx.lineWidth = border_size;
			ctx.fillStyle = "rgba(0,0,0,0)";
			ctx.strokeStyle = gradient;
		}
			
			/* 3. define the shadow */
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		switch(shadow_style){
			case "none":
				ctx.shadowBlur = 0;
				ctx.shadowColor = "rgba(0,0,0,0)";
				break;
			case "out":
				ctx.shadowBlur = shadow_blur;
				ctx.shadowColor = shadow_color;
				break;
			case "in/out":
				ctx.shadowBlur = shadow_blur;
				ctx.shadowColor = shadow_color;
				break;
		}
			
		/* 4. draw */
		// specific case of shadow_style = "out"
		if(shadow_style == "out"){
			// set the line width and the stroke style for this hidden circle
			ctx.lineWidth = 2;
			ctx.strokeStyle = shadow_color;
			// draw a thin ring in the size of the circle (doesn't work very well if the circle is filled AND his alpha < 100%)
			ctx.beginPath();
			ctx.arc(canvas.width/2, canvas.height/2, cs-2, 0, 2*Math.PI);
			ctx.stroke();
			ctx.arc(canvas.width/2, canvas.height/2, cs-2, 0, 2*Math.PI); // drawn 2 times to make the shadow similar to the "in/out" style
			ctx.stroke();
			ctx.closePath();
			// reset the line width & stroke style
			ctx.lineWidth = border_size;
			ctx.strokeStyle = gradient;
			// remove the shadow for the last circle (the final)
			ctx.shadowBlur = 0;
			ctx.shadowColor = "rgba(0,0,0,0)";
		}
		// real circle
		ctx.beginPath();
		if(border_size == 0){ // filled
			ctx.arc(canvas.width/2, canvas.height/2, cs-(border_size/2), 0, 2*Math.PI);
			ctx.fill();
		} else {
			ctx.arc(canvas.width/2, canvas.height/2, cs-(border_size/2), 0, 2*Math.PI);
			ctx.stroke();
		}
		ctx.closePath();
	}

function draw_overlay(canvas_name) { /* draw the overlay */
	// get border size
	var border_size = parseInt(document.getElementById("overlay_border_size").value) * 2;
	// get main colors
	var c1 = document.getElementById("overlay_color_1").value + hex_2_digits(Math.round(document.getElementById("overlay_alpha_1").value*2.55));
	var c2 = document.getElementById("overlay_color_2").value + hex_2_digits(Math.round(document.getElementById("overlay_alpha_2").value*2.55));
	var gradient_style = document.getElementById("overlay_gradient_style").value;
	var gradient_direction = parseInt(document.getElementById("overlay_gradient_direction").value);
	// get shadow blur & color
	var shadow_blur = parseInt(document.getElementById("overlay_shadow_blur").value);
	var shadow_color = document.getElementById("overlay_shadow_color").value + hex_2_digits(Math.round(document.getElementById("overlay_shadow_alpha").value*2.55));
	var shadow_style = document.getElementById("overlay_shadow_style").value;
	var effect_3d = document.getElementById("overlay_3d_effect").value;
	
	/* draw */
	// 3d effect
	if(effect_3d != "0"){
		var canvas = document.getElementById(canvas_name);
		var ctx = canvas.getContext("2d");
		var img1 = new Image();
		img1.src = "img/overlay"+effect_3d+".png";
		ctx.drawImage(img1, border_size, border_size, canvas.width-2*border_size, canvas.height-2*border_size);
		
	}
	// circle
	draw_centered_circle(
		"hitcircleoverlay_2x", /* canvas */
		border_size, /* border size */
		hitcircle_size, /* circle radius */
		gradient_style, /* gradient style */
		gradient_direction, /* gradient direction */
		c1, /* color 1 */
		c2, /* color 2 */
		shadow_style, /* shadow style */
		shadow_blur, /* shadow blur */
		shadow_color /* shadow color */
	);
}

function draw_colored_part(canvas_name, apply_color) { /* draw the colored part */
	// apply_color: (bool) apply the display color
	var draw_ring = document.getElementById("ring_enabled").checked;
	/* 1. Background */
	// get colors
	if(apply_color == true){ // apply display color
		var c1 = prod_colors(document.getElementById("background_color_1").value, document.getElementById("display_color").value) + hex_2_digits(Math.round(document.getElementById("background_alpha_1").value*2.55));
		var c2 = prod_colors(document.getElementById("background_color_2").value, document.getElementById("display_color").value) + hex_2_digits(Math.round(document.getElementById("background_alpha_2").value*2.55));
		var shadow_color = prod_colors(document.getElementById("background_shadow_color").value, document.getElementById("display_color").value) + hex_2_digits(Math.round(document.getElementById("background_shadow_alpha").value*2.55));
	} else { // don't apply
		var c1 = document.getElementById("background_color_1").value + hex_2_digits(Math.round(document.getElementById("background_alpha_1").value*2.55));
		var c2 = document.getElementById("background_color_2").value + hex_2_digits(Math.round(document.getElementById("background_alpha_2").value*2.55));
		var shadow_color = document.getElementById("background_shadow_color").value + hex_2_digits(Math.round(document.getElementById("background_shadow_alpha").value*2.55));
	}
	var gradient_style = document.getElementById("background_gradient_style").value;
	var gradient_direction = parseInt(document.getElementById("background_gradient_direction").value);
	// get shadow blur & color (the glow)
	var shadow_blur = parseInt(document.getElementById("background_shadow_blur").value);
	var shadow_style = document.getElementById("background_shadow_style").value;
	
	/* draw */
	draw_centered_circle(
		canvas_name, /* canvas */
		0, /* border size (0 = filled circle) */
		hitcircle_size-0.5, /* circle radius */
		gradient_style, /* gradient style */
		gradient_direction, /* gradient direction */
		c1, /* color 1 */
		c2, /* color 2 */
		shadow_style, /* shadow style */
		shadow_blur, /* shadow blur */
		shadow_color /* shadow color */
	);
	
	/* 2. Ring (colored) */
	if(draw_ring == true){
		// get colors
		if(apply_color == true){ // apply display color
			var c1 = prod_colors(document.getElementById("ring_color_1").value, document.getElementById("display_color").value) + hex_2_digits(Math.round(document.getElementById("ring_alpha_1").value*2.55));
			var c2 = prod_colors(document.getElementById("ring_color_2").value, document.getElementById("display_color").value) + hex_2_digits(Math.round(document.getElementById("ring_alpha_2").value*2.55));
		} else { // don't apply
			var c1 = document.getElementById("ring_color_1").value + hex_2_digits(Math.round(document.getElementById("ring_alpha_1").value*2.55));
			var c2 = document.getElementById("ring_color_2").value + hex_2_digits(Math.round(document.getElementById("ring_alpha_2").value*2.55));
		}
		var gradient_style = document.getElementById("ring_gradient_style").value;
		var gradient_direction = document.getElementById("ring_gradient_direction").value;
		// get radius & border size
		var ring_radius = parseInt(document.getElementById("ring_size").value); // radius
		var ring_border_size = parseInt(document.getElementById("ring_border_size").value) * 2;
		
		// draw
		draw_centered_circle(
			canvas_name, /* canvas */
			ring_border_size, /* border size  */
			ring_radius, /* circle radius */
			gradient_style, /* gradient style */
			gradient_direction, /* gradient direction */
			c1, /* color 1 */
			c2, /* color2 */
			"none", /* shadow style */
			0, /* shadow blur */
			"rgba(0,0,0,0)" /* shadow color */
		);
	}
}

function generate_numbers() { /* draw numbers in their canvas */
	// get settings
	var font_name = document.getElementById("numbers_font_name").value;
	var font_size = document.getElementById("numbers_font_size").value * 2;
	var font_spacing = document.getElementById("numbers_spacing").value * 2;
	var correction_y = -(document.getElementById("numbers_correction_y").value * 2);
	var monospaced_font = document.getElementById("numbers_font_monospaced").checked;
	var display_number = document.getElementById("display_number").value;
	// colors
	var c1 = document.getElementById("numbers_color_1").value + hex_2_digits(Math.round(document.getElementById("numbers_alpha_1").value*2.55));
	var c2 = document.getElementById("numbers_color_2").value + hex_2_digits(Math.round(document.getElementById("numbers_alpha_2").value*2.55));
	var gradient_style = document.getElementById("numbers_gradient_style").value;
	var gradient_direction = parseInt(document.getElementById("overlay_gradient_direction").value);
	// shadow
	var shadow_blur = parseInt(document.getElementById("numbers_shadow_blur").value);
	var shadow_color = document.getElementById("numbers_shadow_color").value + hex_2_digits(Math.round(document.getElementById("numbers_shadow_alpha").value*2.55));
	var shadow_style = document.getElementById("numbers_shadow_style").value;
	
	if(shadow_style != "none"){ // add padding for glow (to avoid to crop it)
		var cp = Math.round(font_size/80) + (shadow_blur/2); // distance between the canvas border and the text
	} else {
		var cp = Math.round(font_size/80);
	}
	var digits_width = Array(10); // list of digits canvas widths
	
	/* 1. get digits_width values */
	var canvas = document.getElementById("default_0_2x"); // a canvas is needed to get text widths (the canvas name isn't important)
	var ctx = canvas.getContext("2d");
	ctx.font = font_size.toString() + "px " + font_name;
	ctx.textAlign = "center";
	ctx.textBaseline = "middle";
	if(monospaced_font == true){ // get the width canvas size needed (based on the widest digit)
		var max_width = 0;
		var current_digit_width;
		for(var i=0 ; i<=9 ; i++){
			current_digit_width = (ctx.measureText(i.toString()).width) + (2*(cp));
			if(current_digit_width > max_width){
				max_width = current_digit_width;
			}
		}
		max_width = 2 * Math.round(max_width/2) // to have a even number (ended by 0, 2, 4, 6, 8)
		digits_width = [max_width, max_width, max_width, max_width, max_width, max_width, max_width, max_width, max_width, max_width];
		
	} else { // non-monospaced font
		for(var i=0 ; i<=9 ; i++){
			digits_width[i] = 2 * Math.round((ctx.measureText(i.toString()).width/2)+(cp/2));
		}
	}
	
	/* 2. draw numbers */
	// canvas numbers
	for(var i=0 ; i<=9 ; i++){
		// 256px canvas
		canvas = document.getElementById("default_"+ i.toString() + "_2x");
		ctx = canvas.getContext("2d");
		canvas.width = digits_width[i]; // resize the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = font_size.toString() + "px " + font_name;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		// get color
		var gradient;
		if(canvas.width > canvas.height) { // cs = min of (width and height)
			var cs = canvas.height;
		} else {
			var cs = canvas.width;
		}
		switch(gradient_style){
		case "none":
			gradient = c1;
			break;
		case "linear":
			var x1 = Math.round((canvas.width/2) + (cs * Math.cos(Math.PI*gradient_direction/180-(Math.PI/2))));
			var y1 = Math.round((canvas.height/2) + (cs * Math.sin(Math.PI*gradient_direction/180-(Math.PI/2))));
			var x2 = canvas.width - x1;
			var y2 = canvas.height - y1;
			gradient = ctx.createLinearGradient(x1, y1, x2, y2);
			gradient.addColorStop(0, c1);
			gradient.addColorStop(1, c2);
			break;
		case "radial":
			// color1 = center ; color2 = out
			gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 1, (canvas.width)/2, (canvas.height)/2, cs);
			gradient.addColorStop(0, c1);
			gradient.addColorStop(1, c2);
			break;
		}
		ctx.fillStyle = gradient;
		
		// get shadow
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		if(shadow_style == "out") {
			ctx.shadowBlur = shadow_blur;
			ctx.shadowColor = shadow_color;
		} else { // none
			ctx.shadowBlur = 0;
			ctx.shadowColor = "rgba(0,0,0,0)";
		}
		
		// draw
		ctx.fillText(i, (canvas.width/2)+0, (canvas.height/2)+correction_y);
		
		// 128px canvas
		canvas = document.getElementById("default_"+ i.toString());
		ctx = canvas.getContext("2d");
		canvas.width = digits_width[i]/2; // resize the canvas
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.font = (font_size/2).toString() + "px " + font_name;
		ctx.textAlign = "center";
		ctx.textBaseline = "middle";
		// get color
		var gradient;
		if(canvas.width > canvas.height) { // cs = min of (width and height)
			var cs = canvas.height;
		} else {
			var cs = canvas.width;
		}
		switch(gradient_style){
		case "none":
			gradient = c1;
			break;
		case "linear":
			var x1 = Math.round((canvas.width/2) + (cs * Math.cos(Math.PI*gradient_direction/180-(Math.PI/2))));
			var y1 = Math.round((canvas.height/2) + (cs * Math.sin(Math.PI*gradient_direction/180-(Math.PI/2))));
			var x2 = canvas.width - x1;
			var y2 = canvas.height - y1;
			gradient = ctx.createLinearGradient(x1, y1, x2, y2);
			gradient.addColorStop(0, c1);
			gradient.addColorStop(1, c2);
			break;
		case "radial":
			// color1 = center ; color2 = out
			gradient = ctx.createRadialGradient(canvas.width/2, canvas.height/2, 1, (canvas.width)/2, (canvas.height)/2, cs);
			gradient.addColorStop(0, c1);
			gradient.addColorStop(1, c2);
			break;
		}
		
		// get shadow
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		if(shadow_style == "out") {
			ctx.shadowBlur = shadow_blur/2;
			ctx.shadowColor = shadow_color;
		} else { // none
			ctx.shadowBlur = 0;
			ctx.shadowColor = "rgba(0,0,0,0)";
		}
		
		ctx.fillStyle = gradient;
		ctx.fillText(i, (canvas.width/2)+0, (canvas.height/2)+(correction_y/2));
	}
	
}

function draw_preview() { /* draw the full hitcircle in the preview canvas */
	
	function draw_numbers_preview(){ /* draw numbers in the preview */
		var display_number = document.getElementById("display_number").value;
		const number_length = display_number.toString().length; // amount of digits in the number to display
		const scale = 0.8; // adjust size of digits in the preview
		var canvas_x = Array(number_length); // list of all X positions for the canvas
		var shadow_blur = document.getElementById("numbers_shadow_blur").value; // to not change the digits positions despite their shadow
		// get the X position of digits
		canvas_x[0] = 0;
		for(var i=1 ; i<number_length ; i++){
			canvas_x[i] = canvas_x[i-1] + (parseInt(font_spacing) + document.getElementById("default_"+ (display_number.toString())[i-1] + "_2x").width - (shadow_blur/1)) * scale;
		}
		var number_width = canvas_x[canvas_x.length-1] + document.getElementById("default_"+ (display_number.toString())[canvas_x.length-1] + "_2x").width * scale;
		
		// draw
		var d; // the canvas to draw
		canvas = document.getElementById("hitcircle_preview");
		ctx = canvas.getContext("2d");
		for(var i=0 ; i<number_length ; i++){
			d = document.getElementById("default_"+(display_number.toString())[i]+"_2x");
			ctx.drawImage(d, ((canvas.width-number_width)/2)+canvas_x[i], (canvas.height-(d.height*scale))/2, d.width*scale, d.height*scale);
		}
	}
	
	var preview_background_style = document.getElementById("display_background").value;
	var font_spacing = document.getElementById("numbers_spacing").value;
	var canvas = document.getElementById("hitcircle_preview");
	var ctx = canvas.getContext("2d");
	
	/* 1. canvas background */
	switch(preview_background_style){
		case "0":
			draw_background("hitcircle_preview", "#000000", "#000000", 8);
			break;
		case "1":
			draw_background("hitcircle_preview", "#222222", "#444444", 8);
			break;
		case "2":
			draw_background("hitcircle_preview", "#666666", "#888888", 8);
			break;
		case "3":
			draw_background("hitcircle_preview", "#bbbbbb", "#dddddd", 8);
			break;
		case "4":
			draw_background("hitcircle_preview", "#ffffff", "#ffffff", 8);
			break;
	}
	
	/* 2. colored part */
	draw_colored_part("hitcircle_preview", true); // colored part, applying the combo color
	
	/* 3. overlay + numbers */
	if(numbers_behind_overlay == true){ // decides what will be drawn 1st
		draw_numbers_preview(); // draw numbers
		ctx.drawImage(document.getElementById("hitcircleoverlay_2x"), (canvas.width-256)/2, (canvas.height-256)/2); // copy the overlay
	} else {
		ctx.drawImage(document.getElementById("hitcircleoverlay_2x"), (canvas.width-256)/2, (canvas.height-256)/2); // the 256 is the overlay canvas size
		draw_numbers_preview(); // draw number
	}
}

function draw_all_circles() { /* draw overlay + colored circle + numbers (generate files + preview) */
	var hitcircle_size = 117; // size in px of the whole hitcircle (in 1x)
	var numbers_behind_overlay = document.getElementById("numbers_behind_overlay").checked;
	
	// clear all canvas
	document.getElementById("hitcircle_preview").getContext('2d').clearRect(0, 0, 256, 256);
	document.getElementById("hitcircle").getContext('2d').clearRect(0, 0, 128, 128);
	document.getElementById("hitcircleoverlay").getContext('2d').clearRect(0, 0, 128, 128);
	document.getElementById("hitcircle_2x").getContext('2d').clearRect(0, 0, 256, 256);
	document.getElementById("hitcircleoverlay_2x").getContext('2d').clearRect(0, 0, 256, 256);
	
	// create overlay canvas
	// 2x
	draw_overlay("hitcircleoverlay_2x");
	// 1x
	canvas = document.getElementById("hitcircleoverlay");
	ctx = canvas.getContext("2d");
	ctx.drawImage(document.getElementById("hitcircleoverlay_2x"), 0, 0, canvas.width, canvas.height);
	
	// create colored part canvas
	// 2x
	draw_colored_part("hitcircle_2x", false);
	// 1x
	var canvas = document.getElementById("hitcircle");
	var ctx = canvas.getContext("2d");
	ctx.drawImage(document.getElementById("hitcircle_2x"), 0, 0, canvas.width, canvas.height); // copy
	
	// create numbers canvas
	generate_numbers();
	
	// preview canvas
	draw_preview();
}

/* OTHERS */
function update_skin_ini() {

	var numbers_shadow_blur = parseInt(document.getElementById("numbers_shadow_blur").value);
	var numbers_spacing = parseInt(document.getElementById("numbers_spacing").value);
	var c;
	
	/* calc HitCircleOverlap */
	if(document.getElementById("numbers_shadow_style").value == "none"){
		var hitCircleOverlap = - numbers_spacing;
	} else {
		var hitCircleOverlap = - (parseInt(numbers_spacing + (numbers_shadow_blur/2)));
	}
	
	/* display */
	/* [General] */
	if(document.getElementById("skin_name_input").value == "") {
		document.getElementById("ini_Name_value").innerHTML = "Unnamed skin";
	} else {
		document.getElementById("ini_Name_value").innerHTML = document.getElementById("skin_name_input").value;
	}
	if(document.getElementById("author_name_input").value == "") {
		document.getElementById("ini_Author_value").innerHTML = "Unknown";
	} else {
		document.getElementById("ini_Author_value").innerHTML = document.getElementById("author_name_input").value;
	}
	document.getElementById("ini_Version_value").innerHTML = "2.5";
	document.getElementById("ini_HitCircleOverlayAboveNumer_value").innerHTML = document.getElementById("numbers_behind_overlay").checked + 0; // +0 to convert into number
	
	/* [Colors] */
	for(var i=1 ; i<=8 ; i++){ // colors 1 to 8
		if(i > amount_combo_colors) {
			document.getElementById("ini_Color" + i.toString()).hidden = true;
		} else {
			document.getElementById("ini_Color" + i.toString()).hidden = false;
			c = document.getElementById("combo_"+ i.toString() + "_color").value;
			document.getElementById("ini_Color" + i.toString() + "_value").innerHTML = parseInt(c[1]+c[2],16).toString() + "," + parseInt(c[3]+c[4],16).toString() + "," + parseInt(c[5]+c[6],16).toString();
		}
	}
	
	/* [Fonts] */
	document.getElementById("ini_HitCirclePrefix_value").innerHTML = "default";
	document.getElementById("ini_HitCircleOverlap_value").innerHTML = hitCircleOverlap;
}

function export_hitcircles() {
	/* create_skin_ini: true to create the skin.ini */
	function getBase64String(dataURL) {
		/* from this: https://levelup.gitconnected.com/draw-an-svg-to-canvas-and-download-it-as-image-in-javascript-f7f7713cf81f */
		var idx = dataURL.indexOf('base64,') + 'base64,'.length;
		return dataURL.substring(idx);
	}
	
	function canvas_to_file(canvas_name, file_name) { // add a file for the jsZip
		/* file_name full name (with the .png) */
		let png = document.getElementById(canvas_name).toDataURL('image/png'); // image as dataURL
		let baseString = getBase64String(png);
		jsZip.file(file_name, baseString, {base64 : true});
	}
	
	let jsZip = new JSZip(); // constructor for the ZIP
	
	/* images */
	if(document.getElementById("export_as_slider_circle").checked == true) { // if start name by slider for circles
		canvas_to_file("hitcircle", "sliderstartcircle.png"); // hitcircle (colored part)
		canvas_to_file("hitcircle_2x", "sliderstartcircle@2x.png");
		canvas_to_file("hitcircleoverlay", "sliderstartcircleoverlay.png"); // overlay
		canvas_to_file("hitcircleoverlay_2x", "sliderstartcircleoverlay@2x.png");
	} else {
		canvas_to_file("hitcircle", "hitcircle.png"); // hitcircle (colored part)
		canvas_to_file("hitcircle_2x", "hitcircle@2x.png");
		canvas_to_file("hitcircleoverlay", "hitcircleoverlay.png"); // overlay
		canvas_to_file("hitcircleoverlay_2x", "hitcircleoverlay@2x.png");
	}
	
	for(var i=0 ; i<=9 ; i++){ // default number
		canvas_to_file("default_"+i.toString(), "default-"+i.toString()+".png");
		canvas_to_file("default_"+i.toString()+"_2x", "default-"+i.toString()+"@2x.png");
	}

	/* skin.ini */
	if(document.getElementById("export_skin_ini").checked == true){ // export skin.ini files
		var skin_ini_content = document.getElementById("skin_ini_content").innerText;
		jsZip.file("skin.ini", skin_ini_content);
	}
	if(document.getElementById("circle_at_sliderend").checked == false) { // disable circles at sliders end
		canvas_to_file("sliderendcircle_disabled", "sliderendcircle.png");
	}
	
	/* Generate the zip file */
	jsZip.generateAsync({type:"blob"}).then(function (content) {
		content = URL.createObjectURL(content);
		// define the name
		const forbidden_files_names = ["CON","PRN","AUX","NUL","COM1","COM2","COM3","COM4","COM5","COM6","COM7","COM8","COM9","LPT1","LPT2","LPT3","LPT4","LPT5","LPT6","LPT7","LPT8","LPT9"]; // forbidden Windows files names
		const forbidden_caracteres = '<>:«,/\\|?*"'; // caracters who can appears in a file name
		var skin_name = document.getElementById("ini_Name_value").innerHTML;
		var name = "";
			if(forbidden_files_names.indexOf(skin_name) != -1) { // if in the forbidden list names
				skin_name = "'" + skin_name + "'";
			}
			for(var i=0 ; i<skin_name.length ; i++) {
				if(forbidden_caracteres.indexOf(skin_name[i]) == -1) { // if in the allowed_caracteres_list
					name += skin_name[i];
				} else {
					name += "_";
				}
			}
			if(name[skin_name.length-1] == " " || name[skin_name.length-1] == ".") { // last caracter
				name[skin_name.length-1] = "_";
			}
			name += ".zip"; // add .zip at the end
		download(content, name); // already written above
	});
	
}
