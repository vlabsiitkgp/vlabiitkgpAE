/* 
 Created on : 06 Sept, 2020, 10:38:22 AM
 Author     : Sukriti Dhang
 */

 
 //cc1=cc2=1uF; cs=50uF
 //cgd=cds=1pF;cgs=10pF
 //gm=10mA/Voltage
 //rds=50kohm
 //rd=8kohm,rl=10kohm
 //rs=2kohm,ri=50ohm
 //rg1= rg2=5Mohm
 



var fq;
var rs,rs1, rd, re, rl;
var rg1, rg2;
var cc1, cc2;//external capacitors
var cs;
var w, f;

function srcresChange() { //resistance ri
    rs1 = document.getElementById("srcres").value;
    document.getElementById("srcrest").value = rs1;
}

function drainresChange() { //drain resistance
    rd = document.getElementById("drainres").value;
    document.getElementById("drainrest").value = rd;
}
function srcsresChange() { //source resistance
    rs = document.getElementById("srcsres").value;
    document.getElementById("srcsrest").value = rs;
}
function ldresChange() { //load resistance
    rl = document.getElementById("ldres").value;
    document.getElementById("ldrest").value = rl;
}
function gtres1Change() { //gate resistance 1
    rg1 = document.getElementById("gtres1").value;
    document.getElementById("gtres1t").value = rg1;
}
function gtres2Change() { //gate resistance 1
    rg2 = document.getElementById("gtres2").value;
    document.getElementById("gtres2t").value = rg2;
}
function cplcp1Change() { //coupling capacitor 1
    cc1 = document.getElementById("cplcp1").value;
    document.getElementById("cplcp1t").value = cc1;
}
function cplcp2Change() { //coupling capacitor 1
    cc2 = document.getElementById("cplcp2").value;
    document.getElementById("cplcp2t").value = cc2;
}
function bypscpaChange() { //bypass capacitor
    cs = document.getElementById("bypscap").value;
    document.getElementById("bypscapt").value = cs;
}
function freqChange() {
    fq = document.getElementById("fq").value;
    w = Math.pow(10, fq); //logspace(1,10,20)ie first term is 1, last term is 10 ,number of terms is 20
    f = (parseFloat(w) / (2 * (Math.PI))).toPrecision(6); // f=w/2pi
    document.getElementById("fqr").value = Math.round(f);
}

var wl1, wl2, wl3, wz; //low frequency cut-off
var t1,t2,t3;
var wl;
var wh1, wh2, wh;//high frequency cut-off
var gm=10;//*Math.pow(10,-3);
var rds=50;
var cgd=1*Math.pow(10,-12), cds=1*Math.pow(10,-12);
var cgs=10*Math.pow(10,-12);
var am; //midband gain
var rds_rd_rl;
var rd_rds;
var rlprime;
var rg; //gate resistance
var c1, c2;
var rg_ri;
var wh1wh2_term; 

var bw;
var vgs;
var vo;
var tabrowindex = 0;
var arr = [];
var table;
var chart;
var dataPoints = [];
var clmns, frqncy;
//-------------------------------------------------------initial calculation------------------------------------------------------------//

