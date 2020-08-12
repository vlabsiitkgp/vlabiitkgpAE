/* Document Name:activebandpass.js
 * Author Name:Sukriti
 *  Created on : 7 aug, 2020, 11:01:22 AM 
 */
var fq,vi;
var reslider12,feedbkres12;
var resliderload1,resliderload2;
var capasliderload1,capasliderload2;
var w, f;

function ressldChange() {
    reslider12 = document.getElementById("resslider").value;
    document.getElementById("res1").value = reslider12;
	document.getElementById("res2").value = reslider12;
}
 function feedbckressldChange(){
	feedbkres12 = document.getElementById("fedbkresslider").value;
    document.getElementById("resf1").value = feedbkres12;
	document.getElementById("resf2").value = feedbkres12;
 }
 
 function ressldChange1(){
	 
	 resliderload1 = document.getElementById("r1").value;
    document.getElementById("rload1").value =resliderload1;	 
 }
 function ressldChange2(){
	resliderload2 = document.getElementById("r2").value;
    document.getElementById("rload2").value =resliderload2; 
	//document.getElementById("rload1").value =resliderload2;	 
 }
function capsldChange1() {
    capasliderload1 = document.getElementById("cl").value;
    document.getElementById("cload1").value = capasliderload1;
}
function capsldChange2() {
    capasliderload2 = document.getElementById("c2").value;
    document.getElementById("cload2").value = capasliderload2;
}
function vinChange(){
    vi=document.getElementById("vin").value;
    document.getElementById("inpvolt").value=vi;
    
}
function freqChange() {
    fq = document.getElementById("fq").value;
    w = Math.pow(10, fq); //logspace(1,10,20)ie first term is 1, last term is 10 ,number of terms is 20
    //alert(w);
    f = (parseFloat(w) / (2 * (Math.PI))).toPrecision(6); // f=w/2pi
    //alert(f);
    document.getElementById("fqr").value = Math.round(f);
}
var tabrowindex = 0;
var arr = [];
var table;
var chart,charts;
var dataPoints = [],dataPointsth=[];
var clmns, frqncy;

function tabled(){
	var cld1=document.getElementById("cload1").value* Math.pow(10, -6);
    var cld2=document.getElementById("cload2").value* Math.pow(10, -6);
	var rf1=document.getElementById("resf1").value* Math.pow(10,3);
	var r1=document.getElementById("res1").value* Math.pow(10,3);
	var rf2=document.getElementById("resf2").value* Math.pow(10,3);
	var r2=document.getElementById("res2").value* Math.pow(10,3);
	var rld1=document.getElementById("rload1").value* Math.pow(10,3);
	var rld2=document.getElementById("rload2").value* Math.pow(10,3);	
	var passbandgain1=(1+rf1/r1); 
	var passbandgain2=(1+rf2/r2); 
	var totalpassbandgain=passbandgain1+passbandgain2;
	var flow= 1 / (2 * 3.14 *rld1 * parseFloat(cld1));
	var fhigh= 1 / (2 * 3.14 *rld2 * parseFloat(cld2));
	
	
	
   //-----------------------------------------------------------phase calculation----------------------------------------------------//        
       
        var phi = -Math.atan( parseFloat(f) / parseFloat(flow))-Math.atan(parseFloat(f) /parseFloat(fhigh));//phase shift
        var theta = ((180 / 3.14) * parseFloat(phi)).toPrecision(6);
        //h2 += theta + "<br>";
      //alert(theta);
//--------------------------------------------------------------magnitude calculation-----------------------------------------------//

  	var absolutehigh = (passbandgain*(f/flow))/ +(Math.sqrt(1+Math.pow((f/flow),2)));
	var absolutelow = (passbandgain)/ +(Math.sqrt(1+Math.pow((f/fhigh),2)));
       // h += absolute + "<br>";
        var mag = 20 * Math.log10(parseFloat(absolutehigh)*parseFloat(absolutelow)).toPrecision(6);
        //mg += mag + "<br>";
       // dataPoints.push({x: parseFloat(f), y: parseFloat(mag)});
        console.log(mag);
        var vo= (parseInt(vi)*(absolutehigh)).toPrecision(5);
        document.getElementById("vout").value=parseFloat(vo);
        
    table = document.getElementById("mytable");
    arr[0] = tabrowindex + 1;
    arr[1] = Math.round(f);
    arr[2] = mag;
    arr[3]=theta;
    arr[4]=vo;
    
    if (document.getElementById("rload1").value == "") {
        alert("Enter the  load Resistance");
        document.getElementById("rload1").style.borderColor = "red";
    }

    else if (document.getElementById("cload1").value === "") {
        alert("Enter the  Collector Resistance");
        document.getElementById("cload1").style.borderColor = "red";
    }
   
    
    else if (document.getElementById("fqr").value == "") {
        alert("Enter the Input Frequency");
        document.getElementById("fqr").style.borderColor = "red";
//        document.getElementById("demo").innerHTML = "Enter the Input Voltage";
    }

    else if (Math.round(frqncy) == Math.round(f)) {
//document.getElementById("demo").innerHTML = "Change the Frequency";
        alert("Change the Frequency");
        document.getElementById("fqr").style.borderColor = "red";
    }
    else if (table.rows.length <= 25) {
        document.getElementById("fqr").style.borderColor = "green";
        var row = table.insertRow(++tabrowindex); // Row increment
        for (var q = 0; q < 5; q++) {
            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
        }

    }
    clmns = table.rows[tabrowindex].cells;
    frqncy = clmns[1].innerHTML;


}

