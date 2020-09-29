import React, { useEffect, useState } from 'react';
import Chart from '../core'

const chartEmpty = {
    title: {
        text: '基础雷达图'
    },
    tooltip: {},
    legend: {
        data: ['预算分配（Allocated Budget）', '实际开销（Actual Spending）']
    },
    radar: {
        // shape: 'circle',
        name: {
            textStyle: {
                color: '#fff',
                backgroundColor: '#999',
                borderRadius: 3,
                padding: [3, 5]
            }
        },
        indicator: [
            { name: '销售（sales）', max: 6500},
            { name: '管理（Administration）', max: 16000},
            { name: '信息技术（Information Techology）', max: 30000},
            { name: '客服（Customer Support）', max: 38000},
            { name: '研发（Development）', max: 52000},
            { name: '市场（Marketing）', max: 25000}
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        data: [
            {
                value: [4300, 10000, 28000, 35000, 50000, 19000],
                name: '预算分配（Allocated Budget）'
            },
            {
                value: [5000, 14000, 28000, 31000, 42000, 21000],
                name: '实际开销（Actual Spending）'
            }
        ]
    }]
};

export const RaderEcharts = ():React.ReactElement => {
    let [raderData, setRaderData] = useState(null);
    // 防护监控数据 实例
    let [chart1] = [null];

    function updateChart(): void{
        let opts: null;
        opts = JSON.parse(JSON.stringify(chartEmpty));
        setRaderData(opts);
    }

    // 获取图表实例，添加自定义图表事件
    useEffect((): void => {
        console.log("chart1", chart1);
        updateChart();
    }, [chart1]);

    return (
        <div>
            <Chart 
                key="raderEcharts1"
                className="raderEcharts1"
                option={raderData}
                onRender={(e): void => {chart1 = e}}
                style={{width: '100%', height: '400px'}}
                />
        </div>
    );
}
