/*  Document Name:oscilloscope_triangwv.js
 Created on : 25 aug, 2021
 Author     : Sukriti Dhang
 */

var flag;
var vp;
var  posy2;
var phsl;
var frqfng;
var axes = {};
var vmaxs;  //in volt
var tmaxs;// = (document.getElementById("fq-knob").value )* Math.pow(10, -3);// in msec  0.001; //in sec

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

//----------------------------------------code for drawing trianle output--------------------------------------------------//
function drawtraingwv2() {

    document.getElementById("chhn1").style.display = "none";
    document.getElementById("chhn2").style.display = "none";
    document.getElementById("dual").style.display = "none";
    document.getElementById("grnd").style.display = "none";
    document.getElementById("xymd").style.display = "none";

    document.getElementById("chhn1sq").style.display = "none";
    document.getElementById("chhn2sq").style.display = "none";
    document.getElementById("dualsq").style.display = "none";
    document.getElementById("grndsq").style.display = "none";
    document.getElementById("xymdsq").style.display = "none";

    document.getElementById("chhn1tr").disabled = false;
    document.getElementById("chhn2tr").disabled = false;
    document.getElementById("dualtr").disabled = false;
    document.getElementById("grndtr").disabled = false;
    document.getElementById("xymdtr").disabled = false;
    document.getElementById("chhn1tr").style.display = "block";
    document.getElementById("chhn2tr").style.display = "block";
    document.getElementById("dualtr").style.display = "block";
    document.getElementById("grndtr").style.display = "block";
    document.getElementById("xymdtr").style.display = "block";
    
    canvas = document.getElementById("mycanvas");
    if (null == canvas || !canvas.getContext)
        return;
    ctx = canvas.getContext("2d");
    // fill canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
		
    drawGrid(ctx);
    drawAxis();
   triwv2();
     
  
}

function triwv2() {

    vp = document.getElementById("amp-knob-fng2").value;
    frqfng = document.getElementById("fq-knob-fng2").value;
    phsl = document.getElementById("positionx").value;
    posy2 = document.getElementById("positiony2").value;
	tmaxs= document.getElementById("fq-knob").value *10*Math.pow(10,-3);// in msec  0.001; //in sec
//var c=document.getElementById("capacitor").value;
//var r=document.getElementById("resistor").value;

 var  r=10*Math.pow(10,3);//document.getElementById("restr").value*Math.pow(10,3);
  var c= 0.1*Math.pow(10,-6);//document.getElementById("captr").value*Math.pow(10,-6);
   var scalefactor= parseInt(r)*parseFloat(c);//-(1/r*c);
//---------------------------------------------------------trianle  wave-------------------------------------------------------------------------------//

    var x = new Array(), y = new Array();  // x,y plotting variables
    var dt, tstart, tstop;             // time variables
    var x2 = new Array(), y1 = new Array(), y2 = new Array();
    var i;
    flag =8;
    // define plot paramaters
    tstart = 0;//-tmaxs; //in sec
    tstop = tmaxs;
    dt = (tstop - tstart) / (101 - 1);// time increment over N points

    // create function 
   
for (i = 0; i < axes.N; i++) {
        x[i] = (tstart + i * dt).toPrecision(6);
        var p = 2 * 3.1415 * frqfng * x[i] + (phsl+270) * 3.1415 / 180;
        var z = Math.sin(p);
        y1[i] = -(parseFloat(vp/2) * Math.asin( z)); //-Math.sign(Vp *Math.sin(2 * 3.1415 * fo * x[i] + phase * 3.1415 / 180));
		y[i] = (Math.pow(10,-3)/scalefactor)*(parseFloat(y1[i])); //- parseFloat(y2[i + 101]));
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

