"use strict";

var mark = null;
var temp = [];
var tempArray = [];
var subjectData = [];
var njData = [];
function initTotalUVData() {
    $.ajax({
        type : 'POST',
        async : false,
        dataType : 'text',
        url : '/ajax/getTotalUV',
        success : function (res) {
            //alert(res)
            $("#ckyhs").html(res)
        }
    })
}

function initTotalPVData() {
    $.ajax({
        type : 'POST',
        async : false,
        dataType : 'text',
        url : '/ajax/getTotalPV',
        success : function (res) {
            //alert(res)
            $("#ckcs").html(res)
        }
    })
}

function initSubjectAnalysis() {

    $.ajax({
        type : 'POST',
        async : false,
        dataType : 'json',
        url : '/ajax/getTotalXKFX',
        success : function(data1){

            var datas = eval(data1)

                $.each(datas,function(index,value){

                    var kc = value["kc"];
                    var uv = value["uv"];
                    tempArray.push(kc,uv);
                    temp.push(tempArray);
                    tempArray = [];
                })

            subjectData = temp;
            temp = [];
            tempArray = [];
        }
    })
}

function initNJAnalysis(){

    $.ajax({
        type : 'POST',
        async : false,
        dataType : 'json',
        url : '/ajax/getTotalNJFX',
        success : function(data1){

            var datas = eval(data1)

            $.each(datas,function(index,value){

                var nj = value["nj"];
                var uv = value["uv"];
                tempArray.push(nj,uv);
                temp.push(tempArray);
                tempArray = [];
            })

            njData = temp;
            temp = [];
            tempArray = [];
        }
    })
}

