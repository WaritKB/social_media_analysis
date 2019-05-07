 $(function () {
	var totalRevenue = 2781450,
			totalVisitors = 883000;

    CanvasJS.addColorSet("BlueShades",
                [//colorSet Array

                "#000080",
                "#483D8B",
                "#6A5ACD",
                "#4169E1",
                "#6495ED"
                ]);
     CanvasJS.addColorSet("BlueShades1",
                [//colorSet Array

                "#000080",
                "#483D8B",
                "#6A5ACD"

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
            text: "Bangkok Sentiment Analysis",
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


               // { y: 90, label: "Apr 2004" },
                //{ y: 86 , label: "July 2014" },
               // { y: 84, label: "Oct 2014" },
                { y: 101, label: "Jan 2015" },
                { y: 106, label: "Apr 2015" },
                { y: 92, label: "July 2015" },
                { y: 92, label: "Oct 2015" },
                { y: 99 , label: "Jan 2016" },
                { y: 109, label: "Apr 2016" },
                { y: 99, label: "July 2016" },
                { y: 109, label: "Oct 2016" },
                { y: 103, label: "Jan 2017" },
                { y: 93, label: "Apr 2017" },
                { y: 103 , label: "July 2017" },
                { y: 93, label: "Oct 2017" },
                { y: 90, label: "Jan 2018" },
                { y: 99, label: "Apr 2018" },
                { y: 105, label: "July 2018" },
                { y: 113, label: "Oct 2018" },
                { y: 93, label: "Jan 2019" }

            ]
        },
        {
            type: "stackedArea100",
            name: "Negative%",
            showInLegend: "true",
            dataPoints: [

               // { y: 71, label: "July 2009" },
               // { y: 75 , label: "Jan 2010" },
               // { y: 77, label: "July 2010" },
                { y: 89, label: "Jan 2015" },
                { y: 84, label: "Apr 2015" },
                { y: 98, label: "July 2015" },
                { y: 91, label: "Oct 2015" },
                { y: 81 , label: "Jan 2016" },
                { y: 91, label: "Apr 2016" },
                { y: 81, label: "July 2016" },
                { y: 97, label: "Oct 2016" },
                { y: 87, label: "Jan 2017" },
                { y: 97, label: "Apr 2017" },
                { y: 87 , label: "July 2017" },
                { y: 98, label: "Oct 2017" },
                { y: 100 ,label: "Jan 2018" },
                { y: 91, label: "Apr 2018" },
                { y: 85, label: "July 2018" },
                { y: 77, label: "Oct 2018" },
                { y: 97, label: "Jan 2019" }


            ]
        },

        ]
    });
    visitorsChart.render();


    var  monthlyRevenueByCategoryColumnChart = new CanvasJS.Chart("monthly-revenue-by-category-column-chart", {
        animationEnabled: true,
        exportEnabled: true,
        //theme: "light3", // "light1", "light2", "dark1", "dark2"
        colorSet: "BlueShades",
        title:{
            text: "ฺBangkok Top 7 Word-Frequency  ",
            fontFamily:"roboto"

        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { y: 534, label: "แบงค์" },
                { y: 469, label: "บัตร" },
                { y: 408, label: "โทร" },
                { y: 306, label: "ทำ" },
                { y: 298, label: "เงิน" },
                { y: 287, label: "บัตรเครดิต" },
                { y: 283, label: "รอ" }

                //แบงค์': 534, 'บัตร': 469, 'โทร': 408, 'ทำ': 306, 'เงิน': 298, 'บัตรเครดิต': 287, 'รอ': 283,
            ]
        }]
    });
    monthlyRevenueByCategoryColumnChart.render();
    var annualRevenueByCategoryPieChart = new CanvasJS.Chart("annual-revenue-by-category-pie-chart", {
        animationEnabled: true,
        exportEnabled: true,
        //theme: "light3", // "light1", "light2", "dark1", "dark2"
         colorSet: "BlueShades1",
        axisX: {
			labelMaxWidth: 100,
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

               { y: 1977, label: " #สุขฟิน3ต่อ"  },
               { y: 901, label: " #บัตรเครดิตโตโยต้าธนาคารกรุงเทพ" },
               { y: 303, label: "#ทีมดูหนังสุดชิล " },
               { y: 198, label: " #Connect2Earth" },
               { y: 195, label: "#งู้ยยย" }

               // ทำ': 310, 'เงิน': 223, 'ไม่ได้': 188, 'กรุงศรี': 186, 'บัตร': 184, 'แบงค์': 169, 'ผม': 138, 'ไหม
            ]
        }]
    });
    annualRevenueByCategoryPieChart.render();


    var usersSplineChart = new CanvasJS.Chart("users-spline-chart", {
        animationEnabled: true,
        title:{
            text: "Bangkok Topic Finding",
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
                { label: "สาขา", y: 68 },
                { label: "บัญชี", y: 97 },
                { label: "บัตร", y: 358 },
                { label: "โอน", y: 44 },
                { label: "บริการ", y: 124}

            ]
        },
        {
            type: "column",
            name: "Negative",
            legendText: "Negative",
            //axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                { label: "สาขา", y: 32 },
                { label: "บัญชี", y: 22 },
                { label: "บัตร", y: 201 },
                { label: "โอน", y: 34 },
                { label: "บริการ", y:36 }

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
