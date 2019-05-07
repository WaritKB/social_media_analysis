 $(function () {
	var totalRevenue = 2781450,
			totalVisitors = 883000;

    CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#FF8C00",
                "#FFA500",
                "#FFD700",
                "#FFFF33",
                "#FFFF99"
                ]);
     CanvasJS.addColorSet("greenShades1",
                [//colorSet Array

                "#FF8C00",
                "#FFA500",
                "#FFD700",

                ]);

     var revenueSplineAreaChart = new CanvasJS.Chart("revenue-spline-area-chart", {
        animationEnabled: true,
        title:{
            text: "All Bank Sentiment Analysis ",
            fontFamily: "roboto",
            fontStyle: "normal",
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


    var visitorsChart = new CanvasJS.Chart("visitors-chart", {
        animationEnabled: true,
        zoomEnabled: true,
        title:{
            text: "Krungsri Sentiment Analysis",
            fontFamily: "roboto",
        },
        axisX:{
            title: "Time",
            minimum: -0.02,

        },
        axisY:{
            title:"sentiment ratio"
        },
        toolTip:{
            shared: true
        },
        data: [{
            type: "stackedArea100",
            name: "Positve%",
            showInLegend: "true",
            dataPoints: [


                { y: 65, label: "July 2009" },
                { y: 69 , label: "Jan 2010" },
                { y: 63, label: "July 2010" },
                { y: 76, label: "Jan 2011" },
                { y: 64, label: "July 2011" },
                { y: 69, label: "Jan 2012" },
                { y: 66, label: "July 2012" },
                { y: 80 , label: "Jan 2013" },
                { y: 71, label: "July 2013" },
                { y: 61, label: "Jan 2014" },
                { y: 69, label: "July 2014" },
                { y: 75, label: "Jan 2015" },
                { y: 66, label: "Jan 2015" },
                { y: 63 , label: "Jan 2016" },
                { y: 63, label: "July 2016" },
                { y: 66 , label: "Jan 2017" },
                { y: 58, label: "July 2017" },
                { y: 56, label: "Jan 2018" },
                { y: 82, label: "July 2018" },
                { y: 62, label: "Jan 2019" }

            ]
        },
        {
            type: "stackedArea100",
            name: "Negative%",
            showInLegend: "true",
            dataPoints: [

                { y: 74, label: "July 2009" },
                { y: 70 , label: "Jan 2010" },
                { y: 76, label: "July 2010" },
                { y: 63, label: "Jan 2011" },
                { y: 75, label: "July 2011" },
                { y: 70 , label: "Jan 2012" },
                { y: 73, label: "July 2012" },
                { y: 59 , label: "Jan 2013" },
                { y: 68, label: "July 2013" },
                { y: 78, label: "Jan 2014" },
                { y: 70, label: "July 2014" },
                { y: 64, label: "Jan 2015" },
                { y: 73, label: "July 2015" },
                { y: 76 , label: "Jan 2016" },
                { y: 76, label: "July 2016" },
                { y: 73 , label: "Jan 2017" },
                { y: 81, label: "July 2017" },
                { y: 83, label: "Jan 2018" },
                { y: 57, label: "July 2018" },
                { y: 77, label: "Jan 2019" }

            ]
        },

        ]
    });
    visitorsChart.render();


    var  monthlyRevenueByCategoryColumnChart = new CanvasJS.Chart("monthly-revenue-by-category-column-chart", {
        animationEnabled: true,
        exportEnabled: true,
        //theme: "light3", // "light1", "light2", "dark1", "dark2"
        colorSet: "greenShades",
        title:{
            text: "Krungsri Top 7 Word-Frequency  ",
            fontFamily:"roboto"

        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { y: 310, label: "ทำ" },
                { y: 223, label: "เงิน" },
                { y: 188, label: "ไม่ได้" },
                { y: 186, label: "กรุงศรี" },
                { y: 184, label: "บัตร" },
                { y: 169, label: "แบงค์" },
                { y: 138, label: "ผม" }

               // ทำ': 310, 'เงิน': 223, 'ไม่ได้': 188, 'กรุงศรี': 186, 'บัตร': 184, 'แบงค์': 169, 'ผม': 138, 'ไหม
            ]
        }]
    });
    monthlyRevenueByCategoryColumnChart.render();


   var annualRevenueByCategoryPieChart = new CanvasJS.Chart("annual-revenue-by-category-pie-chart", {
        animationEnabled: true,
        exportEnabled: true,
        //theme: "light3", // "light1", "light2", "dark1", "dark2"
         colorSet: "greenShades1",
        axisX: {
			labelMaxWidth: 80,
			labelWrap: true,   // change it to false
			interval: 0,
		},
        axisY: {
            title: " Avg like",


        },

        title:{
            text: "Krungsri Trending Hashtag  ",
            fontFamily:"roboto"


        },
        legend: {
            cursor:"pointer",
            itemclick : toggleDataSeries
        },
        data: [{

            type: "column", //change type to bar, line, area, pie, etc
            indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            //showInLegend: "true",
            dataPoints: [

               { y: 1717, label: "#เรื่องเที่ยวเรื่องง่าย"  },
               { y: 1514, label: "#ให้ล้านแรกของคุณพิเศษกว่าเสมอ" },
               { y: 1203, label: "#เรื่องลงทุนเรื่องง่าย" },
               { y: 900, label: "#PlearnPlearnbyKrungsriGURU " },
               { y: 802, label: "#เรื่องเกมส์เรื่องง่าย" }

               // ทำ': 310, 'เงิน': 223, 'ไม่ได้': 188, 'กรุงศรี': 186, 'บัตร': 184, 'แบงค์': 169, 'ผม': 138, 'ไหม
            ]
        }]
    });
    annualRevenueByCategoryPieChart.render();








    var usersSplineChart = new CanvasJS.Chart("users-spline-chart", {
        animationEnabled: true,
        title:{
            text: "Krungsri Topic Finding",
            fontFamily: "roboto",
        },
        axisY: {
            title: " Comment",
            titleFontColor: "#4F81BC",
            lineColor: "#4F81BC",
            labelFontColor: "#4F81BC",
            tickColor: "#4F81BC"
        },
        axisY2: {
            title: " Comment",
            titleFontColor: "#C0504E",
            lineColor: "#C0504E",
            labelFontColor: "#C0504E",
            tickColor: "#C0504E"
        },
        toolTip: {
            shared: true
        },
        legend: {
            cursor:"pointer",
            itemclick: toggleDataSeries
        },
        data: [{
            type: "column",
            name: "positive",
            legendText: "Positive",
            showInLegend: true,
            dataPoints:[
                { label: "สาขา", y: 37 },
                { label: "บัญชี", y: 54 },
                { label: "บัตร", y: 102 },
                { label: "โอน", y: 50 },
                { label: "บริการ", y: 35}

            ]
        },
        {
            type: "column",
            name: "Negative",
            legendText: "Negative",
            //axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                { label: "สาขา", y: 16 },
                { label: "บัญชี", y: 32 },
                { label: "บัตร", y: 91 },
                { label: "โอน", y: 30 },
                { label: "บริการ", y: 13 }

            ]
        }]
    });
    usersSplineChart.render();


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


    function toggleDataSeries(e) {
        if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
            e.dataSeries.visible = false;
        }
        else {
            e.dataSeries.visible = true;
        }
        usersSplineChart.render();
        revenueSplineAreaChart.render();


    }

	//----------------------------------------------------------------------------------//

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
	function sidebarToggleOnClick() {
		$('#sidebar-toggle-button').on('click', function () {
			$('#sidebar').toggleClass('sidebar-toggle');
			$('#page-content-wrapper').toggleClass('page-content-toggle');

		});
	}

	(function init() {
		chartPropertiesCustomization();
		$(window).resize(chartPropertiesCustomization);
		sidebarToggleOnClick();
	})();

});
