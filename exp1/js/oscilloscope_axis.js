/*  Document Name: oscilloscope_axis.js
 Created on :24 aug, 2021
 Author     : Sukriti Dhang
 */
var canvas, ctx;
var flag;
var axes = {};
var vmaxs;  //in volt
var tmaxs; // in msec  0.001; //in sec
var voltperdiv,timeperdiv;

//-----------------------------------------------Oscilliscope on-off function----------------------------------------------------------//
function mainswt() {
    var bttn = document.getElementById('onff').value;
    if (bttn == "Off") {

        document.getElementById("onff").value = "On";

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        document.getElementById("chhn1").disabled = true;
        document.getElementById("chhn2").disabled = true;
        document.getElementById("dual").disabled = true;
        document.getElementById("grnd").disabled = true;
        document.getElementById("xymd").disabled = true;

        document.getElementById("chhn1sq").disabled = true;
        document.getElementById("chhn2sq").disabled = true;
        document.getElementById("dualsq").disabled = true;
        document.getElementById("grndsq").disabled = true;
        document.getElementById("xymdsq").disabled = true;

        document.getElementById("chhn1tr").disabled = true;
        document.getElementById("chhn2tr").disabled = true;
        document.getElementById("dualtr").disabled = true;
        document.getElementById("grndtr").disabled = true;
        document.getElementById("xymdtr").disabled = true;

       // document.getElementById("resistor").disabled=false;
       // document.getElementById("resistor").value='0';
        // document.getElementById("restr").value='0';

        document.getElementById("sinecrv").disabled = true;
        document.getElementById("squarewave").disabled = true;
        document.getElementById("triagwave").disabled = true;
        document.getElementById("sinecrv2").disabled = true;
        document.getElementById("squarewave2").disabled = true;
        document.getElementById("triagwave2").disabled = true;

    }
    else {
        document.getElementById("onff").value = "Off";

        document.getElementById("sinecrv").disabled = false;
        document.getElementById("squarewave").disabled = false;
        document.getElementById("triagwave").disabled = false;
        document.getElementById("sinecrv2").disabled = false;
        document.getElementById("squarewave2").disabled = false;
        document.getElementById("triagwave2").disabled = false;
       
       // document.getElementById("resistor").disabled=true;
        


        drawAxis();
        drawGrid(ctx);

    }
}
//------------------------------------------------Amp1perdiv(volt/div)--------------------------------------------------------//
function amp1pdiv()
{
     voltperdiv = document.getElementById("amp-knob1").value;
  vmaxs = parseFloat(voltperdiv)*4;//volt 

    if (flag == 1) {
        drawsine();
    }
     if (flag == 2) {
        drawsquarewv();
    }

   if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
}
//------------------------------------------------timeperdiv(ms/div)--------------------------------------------------------//
function timepdiv() {
    timeperdiv = document.getElementById("fq-knob").value ;
	tmaxs =parseFloat(timeperdiv)*10*Math.pow(10,-3); //1sec
   if (flag == 1) {
        drawsine();
    }
    if (flag == 2) {
        drawsquarewv();
    }
if(flag==3){
        bthdhlfrc();
    }
    if(flag==4){
       grndhlfrc();
    }
}
//
//alert(tmaxs);

//---------------------------------------------------------Drawing Axis----------------------------------------------------------------------------------//          
function drawAxis() {

    canvas = document.getElementById("mycanvas");
    ctx = canvas.getContext("2d");

   voltperdiv1 = document.getElementById("amp-knob1").value;
   vmaxs1 = parseFloat(voltperdiv1)*4;//volt 
  voltperdiv2 = document.getElementById("amp-knob2").value;
  vmaxs2 = parseFloat(voltperdiv2)*4;//volt 

    axes.x0 = 0.5 + 0.0 * canvas.width;//260.5
    axes.y0 = 0.5 + 0.5 * canvas.height;//175.5
    // axes.scale = 50;
    axes.xscale = (canvas.width) / ( tmaxs); 	// x pix per s//260000
   
    axes.N = 101;
     if(flag==1){
          axes.yscale = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
     }
     if(flag==2){
        axes.yscale = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
    }
    if(flag==3){
        axes.yscale = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
    }
     if(flag==6){
         axes.yscale = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
     }
     if(flag==7){
        axes.yscale = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
    }
    if(flag==8){
        axes.yscale = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
    }
    // both waveform display//
    if(flag==5){
         axes.yscale1 = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
         axes.yscale2 = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
     }
     if(flag==11){
        axes.yscale1 = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
        axes.yscale2 = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
    }
    if(flag==12){
        axes.yscale1 = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
        axes.yscale2 = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
    }
    // xy mode waveform display//
    if(flag==13){
        axes.yscale1 = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
        axes.yscale2 = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
    }
    if(flag==14){
       axes.yscale1 = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
       axes.yscale2 = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
   }
   if(flag==15){
       axes.yscale1 = (canvas.height) / (2 * vmaxs1);    // y pix per V //87.5
       axes.yscale2 = (canvas.height) / (2 * vmaxs2);    // y pix per V //87.5
   }

    axes.doNegativeX = true;
    ctx.lineWidth = 0.5;
    ctx.lineWidth = ticklinewidth;
    ctx.strokeStyle = tickcolor;

    drawHorizontalAxis();
    drawVerticalAxis();
    drawVerticalAxisTicks();
    drawHorizontalAxisTicks();
}

