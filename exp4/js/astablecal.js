var rlslider,rlslider2,cldslider;


function resChange() {
    rlslider = document.getElementById("res1").value;
    document.getElementById("res").value = rlslider;
}
function resChange2() {
    rlslider2 = document.getElementById("res2").value;
    document.getElementById("restext2").value = rlslider2;
}

function capldChange() {
    cldslider = document.getElementById("capa1").value;
    document.getElementById("capac1").value = cldslider;
}

function vinChange(){
   var vi=document.getElementById("vdc").value;
    document.getElementById("dc").value=vi;
    
}


		var r1,r2;
		var c;
		var vcc; 
			
		var datapoints=[];
		var datapoints1=[];

		
		var t;
		var dutycycle;
		
		
		function voutputastable(){
			var vo=parseInt(vcc);
			
			 r1=document.getElementById("res").value*Math.pow(10,3);
			 r2=document.getElementById("res2").value*Math.pow(10,3);
			 c=document.getElementById("capac1").value*Math.pow(10,-6);
			 vcc=document.getElementById("dc").value;
		
			var frq=(1.44/((parseInt(r1)+(2*parseInt(r2)))*parseFloat(c))); // in hertz //852.07 hz
		//alert(frq);
			 dutycycle=(((parseInt(r1))+(parseInt(r2)))/((parseInt(r1))+(2*(parseInt(r2)))))*100; //59.76
			
		
		//
		
		var i,j=0;
		 t=(1/frq)*Math.pow(10,3); //1.1736ms
	
		
			for(i=0;i<=3;i=i+1){
				for(j=0;j<=t;j=j+0.1){
					if(j<(t*(dutycycle/100))){
						
						datapoints.push({x:j+(t*i),y:parseInt(vcc)});
					
					}
					else if(j<t){
					
						datapoints.push({x:j+(t*i),y:0});
						
					}
				}
			}
			console.log(datapoints);
			
			//plot();
			vcapacitor();		
			
			document.getElementById("voutput").value=parseInt(vo);
			document.getElementById("fout").value=frq*Math.pow(10,-3) // khz
			
	}
	
	function vcapacitor(){
		
		for(i=0;i<=3;i=i+1){
				var ct=t*Math.pow(10,-3) //t=//1.1736ms
				for(var j=0.1*Math.pow(10,-3);j<=ct;j=j+(0.1*Math.pow(10,-3))){
					if(j<(ct*(dutycycle/100))){
						var vc=parseInt(vcc)*(1-Math.exp(-(j)/((parseInt(r1)+parseInt(r2))*parseFloat(c))));
						datapoints1.push({x:(j+(ct*i))*Math.pow(10,3),y:parseFloat(vc)});						
						
					}
					else if(j<ct){
						vc=parseInt(vcc)*(Math.exp(-(j)/(r2*c)));
						datapoints1.push({x:(j+(ct*i))*Math.pow(10,3),y:parseFloat(vc)});
						
					}
				}
				
			}
			console.log(datapoints1);
			//plotcapacitor();
		}
	function showDiv(){
		var w = document.getElementById("graphplot").options[document.getElementById("graphplot").selectedIndex].value;
			if(w==0){
                document.getElementById("demo").innerHTML = "Choose to plot";
				document.getElementById("graphplot").style.borderColor = "red";
            }
         
			else if(w==1){
				document.getElementById("demo").innerHTML = "Output voltage";
				document.getElementById('chartContainer').style.display = "block";				
				document.getElementById('chartContainerc').style.display = "none";
				document.getElementById("chartContainerc").innerHTML = "";
				
				
				//dataPointsth = [];
				plotoutput();
			}
			else if(w==2){
				document.getElementById("demo").innerHTML = "Capacitor voltage";
				document.getElementById('chartContainerc').style.display = "block";
				document.getElementById('chartContainer').style.display = "none";
				document.getElementById("chartContainer").innerHTML = "";
				
				//dataPointsth = [];
				plotcapacitor();
			}
	}


var chart,chartc;	
	
function plotoutput(){
		chart = new CanvasJS.Chart("chartContainer", {
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
				
                dataPoints: datapoints1
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
	document.getElementById("res").value="";
	document.getElementById("restext2").value="";
	document.getElementById("res2").value="";
   
	document.getElementById("capa1").value="";
	document.getElementById("capac1").value="";
    document.getElementById("fout").value = "";
	document.getElementById("vdc").value="";
    document.getElementById("dc").value="";
	document.getElementById("tinrange").value="";
    document.getElementById("timeprdata").value="";
	
   
	document.getElementById("chartContainer").innerHTML = "";
	document.getElementById("chartContainers").innerHTML = "";
	
	
}
	