var mouseevent="empty";
var lastpositonX,lastpositionY;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
widthLine=2;
canvas.addEventLister("mousedown", myMouseDown);
function myMouseDown(e){
color =document.getElementById("cor").value;
widthLine =document.getElementById("largura").value;
mouseevent= "mouseDown";

}
canvas.addEventLister("mouseleave", MyMouseLeave);
function MyMouseLeave(e){
    mouseevent ="mouseleave";
}
canvas.addEventLister("mouseup", MyMouseUP);
function MyMouseUP(e){
    mouseevent ="mouseUP";
}
function myMouseMove(e){
    PositionMouseX= e.clientX -canvas.offsetLeft;
    PositionMouseY= e.clientY -canvas.offsetTop;
    if(mouseEvent== "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = widthLine;
        ctx.arc (PositionMouseX, PositionMouseY, radius,0,2*Math.PI);
        ctx.stroke();
    }
}