/*  Document Name:schmttxymode.js
 Created on : 1 sept, 2020
 Author     : sukriti
 */
//----------------------------XY MODE--------------------------------------------//
//-------------------channel l ---> along horizontal axis (X - axis)------------//
//-------------------channel 2 ---> along Vertical axis (Y - axis)-------------//


var flag;
var vp;
var posy1, posy2;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs ;// in msec  0.001; //in sec

function posiy1chnge() {
    posy1 = document.getElementById("positiony1").value;
    if (flag == 1) {
        drawsine();
    }
    if(flag==3){
       bthdhlfrc();
    }
    if(flag==4){
        grndhlfrc();
    }
	if(flag==5){
        scmittxymode();
    }
}

function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;
    
    if (flag == 2) {
       drawsquarewv();
    }
if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
	if(flag==5){
        scmittxymode();
    }
   
}

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
          drawsquarewv();;
    }
 if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
        grndhlfrc();
    }
	if(flag==5){
        scmittxymode();
    }
}

function ampfng() {
    vp = document.getElementById("amp-knob-fng").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
          drawsquarewv();;
    }

    if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
        grndhlfrc();
    }
	if(flag==5){
        scmittxymode();
    }
}

function freqfng() {
    frqfng = document.getElementById("fq-knob-fng").value;
    if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
          drawsquarewv();;
    }

   if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
        grndhlfrc();
    }
	if(flag==5){
        scmittxymode();
    }
	
}

//----------------------------------------code for drawing sine wave and rectify output--------------------------------------------------//
function scmittxymode() {
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid(ctx);
    drawAxis();
    sinesqrwvxy();
  
}

function sinesqrwvxy(){
    
      vp = document.getElementById("amp-knob-fng").value;
    frqfng = document.getElementById("fq-knob-fng").value;
    phsl = document.getElementById("positionx").value;
    posy1 = document.getElementById("positiony1").value;
   posy2 = document.getElementById("positiony2").value;
   tmaxs= document.getElementById("fq-knob").value *10*Math.pow(10,-3);// in msec  0.001; //in sec
   var vref=3.33;
	var vcc =12;
	var vutp = 3.48;
	var vltp = 3.02;
	var vsat = 0.9*vcc;
//---------------------------------------------------------Sine wave-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    flag = 5;
    // define plot paramaters
    tstart =0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = vp * Math.sin(2 * 3.1415 * frqfng * x[i] + phsl * 3.1415 / 180);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5
var p = y0 - parseInt(posy1) * yscale;
   /* ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#0059b3";
    var p = y0 - parseInt(posy1) * yscale;
    for (i = 0; i < axes.N; i++) {

        // translate actual x,y to plot xp,yp
        xp = x0 + x[i] * xscale;
        yp = y0 - y[i] * yscale + p - 175;

        // draw line to next point
        if (i == 0)
            ctx.moveTo(xp, yp);
        else
            ctx.lineTo(xp, yp);
    }

    ctx.stroke();*/
    
    //-------------------squarewv---------------//
    
    var x1 = new Array(), y1 = new Array(),ys1 = new Array();  // x,y plotting variables
    var dt1, tstart1, tstop1;             // time variables
  
    // define plot paramaters
    tstart1 =0; //in sec
    tstop1 = tmaxs;
    dt1 = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var j = 0; j < axes.N; j++) {
        x1[j] = tstart1 + j * dt1;
        y1[j] = vsat * Math.sin(2 * 3.1415 * frqfng * x1[j] -10+phsl * 3.1415 / 180);
		ys1[j] = vsat * Math.sign(y1[j]);
    }

    var j, x0, y0, xscale, yscale, xp1, yp1;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p1 = y0 - parseInt(posy2) * yscale;
    for (j = 0; j < axes.N; j++) {

        // translate actual x,y to plot xp,yp
       // xp1 = x0 + x1[j] * xscale;
		yp = y0 - y[j] * yscale + p - 175;
        yp1 = y0 - ys1[j] * yscale + p1 - 175;

        // draw line to next point
        if (j == 0)
            ctx.moveTo(yp, yp1);
        else
            ctx.lineTo(yp, yp1);
    
    }
  
    ctx.stroke();

    
}

 
