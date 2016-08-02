$(document).ready(function() {
    var Dust = [],
        PM10 = [],
        PM25 = [],
        Noise = [],
        Temperature = [],
        Humidity = [],
        Dewpoint = [],
        Windspeed = [];
    $.get("./json/json.json", function(data, status) {
        //console.log(data);
        //console.log(JSON.parse(data));
        data = JSON.parse(data);
        Windspeed = [data.Windspeed.Col_1, data.Windspeed.Col_2, data.Windspeed.Col_3,
            data.Windspeed.Col_7, data.Windspeed.Col_8, data.Windspeed.Col_9, data.Windspeed.Col_10,
            data.Windspeed.Col_4, data.Windspeed.Col_5, data.Windspeed.Col_6,
            data.Windspeed.Col_11, data.Windspeed.Col_12, data.Windspeed.Col_13,
            data.Windspeed.Col_14, data.Windspeed.Col_15, data.Windspeed.Col_16,
            data.Windspeed.Col_17, data.Windspeed.Col_18, data.Windspeed.Col_19, data.Windspeed.Col_20,
            data.Windspeed.Col_21, data.Windspeed.Col_22, data.Windspeed.Col_23, data.Windspeed.Col_24
        ];
        Dewpoint = [data.Dewpoint.Col_1, data.Dewpoint.Col_2, data.Dewpoint.Col_3,
            data.Dewpoint.Col_7, data.Dewpoint.Col_8, data.Dewpoint.Col_9, data.Dewpoint.Col_10,
            data.Dewpoint.Col_4, data.Dewpoint.Col_5, data.Dewpoint.Col_6,
            data.Dewpoint.Col_11, data.Dewpoint.Col_12, data.Dewpoint.Col_13,
            data.Dewpoint.Col_14, data.Dewpoint.Col_15, data.Dewpoint.Col_16,
            data.Dewpoint.Col_17, data.Dewpoint.Col_18, data.Dewpoint.Col_19, data.Dewpoint.Col_20,
            data.Dewpoint.Col_21, data.Dewpoint.Col_22, data.Dewpoint.Col_23, data.Dewpoint.Col_24
        ];
        Humidity = [data.Humidity.Col_1, data.Humidity.Col_2, data.Humidity.Col_3,
            data.Humidity.Col_7, data.Humidity.Col_8, data.Humidity.Col_9, data.Humidity.Col_10,
            data.Humidity.Col_4, data.Humidity.Col_5, data.Humidity.Col_6,
            data.Humidity.Col_11, data.Humidity.Col_12, data.Humidity.Col_13,
            data.Humidity.Col_14, data.Humidity.Col_15, data.Humidity.Col_16,
            data.Humidity.Col_17, data.Humidity.Col_18, data.Humidity.Col_19, data.Humidity.Col_20,
            data.Humidity.Col_21, data.Humidity.Col_22, data.Humidity.Col_23, data.Humidity.Col_24
        ];
        Temperature = [data.Temperature.Col_1, data.Temperature.Col_2, data.Temperature.Col_3,
            data.Temperature.Col_7, data.Temperature.Col_8, data.Temperature.Col_9, data.Temperature.Col_10,
            data.Temperature.Col_4, data.Temperature.Col_5, data.Temperature.Col_6,
            data.Temperature.Col_11, data.Temperature.Col_12, data.Temperature.Col_13,
            data.Temperature.Col_14, data.Temperature.Col_15, data.Temperature.Col_16,
            data.Temperature.Col_17, data.Temperature.Col_18, data.Temperature.Col_19, data.Temperature.Col_20,
            data.Temperature.Col_21, data.Temperature.Col_22, data.Temperature.Col_23, data.Temperature.Col_24
        ];
        Dust = [data.Dust.Col_1, data.Dust.Col_2, data.Dust.Col_3,
            data.Dust.Col_4, data.Dust.Col_5, data.Dust.Col_6,
            data.Dust.Col_7, data.Dust.Col_8, data.Dust.Col_9, data.Dust.Col_10,
            data.Dust.Col_11, data.Dust.Col_12, data.Dust.Col_13,
            data.Dust.Col_14, data.Dust.Col_15, data.Dust.Col_16,
            data.Dust.Col_17, data.Dust.Col_18, data.Dust.Col_19, data.Dust.Col_20,
            data.Dust.Col_21, data.Dust.Col_22, data.Dust.Col_23, data.Dust.Col_24
        ];
        PM10 = [data.PM10.Col_1, data.PM10.Col_2, data.PM10.Col_3,
            data.PM10.Col_7, data.PM10.Col_8, data.PM10.Col_9, data.PM10.Col_10,
            data.PM10.Col_4, data.PM10.Col_5, data.PM10.Col_6,
            data.PM10.Col_11, data.PM10.Col_12, data.PM10.Col_13,
            data.PM10.Col_14, data.PM10.Col_15, data.PM10.Col_16,
            data.PM10.Col_17, data.PM10.Col_18, data.PM10.Col_19, data.PM10.Col_20,
            data.PM10.Col_21, data.PM10.Col_22, data.PM10.Col_23, data.PM10.Col_24
        ];
        PM25 = [data.PM25.Col_1, data.PM25.Col_2, data.PM25.Col_3,
            data.PM25.Col_7, data.PM25.Col_8, data.PM25.Col_9, data.PM25.Col_10,
            data.PM25.Col_4, data.PM25.Col_5, data.PM25.Col_6,
            data.PM25.Col_11, data.PM25.Col_12, data.PM25.Col_13,
            data.PM25.Col_14, data.PM25.Col_15, data.PM25.Col_16,
            data.PM25.Col_17, data.PM25.Col_18, data.PM25.Col_19, data.PM25.Col_20,
            data.PM25.Col_21, data.PM25.Col_22, data.PM25.Col_23, data.PM25.Col_24
        ];
        Noise = [data.Noise.Col_1, data.Noise.Col_2, data.Noise.Col_3,
            data.Noise.Col_7, data.Noise.Col_8, data.Noise.Col_9, data.Noise.Col_10,
            data.Noise.Col_4, data.Noise.Col_5, data.Noise.Col_6,
            data.Noise.Col_11, data.Noise.Col_12, data.Noise.Col_13,
            data.Noise.Col_14, data.Noise.Col_15, data.Noise.Col_16,
            data.Noise.Col_17, data.Noise.Col_18, data.Noise.Col_19, data.Noise.Col_20,
            data.Noise.Col_21, data.Noise.Col_22, data.Noise.Col_23, data.Noise.Col_24
        ];
        console.log(Dust);
        var myChart = echarts.init(document.getElementById('main'));
        // 指定图表的配置项和数据
        var markPoint = {
            symbol: 'pin',
            data: [{
                type: 'max',
                name: '最大值'
            }],
            label: {
                normal: {
                    position: 'inside', //字体的位置
                }
            },
        };
        var markLine = {
            data: [{
                name: '平均值',
                type: 'average',
            }, ]
        };
        var option = {
            //backgroundColor: '#CCC',
            color: [
                '#dd4444', '#fec42c', '#4E3CEA'
            ],
            title: {
                text: '扬尘数据图'
            },
            tooltip: {
                padding: 10,
                backgroundColor: '#555',
                borderColor: '#777',
                borderWidth: 1,
                trigger: 'axis'
            },
            legend: {
                data: ['扬尘值', 'PM10', 'PM25', '噪音值', '温度值', '湿度值', '露点值', '风速值'],
                textStyle: {
                    color: '#000',
                    fontSize: 16
                }
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                    dataView: {
                        readOnly: true,
                    },
                    magicType: {
                        type: ['line', 'bar']
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                name: '时间',
                nameGap: 16,
                nameTextStyle: {
                    color: '#000',
                    fontSize: 14
                },
                type: 'category',
                boundaryGap: true,
                data: ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点', '23点']
            }],
            yAxis: [{
                    splitLine: {
                        show: false
                    },
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} ug/m3'
                    }
                },

            ],

            series: [{
                name: '扬尘值',
                type: 'line',
                data: Dust,
                //connectNulls:true,
                //sampling:'average',
                smooth: true,
                markPoint: markPoint,
                markLine: markLine,
            }, {
                name: 'PM10',
                type: 'line',
                data: PM10,
                smooth: true,
                markPoint: markPoint,
                markLine: markLine,
            }, {
                name: 'PM25',
                type: 'line',
                data: PM25,
                smooth: true,
                markPoint: markPoint,
                markLine: markLine,
            }, ]
        };
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);

        var myChart1 = echarts.init(document.getElementById('Temperature'));
        var option1 = {
            title: {
                text: '温度值'
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                feature: {
                    saveAsImage: {},
                    dataView: {
                        readOnly: true,
                    },
                    magicType: {
                        type: ['line', 'bar']
                    }
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                boundaryGap: true,
                data: ['0点', '1点', '2点', '3点', '4点', '5点', '6点', '7点', '8点', '9点', '10点', '11点', '12点', '13点', '14点', '15点', '16点', '17点', '18点', '19点', '20点', '21点', '22点', '23点']
            }],
            yAxis: [{
                    type: 'value',
                    axisLabel: {
                        formatter: '{value} ℃'
                    }
                },

            ],

            series: [{
                name: '温度值',
                type: 'line',
                data: Temperature,
                //connectNulls:true,
                //sampling:'average',
                smooth: true,
                markPoint: markPoint,
                markLine: markLine,
            }, ]
        };
        myChart1.setOption(option1);
    });



});
