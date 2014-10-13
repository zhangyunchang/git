$(function () {
	var chart=null;
	var i=1;
    $('#container').highcharts({
	    chart: {
	        polar: true
	    },
	    
	    title: {
	        text: '人才能力比比看'
	    },
		colors: [
            	'#A60000', 
            	'#9FEE00', 
            	'#5CCCCC'
            ],
	    
	    pane: {
	        startAngle: 0,
	        endAngle: 360
	    },
	
	    xAxis: {
	        tickInterval: 72,
	        min: 0,
	        max: 360,	
	    },
	        
	    yAxis: {
	        min: 0
	    },
	    
	    plotOptions: {
	        series: {
	            pointStart: 0,
	            pointInterval: 72
	        },
	        column: {
	            pointPadding: 0,
	            groupPadding: 0
	        }
	    },
	
	    series: [{
	        type: 'area',
	        name: '托尼·斯塔克',
	        data: [5, 4, 2, 1, 3]
	    },
		]
	});

	 $('#addSeries').click(function () {
        chart = $('#container').highcharts();
		if (i){
        	chart.addSeries({type: 'area',name: '史蒂夫·罗杰斯',data: [3, 3, 5, 2, 3]});
			i = 0;
		}
		else {
			 chart.series[1].remove();
			 i = 1;
			 }
    });
	
	 $('#add1').click(function () {
        chart = $('#container').highcharts();
        chart.series[1].data[0].update(chart.series[1].data[0].y+1);
	
    });
	 $('#reduce1').click(function () {	
        chart = $('#container').highcharts();
		if (chart.series[1].data[0].y>0){
        	chart.series[1].data[0].update(chart.series[1].data[0].y-1);
			}
		else if(chart.series[1].data[0].y==0)
			$(this).attr('disabled', true);
	
    });
	
});
				