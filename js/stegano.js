var hide=null;
var show=null;
//var greenThreshold=200;
function uploadh(){
	var fileinput=document.getElementById("hinput");
	var imgcanvas=document.getElementById("hide");
	hide = new SimpleImage(fileinput);
	hide.drawTo(imgcanvas);
	alert("image to be hidden loaded");
}

function uploads(){
	var fileinput=document.getElementById("sinput");
	var imgcanvas=document.getElementById("show");
	show = new SimpleImage(fileinput);
	show.drawTo(imgcanvas);
	alert("image to be shown loaded");
}

function clearbits(colorval){
	var x=Math.floor(colorval/16)*16;
	return x;
}
function chop2hide(){
	for(var px of show.values()){
		px.setRed(clearbits(px.getRed()));
		px.setGreen(clearbits(px.getGreen()));
		px.setBlue(clearbits(px.getBlue()));
	}
	return show;
}
function shift(){
	for(var px of hide.values()){
		px.setRed(px.getRed()/16);
		px.setGreen(px.getGreen()/16);
		px.setBlue(px.getBlue()/16);
	}
	return hide;
}

function combine(show,hide){
	var answer=new SimpleImage(show.getWidth(),show.getHeight());
	for(var px of answer.values()){
		var x=px.getX();
		var y=px.getY();
		var showPixel=show.getPixel(x,y);
		var hidePixel=hide.getPixel(x,y);
		px.setRed(showPixel.getRed()+hidePixel.getRed());
		px.setGreen(showPixel.getGreen()+hidePixel.getGreen());
		px.setBlue(showPixel.getBlue()+hidePixel.getBlue());
	}
	return answer;
}

function clearCanvas(){
	var canvas1=document.getElementById("hide");
	var canvas2=document.getElementById("show");
	var ctx1=canvas1.getContext("2d");
	var ctx2=canvas2.getContext("2d");
	ctx1.clearRect(0,0,canvas1.width,canvas1.height);
	ctx2.clearRect(0,0,canvas2.width,canvas2.height);
}

//show=chop2hide(show);
//hide=shift(hide);

function composite(){
	var ans=combine(show,hide);
	var c1=document.getElementById("hide");
	ans.drawTo(c1);
	alert("Composite formed!");
}