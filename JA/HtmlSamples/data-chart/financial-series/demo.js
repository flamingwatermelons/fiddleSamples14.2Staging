$(function () {
            $("#candlestickChart").igDataChart({
                width: "100%",
                height: "500px",
                title: "Microsoft (MSFT) vs. Adobe (ADBE)",
                subtitle: "株価の比較",
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    dataSource: data,
                    label: "Date",
                    title: "日付",
                    interval: 10
                }, {
                    name: "yAxis",
                    type: "numericY",
                    title: "価格",
                }],
                series: [{
                    name: "series1",
                    dataSource: data,
                    title: "価格シリーズ",
                    type: "financial",
                    displayType: "candlestick",
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    showTooltip: true,
                    thickness: 1,
                    trendLineBrush: "rgba(68, 172, 214, .8)",
                    trendLineThickness: 5,
                    trendLineType: "exponentialAverage",
                    negativeBrush: "rgba(198, 45, 54, .8)"
                }, {
                    name: "series2",
                    dataSource: dataAdobe,
                    title: "価格シリーズ",
                    type: "financial",
                    isTransitionInEnabled: true,
                    isHighlightingEnabled: true,
                    displayType: "candlestick",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    showTooltip: true,
                    thickness: 1,
                    trendLineBrush: "rgba(73, 73, 73, .8)",
                    trendLineThickness: 5,
                    trendLineType: "exponentialAverage",
                    negativeBrush: "rgba(198, 45, 54, .8)"
                }],
           });

            $("#ohlcChart").igDataChart({
                width: "100%",
                height: "500px",
                title: "Microsoft (MSFT) vs. Adobe (ADBE)",
                subtitle: "株価の比較",
                axes: [{
                    name: "xAxis",
                    type: "categoryX",
                    dataSource: data,
                    label: "Date",
                    interval: 10,
                    title: "日付",
                }, {
                    name: "yAxis",
                    type: "numericY",
                    title: "価格",
                }],
                series: [{
                    name: "series1",
                    dataSource: data,
                    title: "価格シリーズ",
                    type: "financial",
                    isTransitionInEnabled: true,
                    displayType: "ohlc",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    showTooltip: true,
                    thickness: 2,
                    trendLineBrush: "rgba(68, 172, 214, .8)",
                    trendLineThickness: 5,
                    trendLineType: "exponentialAverage",
                    negativeBrush: "rgba(198, 45, 54, .8)"
                }, {
                    name: "series2",
                    dataSource: dataAdobe,
                    title: "価格シリーズ",
                    type: "financial",
                    isTransitionInEnabled: true,
                    displayType: "ohlc",
                    xAxis: "xAxis",
                    yAxis: "yAxis",
                    openMemberPath: "Open",
                    highMemberPath: "High",
                    lowMemberPath: "Low",
                    closeMemberPath: "Close",
                    showTooltip: true,
                    thickness: 2,
                    trendLineBrush: "rgba(73, 73, 73, .8)",
                    trendLineThickness: 5,
                    trendLineType: "exponentialAverage",
                    negativeBrush: "rgba(198, 45, 54, .8)"
                }],
                horizontalZoomable: true,
                verticalZoomable: true,
                windowResponse: "immediate"
            });
        });