function tabled() {
	

	var rgtotal = (1/rg1) + (1/rg2);
	rg = (1/rgtotal);//mega ohm 
	
	
	//vgs= (rg/(rg+rs1))*vs;
	
	
	rds_rd_rl = (1/rds) + (1/rd) + (1/rl); //kohm
	rlprime = (1/rds_rd_rl); //kohm
	var rs1_rg = parseInt(rs1) + (rg*Math.pow(10, 6));
	//vo=-gm*vgs*rds_rd_rl* Math.pow(10, 3);
	 //-----------------Midband gain is calculated------------------//
	am=  -(gm*rg*Math.pow(10,6)*rlprime)/(rs1_rg);// midband gain;

 //------------------------------Calculation of low frequency poles-----------------------------------//
	t1 = cc1* Math.pow(10, -6)*((rg* Math.pow(10, 6)) + parseInt(rs1));
	wl1 = 1/t1;//* Math.pow(10, -6)))).toPrecision(6)
	rd_rds = ((rd*rds)/(parseInt(rd) + parseInt(rds)));//kilo ohm
	t2 = cc2* Math.pow(10, -6) * ((rl* Math.pow(10, 3)) + (rd_rds* Math.pow(10, 3)));
	wl2=1/t2;
	t3=cs* Math.pow(10, -6) * ((rs* Math.pow(10,3))/(1 + gm *rs));
	wl3=1/t3;
	wz=1/(rs*cs* Math.pow(10,-3));//the low frequency zero
    wl = Math.sqrt(Math.pow(parseFloat(wl1), 2) + Math.pow(parseFloat(wl2), 2) + Math.pow(parseFloat(wl3), 2));//low frequency cut-off
	
     //------------------calculation of higher frequency poles----//
    c1=cgs+cgd*(1+gm *rlprime);
	c2=(cds + cgd);
	rg_ri=(rg* Math.pow(10, 6) * parseInt(rs1))/((rg* Math.pow(10, 6)) + parseInt(rs1));
	wh1=1/(rg_ri * c1);
	wh2=1/(rlprime* Math.pow(10, 3) * c2);
	wh1wh2_term = Math.sqrt(Math.pow((1/parseFloat(wh1)), 2) + Math.pow((1/parseFloat(wh2)), 2));
	wh = 1/wh1wh2_term;//high frequency cut-off
   
	bw = wh-wl;//bandwidth
	
	/*alert(am);
	alert(wl);
	alert(wh);
	alert(bw);*/
	
	document.getElementById("midbnd").value=am;
	document.getElementById("lowfq").value=wl;
	document.getElementById("highfq").value=wh;
   
    //-------------------------------------------------------final calculation--------------------------------------------------------------//
    var dt = [], fr = [];
    var x;

    var h1 = [], h2 = [];
    var h, mg;
    var mag;

    dt += w + "<br>";
    fr += f + "<br>";
 var rG=5*Math.pow(10,6);
//-----------------------------------------------------------------------------------------------//        

    var num = math.complex({re: (parseFloat(rG) * parseFloat(gm) *  Math.pow(10,-3)* parseFloat(rl)) * Math.pow(10,3), im: 0});
    // alert("num"+num.re);
    // alert("numim"+num.im);
    h1 += num + "<br>";

    var den = math.complex({re:rG+rs1-(rG*rg_ri*rl* Math.pow(10,3)*c1*c2*w)-(rg_ri*rl* Math.pow(10,3)*rs1*c1*c2*w) , im:(w*rl* Math.pow(10,3)*c2*rG)+(w*rg_ri*c1*rG)+(w*rl* Math.pow(10,3)*c2*rs1)+(w*rg_ri*rs1*c1)});
    h2 += den + "<br>";
//--------------------------------------------------------------complex division-----------------------------------------------//
    var real = ((num.re * den.re + num.im * den.im) / (Math.pow(den.re, 2) + Math.pow(den.im, 2))).toPrecision(5);
    var imaginary = ((num.im * den.re - num.re * den.im) / (Math.pow(den.re, 2) + Math.pow(den.im, 2))).toPrecision(5);
    var frw = math.complex({re: parseFloat(real), im: parseFloat(imaginary)});
    h += frw + "<br>";
    var absolute = Math.sqrt(Math.pow((parseFloat(real)), 2) + Math.pow((parseFloat(imaginary)), 2));//gain
    mag = 20 * Math.log10(parseFloat(absolute)).toPrecision(6);//gain in db
    mg += mag + "<br>";
    //  alert(parseFloat(mag));
    table = document.getElementById("mytable");
    arr[0] = tabrowindex + 1;
    arr[1] = Math.round(f);
    arr[2] = mag;
    // dataPoints.push({x: parseFloat(f), y: parseFloat(mag)});
    if (document.getElementById("srcrest").value == "") {
        alert("Enter the   Resistance");
        document.getElementById("srcrest").style.borderColor = "red";
    }

    else if (document.getElementById("drainrest").value === "") {
        alert("Enter the  Drain Resistance");
        document.getElementById("drainrest").style.borderColor = "red";
    }
    else if (document.getElementById("srcsrest").value == "") {
        alert("Enter the Source Resistance");
        document.getElementById("srcsrest").style.borderColor = "red";
    }
    else if (document.getElementById("ldrest").value == "") {
        alert("Enter the Load Resistance");
        document.getElementById("ldrest").style.borderColor = "red";
    }
    else if (document.getElementById("gtres1t").value == "") {
        alert("Enter the Gate Resistance1");
        document.getElementById("gtres1t").style.borderColor = "red";
    }
    else if (document.getElementById("gtres2t").value == "") {
        alert("Enter the Gate Resistance2");
        document.getElementById("gtres2t").style.borderColor = "red";
    }
    else if (document.getElementById("cplcp1t").value == "") {
        alert("Enter the Coupling Capacitor1");
        document.getElementById("cplcp1t").style.borderColor = "red";
    }
    else if (document.getElementById("cplcp2t").value == "") {
        alert("Enter the Coupling Capacitor2");
        document.getElementById("cplcp2t").style.borderColor = "red";
    }
    else if (document.getElementById("bypscapt").value == "") {
        alert("Enter the Bypass Capacitor");
        document.getElementById("bypscapt").style.borderColor = "red";
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
        for (var q = 0; q < 3; q++) {
            var cell = row.insertCell(q);
            cell.innerHTML = arr[q];
        }

    }
    clmns = table.rows[tabrowindex].cells;
    frqncy = clmns[1].innerHTML;


}


