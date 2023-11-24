var mouseEvent = "empty";
var current_position_of_mouse_x, current_position_of_mouse_y, last_position_x, last_position_y;
canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var color = "black";
var shape = document.getElementById("shape").value;
var width_of_line = document.getElementById("width_of_line").value;
var radius = document.getElementById("radius").value;
canvas.addEventListener("mousedown", mymousedown);

function mymousedown(e) {
    //color = document.getElementById("color").value;s
    width_of_line = document.getElementById("width_of_line").value;
    radius = document.getElementById("radius").value;
    mouseEvent = "mouseDown";

    if (shape == "circle") {
        circle(getCurrent_X(e), getCurrent_Y(e));
    }

    if (shape == "square") {
        square(getCurrent_X(e), getCurrent_Y(e));
    }
}
function square(coord_x, coord_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.rect(coord_x, coord_y, radius, radius);
    ctx.stroke();
}
function circle(coord_x, coord_y) {
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width_of_line;
    ctx.rect(coord_x, coord_y, 0, 2 * Math.PI);
    ctx.stroke();
}
function getCurrent_X(e) {
    var mouse_x = e.clientX - canvas.offsetLeft;
    return mouse_x;
}
function getCurrent_Y(e) {
    var mouse_y = e.clientY - canvas.offsetTop;
    return mouse_y;
}
function change_values() {
    shape = document.getElementById("shape").value;
}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e) {

    current_position_of_mouse_x = getCurrent_X(e);
    current_position_of_mouse_y = getCurrent_Y(e);

    if(mouseEvent == "mouseDown"){
        console.log("Current position of x and y coordinates =");
        console.log("x = " + current_position_of_mouse_x + "y = " + current_position_of_mouse_y);

        if(shape == "line"){

            ctx.beginPath();
            ctx.strokeStyle = color;
            ctx.lineWidth = width_of_line;
            console.log("X = " + last_position_x + ",Y = " + last_position_y);
            ctx.moveTo(last_position_x,last_position_y);
            ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        } else if( shape == "circle"){
            circle(current_position_of_mouse_x,current_position_of_mouse_y);

        }else if( shape == "square"){
            square(current_position_of_mouse_x,current_position_of_mouse_y);
            
        }
        ctx.stroke();
    }
    last_position_x = current_position_of_mouse_x;
    last_position_y = current_position_of_mouse_y;
}

canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e){
console.log(getCurrent_X(e) + "," + getCurrent_Y(e));
mouseEvent = "mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e){
    console.log(getCurrent_X(e) + "," + getCurrent_Y(e));
    mouseEvent = "mouseleave";
    }


function clearArea() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
}