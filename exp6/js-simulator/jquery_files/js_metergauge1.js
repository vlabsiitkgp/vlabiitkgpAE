
		$(document).ready(function(){
		   s1 = [0];
		   plot1 = $.jqplot('chart1',[s1],{
			   grid: {
				   background: "transparent"
			   },
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -0.5,
					   max: 0.5,
					   intervals:[-0.5, -0.25, 0.25, 0.5],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		});
		function perform_meter1(){
		s1[0]=parseFloat(document.getElementById('A1').value);
		plot1 = $.jqplot('chart1',[s1],{
				grid: {
				   background: "transparent"
				},
			   seriesDefaults: {
				   renderer: $.jqplot.MeterGaugeRenderer,
				   rendererOptions: {
					   min: -0.5,
					   max: 0.5,
					   intervals:[-0.5, -0.25, 0.25, 0.5],
					   intervalColors:['#66cc66', '#93b75f', '#E7E658', '#cc6666']
				   }
			   }
		   });
		}
