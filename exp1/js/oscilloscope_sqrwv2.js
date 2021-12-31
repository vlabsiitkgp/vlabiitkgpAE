/*  Document Name:oscilloscope_sqrwv2.js
 Created on : 25 aug, 2021
 Author     : Sukriti Dhang
 */

 var flag;
 var vp;
 var posy2sq2;
 var phslsq2;
 var frqfng;
 var axes = {};
 var vmaxs;  //in volt
 var tmaxs;// = (document.getElementById("fq-knob").value) * Math.pow(10, -3);// in msec  0.001; //in sec
 
 //----------------------------------------Channel 1------------------------------------------------------------//
 
 function posiy2chnge() {
     posy2sq2 = document.getElementById("positiony2").value;
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
     phslsq2 = document.getElementById("positionx").value;
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
     vp = document.getElementById("amp-knob-fng2").value;
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
 
 function freqfng2() {
     frqfng = document.getElementById("fq-knob-fng2").value;
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
 
 //----------------------------------------code for drawing square wave--------------------------------------------------//
 function drawsquarewv2() {
    document.getElementById("chhn1").style.display = "none";
    document.getElementById("chhn2").style.display = "none";
    document.getElementById("dual").style.display = "none";
    document.getElementById("grnd").style.display = "none";
    document.getElementById("xymd").style.display = "none";

    document.getElementById("chhn1sq").disabled = false;
    document.getElementById("chhn2sq").disabled = false;
    document.getElementById("dualsq").disabled = false;
    document.getElementById("grndsq").disabled = false;
    document.getElementById("xymdsq").disabled = false;
    document.getElementById("chhn1sq").style.display = "block";
    document.getElementById("chhn2sq").style.display = "block";
    document.getElementById("dualsq").style.display = "block";
    document.getElementById("grndsq").style.display = "block";
    document.getElementById("xymdsq").style.display = "block";

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
     sqrwv2();
 }
 
 function sqrwv2() {
 
     vp = document.getElementById("amp-knob-fng2").value;
     frqfng = document.getElementById("fq-knob-fng2").value;
     phslsq2 = document.getElementById("positionx").value;
     posy2sq2 = document.getElementById("positiony2").value;
     tmaxs= document.getElementById("fq-knob").value *10*Math.pow(10,-3);// in msec  0.001; //in sec
    
 //---------------------------------------------------------Square wave-------------------------------------------------------------------------------//
 
     var x = new Array(), y = new Array(),ys = new Array();  // x,y plotting variables
     var dt, tstart, tstop;             // time variables
     flag = 7;
     // define plot paramaters
     tstart = 0;//-tmaxs; //in sec
     tstop = tmaxs;
     dt = (tstop - tstart) / (101 - 1);// time increment over N points
 
     // create function 
     for (var i = 0; i < axes.N; i++) {
         x[i] = tstart + i * dt;
         y[i] = vp * Math.sin(2 * 3.1415 * frqfng * x[i] + phslsq2 * 3.1415 / 180);
         ys[i] =(vp/2) * Math.sign(y[i]);
     }
 
     var i, x0, y0, xscale, yscale, xp, yp;
 
     x0 = axes.x0;//260.5
     y0 = axes.y0;//175.5
     xscale = axes.xscale;//260000
     yscale = axes.yscale;//87.5
 
     ctx.beginPath();
     ctx.lineWidth = 1.5;
     ctx.strokeStyle = "#ff6600";
     var p = y0 - parseInt(posy2sq2) * yscale;
     for (i = 0; i < axes.N; i++) {
 
         // translate actual x,y to plot xp,yp
         xp = x0 + x[i] * xscale;
         yp = y0 - ys[i] * yscale + p - 175;
 
         // draw line to next point
         if (i == 0)
             ctx.moveTo(xp, yp);
         else
             ctx.lineTo(xp, yp);
     }
 
     ctx.stroke();
 
 }
 
 