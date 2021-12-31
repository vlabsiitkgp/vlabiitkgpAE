/*  Document Name:bitchange_onoff_3bit.js
 Author     : Sukriti Dhang
 */

//for 3 bit input
//7 possible inputs
//vr is the reference voltage (it is negative voltage)
//according to circuit if input is zero the switch is connected to ground and if input is one then switch is connected to reference voltage 
//https://www.tutorialspoint.com/linear_integrated_circuits_applications/linear_integrated_circuits_applications_digital_to_analog_converters.htm



var image2,image1,image0;
var b2_2,b1_1,b0_0;
var vo,resln;
var r1;
var rf;

function sliderChange() {
    var  sliderVal = document.getElementById("vdc").value;
    document.getElementById("dc").value = sliderVal;
	r1 = document.getElementById("res").value; // in kOhm
	rf = document.getElementById("resrf").value; // in kOhm
	
				image0 = document.getElementById('b0_0'); //LSB b0
				 image1 = document.getElementById('b1_1'); //b1
				 image2 = document.getElementById('b2_2'); //MSB b2
				
				 if (image2.src.match("off") && image1.src.match("off") && image1.src.match("off")) {
					  b2_2=0;
					  b1_1=0;
					  b0_0=0;
					vo=(rf/r1)*((sliderVal*b2_2/1)+(sliderVal*b1_1/2)+(sliderVal*b0_0/4));
					//resln=(rf/r1)*(sliderVal*b0_0/4);//weighting of LSB 
                    resln=(sliderVal/8);//weighting of LSB 					

     document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);//volt 
	 document.getElementById("binaryinp").value = '000';	
	  binarytodecimal();
				 }
				
}
function textChange() {
 var   txtVal = document.getElementById("res1").value;
    document.getElementById("res").value = txtVal;
    
}
function textChangerf() {
  var  txtValrf = document.getElementById("res1rf").value;
    document.getElementById("resrf").value = txtValrf;
	if(document.getElementById("res").value!=document.getElementById("resrf").value){
		alert("Set Feedback resistance same as  resistance R1")
	}
    
}

function changeImageb2_2() {
   image2 = document.getElementById('b2_2');
  if (image2.src.match("off")) {
    image2.src = "./image/on.png";
	 b2_2=1;
  } else {
    image2.src = "./image/off.png";
	b2_2=0;
  }
  switchchange();
}

function changeImageb1_1() {
   image1 = document.getElementById('b1_1');  
  if (image1.src.match("off")) {
    image1.src = "./image/on.png";
	 b1_1=1;

  } else {
    image1.src = "./image/off.png";
	b1_1=0;
  }
  switchchange();
}

function changeImageb0_0() {
   image0 = document.getElementById('b0_0'); 
  if (image0.src.match("off")) {
    image0.src = "./image/on.png";
	 b0_0=1;
  } else {
    image0.src = "./image/off.png";
	b0_0=0;
  }
  switchchange();
}

function switchchange(){
	
	var vref = document.getElementById("dc").value;
	r1 = document.getElementById("res").value; // in kOhm
    rf = document.getElementById("resrf").value; // in kOhm
	
	image0 = document.getElementById('b0_0'); //LSB b0
	image1 = document.getElementById('b1_1'); //b1
	image2 = document.getElementById('b2_2'); //MSB b2
				 
if(image0.src.match("off") && image1.src.match("off") && image2.src.match("off"))
{
		vo=(rf/r1)*((vref*b2_2/1)+(vref*b1_1/2)+(vref*b0_0/4));
		//resln=(rf/r1)*(vref*b0_0/4);//weighting of LSB  
		resln=(vref/8);//weighting of LSB 	

	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '000';//0
	  binarytodecimal();
}
if(image0.src.match("on") && image1.src.match("off") && image2.src.match("off"))
{
		vo=(rf/r1)*((vref*b2_2/1)+(vref*b1_1/2)+(vref*b0_0/4));
		//resln=(rf/r1)*(vref*b0_0/4);//weighting of LSB  
		resln=(vref/8);//weighting of LSB 	

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '001';	//1 
	  binarytodecimal();
}
if(image0.src.match("off") && image1.src.match("on") && image2.src.match("off"))
{
		vo=(rf/r1)*((vref*b2_2/1)+(vref*b1_1/2)+(vref*b0_0/4));
		//resln=(rf/r1)*(vref*b0_0/4);//weighting of LSB  
		resln=(vref/8);//weighting of LSB 	

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);	 
	 document.getElementById("binaryinp").value = '010';//2
	  binarytodecimal();
}
if(image0.src.match("on") && image1.src.match("on") && image2.src.match("off"))
{
		vo=(rf/r1)*((vref*b2_2/1)+(vref*b1_1/2)+(vref*b0_0/4));
		//resln=(rf/r1)*(vref*b0_0/4);//weighting of LSB  
		resln=(vref/8);//weighting of LSB 	

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '011';//3
	  binarytodecimal();
}
if(image0.src.match("off") && image1.src.match("off") && image2.src.match("on"))
{
		vo=(rf/r1)*((vref*b2_2/1)+(vref*b1_1/2)+(vref*b0_0/4));
		//resln=(rf/r1)*(vref*b0_0/4);//weighting of LSB  
		resln=(vref/8);//weighting of LSB 	

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
document.getElementById("binaryinp").value = '100';	 //4
 binarytodecimal();
}

if(image0.src.match("on") && image1.src.match("off") && image2.src.match("on"))
{
		vo=(rf/r1)*((vref*b2_2/1)+(vref*b1_1/2)+(vref*b0_0/4));
		//resln=(rf/r1)*(vref*b0_0/4);//weighting of LSB   
		resln=(vref/8);//weighting of LSB 	

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	document.getElementById("binaryinp").value = '101';	 //5
	 binarytodecimal();
}
if(image0.src.match("off") && image1.src.match("on") && image2.src.match("on"))
{
		vo=(rf/r1)*((vref*b2_2/1)+(vref*b1_1/2)+(vref*b0_0/4));
		//resln=(rf/r1)*(vref*b0_0/4);//weighting of LSB 
resln=(vref/8);//weighting of LSB 			

    document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '110';//6
	 binarytodecimal();
}
if(image0.src.match("on") && image1.src.match("on") && image2.src.match("on"))
{
	//alert(b0_0);
		vo=(rf/r1)*((vref*b2_2/1)+(vref*b1_1/2)+(vref*b0_0/4));
		//resln=(rf/r1)*(vref*b0_0/4);//weighting of LSB  
		resln=(vref/8);//weighting of LSB 	
		
	document.getElementById("voutput").value = vo.toPrecision(3);//volt 
	 document.getElementById("resolution").value = resln.toPrecision(3);
	 document.getElementById("binaryinp").value = '111';//7
	 binarytodecimal();
	
}
}
var dec_value;
function binarytodecimal(){
	var bstr=document.getElementById("binaryinp").value;
	function bin_to_dec(bstr) { 
    return parseInt((bstr + '')
	.replace(/[^01]/gi, ''), 2);	
	}
	dec_value=bin_to_dec(bstr);
	//alert(dec_value);
	//document.getElementById("decimalinp").value=dec_value;
}