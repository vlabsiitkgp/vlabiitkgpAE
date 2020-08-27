var rlslider,cldslider;


function resChange() {
    rlslider = document.getElementById("res1").value;
    document.getElementById("res").value = rlslider;
}

function capldChange() {
    cldslider = document.getElementById("capa1").value;
    document.getElementById("capac1").value = cldslider;
}

function vinChange(){
   var vi=document.getElementById("vdc").value;
    document.getElementById("dc").value=vi;
    
}
function tinChange(){
	var tinp=document.getElementById("tinrange").value;
    document.getElementById("timeprdata").value=tinp;
}

		var r1;
		var c1;
		var vcc; 
		
		var tin=20; //ms
		var tout;//ms //pulse width
		var datapoints=[];
		var datapoints1=[];
		var datapoints2=[];
		var to=tin;
		var toff;
		
		function voutput(){
		
		
		vcc=document.getElementById("dc").value;
			var vo=vcc;
			toff=0.25*tin;
			 r1=document.getElementById("res").value*Math.pow(10,3);
			 c1=document.getElementById("capac1").value*Math.pow(10,-6);
			tout=1.1*parseFloat(r1)*parseFloat(c1)*Math.pow(10,3);//ms //pulse width
		
			var i,j=0;
	
		
			for(i=0;i<=3;i=i+1){
				for(j=0;j<=to;j=j+0.1){
					if(j<(tout)){ //11ms
						
						datapoints.push({x:j+(to*i),y:parseInt(vcc)});
					
					}
					else if(j<to){ //20ms
					
						datapoints.push({x:j+(to*i),y:0});
						
					}
				}
			}
			console.log(datapoints);
			
			//plot1(); //output
			vcapacitor();		
			for(i=0;i<=3;i=i+1){
				for(j=0;j<=to;j=j+0.1){
					if(j<(toff)){ //5ms
						
						datapoints1.push({x:j+(to*i),y:0});
					
					}
					else if(j<tin){ //20ms
					
						datapoints1.push({x:j+(to*i),y:parseInt(vcc)});
						
					}
				}
			}
			console.log(datapoints1);
			
			//plot2();//input*/
			document.getElementById("toff").value=toff;
			document.getElementById("tout").value=tout;
			document.getElementById("voutput").value=vo;
			
	}
	
	function vcapacitor(){
		
			for(i=0;i<=3;i=i+1){
				var ct=tin*Math.pow(10,-3); 
				
				for(var j=0.1*Math.pow(10,-3);j<=ct;j=j+(0.1*Math.pow(10,-3))){
					if(j<(tout*Math.pow(10,-3))){
						var vc=vcc*(1-Math.exp(-(j)/((r1)*c1*1)));
						datapoints2.push({x:(j+(ct*i))*Math.pow(10,3),y:parseFloat(vc)});						
						
					}
					else if(j<to){
						
						datapoints2.push({x:(j+(ct*i))*Math.pow(10,3),y:0});
					
					}
				}
				
			}
			console.log(datapoints2);
			//plotcapacitor();
		
			//alert(ct); //11ms //
		}
	function showDiv(){
		var w = document.getElementById("graphplot").options[document.getElementById("graphplot").selectedIndex].value;
			if(w==0){
                document.getElementById("demo").innerHTML = "Choose to plot";
				document.getElementById("graphplot").style.borderColor = "red";
            }
            else if(w==1){
                document.getElementById("demo").innerHTML = "Trigger input voltage"; 
				//document.getElementById("demo").style.borderColor = "green"; 
				document.getElementById('chartContainer').style.display = "block";
				document.getElementById('chartContainers').style.display = "none";
				document.getElementById("chartContainers").innerHTML = "";
				document.getElementById('chartContainerc').style.display = "none";
				document.getElementById("chartContainerc").innerHTML = "";
				plotinput();
				
				//dataPoints = [];
			}
			else if(w==2){
				document.getElementById("demo").innerHTML = "Output voltage";
				document.getElementById('chartContainers').style.display = "block";
				document.getElementById('chartContainer').style.display = "none";
				document.getElementById("chartContainer").innerHTML = "";
				document.getElementById('chartContainerc').style.display = "none";
				document.getElementById("chartContainerc").innerHTML = "";
				
				
				//dataPointsth = [];
				plotoutput();
			}
			else if(w==3){
				document.getElementById("demo").innerHTML = "Capacitor voltage";
				document.getElementById('chartContainerc').style.display = "block";
				document.getElementById('chartContainer').style.display = "none";
				document.getElementById("chartContainer").innerHTML = "";
				document.getElementById('chartContainers').style.display = "none";
				document.getElementById("chartContainers").innerHTML = "";
				
				//dataPointsth = [];
				plotcapacitor();
			}
	}


var chart,charts,chartc;	
	
function plotoutput(){
		chart = new CanvasJS.Chart("chartContainers", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: ""
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            title: " Vout Time (ms) ",
			//valueFormatString: "#,##0.##",
			//labelFormatter: addSymbols,
			//includeZero: false,
        },
        axisY: {
            title: "Output Voltage (V)",
        },
        data: [
            {
                type: "stepLine",
				
                dataPoints: datapoints
            }
        ]
    });

    chart.render();

}


function plotinput(){
charts = new CanvasJS.Chart("chartContainer", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: ""
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            title: " Vin Time (ms) ",
			//valueFormatString: "#,##0.##",
			//labelFormatter: addSymbols,
			//includeZero: false,
        },
        axisY: {
            title:   "Trigger input Voltage (V)",
        },
        data: [
            {
                type: "stepLine",
				
                dataPoints: datapoints1
            }
        ]
    });

    charts.render();

   // document.getElementById("demos").innerHTML = "Print It <br><br>Take another sets of readings for different R1 and Rf";

}

function plotcapacitor(){
chartc = new CanvasJS.Chart("chartContainerc", {
        theme: "theme1", //theme1
        // backgroundColor: "#bdf5bd",
        title: {
            text: ""
        },
        // animationEnabled: true,
        // change to true
        legend: {
            verticalAlign: "bottom",
            horizontalAlign: "center",
        },
        axisX: {
            title: "Time (ms) ",
			//valueFormatString: "#,##0.##",
			//labelFormatter: addSymbols,
			//includeZero: false,
        },
        axisY: {
            title: "Capacitor Voltage (Vc)",
        },
        data: [
            {
                type: "spline",
				
                dataPoints: datapoints2
            }
        ]
    });

    chartc.render();

   // document.getElementById("demos").innerHTML = "Print It <br><br>Take another sets of readings for different R1 and Rf";

}
//--------------------clear all data-----------------------------------//

function cleard(){
	
	
    dataPoints = [];
	dataPoints1 = [];
	dataPoints2 = [];
//--------------------------text box clearing---------------------------//

	document.getElementById("res1").value="";
    document.getElementById("res").value="" ;
	document.getElementById("capa1").value="";
    document.getElementById("capac1").value = "";;
	document.getElementById("vdc").value="";
    document.getElementById("dc").value="";
	document.getElementById("tinrange").value="";
    document.getElementById("timeprdata").value="";
	document.getElementById("toff").value="";
	document.getElementById("tout").value="";
	document.getElementById("voutput").value="";
	
   
	document.getElementById("chartContainer").innerHTML = "";
	document.getElementById("chartContainers").innerHTML = "";
	document.getElementById("chartContainerc").innerHTML = "";
	
}
	