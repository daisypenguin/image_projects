var fg=null;
var bg=null;
//var greenThreshold=200;
function uploadfg(){
	var fileinput=document.getElementById("fginput");
	var imgcanvas=document.getElementById("fg");
	fg = new SimpleImage(fileinput);
	fg.drawTo(imgcanvas);
	alert("Foreground image loaded");
}

function uploadbg(){
	var fileinput=document.getElementById("bginput");
	var imgcanvas=document.getElementById("bg");
	bg = new SimpleImage(fileinput);
	bg.drawTo(imgcanvas);
	alert("Background image loaded");
}

function greenScreen(){
	if(fg==null||!fg.complete()){
		alert("foregroud not loaded");
		return;
	}
	if(bg==null||!bg.complete()){
		alert("background not loaded");
	}
	clearCanvas();
	var output=new SimpleImage(fg.getWidth(),fg.getHeight());
	for(var pixel of fg.values()){
		var x=pixel.getX();
		var y=pixel.getY();
		if(pixel.getGreen()> pixel.getRed()+pixel.getBlue()){
			var bgPixel=bg.getPixel(x,y);
			output.setPixel(x,y,bgPixel);
		}
		else{
			output.setPixel(x,y,pixel);
		}
	}
	var c1=document.getElementById("fg");
	output.drawTo(c1);
	alert("Composite formed!");
}

function clearCanvas(){
	var canvas1=document.getElementById("bg");
	var canvas2=document.getElementById("fg");
	var ctx1=canvas1.getContext("2d");
	var ctx2=canvas2.getContext("2d");
	ctx1.clearRect(0,0,canvas1.width,canvas1.height);
	ctx2.clearRect(0,0,canvas2.width,canvas2.height);
}