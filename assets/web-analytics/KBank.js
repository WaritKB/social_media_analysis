 $(function () {
	var totalRevenue = 2781450,
			totalVisitors = 883000;

    CanvasJS.addColorSet("greenShades",
                [//colorSet Array

                "#2F4F4F",
                "#008080",
                "#2E8B57",
                "#3CB371",
                "#90EE90"
                ]);

	// CanvasJS spline area chart to show revenue from Jan 2015 - Dec 2015



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



    var  monthlyRevenueByCategoryColumnChart = new CanvasJS.Chart("monthly-revenue-by-category-column-chart", {
        animationEnabled: true,
        exportEnabled: true,
        //theme: "light3", // "light1", "light2", "dark1", "dark2"
        colorSet: "greenShades",
        title:{
            text: "KBank Top 7 word-frequency  ",
            fontFamily:"roboto"

        },
        data: [{
            type: "column", //change type to bar, line, area, pie, etc
            indexLabel: "{y}", //Shows y value on all Data Points
            indexLabelFontColor: "#5A5757",
            indexLabelPlacement: "outside",
            dataPoints: [
                { y: 615, label: "ทำ" },
                { y: 613, label: "เงิน" },
                { y: 530, label: "บัตร" },
                { y: 507, label: "แบงค์" },
                { y: 395, label: "ไม่ได้" },
                { y: 334, label: "กสิกร" },
                { y: 327, label: "ผม" }


            ]
        }]
    });
    monthlyRevenueByCategoryColumnChart.render();
	var visitorsChart = new CanvasJS.Chart("visitors-chart", {
        animationEnabled: true,
        zoomEnabled: true,
        title:{
            text: "Kbank Sentiment analysis",
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


                { y: 108, label: "July 2009" },
                { y: 120 , label: "Jan 2010" },
                { y: 109, label: "July 2010" },
                { y: 138, label: "Jan 2011" },
                { y: 107, label: "July 2011" },
                { y: 134, label: "Jan 2012" },
                { y: 109, label: "July 2012" },
                { y: 110 , label: "Jan 2013" },
                { y: 111, label: "July 2013" },
                { y: 122, label: "Jan 2014" },
                { y: 106, label: "July 2014" },
                { y: 102, label: "Jan 2015" },
                { y: 111, label: "Jan 2015" },
                { y: 114 , label: "Jan 2016" },
                { y: 119, label: "July 2016" },
                { y: 120 , label: "Jan 2017" },
                { y: 131, label: "July 2017" },
                { y: 119, label: "Jan 2018" },
                { y: 119, label: "July 2018" },
                { y: 124, label: "Jan 2019" }

            ]
        },
        {
            type: "stackedArea100",
            name: "Negative%",
            showInLegend: "true",
            dataPoints: [

                { y: 116, label: "July 2009" },
                { y: 104 , label: "Jan 2010" },
                { y: 115, label: "July 2010" },
                { y: 86, label: "Jan 2011" },
                { y: 117, label: "July 2011" },
                { y: 90 , label: "Jan 2012" },
                { y: 115, label: "July 2012" },
                { y: 114 , label: "Jan 2013" },
                { y: 113, label: "July 2013" },
                { y: 102, label: "Jan 2014" },
                { y: 118, label: "July 2014" },
                { y: 122, label: "Jan 2015" },
                { y: 113, label: "July 2015" },
                { y: 110 , label: "Jan 2016" },
                { y: 105, label: "July 2016" },
                { y: 104 , label: "Jan 2017" },
                { y: 93, label: "July 2017" },
                { y: 105, label: "Jan 2018" },
                { y: 105, label: "July 2018" },
                { y: 100, label: "Jan 2019" }

            ]
        },

        ]
    });
    visitorsChart.render();

	// 3-2

    var usersSplineChart = new CanvasJS.Chart("users-spline-chart", {
        animationEnabled: true,
        title:{
            text: "Kbank topic finding",
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
                { label: "สาขา", y: 101 },
                { label: "บัญชี", y: 173 },
                { label: "บัตร", y: 288 },
                { label: "เอน", y: 145 },
                { label: "บริการ", y: 96}



            ]
        },
        {
            type: "column",
            name: "Negative",
            legendText: "Negative",
            //axisYType: "secondary",
            showInLegend: true,
            dataPoints:[
                { label: "สาขา", y: 85 },
                { label: "บัญชี", y: 83 },
                { label: "บัตร", y: 193 },
                { label: "โอน", y: 75 },
                { label: "บริการ", y: 51 }




            ]
        }]
    });
    usersSplineChart.render();

    var annualRevenueByCategoryPieChart = new CanvasJS.Chart("annual-revenue-by-category-pie-chart", {
        animationEnabled: true,
        exportEnabled: true,
        //theme: "light3", // "light1", "light2", "dark1", "dark2"
         colorSet: "greenShades",
        axisX: {
			labelMaxWidth: 95,
			labelWrap: true,   // change it to false
			interval: 0,
		},
        axisY: {
            title: " Avg like",


        },

        title:{
            text: "KBank Trending Hashtag  ",
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

               { y: 6827, label: "#KBankLiveWorkshop "  },
               { y: 2666, label: "#PTTBLUECREDITCARD " },
               { y: 1416, label: "#คำตอบที่ใช่ของการลงทุน " },
               { y: 698, label: "#แล้วพ้อยท์จะเยียวยาทุกอย่างเอง" },
               { y: 573, label: "#เปลี่ยนเพื่อโลก  " }


               // ทำ': 310, 'เงิน': 223, 'ไม่ได้': 188, 'กรุงศรี': 186, 'บัตร': 184, 'แบงค์': 169, 'ผม': 138, 'ไหม
            ]
        }]
    });
    annualRevenueByCategoryPieChart.render();




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
	var allCharts = [

	];



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
