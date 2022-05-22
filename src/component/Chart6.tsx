import React, {useEffect, useRef} from "react";
import * as echarts from "echarts";
import {px} from "../shared/help";

export const Chart6 = () => {
    const divRef = useRef(null);
    const colors = ["#856BED", "#F46064", "#F38E1C", "#1CDB7C", "#33A4FA"];
    useEffect(() => {
        const myChart = echarts.init(divRef.current);
        myChart.setOption(
            {
                color: colors,
                xAxis: {show: false},
                yAxis: {show: false},
                legend: {
                    show: true,
                    textStyle: {
                        fontSize: px(12),
                        color: "#fff"
                    },
                    top:"center"
                },
                series: [
                    {
                        name: "访问来源",
                        type: "pie",
                        radius: ["75%", "90%"],
                        avoidLabelOverlap: false,
                        label: {
                            show: true, position: "inside", textStyle: {color: "white", fontSize: px(20)},
                            formatter(options) {
                                return (options.value * 100).toFixed(0) + "%";
                            }
                        },
                        labelLine: {show: false},
                        itemStyle: {
                            borderColor: "#0F113A",
                            borderWidth: px(4)
                        },
                        data: [
                            {value: 0.07, name: "10-20"},
                            {value: 0.10, name: "20-30"},
                            {value: 0.23, name: "30-40"},
                            {value: 0.28, name: "40-50"},
                            {value: 0.32, name: "50-60"},
                        ]
                    }
                ]
            }
        );
    }, []);
    return (
        <div ref={divRef} className="chart">6</div>
    );
};