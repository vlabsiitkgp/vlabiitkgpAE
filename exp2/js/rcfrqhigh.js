/* Document Name:rcfrqhigh.s
 * Author Name:Sukriti
 * Created On:02-01-18 
 */
var dt = [], fr = [];
var dt1 = [], fr1 = [];
var x, y, z, w, f;
var a = 10000000000;
var h1 = [], h2 = [];
var h, mg;
var r = 10 * Math.pow(10, 3), c = 1.99 * math.pow(10, -9);
var xc;
var vin=10;
function lgspace() {
    var n = 20;
    // var i = Math.sqrt(-1);
    var d = 9 / (n - 1);//0.47368421052631576
//alert(d);
    for (x = 2.5; x <= 10; x += d) {
        w = Math.pow(10, x); //angular frequency
        f = (parseFloat(w) / (2 * (Math.PI))).toPrecision(6); // f=w/2pi
        dt += w + "<br>";
        fr += f + "<br>";
//-----------------------------------------------------------phase calculation----------------------------------------------------//        
        xc = 1 / (2 * 3.14 * parseFloat(f) * parseFloat(c));// capacitive reactance of a capacitor 
        var z = Math.sqrt(Math.pow(parseFloat(r), 2) + Math.pow(parseFloat(xc), 2));//impedance
vout=vin*(xc/z);
        // alert("numim"+num.im);
        h1 += z + "<br>";
        var o = Math.atan(1 / (2 * 3.14 * parseFloat(f) * parseFloat(c) * parseFloat(r)));//phase shift
        var theta = ((180 / 3.14) * parseFloat(o)).toPrecision(6);
        h2 += theta + "<br>";
        dataPointsth.push({x: parseFloat(f), y: parseFloat(theta)});
//--------------------------------------------------------------magnitude calculation-----------------------------------------------//
        var absolute = (parseFloat(r) / +parseFloat(z));
        h += absolute + "<br>";
        var mag = 20 * Math.log10(parseFloat(absolute)).toPrecision(6);
        mg += mag + "<br>";
        dataPoints.push({x: parseFloat(f), y: parseFloat(mag)});
    }
    document.getElementById("demo").innerHTML = dt;
    document.getElementById("demos").innerHTML = fr;
    document.getElementById("h1d").innerHTML = h1;//dt1;// h1;
    document.getElementById("h2d").innerHTML = h2;
    document.getElementById("h").innerHTML = h;
    document.getElementById("magn").innerHTML = mg;

}


var tabrowindex = 0;
var arr = [];
var table;
var clmns, vlt;
var chart;
var dataPoints = [];
var dataPointsth = [];

// -------------------------------------canvas.js -----------------------------------------//
function plot() {
    chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "Frequency Response of a 1st Order High Pass Filter"
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
}
function plots() {
    chart = new CanvasJS.Chart("chartContainers", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: "Phase of a 1st Order High Pass Filter "
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
                dataPoints: dataPointsth

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


