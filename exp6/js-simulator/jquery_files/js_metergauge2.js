
		$(document).ready(function(){
		   s2 = [0];
		   plot2 = $.jqplot('chart2',[s2],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -6,
					   max: 6,
					   intervals:[-6,-4, -2, 0, 2, 4, 6],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666','#66cc66','#93b75f']
				   }
			   }
		   });
		});
		function perform_meter2(){
		s2[0]=parseFloat(document.getElementById('A2').value);
		plot2 = $.jqplot('chart2',[s2],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -6,
					   max: 6,
					   intervals:[-6,-4, -2, 0, 2, 4, 6],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666','#66cc66','#93b75f']
				   }
			   }
		   });
		}