(function () {
    initTotalUVData();

    initTotalPVData();

    initSubjectAnalysis();

    initNJAnalysis();

    var dateList = subjectData.map(function (item) {
        return item[0];
    });
    var valueList = subjectData.map(function (item) {
        return item[1];
    });
    var splitLineColor = 'rgba(0, 0, 0, .1)';
    var currSubject = '语文'; // 学科分析

    var subAnalysisCharts = echarts.init(document.getElementById('subject-analysis'));

    var subAnalysisOptions = {
        tooltip: {
            show: 'true',
            trigger: 'item',
            padding: [8, 10],
            // 内边距
            formatter: function formatter(a) {
                return '23:13:16<br>实时用户: 45<br>实时新增用户:55<br>教材使用次数:' + a.value;
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            top: 30,
            bottom: '18%'
        },
        xAxis: [{
            type: 'category',
            axisTick: {
                show: false
            },
            axisLine: {
                show: true,
                lineStyle: {
                    color: '#999'
                }
            },
            axisLabel: {
                inside: false,
                textStyle: {
                    color: '#999',
                    fontWeight: 'normal',
                    fontSize: '12'
                }
            },
            data: dateList
        }],
        yAxis: {
            type: 'value',
            show: true,
            // max: maxPlanCourseCnt,
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: splitLineColor
                }
            },
            axisLabel: {
                textStyle: {
                    color: '#999',
                    // textColor,
                    fontWeight: 'normal',
                    fontSize: '12'
                },
                formatter: '{value}'
            }
        },
        series: [{
            name: '',
            type: 'bar',
            barMaxWidth: 50,
            itemStyle: {
                normal: {
                    show: true,
                    color: function color(param) {
                        var colorStr = param.name === currSubject ? '#1f8380' : '#52bbb7';
                        return colorStr;
                    },
                    barBorderRadius: 5,
                    borderWidth: 0
                }
            },
            data: valueList
        }]
    };
    subAnalysisCharts.setOption(subAnalysisOptions); // top10



    var top10Charts = echarts.init(document.getElementById('top10-charts'));
    var category = ['一年级上册', '一年级下册', '二年级上册', '二年级下册', '三年级上册', '三年级下册', '四年级上册'];
    var barData = [3100, 2142, 1218, 581, 431, 383, 163];
    var top10ChartsOptions = {
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: ''
            },
            formatter: function formatter(obj) {
                // console.log(obj);
                return '23:13:16<br>实时用户: 45<br>实时新增用户:55<br>教材使用次数:' + (obj[0] && obj[0].value || '');
            }
        },
        grid: {
            left: '5%',
            right: '5%',
            top: 30,
            bottom: '15%',
            containLabel: true
        },
        barMaxWidth: 22,
        xAxis: {
            type: 'value',
            splitLine: {
                show: true,
                lineStyle: {
                    color: splitLineColor,
                    width: 1
                }
            },
            axisLine: {
                show: false,
                // splitLine:{show: true, color: '#79fed0'},//去除网格线
                axisLine: {
                    lineStyle: {
                        color: '#79fed0',
                        width: 1
                    }
                },
                textStyle: {
                    color: '#79fed0',
                    fontWeight: 'normal',
                    fontSize: '12'
                },
                lineStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                show: false
            }
        },
        yAxis: {
            type: 'category',
            data: category,
            splitLine: {
                show: false
            },
            textStyle: {
                color: '#999',
                fontWeight: 'normal',
                fontSize: '12'
            },
            axisLine: {
                show: false,
                lineStyle: {
                    color: '#999'
                }
            },
            axisTick: {
                show: false
            },
            offset: 10
        },
        series: [{
            name: '数量',
            type: 'bar',
            data: barData,
            itemStyle: {
                emphasis: {
                    shadowBlur: 4,
                    shadowColor: '#51d7ff',
                    borderWidth: 1,
                    borderColor: '#fff'
                },
                normal: {
                    barBorderRadius: 7,
                    color: '#51d7ff'
                }
            }
        }]
    };
    top10Charts.setOption(top10ChartsOptions);




    var userDistributionCharts = echarts.init(document.getElementById('user-distribution-charts'));
    /*var userDistributionData = [{
        value: 75,
        name: '一年级'
    }, {
        value: 150,
        name: '二年级'
    }, {
        value: 145,
        name: '三年级'
    }, {
        value: 425,
        name: '四年级'
    }, {
        value: 345,
        name: '五年级'
    }, {
        value: 545,
        name: '六年级'
    }, {
        value: 415,
        name: '七年级'
    },
    ];*/

    var njDataList = njData.map(function (item) {
        return item[0];
    });
    var njValueList = njData.map(function (item) {
        return item[1];
    });

    var color = ['#f5a31b', '#00b1ec', '#999',
        '#6666cc','#66cc99','#996633','#99cc00','#3366cc'];
    var outDataStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        }
    };
    var innerDataStyle = {
        normal: {
            label: {
                show: true
            },
            labelLine: {
                show: true
            },
            shadowBlur: 40,
            shadowColor: 'rgba(40, 40, 40, 0.5)'
        }
    };
    var placeHolderStyle = {
        normal: {
            label: {
                show: false
            },
            labelLine: {
                show: false
            }
        }
    };
    var userDistributionChartsOptions = {
        tooltip: {
            show: true,
            formatter: '{b}<br>{c} ({d}%)'
        },
        legend: {
            show: true,
            orient: 'vertical',
            right: 10,
            data: njDataList
        },
        grid: {
            left: '0',
            right: '25%',
            top: 30,
            bottom: '18%',
            containLabel: true
        },
        series: [{
            name: 'Line 1',
            type: 'pie',
            clockWise: false,
            center: ['45%', '50%'],
            radius: ['60%', '70%'],
            itemStyle: {
                normal: innerDataStyle
            },
            hoverAnimation: true,
            label: {
                normal: {
                    formatter: '{b}\n{d}%'
                }
            },
            color: color,
            data: njValueList

        }, {
            name: 'Line 2',
            type: 'pie',
            animation: false,
            clockWise: false,
            center: ['45%', '50%'],
            radius: ['78%', '79%'],
            itemStyle: outDataStyle,
            hoverAnimation: false,
            legendHoverLink: false,
            trigger: false,
            tooltip: {
                show: false
            },
            color: ['rgba(0, 0, 0, .1)'],
            labelLine: {
                normal: {
                    show: false
                }
            },
            data: [{
                value: 100,
                name: 'xxx'
            }, {
                value: 0,
                name: 'invisible'
            }]
        }]
    };
    userDistributionCharts.setOption(userDistributionChartsOptions); // events



    var bindEvents = function bindEvents() {
        // 一级选项卡点击事件
        $('.box-a').on('click', function (e) {
            $('.box-a').removeClass('selected');
            $(this).addClass('selected');

            mark=$(this).attr("id")
            alert(mark)
            refreshAll();
        }); // 二级选项卡(学科分析)点击事件
        // 处理点击事件并且跳转到相应的百度搜索页面

        subAnalysisCharts.on('click', function (params) {
            console.log('点击事件:' + params.name);

            if (currSubject == params.name) {
                // 点击当前科目, 查询全部内容
                currSubject = '';
            } else {
                currSubject = params.name;
            } // 刷新柱子状态

            changeSubject(currSubject)

            //subAnalysisCharts.setOption(subAnalysisOptions);
            refreshBySubjects(currSubject);
        }); // resize

        function resize() {
            subAnalysisCharts.resize();
            top10Charts.resize();
            userDistributionCharts.resize();
        }

        $('.sidebar-toggle').on('click', function () {
            setTimeout(function () {
                resize();
            }, 400);
        });
        $(window).resize(function () {
            var timer = null;

            if (timer) {
                clearTimeout(timer);
            }

            timer = setTimeout(function () {
                resize();
            }, 200);
        });
    };

    function refreshAll() {

        alert(mark)

        var dateList = data.map(function (item) {
            return item[0];
        });
        var valueList = data.map(function (item) {
            return item[1];
        });
        if(mark == 'btn1'){
            // 分别刷新所有charts
            // chart1
            data = [{
                name: '大数据',
                value: 888
            }, {
                name: '前端',
                value: 999
            }, {
                name: '运维',
                value: 222
            }, {
                name: '人力资源',
                value: 111,
                selected: true
            }, {
                name: '行政',
                value: 222
            }, {
                name: '保洁',
                value: 444
            }, {
                name: '门卫',
                value: 555
            }];
        }else{
            data = [{
                name: 'Spark',
                value: 888
            }, {
                name: 'Flink',
                value: 999
            }, {
                name: 'Hadoop',
                value: 222
            }, {
                name: 'Hive',
                value: 111,
                selected: true
            }, {
                name: 'Redis',
                value: 222
            }, {
                name: 'PostgreSql',
                value: 444
            }, {
                name: 'HBase',
                value: 555
            }];
        }

        subAnalysisOptions.series[0].data = subAnalysisRes;
        subAnalysisOptions.xAxis[0].data = subAnalysisRes.map(function (item) {return item.name;});
        subAnalysisCharts.setOption(subAnalysisOptions); // charts2 ...

        //refreshBySubjects();
    }

    function refreshBySubjects(subject) {

        var number = mark
        alert(number)
        var sub = null;
        if(subject == null){
            sub = '语文';
        }else {
            sub = subject;
        }
        alert(sub)
        barData = null;
        // top10
        if(sub == '语文'){
            barData = [777, 777, 77, 888, 888, 999, 99];
        }else{
            barData = [222, 333, 11, 38, 410,111, 999];
        }
        top10ChartsOptions.series[0].data = barData;
        top10Charts.setOption(top10ChartsOptions); // 用户分布
        userDistributionData = [{
            value: 15,
            name: '内嵌资源'
        }, {
            value: 35,
            name: '云上资源'
        }, {
            value: 65,
            name: '其他资源'
        }];
        userDistributionChartsOptions.series[0].data = userDistributionData;
        userDistributionCharts.setOption(userDistributionChartsOptions);
    }

    bindEvents();
})()