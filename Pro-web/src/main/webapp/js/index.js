// 1.入驻企业饼图
(function () {
    // 1.初始化echarts实例对象
    var myChart = echarts.init(document.getElementById("settle-in"));

    // 2.指定配置项与数据
    var option = {
        color: ["#9689ff", "#ff8a26", "#4ed33c", "#dd5050"],
        tooltip: {
            trigger: 'item'
        },
        series: [
            {
                name: '企业分类',
                type: 'pie',
                radius: '60%',
                data: [],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                    }
                }
            }
        ]
    };
    //发送ajax请求获取入驻企业统计数
    $.ajax({
        url:"http://localhost:8080/company/getcompanyreport",
        success:function (data) {
            var jsonArr = eval(data);
            option.series[0].data=jsonArr;
        },
        async:false //async：false同步请求，true为异步请求
    });

    // 3.将配置项设置给echarts实例对象
    myChart.setOption(option);

    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

// 2.天气情况
(function () {
    // 1. 实例化对象
    var myChart = echarts.init(document.getElementById("temperature"));
    // 2.指定配置
    var option = {
        // 通过这个color修改两条线的颜色
        color: ["#00f2f1", "#ed3f35"],
        tooltip: {
            trigger: "axis"
        },
        legend: {
            // 如果series 对象有name 值，则 legend可以不用写data
            // 修改图例组件 文字颜色
            textStyle: {
                color: "#4c9bfd"
            },
            // 这个10% 必须加引号
            right: "10%"
        },
        grid: {
            top: "20%",
            left: "3%",
            right: "4%",
            bottom: "3%",
            show: true, // 显示边框
            borderColor: "#012f4a", // 边框颜色
            containLabel: true // 包含刻度文字在内
        },

        xAxis: {
            type: "category",
            boundaryGap: false,
            data: [
                "1月",
                "2月",
                "3月",
                "4月",
                "5月",
                "6月",
                "7月",
                "8月",
                "9月",
                "10月",
                "11月",
                "12月"
            ],
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: "#4c9bfd" // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            }
        },
        yAxis: {
            type: "value",
            axisTick: {
                show: false // 去除刻度线
            },
            axisLabel: {
                color: "#4c9bfd" // 文本颜色
            },
            axisLine: {
                show: false // 去除轴线
            },
            splitLine: {
                lineStyle: {
                    color: "#012f4a" // 分割线颜色
                }
            }
        },
        series: [
            {
                name: "最高气温",
                type: "line",
                // true 可以让我们的折线显示带有弧度
                smooth: true,
                data: [30, 31, 35, 32, 37, 38, 40, 41, 38, 36, 32, 27]
            },
            {
                name: "最低气温",
                type: "line",
                smooth: true,
                data: [25, 25, 27, 20, 32, 33, 35, 32, 32, 30, 28, 23]
            }
        ]
    };

    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });

})();

// 3.岗位人员统计
(function () {
    var myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
    // 1. 实例化对象
    var myChart = echarts.init(document.getElementById("engineering-vehicle"));
    // 2. 指定配置和数据
    var option = {
        grid: {
            top: "10%",
            left: "22%",
            bottom: "10%"
            // containLabel: true
        },
        // 不显示x轴的相关信息
        xAxis: {
            show: false
        },
        yAxis: [
            {
                type: "category",
                // 类目反转
                inverse: true,
                data: ["管理人员", "业务人员", "财务人员", "服务人员", "技术人员"],
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            },
            {
                data: [702, 350, 610, 793, 664],
                inverse: true,
                // 不显示y轴的线
                axisLine: {
                    show: false
                },
                // 不显示刻度
                axisTick: {
                    show: false
                },
                // 把刻度标签里面的文字颜色设置为白色
                axisLabel: {
                    color: "#fff"
                }
            }
        ],
        series: [
            {
                name: "条",
                type: "bar",
                data: [70, 34, 60, 78, 69],
                yAxisIndex: 0,
                // 修改第一组柱子的圆角
                itemStyle: {
                    borderRadius: 20,
                    // 此时的color 可以修改柱子的颜色
                    color: function (params) {
                        // params 传进来的是柱子对象
                        // console.log(params);
                        // dataIndex 是当前柱子的索引号
                        return myColor[params.dataIndex];
                    }
                },
                // 柱子之间的距离
                barCategoryGap: 50,
                //柱子的宽度
                barWidth: 10,
                // 显示柱子内的文字
                label: {
                    show: true,
                    position: "inside",
                    // {c} 会自动的解析为 数据  data里面的数据
                    formatter: "{c}%"
                }
            },
            {
                name: "框",
                type: "bar",
                barCategoryGap: 50,
                barWidth: 15,
                yAxisIndex: 1,
                data: [100, 100, 100, 100, 100],
                itemStyle: {
                    color: "none",
                    borderColor: "#00c1de",
                    borderWidth: 3,
                    barBorderRadius: 15
                }
            }
        ]
    };

    // 3. 把配置给实例对象
    myChart.setOption(option);
    // 4. 让图表跟随屏幕自动的去适应
    window.addEventListener("resize", function () {
        myChart.resize();
    });
})();

