/*  Document Name:oscilloscope_sinewv2.js
 Created on : 25 aug, 2021
 Author     : Sukriti Dhang
 */

/*---------------- for function generator 2--------------------*/
var flag;
var vp2;
var posy2;
var phsl;
var frqfng2;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// in msec  0.001; //in sec // time/div

//----------------------------------------Channel 2------------------------------------------------------------//

function posiy2chnge() {
    posy2 = document.getElementById("positiony2").value;
    if (flag == 6) {
        drawsine2();
    }
    if (flag == 7) {
        drawsquarewv2();
    }
     if (flag == 8) {
        drawtraingwv2();
    }
    
}

function posix2chnge() {
    phsl = document.getElementById("positionx").value;
    if (flag == 1) {
        drawsine1();
    }
    if (flag == 2) {
         drawsquarewv1();
    }
    if (flag == 3) {
        drawtraingwv1();
    }
    if (flag == 6) {
        drawsine2();
    }
    if (flag == 7) {
        drawsquarewv2();
    }
     if (flag == 8) {
        drawtraingwv2();
    }
 
}

function ampfng2() {
    vp2 = document.getElementById("amp-knob-fng2").value;
    if (flag == 6) {
        drawsine2();
    }
    if (flag == 7) {
        drawsquarewv2();
    }
     if (flag == 8) {
        drawtraingwv2();
    }
    if (flag == 5){
        bothwvsin();
    }
    if (flag == 11){
        bothwvsq();   
    }
    if (flag == 12){
        bothwvtri();
    }
    
}

function freqfng2() {
    frqfng2 = document.getElementById("fq-knob-fng2").value;
    if (flag == 6) {
        drawsine2();
    }
   if (flag == 7) {
        drawsquarewv2();
    }
      if (flag == 8) {
        drawtraingwv2();
    }
    if (flag == 5){
        bothwvsin();
    }
    if (flag == 11){
        bothwvsq();   
    }
    if (flag == 12){
        bothwvtri();
    }
}

//----------------------------------------code for drawing sine wave--------------------------------------------------//
function drawsine2() {

    document.getElementById("chhn1").disabled = false;
    document.getElementById("chhn2").disabled = false;
    document.getElementById("dual").disabled = false;
    document.getElementById("grnd").disabled = false;
    document.getElementById("xymd").disabled = false;
    document.getElementById("chhn1").style.display = "block";
    document.getElementById("chhn2").style.display = "block";
    document.getElementById("dual").style.display = "block";
    document.getElementById("grnd").style.display = "block";
    document.getElementById("xymd").style.display = "block";

    document.getElementById("chhn1sq").style.display = "none";
    document.getElementById("chhn2sq").style.display = "none";
    document.getElementById("dualsq").style.display = "none";
    document.getElementById("grndsq").style.display = "none";
    document.getElementById("xymdsq").style.display = "none";

    document.getElementById("chhn1tr").style.display = "none";
    document.getElementById("chhn2tr").style.display = "none";
    document.getElementById("dualtr").style.display = "none";
    document.getElementById("grndtr").style.display = "none";
    document.getElementById("xymdtr").style.display = "none";

    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    
     
    drawGrid(ctx);
    drawAxis();
    sinwv2();
}

function sinwv2() {

    vp2 = document.getElementById("amp-knob-fng2").value;
    frqfng2 = document.getElementById("fq-knob-fng2").value;//frequency
    phsl = document.getElementById("positionx").value;
    posy2 = document.getElementById("positiony2").value;
   tmaxs= document.getElementById("fq-knob").value *10*Math.pow(10,-3);// in msec  0.001; //in sec
//---------------------------------------------------------Sine wave-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    flag = 6;
    // define plot paramaters
    tstart = 0; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
    for (var i = 0; i < axes.N; i++) {
        x[i] = tstart + i * dt;
        y[i] = (vp2/2) * Math.sin(2 * 3.1415 * frqfng2 * x[i] + phsl * 3.1415 / 180);
    }

    var i, x0, y0, xscale, yscale, xp, yp;

    x0 = axes.x0;//260.5
    y0 = axes.y0;//175.5
    xscale = axes.xscale;//260000
    yscale = axes.yscale;//87.5

    ctx.beginPath();
    ctx.lineWidth = 1.5;
    ctx.strokeStyle = "#ff6600";
    var p = y0 - parseInt(posy2) * yscale;
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

    ctx.stroke();

}

