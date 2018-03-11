
function drawRoadSign1(){
	let ctx = document.getElementById("canvas1").getContext("2d");
	ctx.fillStyle = "red";
	ctx.font = "25px Arial Black";
	//center the text in the middle
	ctx.textAlign = "center";
	//go to the middle point of the canvas
	ctx.translate(150,150);
	//no border line for the sign
	ctx.lineWidth=0;
	ctx.beginPath();
	//draw the red circle
	ctx.arc(0,0,80,0,2*Math.PI);
	//ctx.stroke();
	ctx.fill();
	//"write" the text
	ctx.fillStyle = "white";
	ctx.fillText("DO NOT",0,-25);
	ctx.lineWidth = 20;
	ctx.beginPath();
	ctx.moveTo(-65,0);
	ctx.lineTo(65,0);
	ctx.strokeStyle="white";
	ctx.stroke();
	ctx.fillText("ENTER",0,45);			
}

function drawRoadSign2(){
	let ctx = document.getElementById("canvas2").getContext("2d");
	ctx.translate(150,150);
	ctx.fillStyle = "Gold";
	ctx.lineCap="round";
	ctx.lineJoin="round";
	ctx.lineWidth = 5;
	ctx.beginPath();
	ctx.moveTo(-15,-105);
	//the tricky part is here, the round corner of rect is not round enough
	//have to use quadraticCurveTo to make it rounder
	ctx.quadraticCurveTo(0,-120,15,-105);
	ctx.lineTo(105,-15);
	ctx.quadraticCurveTo(120,0,105,15);
	ctx.lineTo(15,105);
	ctx.quadraticCurveTo(0,120,-15,105);
	ctx.lineTo(-105,15);
	ctx.quadraticCurveTo(-120,0,-105,-15);
	ctx.closePath();
	ctx.fill();
	ctx.stroke();	
	//draw the black box
	ctx.fillStyle="black";
	ctx.fillRect(-25,-80,50,160);
	ctx.lineWidth=0;
	//then the lights
	ctx.beginPath();
	ctx.fillStyle="red";
	ctx.arc(0,-45,20,0,2*Math.PI);
	//ctx.stroke();
	ctx.fill();
	
	ctx.beginPath();
	ctx.fillStyle="yellow";
	ctx.arc(0,0,20,0,2*Math.PI);
	//ctx.stroke();
	ctx.fill();
	
	ctx.beginPath();
	ctx.fillStyle="Lime";
	ctx.arc(0,45,20,0,2*Math.PI);
	//ctx.stroke();
	ctx.fill();
	
	
	//ctx.arc(0,0,80,0,2*Math.PI);
}
function drawRoadSign3(){

}
$(function() {
	drawRoadSign1();
	drawRoadSign2();
});