//--------------------------------------------------------- scroll to bottom--------------------------------------------------//
/*$(document).ready(function () {
    $("#graphplot").click(function () {
        $('html,body').animate({
            scrollTop: $("#grpwrap").offset().top},
        'slow');
    });

});*/

//-----------------------------------------------------------------canvas.js ---------------------------------------------------------------//

function showDiv(){
    var w = document.getElementById("graphplot").options[document.getElementById("graphplot").selectedIndex].value;
			if(w==0){
                            document.getElementById("demo").innerHTML = "Choose to plot";
        document.getElementById("graphplot").style.borderColor = "red";
                        }
                        else if(w==1){
                            document.getElementById("demo").innerHTML = "Frequency Response of 1st order low pass filter"; 
    document.getElementById('chartContainer').style.display = "block";
     document.getElementById('chartContainers').style.display = "none";
     document.getElementById("chartContainers").innerHTML = "";
     plotfrequency();
     tabrowindex = 0;
    dataPoints = [];
}
 else if(w==2){
      document.getElementById("demo").innerHTML = "Phase of 1st order low pass filter";
 document.getElementById('chartContainers').style.display = "block";
  document.getElementById('chartContainer').style.display = "none";
  document.getElementById("chartContainer").innerHTML = "";
  tabrowindexf = 0;
    dataPointsth = [];
  plotphase();
}
}

function plotfrequency(){
    //------------------ plot magnitude and freq-------------------------//
    //alert("plot frequency");
    for (var tabrowindexf = 1; tabrowindexf < table.rows.length; tabrowindexf++) {
        var rwef = table.rows[tabrowindexf].cells;     
         dataPointsth.push({x: parseFloat(rwef[1].innerHTML), y: parseFloat(rwef[2].innerHTML)});
    }
   
    
    charts = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "Frequency Response of a 1st Order Band Pass Filter "
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            logarithmic: true,
            gridColor: "lightblue",
            gridThickness: 2,
            title: "Frequency(Hz)",
            includeZero: false,
            labelFormatter: addSymbols,
        },
        axisY: {
            title: "Magnitude(dB)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPointsth

            }
        ]
    });

    charts.render();
}
function plotphase() {
//-------------------------plot phase and freq---------------------------------//
    // alert("plot phase");
    for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwep = table.rows[tabrowindex].cells;
        dataPoints.push({x: parseFloat(rwep[1].innerHTML), y: parseFloat(rwep[3].innerHTML)});
    }
   
    
    chart = new CanvasJS.Chart("chartContainers", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "Phase of a 1st Order Band Pass Filter "
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            logarithmic: true,
            gridColor: "lightblue",
            gridThickness: 2,
            title: "Frequency(Hz)",
            includeZero: false,
            labelFormatter: addSymbols,
        },
        axisY: {
            title: "Phase(theta)",
        },
        data: [
            {
                type: "line",
                dataPoints: dataPoints

            }
        ]
    });

    chart.render();
    
}


function addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];

    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1)
        order = suffixes.length - 1;

    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}

function cleard(){
	
	//-------------------------table clearing-------------------------------//
    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);
    }
    tabrowindex = 0;
    dataPoints = [];
	dataPointsth = [];
//--------------------------text box clearing---------------------------//
    document.getElementById("fqr").value = "";
	document.getElementById("fq").value = "";
    document.getElementById("vin").value = "";
	document.getElementById("inpvolt").value = "";
	document.getElementById("resslider").value = "";
    document.getElementById("res1").value = "";
	document.getElementById("res2").value = "";
	document.getElementById("fedbkresslider").value = "";
    document.getElementById("resf1").value = "";
	document.getElementById("resf2").value = "";
	document.getElementById("r1").value = "";
    document.getElementById("rload1").value = "";
	document.getElementById("r2").value;
    document.getElementById("rload2").value = "";
	document.getElementById("cl").value = "";
    document.getElementById("cload1").value = "";
	document.getElementById("c2").value = "";
    document.getElementById("cload2").value = "";
    document.getElementById("lowfq").value = "";
    document.getElementById("highfq").value = "";
    document.getElementById("midbnd").value = "";
    document.getElementById("chartContainer").innerHTML = "";
	 document.getElementById("chartContainers").innerHTML = "";
	
}
	
