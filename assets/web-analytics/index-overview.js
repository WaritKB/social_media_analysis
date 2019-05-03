$(function () {
	var totalRevenue = 2781450,
			totalVisitors = 883000;


	// data for drilldown charts
	var dataMonthlyRevenueByCategory = {
		"Men Clothing": {
			color: "#393f63",
			markerSize: 0,
			name: "Men Clothing",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 25987.50 },
				{ x: new Date("1 Feb 2015"), y: 23436.00 },
				{ x: new Date("1 Mar 2015"), y: 29988.00 },
				{ x: new Date("1 Apr 2015"), y: 20790.00 },
				{ x: new Date("1 May 2015"), y: 36288.00 },
				{ x: new Date("1 Jun 2015"), y: 30870.00 },
				{ x: new Date("1 Jul 2015"), y: 28728.00 },
				{ x: new Date("1 Aug 2015"), y: 30996.00 },
				{ x: new Date("1 Sep 2015"), y: 25200.00 },
				{ x: new Date("1 Oct 2015"), y: 21168.00 },
				{ x: new Date("1 Nov 2015"), y: 30996.00 },
				{ x: new Date("1 Dec 2015"), y: 37926.00 }
			]
		},
		"Women Clothing": {
			color: "#e5d8b0",
			markerSize: 0,
			name: "Women Clothing",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 19057.50 },
				{ x: new Date("1 Feb 2015"), y: 15624.00 },
				{ x: new Date("1 Mar 2015"), y: 34272.00 },
				{ x: new Date("1 Apr 2015"), y: 24948.00 },
				{ x: new Date("1 May 2015"), y: 31752.00 },
				{ x: new Date("1 Jun 2015"), y: 26460.00 },
				{ x: new Date("1 Jul 2015"), y: 23940.00 },
				{ x: new Date("1 Aug 2015"), y: 36162.00 },
				{ x: new Date("1 Sep 2015"), y: 30240.00 },
				{ x: new Date("1 Oct 2015"), y: 26460.00 },
				{ x: new Date("1 Nov 2015"), y: 36162.00 },
				{ x: new Date("1 Dec 2015"), y: 43344.00 }
			]
		},
		"Gadgets": {
			color: "#ffb367",
			markerSize: 0,
			name: "Gadgets",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 41580.00 },
				{ x: new Date("1 Feb 2015"), y: 41013.00 },
				{ x: new Date("1 Mar 2015"), y: 42840.00 },
				{ x: new Date("1 Apr 2015"), y: 37422.00 },
				{ x: new Date("1 May 2015"), y: 36288.00 },
				{ x: new Date("1 Jun 2015"), y: 44100.00 },
				{ x: new Date("1 Jul 2015"), y: 38304.00 },
				{ x: new Date("1 Aug 2015"), y: 36162.00 },
				{ x: new Date("1 Sep 2015"), y: 50400.00 },
				{ x: new Date("1 Oct 2015"), y: 63504.00 },
				{ x: new Date("1 Nov 2015"), y: 56826.00 },
				{ x: new Date("1 Dec 2015"), y: 65016.00 }
			]
		},
		"Books": {
			color: "#f98461",
			markerSize: 0,
			name: "Books",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 17325.00 },
				{ x: new Date("1 Feb 2015"), y: 27342.00 },
				{ x: new Date("1 Mar 2015"), y: 25704.00 },
				{ x: new Date("1 Apr 2015"), y: 16632.00 },
				{ x: new Date("1 May 2015"), y: 13608.00 },
				{ x: new Date("1 Jun 2015"), y: 17640.00 },
				{ x: new Date("1 Jul 2015"), y: 23940.00 },
				{ x: new Date("1 Aug 2015"), y: 15498.00 },
				{ x: new Date("1 Sep 2015"), y: 25200.00 },
				{ x: new Date("1 Oct 2015"), y: 21168.00 },
				{ x: new Date("1 Nov 2015"), y: 15498.00 },
				{ x: new Date("1 Dec 2015"), y: 10836.00 }
			]
		},
		"Others": {
			color: "#d9695f",
			markerSize: 0,
			name: "Others",
			type: "column",
			yValueFormatString: "$###,###.00",
			dataPoints: [
				{ x: new Date("1 Jan 2015"), y: 69300.00 },
				{ x: new Date("1 Feb 2015"), y: 87885.00 },
				{ x: new Date("1 Mar 2015"), y: 81396.00 },
				{ x: new Date("1 Apr 2015"), y: 108108.00 },
				{ x: new Date("1 May 2015"), y: 108864.00 },
				{ x: new Date("1 Jun 2015"), y: 101430.00 },
				{ x: new Date("1 Jul 2015"), y: 124488.00 },
				{ x: new Date("1 Aug 2015"), y: 139482.00 },
				{ x: new Date("1 Sep 2015"), y: 120960.00 },
				{ x: new Date("1 Oct 2015"), y: 132300.00 },
				{ x: new Date("1 Nov 2015"), y: 118818.00 },
				{ x: new Date("1 Dec 2015"), y: 113778.00 }
			]
		}
	};

	// data for drilldown charts
	var dataVisitors = {
		"New vs Returning Visitors": [
			{
				click: visitorsChartDrilldownHandler,
				cursor: "pointer",
				explodeOnClick: false,
				innerRadius: "75%",
				legendMarkerType: "square",
				name: "New vs Returning Visitors",
				radius: "100%",
				showInLegend: true,
				startAngle: 90,
				type: "doughnut",
				dataPoints: [
					{ y: 519960, name: "New Visitors", color: "#393f63" },
					{ y: 363040, name: "Returning Visitors", color: "#f98461" }
				]
			}
		],
		"New Visitors": [
			{
				color: "#393f63",
				name: "New Visitors",
				type: "column",
				dataPoints: [
					{ x: new Date("1 Jan 2015"), y: 33000 },
					{ x: new Date("1 Feb 2015"), y: 35960 },
					{ x: new Date("1 Mar 2015"), y: 42160 },
					{ x: new Date("1 Apr 2015"), y: 42240 },
					{ x: new Date("1 May 2015"), y: 43200 },
					{ x: new Date("1 Jun 2015"), y: 40600 },
					{ x: new Date("1 Jul 2015"), y: 42560 },
					{ x: new Date("1 Aug 2015"), y: 44280 },
					{ x: new Date("1 Sep 2015"), y: 44800 },
					{ x: new Date("1 Oct 2015"), y: 48720 },
					{ x: new Date("1 Nov 2015"), y: 50840 },
					{ x: new Date("1 Dec 2015"), y: 51600 }
				]
			}
		],
		"Returning Visitors": [
			{
				color: "#f98461",
				name: "Returning Visitors",
				type: "column",
				dataPoints: [
					{ x: new Date("1 Jan 2015"), y: 22000 },
					{ x: new Date("1 Feb 2015"), y: 26040 },
					{ x: new Date("1 Mar 2015"), y: 25840 },
					{ x: new Date("1 Apr 2015"), y: 23760 },
					{ x: new Date("1 May 2015"), y: 28800 },
					{ x: new Date("1 Jun 2015"), y: 29400 },
					{ x: new Date("1 Jul 2015"), y: 33440 },
					{ x: new Date("1 Aug 2015"), y: 37720 },
					{ x: new Date("1 Sep 2015"), y: 35200 },
					{ x: new Date("1 Oct 2015"), y: 35280 },
					{ x: new Date("1 Nov 2015"), y: 31160 },
					{ x: new Date("1 Dec 2015"), y: 34400 }
				]
			}
		]
	};

	// CanvasJS spline area chart to show revenue from Jan 2015 - Dec 2015



     var revenueSplineAreaChart = new CanvasJS.Chart("revenue-spline-area-chart", {
        animationEnabled: true,
        title:{
            text: "All bank sentiment analysis ",
            fontFamily:"roboto"
        },
        axisY: {
            title: "Comment"
        },
        legend: {
            cursor:"pointer",
            itemclick : toggleDataSeries
        },
        toolTip: {
            shared: true,
            content: toolTipFormatter
        },
        data: [{
            type: "bar",
            showInLegend: true,
            name: "Pos",
            color: "#4F81BC",
            dataPoints: [
                { y: 2344, label: "KBank" },
                { y: 2350, label: "SCB" },
                { y: 2029, label: "KTB" },
                { y: 2111, label: "TMB" },
                { y: 1506, label: "GSB" },
                { y: 1698, label: "Bangkok" },
                { y: 1357, label: "Krungsri" }
            ]
        },
        {
            type: "bar",
            showInLegend: true,
            name: "Neg",
            color: "#C0504E",
            dataPoints: [
                { y: 2149, label: "KBank" },
                { y: 2167, label: "SCB" },
                { y: 1992, label: "KTB" },
                { y: 2217, label: "TMB" },
                { y: 1303, label: "GSB" },
                { y: 1532, label: "Bangkok" },
                { y: 1438, label: "Krungsri" }

            ]
        }]
    });
    revenueSplineAreaChart.render();

    function toolTipFormatter(e) {
        var str = "";
        var total = 0 ;
        var str3;
        var str2 ;
        for (var i = 0; i < e.entries.length; i++){
            var str1 = "<span style= \"color:"+e.entries[i].dataSeries.color + "\">" + e.entries[i].dataSeries.name + "</span>: <strong>"+  e.entries[i].dataPoint.y + "</strong> <br/>" ;
            total = e.entries[i].dataPoint.y + total;
            str = str.concat(str1);
        }
        str2 = "<strong>" + e.entries[0].dataPoint.label + "</strong> <br/>";
        str3 = "<span style = \"color:Tomato\">Total: </span><strong>" + total + "</strong><br/>";
        return (str2.concat(str)).concat(str3);
    }

    function toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        revenueSplineAreaChart.render();
    }

	//revenueSplineAreaChart.render();

	// CanvasJS pie chart to show annual revenue by category



	// CanvasJS doughnut chart to show new vs returning visitors
	//var visitorsChart = new CanvasJS.Chart("visitors-chart", newVsReturningVisitorsChartOptions);
	//visitorsChart.options.data = dataVisitors["New vs Returning Visitors"];




	// 3-2



	//----------------------------------------------------------------------------------//
	var allCharts = [
		revenueSplineAreaChart


	];

	function populateMonthlyRevenueByCategoryChart() {
		for (var prop in dataMonthlyRevenueByCategory)
			if  (dataMonthlyRevenueByCategory.hasOwnProperty(prop))
				monthlyRevenueByCategoryColumnChart.options.data.push( dataMonthlyRevenueByCategory[prop] );
	}

	function monthlyRevenueByCategoryDrilldownHandler(e) {
		monthlyRevenueByCategoryColumnChart.options.data = [];

		for (var i = 0; i < annualRevenueByCategoryPieChart.options.data[0].dataPoints.length; i++)
			if (annualRevenueByCategoryPieChart.options.data[0].dataPoints[i].exploded === true)
				monthlyRevenueByCategoryColumnChart.options.data.push( dataMonthlyRevenueByCategory[annualRevenueByCategoryPieChart.options.data[0].dataPoints[i].name] );

		if (monthlyRevenueByCategoryColumnChart.options.data.length === 0)
			populateMonthlyRevenueByCategoryChart();

		monthlyRevenueByCategoryColumnChart.render();
	}

	var visitorsChartHeadingDOM = $("#visitors-chart-heading"),
			visitorsChartBackButtonDOM = $("#visitors-chart-back-button"),
			visitorsChartTagDOM = $("#visitors-chart-tag");

	function visitorsChartDrilldownHandler (e) {
		visitorsChart = new CanvasJS.Chart("visitors-chart", visitorsDrilldownedChartOptions);
		visitorsChart.options.data = dataVisitors[e.dataPoint.name];
		visitorsChart.render();

		// DOM Manipulations
		visitorsChartHeadingDOM.html(e.dataPoint.name);
		visitorsChartBackButtonDOM.toggleClass("invisible");
		visitorsChartTagDOM.toggleClass("invisible");
	}

	// binding click event to visitors chart back button to drill up to "New Vs Returning Visitors" doughnut chart
	visitorsChartBackButtonDOM.on("click", function () {
		visitorsChart = new CanvasJS.Chart("visitors-chart", newVsReturningVisitorsChartOptions);
		visitorsChart.options.data = dataVisitors["New vs Returning Visitors"];
		visitorsChart.render();

		// DOM Manipulations
		visitorsChartHeadingDOM.html("New vs Returning Visitors");
		visitorsChartBackButtonDOM.toggleClass("invisible");
		visitorsChartTagDOM.toggleClass("invisible");
	});

	// chart properties cutomized further based on screen width
	function chartPropertiesCustomization () {
		if ($(window).outerWidth() >= 1200 ) {

			//annualRevenueByCategoryPieChart.options.legend.horizontalAlign = "left";
			//annualRevenueByCategoryPieChart.options.legend.verticalAlign = "center";
			//annualRevenueByCategoryPieChart.render();

			visitorsChartTagDOM.css("position", "absolute");

		} else if ($(window).outerWidth() < 1200) {

			//annualRevenueByCategoryPieChart.options.legend.horizontalAlign = "center";
			//annualRevenueByCategoryPieChart.options.legend.verticalAlign = "top";
			//annualRevenueByCategoryPieChart.render();

			visitorsChartTagDOM.css("position", "static");

		}
	}

	function renderAllCharts() {
		for (var i = 0; i < allCharts.length; i++)
			allCharts[i].render();
	}

	function sidebarToggleOnClick() {
		$('#sidebar-toggle-button').on('click', function () {
			$('#sidebar').toggleClass('sidebar-toggle');
			$('#page-content-wrapper').toggleClass('page-content-toggle');
			renderAllCharts();
		});
	}

	(function init() {
		chartPropertiesCustomization();
		$(window).resize(chartPropertiesCustomization);
		sidebarToggleOnClick();
	})();

});