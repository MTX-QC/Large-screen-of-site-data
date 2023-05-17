// 2.能耗监控
// 2.1园区耗能走势折线图
(function () {
  // 1.初始化echarts实例对象
  var myChart = echarts.init(document.getElementById("kwh"));

  // 2.指定配置项与数据
  var option = {
    grid: {//设置图表四周留白间距
      top: '10%',
      right: '10%',
      bottom: '10%',
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
      data: ['6/19', '6/20', '6/21', '6/22', '6/23', '6/24', '6/25', '6/26', '6/27', '6/28', '6/29', '6/30']
    },
    yAxis: {
      type: 'value',
      max: 10000,//最大刻度值
      interval: 1000,//刻度值间隔值
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
      data: [2300, 4200, 5600, 2300, 4200, 5600, 4000, 6300, 3000, 4000, 6300, 3000],
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

  // 3.将配置项设置给echarts实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 2.2用电时段走势折线图
(function () {
  // 1.初始化echarts实例对象
  var myChart = echarts.init(document.getElementById("kwh2"));

  // 2.指定配置项与数据
  var option = {
    grid: {//设置图表四周留白间距
      top: '10%',
      right: '10%',
      bottom: '10%',
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
      data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
    },
    yAxis: {
      type: 'value',
      max: 1000,//最大刻度值
      interval: 100,//刻度值间隔值
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
      data: [230, 420, 230, 420, 560, 400, 630, 300, 560, 400, 630, 300],
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
            offset: 0, color: 'rgba(117,220,245, 0.5)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(6,66,80, 1)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    }]
  };

  // 3.将配置项设置给echarts实例对象
  myChart.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 2.3用电时段走势折线图
(function () {
  // 1.初始化echarts实例对象
  var myChart = echarts.init(document.getElementById("kwh3"));

  // 2.指定配置项与数据
  var option = {
    grid: {//设置图表四周留白间距
      top: '10%',
      right: '10%',
      bottom: '10%',
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
      data: ['8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00']
    },
    yAxis: {
      type: 'value',
      max: 1000,//最大刻度值
      interval: 100,//刻度值间隔值
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
      data: [100, 420, 560, 100, 420, 560, 200, 530, 300, 200, 530, 300],
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
            offset: 0, color: 'rgba(69,235,197, 0.5)' // 0% 处的颜色
          }, {
            offset: 1, color: 'rgba(12,86,69, 1)' // 100% 处的颜色
          }],
          global: false // 缺省为 false
        }
      }
    }]
  };

  // 3.将配置项设置给echarts实例对象
  myChart.setOption(option);

  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 2.4设备用电占比走势折线图
(function () {
  // 1.初始化echarts实例对象
  var myChart = echarts.init(document.getElementById("equipment-power"));

  // 2.指定配置项与数据
  var option = {

    grid: {//设置图表四周留白间距
      top: '10%',
      right: '10%',
      bottom: '10%',
      left: '10%',
    },
    // 设置图表提示框组件
    tooltip: {
      // 触发方式---axis坐标轴触发；item数据项图形触发
      trigger: 'axis'
    },
    xAxis: {
      type: 'category',
      boundaryGap: true,//设置x轴两边的留白
      axisTick: { //x轴刻度尺
        show: false
      },
      axisLine: {//x轴线条颜色
        lineStyle: {
          color: '#999'
        }
      },
      data: ["照明设备", "安防设备", "通讯设备", "电器设备", "门禁设备", "其他设备"]
    },
    yAxis: {
      type: 'value',
      max: 1000,//最大刻度值
      interval: 100,//刻度值间隔值
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
      type: 'bar',
      itemStyle: {
        normal: {
          color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
            offset: 0,
            color: "#f95151" // 0% 处的颜色
          }, {
            offset: 1,
            color: "#c13f3f" // 100% 处的颜色
          }], false)
        }
      },
      data: ["300", "200", "300", "800", "900", "200", "500"],
      barWidth: '20'  //柱形宽度
    }]
  };


  // 3.将配置项设置给echarts实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})();

// 2.5设备用电占比走势折线图
(function () {
  // 1.初始化echarts实例对象
  var myChart = echarts.init(document.getElementById("daily-electricity"));

  // 2.指定配置项与数据
  var option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross'
      }
    },
    grid: {//设置图表四周留白间距
      top: '10%',
      right: '10%',
      bottom: '10%',
      left: '10%',
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      axisLine: {//x轴线条颜色
        show: true,
        lineStyle: {
          color: '#999'
        }
      },
      // prettier-ignore
      data: ['00:00', '01:15', '02:30', '03:45', '05:00', '06:15', '07:30', '08:45', '10:00', '11:15', '12:30', '13:45', '15:00', '16:15', '17:30', '18:45', '20:00', '21:15', '22:30', '23:45']
    },
    yAxis: {
      type: 'value',
      axisLabel: {
        formatter: '{value}'
      },
      axisPointer: {
        snap: true
      },
      axisLine: {//y轴线条颜色
        show: true,
        lineStyle: {
          color: '#999'
        }
      },
      splitLine: {//网格线
        //show:false //关闭网格线
        //或
        lineStyle: {
          type: 'dashed',    //设置网格线类型 dotted：虚线   solid:实线
          color: '#999'  //网格线颜色
        }
      }
    },
    visualMap: {
      show: false,
      dimension: 0,
      pieces: [
        {
          lte: 6,
          color: 'green'
        },
        {
          gt: 6,
          lte: 8,
          color: 'red'
        },
        {
          gt: 8,
          lte: 14,
          color: 'green'
        },
        {
          gt: 14,
          lte: 17,
          color: 'red'
        },
        {
          gt: 17,
          color: 'green'
        }
      ]
    },
    series: [
      {
        name: '今日用电概况',
        type: 'line',
        smooth: true,
        // prettier-ignore
        data: [300, 280, 250, 260, 270, 300, 550, 500, 400, 390, 380, 390, 400, 500, 600, 750, 800, 700, 600, 400],
        markArea: {
          itemStyle: {
            color: 'rgba(255, 173, 177, 0.4)'
          },
          data: [
            [
              {
                name: '早高峰',
                xAxis: '07:30'
              },
              {
                xAxis: '10:00'
              }
            ],
            [
              {
                name: '晚高峰',
                xAxis: '17:30'
              },
              {
                xAxis: '21:15'
              }
            ]
          ]
        }
      }
    ]
  };


  // 3.将配置项设置给echarts实例对象
  myChart.setOption(option);
  // 4. 让图表跟随屏幕自动的去适应
  window.addEventListener("resize", function () {
    myChart.resize();
  });
})(); 