//--------------------------------------------------------- scroll to bottom--------------------------------------------------//
$(document).ready(function () {
    $("#plt").click(function () {
        $('html,body').animate({
            scrollTop: $("#grpwrap").offset().top},
        'slow');
    });

});
//-----------------------------------------------------------------canvas.js ---------------------------------------------------------------//
function plot() {

    for (var tabrowindex = 1; tabrowindex < table.rows.length; tabrowindex++) {
        var rwe1 = table.rows[tabrowindex].cells;
        dataPoints.push({x: parseFloat(rwe1[1].innerHTML), y: parseFloat(rwe1[2].innerHTML)});
    }


    chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "Frequency Response "
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
                dataPoints: dataPoints
            }
        ]
    });
    chart.render();
   /* document.getElementById("lowfq").value = wl;
    document.getElementById("highfq").value = wh;
    document.getElementById("midbnd").value = parseFloat(am);*/
}

function addSymbols(e) {
    var suffixes = ["", "K", "M", "B"];
    var order = Math.max(Math.floor(Math.log(e.value) / Math.log(1000)), 0);
    if (order > suffixes.length - 1)
        order = suffixes.length - 1;
    var suffix = suffixes[order];
    return CanvasJS.formatNumber(e.value / Math.pow(1000, order)) + suffix;
}
//---------------------------------------------- clearing----------------------------------------------------------//
function cleard() {
//-------------------------table clearing-------------------------------//
    var rowCount = mytable.rows.length;
    for (var j = rowCount - 1; j > 0; j--) {
        mytable.deleteRow(j);
    }
    tabrowindex = 0;
    dataPoints = [];
//--------------------------text box clearing---------------------------//
    document.getElementById("fqr").value = "";
    document.getElementById("bypscapt").value = "";
    document.getElementById("cplcp2t").value = "";
    document.getElementById("cplcp1t").value = "";
    document.getElementById("ldrest").value = "";
    document.getElementById("gtres1t").value = "";
    document.getElementById("gtres2t").value = "";
    document.getElementById("srcrest").value = "";
    document.getElementById("drainrest").value = "";
    document.getElementById("srcsrest").value = "";
   
    document.getElementById("lowfq").value = "";
    document.getElementById("highfq").value = "";
    document.getElementById("midbnd").value = "";
    document.getElementById("chartContainer").innerHTML = "";
}

//Midband Gain is -40.816
//Low frequency cut-off is 2.182e+002
//High frequency cut-off is 1.168e+008
//Bandwidth is 1.168e+008 Hz