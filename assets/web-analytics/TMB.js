 $(function () {
	var totalRevenue = 2781450,
			totalVisitors = 883000;

    CanvasJS.addColorSet("TMBShades",
                [//colorSet Array

                "#008080",
                "#5F9EA0",
                "#00CED1",
                "#00CED1",
                "#AFEEEE"
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
            text: "TMB Sentiment Analysis",
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
                 //[90, 112, 87, 101, 121, 86, 108, 115, 92, 121, 121, 124, 89, 103, 98, 100, 91, 108, 123, 115]
                  //  [126, 104, 129, 115, 95, 130, 108, 101, 124, 95, 95, 92, 127, 113, 118, 116, 125, 108, 93, 101]

                { y: 90, label: "Apr 2014" },
                { y: 112 , label: "July 2014" },
                { y: 87, label: "Oct 2014" },
                { y: 101, label: "Jan 2015" },
                { y: 121, label: "Apr 2015" },
                { y: 86, label: "July 2015" },
                { y: 108, label: "Oct 2015" },
                { y: 115 , label: "Jan 2016" },
                { y: 92, label: "Apr 2016" },
                { y: 121, label: "July 2016" },
                { y: 121, label: "Oct 2016" },
                { y: 124, label: "Jan 2017" },
                { y: 89, label: "Apr 2017" },
                { y: 103 , label: "July 2017" },
                { y: 98, label: "Oct 2017" },
                { y: 100 , label: "Jan 2018" },
                { y: 91, label: "Apr 2018" },
                { y: 108, label: "July 2018" },
                { y: 123, label: "Oct 2018" },
                { y: 115, label: "Jan 2019" }

            ]
        },
        {
            type: "stackedArea100",
            name: "Negative%",
            showInLegend: "true",
            dataPoints: [

                { y: 126, label: "Apr 2014" },
                { y: 104 , label: "July 2014" },
                { y: 129, label: "Oct 2014" },
                { y: 115, label: "Jan 2015" },
                { y: 95, label: "Apr 2015" },
                { y: 130 , label: "July 2015" },
                { y: 108, label: "Oct 2015" },
                { y: 101 , label: "Jan 2016" },
                { y: 124, label: "Apr 2016" },
                { y: 95, label: "July 2016" },
                { y: 95, label: "Oct 2016" },
                { y: 92, label: "Jan 2017" },
                { y: 127, label: "Apr 2017" },
                { y: 113 , label: "July 2017" },
                { y: 118, label: "Oct 2017" },
                { y: 116 , label: "Jan 2018" },
                { y: 125, label: "Apr 2018" },
                { y: 108, label: "July 2018" },
                { y: 93, label: "Oct 2018" },
                { y: 101, label: "Jan 2019" }

            ]
        },

        ]
    });
    visitorsChart.render();


    var  monthlyRevenueByCategoryColumnChart = new CanvasJS.Chart("monthly-revenue-by-category-column-chart", {
        animationEnabled: true,
        exportEnabled: true,
        //theme: "light3", // "light1", "light2", "dark1", "dark2"
        colorSet: "TMBShades",
        title:{
            text: "TMB Top 7 Word-Frequency  ",
            fontFamily:"roboto"

        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { y: 892, label: "แบงค์" },
                { y: 678, label: "ลูกค้า" },
                { y: 619, label: "ติดต่อ" },
                { y: 541, label: "ทำ" },
                { y: 407, label: "แจ้ง" },
                { y: 388, label: "ผม" },
                { y: 372, label: "บัตร" }
               // แบงค์': 892, 'ลูกค้า': 678, 'ติดต่อ': 619, 'ทำ': 541, 'แจ้ง': 407, 'ผม': 388, 'บัตร': 372,

            ]
        }]
    });
    monthlyRevenueByCategoryColumnChart.render();
    var annualRevenueByCategoryPieChart = new CanvasJS.Chart("annual-revenue-by-category-pie-chart", {
        animationEnabled: true,
        exportEnabled: true,
        //theme: "light3", // "light1", "light2", "dark1", "dark2"
         colorSet: "TMBShades",
        axisX: {
			labelMaxWidth: 80,
			labelWrap: true,   // change it to false
			interval: 0,
		},
        axisY: {
            title: " Avg like",


        },

        title:{
            text: "TMB Trading Hashtag  ",
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

               { y: 17899, label: "#TMBBIZWOW"  },
               { y: 1555, label: "#TMBCreditCard" },
               { y: 1464, label: "#TMBAllFree" },
               { y: 1232, label: " #เพราะคุณต้องได้มากกว่า" },
               { y: 930, label: "#ถอนได้ดอกสูง" }


               // ทำ': 310, 'เงิน': 223, 'ไม่ได้': 188, 'กรุงศรี': 186, 'บัตร': 184, 'แบงค์': 169, 'ผม': 138, 'ไหม
            ]
        }]
    });
    annualRevenueByCategoryPieChart.render();


    var usersSplineChart = new CanvasJS.Chart("users-spline-chart", {
        animationEnabled: true,
        title:{
            text: "TMB Topic Finding",
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
                { label: "สาขา", y: 127 },
                { label: "บัญชี", y: 169 },
                { label: "บัตร", y: 214 },
                { label: "โอน", y: 125 },
                { label: "บริการ", y: 123}

            ]
        },
        {
            type: "column",
            name: "Negative",
            legendText: "Negative",
            //axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                { label: "สาขา", y: 42 },
                { label: "บัญชี", y: 111 },
                { label: "บัตร", y: 128 },
                { label: "โอน", y: 140 },
                { label: "บริการ", y: 29 }

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