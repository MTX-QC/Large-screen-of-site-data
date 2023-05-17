// 3.空间环境监控
// 3.1.温度信息折线图
(function () {
    // 1.初始化echarts实例对象
    var myChart = echarts.init(document.getElementById("temperature"));

    // 2.指定配置项与数据
    var option = {
        grid: {//设置图表四周留白间距
            top: '10%',
            right: '10%',
            bottom: '12%',
            left: '10%',
        },
        // 设置图表提示框组件
        tooltip: {
            // 触发方式---axis坐标轴触发；item数据项图形触发
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,//设置x轴两边的留白
            axisTick: { //x轴刻度尺
                show: false
            },
            axisLine: {//x轴线条颜色
                lineStyle: {
                    color: '#999'
                }
            },
            data: ['6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/26', '6/28', '6/29', '6/30', '6/31']
        },
        yAxis: {
            type: 'value',
            max: 50,//最大刻度值
            interval: 10,//刻度值间隔值
            splitLine: {//网格线
                //show:false //关闭网格线
                //或
                lineStyle: {
                    type: 'dashed',    //设置网格线类型 dotted：虚线   solid:实线
                    color: '#999'  //网格线颜色
                },
            },
            axisLine: {//y轴线条颜色
                show: true,
                lineStyle: {
                    color: '#999'
                }
            },
        },
        series: [{
            data: [23, 22, 26, 23, 22, 26, 30, 33, 30, 30, 33, 30],
            type: 'line',
            //smooth: true,//面积图改成弧形状
            lineStyle: {
                width: 1,//外边线宽度
                color: 'red'//外边线颜色
            },
            //showSymbol: false,//去除面积图节点圆
            areaStyle: {//区域填充渐变颜色
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(237,66,100, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(234,174,10, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }]
    };
    //发送请求获取温度数
    $.ajax({
        url:"http://localhost:8080/environment/getTemperature",
        success:function (data) {
            var json = eval(data);
            //给X轴赋值
            option.xAxis.data=json.X;

            //给Y轴赋值
            option.series[0].data=json.Y;
        },
        async:false
    });

    // 3.将配置项设置给echarts实例对象
    myChart.setOption(option);
})();

// 3.2.湿度信息折线图
(function () {
    // 1.初始化echarts实例对象
    var myChart = echarts.init(document.getElementById("humidity"));

    // 2.指定配置项与数据
    var option = {
        grid: {//设置图表四周留白间距
            top: '10%',
            right: '10%',
            bottom: '12%',
            left: '10%',
        },
        // 设置图表提示框组件
        tooltip: {
            // 触发方式---axis坐标轴触发；item数据项图形触发
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,//设置x轴两边的留白
            axisTick: { //x轴刻度尺
                show: false
            },
            axisLine: {//x轴线条颜色
                lineStyle: {
                    color: '#999'
                }
            },
            data: ['6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/26', '6/28', '6/29', '6/30', '6/31']
        },
        yAxis: {
            type: 'value',
            max: 100,//最大刻度值
            interval: 10,//刻度值间隔值
            splitLine: {//网格线
                //show:false //关闭网格线
                //或
                lineStyle: {
                    type: 'dashed',    //设置网格线类型 dotted：虚线   solid:实线
                    color: '#999'  //网格线颜色
                },
            },
            axisLine: {//y轴线条颜色
                show: true,
                lineStyle: {
                    color: '#999'
                }
            },
        },
        series: [{
            data: [23, 23, 30, 50, 55, 33, 30, 30, 50, 55, 33, 30],
            type: 'line',
            //smooth: true,//面积图改成弧形状
            lineStyle: {
                width: 1,//外边线宽度
                color: '#fff'//外边线颜色
            },
            //showSymbol: false,//去除面积图节点圆
            areaStyle: {//区域填充渐变颜色
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(126,238,214, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(2,72,57, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }]
    };
    //发送请求获取湿度数
    $.ajax({
        url:"http://localhost:8080/environment/getHumidityInfo",
        success:function (data) {
            var json = eval(data);
            //给X轴赋值
            option.xAxis.data=json.X;

            //给Y轴赋值
            option.series[0].data=json.Y;
        },
        async:false
    });

    // 3.将配置项设置给echarts实例对象
    myChart.setOption(option);
})();

// 3.3.风速信息折线图
(function () {
    // 1.初始化echarts实例对象
    var myChart = echarts.init(document.getElementById("illumination"));

    // 2.指定配置项与数据
    var option = {
        grid: {//设置图表四周留白间距
            top: '10%',
            right: '10%',
            bottom: '12%',
            left: '10%',
        },
        // 设置图表提示框组件
        tooltip: {
            // 触发方式---axis坐标轴触发；item数据项图形触发
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,//设置x轴两边的留白
            axisTick: { //x轴刻度尺
                show: false
            },
            axisLine: {//x轴线条颜色
                lineStyle: {
                    color: '#999'
                }
            },
            data: ['6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/26', '6/28', '6/29', '6/30', '6/31']
        },
        yAxis: {
            type: 'value',
            max: 30,//最大刻度值
            interval: 5,//刻度值间隔值
            splitLine: {//网格线
                //show:false //关闭网格线
                //或
                lineStyle: {
                    type: 'dashed',    //设置网格线类型 dotted：虚线   solid:实线
                    color: '#999'  //网格线颜色
                },
            },
            axisLine: {//y轴线条颜色
                show: true,
                lineStyle: {
                    color: '#999'
                }
            },
        },
        series: [{
            data: [5, 6, 10, 15, 5, 6, 10, 15, 20, 10, 20, 10],
            type: 'line',
            //smooth: true,//面积图改成弧形状
            lineStyle: {
                width: 1,//外边线宽度
                color: '#fff'//外边线颜色
            },
            //showSymbol: false,//去除面积图节点圆
            areaStyle: {//区域填充渐变颜色
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(229,193,14, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(52,44,3, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }]
    };
    //发送请求获取风速数
    $.ajax({
        url:"http://localhost:8080/environment/getwindspeedinfo",
        success:function (data) {
            var json = eval(data);
            //给X轴赋值
            option.xAxis.data=json.X;

            //给Y轴赋值
            option.series[0].data=json.Y;
        },
          async:false
    });
    // 3.将配置项设置给echarts实例对象
    myChart.setOption(option);
})();


// 3.4.PM2.5折线图
(function () {
    // 1.初始化echarts实例对象
    var myChart = echarts.init(document.getElementById("PM"));

    // 2.指定配置项与数据
    var option = {
        grid: {//设置图表四周留白间距
            top: '10%',
            right: '10%',
            bottom: '12%',
            left: '10%',
        },
        // 设置图表提示框组件
        tooltip: {
            // 触发方式---axis坐标轴触发；item数据项图形触发
            trigger: 'axis'
        },
        xAxis: {
            type: 'category',
            boundaryGap: false,//设置x轴两边的留白
            axisTick: { //x轴刻度尺
                show: false
            },
            axisLine: {//x轴线条颜色
                lineStyle: {
                    color: '#999'
                }
            },
            data: ['6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/26', '6/28', '6/29', '6/30', '6/31']
        },
        yAxis: {
            type: 'value',
            max: 30,//最大刻度值
            interval: 5,//刻度值间隔值
            splitLine: {//网格线
                //show:false //关闭网格线
                //或
                lineStyle: {
                    type: 'dashed',    //设置网格线类型 dotted：虚线   solid:实线
                    color: '#999'  //网格线颜色
                },
            },
            axisLine: {//y轴线条颜色
                show: true,
                lineStyle: {
                    color: '#999'
                }
            },
        },
        series: [{
            data: [5, 6, 10, 10, 15, 20, 10, 20, 15, 5, 6, 10],
            type: 'line',
            //smooth: true,//面积图改成弧形状
            lineStyle: {
                width: 1,//外边线宽度
                color: '#fff'//外边线颜色
            },
            //showSymbol: false,//去除面积图节点圆
            areaStyle: {//区域填充渐变颜色
                color: {
                    type: 'linear',
                    x: 0,
                    y: 0,
                    x2: 0,
                    y2: 1,
                    colorStops: [{
                        offset: 0, color: 'rgba(31,240,75, 0.5)' // 0% 处的颜色
                    }, {
                        offset: 1, color: 'rgba(2,140,31, 1)' // 100% 处的颜色
                    }],
                    global: false // 缺省为 false
                }
            }
        }]
    };
    //发送请求获取pm25数
    $.ajax({
        url:"http://localhost:8080/environment/getPm25Info",
        success:function (data) {
            var json = eval(data);
            //给X轴赋值
            option.xAxis.data=json.X;

            //给Y轴赋值
            option.series[0].data=json.Y;
        },
        async:false
    });

    // 3.将配置项设置给echarts实例对象
    myChart.setOption(option);
})();