function drawGrid(ctx) {

    var w = ctx.canvas.width;
    var h = ctx.canvas.height;
    ctx.beginPath();//added afterwards
    for (var x = 0; x < w; x += 43.5) {
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
    }

    for (var y = 0; y < h; y += 44) {
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
    }
    ctx.strokeStyle = "Gainsboro";
    ctx.stroke();
}

var axismargin = 30,
        axisorigin = {x: 0, y: 0},
        axisright = 520,
        horzntickspcng = 9,
        vrtcltickspcng = 9,
        axiswidth = axisright, //520
        axisheight = axisorigin.y, //350
        numofvrtcltick = axisheight / vrtcltickspcng, //175
        numofhorzntick = axiswidth / horzntickspcng, //57.77777777777778
        tickwidth = 10,
        ticklinewidth = 0.5,
        tickcolor = 'black',
        axislinewidth = 1.0,
        axiscolor = 'lightgray';
//alert(numofvrtcltick);
//------------------------------------------------------Horizontal Axis----------------------------------------------------------------------------------//
function drawHorizontalAxis() {
//axes.y0=175.5,w=520
    var y0 = axes.y0, w = ctx.canvas.width;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(0, y0);
    ctx.lineTo(w, y0);  // X axis
    ctx.stroke();

}
//------------------------------------------------------Vertical Axis------------------------------------------------------------------------------------//          
function drawVerticalAxis() {
//axes.x0=260.5,h=350
    var x0 = axes.x0+218, h = ctx.canvas.height;
    ctx.beginPath();
    ctx.strokeStyle = "rgb(128,128,128)";
    ctx.moveTo(x0, 0);
    ctx.lineTo(x0, h);  // Y axis
    ctx.stroke();

}
//-------------------------------------------------------Vertical Ticks--------------------------------------------------------------------------------//         
function drawVerticalAxisTicks() {
    var deltaX;//5

    for (var i = 1; i < 43; ++i) {
        ctx.beginPath();

        if (i % 5 === 0)
            deltaX = tickwidth / 3;
        else
            deltaX = tickwidth / 3;

        ctx.moveTo(axisorigin.x + 218 - deltaX,
                axisorigin.y + 1 + i * vrtcltickspcng);

        ctx.lineTo(axisorigin.x + 218 + deltaX,
                axisorigin.y + 1 + i * vrtcltickspcng);
        ctx.stroke();

    }
}
//-------------------------------------------------------Horizontal Ticks----------------------------------------------------------------------------------//     
function drawHorizontalAxisTicks() {
    var deltaY;//5

    for (var i = 1; i < numofhorzntick; ++i) {
        ctx.beginPath();

        if (i % 5 === 0)
            deltaY = tickwidth / 3;
        else
            deltaY = tickwidth / 3;

        ctx.moveTo(axisorigin.x + i * horzntickspcng,
                axisorigin.y + 350 - 175 - deltaY);

        ctx.lineTo(axisorigin.x + i * horzntickspcng,
                axisorigin.y + 350 - 175 + deltaY);

        ctx.stroke();
    }

}

//------------------sine wave  channel button ------------------------------//
function chnlo(){
	
    drawsine1();
  // drawsquarewv1();
   //drawtraingwv1();
}

function chnlt(){
	
    drawsine2();
  //drawsquarewv2();
  // drawtraingwv2();
      
}

function bthd(){
	
    bothwvsin();
  //  bothwvsq();
  //  bothwvtri();

}
  
  function grnds(){
      grndwvsin();
    //grndwvsq();
   // grndwvtri();
}

function oscilloxymode(){
	
    xywvsin();
  //xywvsq(); 
   // xywvtri();
}
//------------------square wave  channel button ------------------------------//
function chnlosq(){
	
    drawsquarewv1();
   
}

function chnltsq(){
	
   drawsquarewv2();
  
      
}

function bthdsq(){
	
    bothwvsq();

}
  
  function grndssq(){
      grndwvsq();
   
}

function oscilloxymodesq(){
	
    xywvsq(); 
  
}

//------------------triangle  wave  channel button ------------------------------//
function chnlotr(){
	
    drawtraingwv1();
}

function chnlttr(){
	
    drawtraingwv2();
      
}

function bthdtr(){
	
    bothwvtri();

}
  
  function grndstr(){
      grndwvtri();
}

function oscilloxymodetr(){
	
     xywvtri();
}

/************************************* flag details ***************************************/
//  flag=1;     sine wave 1
//  flag=2;     square wave 1
//  flag=3;     triangular wave 1
//  flag=4;     ground sine wave (1 and 2)
//  flag=5;     both sine wave
//  flag=6;     sine wave 2
//  flag=7;     square wave 2
//  flag=8;     triangular wave 1
//  flag=9;     ground square wave (1 and 2)
//  flag=10;    gorund triangular wave (1 and 2)
//  flag=11;    both square wave
//  flag=12;    both triangular wave
//  flag=13;    xy sine wave
//  flag=14;    xy square wave
//  flag=15;    xy triangular wave
/******************************** flag details ends here **********************************/