// 4.获取资产数据
(function () { //页面加载完毕
    //发送ajax请求
    $.ajax({
        url:'http://localhost:8080/assetst/findById/1',
        success:function (data) {
            var json= eval(data);
            $("#totalAssets").html(json.totalAssets);
            $("#totalInvestment").html(json.totalInvestment);
            $("#totalNetProfit").html(json.totalNetProfit);
            $("#totalRevenue").html(json.totalRevenue);
        }
    });
    
})();
// 5获取实时车位数据
(function () {
    $.ajax({
        url:'http://localhost:8080/parking/getparkinginfo',
        success:function (data) {
            var json= eval(data);
            $("#parkingNumber").html(json.parkingNumber);
            $("#gatesNumber").html(json.gatesNumber);
            $("#parkingSpace").html(json.parkingSpace);
            $("#entryNumber").html(json.entryNumber);
            $("#outNumber").html(json.outNumber);
            $("#vehiclesNumber").html(json.vehiclesNumber);
        }
    });
})();
// 6获取工地概览
(function () {
    $.ajax({
        url:'http://localhost:8080/siteinfo/getsiteinfo',
        success:function (data) {
            var json= eval(data);
            $("#companyNumber").html(json.companyNumber);
            $("#dettledCompanyNumber").html(json.dettledCompanyNumber);
            $("#engagedPeopleNumber").html(json.engagedPeopleNumber);
            $("#constructionAndErea").html(json.constructionAndErea);
            $("#constructionErea").html(json.constructionErea);
            $("#coveredArea").html(json.coveredArea);
        }
    });
})();
//
function getDate(str){
    var date=new Date(str);
    var year=date.getFullYear();
    var month=date.getMonth();
    return year+"-"+month;
}
//7 安防新闻
(function (){
    $.ajax({
        url: "http://localhost:8080/news/getAllAnFangNews",
        success:function (data){
            var jsonArr=eval(data);
            var ul=$("#marquee")
            $.each(jsonArr,function (index,json){
                if (json.type !== "1") return;
                console.log(json);
                var title=json.title;
                var createDate=json.createDate;
                var status=json.status;


                if (status==1){
                    $('<li><div class="title">'+title
                        +'</div><div class="times">'+json.createDate
                        +'</div><div class="status processed">'+'已处理'
                        +'</div></li>').appendTo(ul);
                }else{
                    $('<li><div class="title">'+title
                        +'</div><div class="times">'+json.createDate
                        +'</div><div class="status pending">'+'待处理'
                        +'</div></li>').appendTo(ul);
                }
            })
        }
    })
})();

//8 滚动新闻
(function (){
    $.ajax({
        url: "http://localhost:8080/news/getAllAnFangNews",
        success:function (data){
            var jsonArr=eval(data);
            var ul=$("#marquee1")
            $.each(jsonArr,function (index,json){
                if (json.type === "1") return
                console.log(json);
                var title=json.title;
                var createDate=json.createTime;
                var status=json.status;
                if (status !==1){
                    $('<li><div class="title">'+title
                        +'</div><div class="times">'+json.createTime
                        +'</div><div class="status processed">'+'已处理'
                        +'</div></li>').appendTo(ul);
                }else{
                    $('<li><div class="title">'+title
                        +'</div><div class="times">'+json.createTime
                        +'</div><div class="status pending">'+'待处理'
                        +'</div></li>').appendTo(ul);
                }
            })
        }
    })
})();

//9 获取检测点信息
(function () {
    let marquee0 = document.getElementsByClassName("marquee")[2];
    marquee0.innerHTML = null;

    $.ajax({
        url: 'http://localhost:8080/environment/getEnvironment',
        success: function (data) {
            let _data = JSON.parse(JSON.stringify(data));
            // console.log(_data)

            let liElement;
            for (let i = 0; i < _data.length; i++) {
                liElement = document.createElement("li");
                liElement.innerHTML = `
                        <div> ${_data[i].checkPoint.name}</div>
                        <div>${_data[i].temperature}</div>
                        <div>${_data[i].pm25}</div>
                        <div>${_data[i].humidity}</div>
                        <div>${_data[i].noise}</div>
                        <div>${_data[i].windSpeed}</div>
                `;
                marquee0.append(liElement);
            }

        },
    })
})();

