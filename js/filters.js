var image=null;
function upload(){
	var fileinput=document.getElementById("finput");
	var imgcanvas=document.getElementById("c1");
	image = new SimpleImage(fileinput);
	image.drawTo(imgcanvas);
	alert("Image loaded!");
}

function makeGray(){
	if(image==null||!image.complete()){
		alert("Image not loaded!");
		return;
	}
	for(var pixel of image.values()){
		var avg=((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
		pixel.setRed(avg);
		pixel.setGreen(avg);
		pixel.setBlue(avg);
	}
	var imgcanvas=document.getElementById("c2");
	image.drawTo(imgcanvas);
	alert("Grayscale filter applied!");
}

function makeRed(){
	if(image==null||!image.complete()){
		alert("Image not loaded!");
		return;
	}
	for(var pixel of image.values()){
		var avg=((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
		if(avg<128){
			pixel.setRed(2*avg);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		else
		{
			pixel.setRed(255);
			pixel.setGreen(2*avg-255);
			pixel.setBlue(2*avg-255);
		}
	}
	var imgcanvas=document.getElementById("c2");
	image.drawTo(imgcanvas);
	alert("Red filter applied!");
}

function Rainbow(){
	if(image==null||!image.complete()){
		alert("Image not loaded!");
		return;
	}
	var height=image.getHeight();
	for(var pixel of image.values()){
		var x=pixel.getX();
		var y=pixel.getY();
		var avg=((pixel.getRed()+pixel.getGreen()+pixel.getBlue())/3);
		if(y<height/7)
		{
		if(avg<128){
			pixel.setRed(2*avg);
			pixel.setGreen(0);
			pixel.setBlue(0);
		}
		else
		{
			pixel.setRed(255);
			pixel.setGreen(2*avg-255);
			pixel.setBlue(2*avg-255);
		}
		}
		else if(y<2*height/7){
			if(avg<128){
				pixel.setRed(2*avg);
				pixel.setGreen(0.8*avg);
				pixel.setBlue(0);
			}
			else{
				pixel.setRed(255);
				pixel.setGreen(1.2*avg-51);
				pixel.setBlue(2*avg-255);
			}
		}
		else if(y<3*height/7){
			if(avg<128){
				pixel.setRed(2*avg);
				pixel.setGreen(2*avg);
				pixel.setBlue(0);
			}
			else{
				pixel.setRed(255);
				pixel.setGreen(255);
				pixel.setBlue(2*avg-255);
			}
		}
		else if(y<4*height/7){
			if(avg<128){
				pixel.setRed(0);
				pixel.setGreen(2*avg);
				pixel.setBlue(0);
			}
			else{
				pixel.setRed(2*avg-255);
				pixel.setGreen(255);
				pixel.setBlue(2*avg-255);
			}
		}
		else if(y<5*height/7){
			if(avg<128){
				pixel.setRed(0);
				pixel.setGreen(0);
				pixel.setBlue(2*avg);
			}
			else{
				pixel.setRed(2*avg-255);
				pixel.setGreen(2*avg-255);
				pixel.setBlue(255);
			}
		}
		else if(y<6*height/7){
			if(avg<128){
				pixel.setRed(0.8*avg);
				pixel.setGreen(0);
				pixel.setBlue(2*avg);
			}
			else{
				pixel.setRed(1.2*avg-51);
				pixel.setGreen(2*avg-255);
				pixel.setBlue(255);
			}
		}
		else {
			if(avg<128){
				pixel.setRed(1.6*avg);
				pixel.setGreen(0);
				pixel.setBlue(1.6*avg);
			}
			else{
				pixel.setRed(0.4*avg+153);
				pixel.setGreen(2*avg-255);
				pixel.setBlue(0.4*avg+153);
			}
		}
	}
	var imgcanvas=document.getElementById("c2");
	image.drawTo(imgcanvas);
	alert("Rainbow filter applied!");
}

function Reset(){
	if(image==null||!image.complete()){
		alert("Image not loaded!");
		return;
	}
	var fileinput=document.getElementById("finput");
	var imgcanvas=document.getElementById("c2");
	image = new SimpleImage(fileinput);
	image.drawTo(imgcanvas);
	alert("Image reset done!");
}