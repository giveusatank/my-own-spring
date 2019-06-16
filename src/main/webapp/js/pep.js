var mychart = echarts.init(document.getElementById("box"));
var jrssdtsjdata = [['0', 237], ['1', 213], ['2', 235], ['3', 183], ['4', 317], ['5', 137], ['6', 153], ['7', 133], ['8', 134], ['9', 314], ['10', 134], ['11', 214], ['12', 254], ['13', 184], ['14', 147], ['15', 174], ['16', 154], ['17', 143], ['18', 144], ['19', 214], ['20', 214], ['21', 194], ['22', 184], ['23', 234]];
var jrssdtsjdata2 = [['0', 37], ['1', 23], ['2', 35], ['3', 13], ['4', 17], ['5', 13], ['6', 3], ['7', 3], ['8', 14], ['9', 34], ['10', 13], ['11', 4], ['12', 24], ['13', 14], ['14', 7], ['15', 14], ['16', 14], ['17', 13], ['18', 14], ['19', 14], ['20', 14], ['21', 14], ['22', 18], ['23', 24]];
var jrssdtsjOptions = {
    color: ['#32b7e9', '#d6ab2f'],
    title: {
        left: '20',
        text: '今日实时动态数据'
    },
    grid: {
        left: '5%',
        right: '5%',
        top: 70,
        bottom: '5%',
        containLabel: true
    },
    legend: {
        right: '70'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross'
        }
    },
    xAxis: {
        type: 'category',
        // boundaryGap: [0, 0],
        axisPointer: {
            label: {
                show: true
            },
            handle: {
                show: false,
                color: '#004E52'
            }
        },
        splitLine: {
            show: false
        }
    },
    yAxis: {
        type: 'value',
        axisTick: {
            inside: true
        },
        splitLine: {
            show: true,
            color: '#dbe8db'
        },
        axisLabel: {
            inside: true,
            formatter: '{value}\n'
        },
        z: 10
    },
    dataZoom: [{
        type: 'inside',
        throttle: 30
    }],
    series: [{
        name: '实时用户',
        type: 'line',
        smooth: true,
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#32b7e9'
                }, {
                    offset: 1,
                    color: '#fff'
                }])
            }
        },
        data: jrssdtsjdata
    }, {
        name: '事件次数',
        type: 'line',
        smooth: true,
        stack: 'a',
        symbol: 'circle',
        symbolSize: 5,
        sampling: 'average',
        itemStyle: {
            normal: {
                color: '#d68262'
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: '#d6ab2f'
                }, {
                    offset: 1,
                    color: '#fff'
                }])
            }
        },
        data: jrssdtsjdata2
    }]
};

mychart.setOption(jrssdtsjOptions)