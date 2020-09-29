import React from 'react';
import Chart from '../core'

const chartEmpty = {
    title: {
        text: '折线图堆叠'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
    },
    yAxis: {
        type: 'value'
    },
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

export const LineEcharts = ():React.ReactElement => {
    let [chart1Data, setChart1Data] = React.useState(null);

    // 防护监控数据 实例
    let [chart1] = [null];

    function updateChart(): void{
        let opts: null;
        opts = JSON.parse(JSON.stringify(chartEmpty));
        setChart1Data(opts);
    }

    // 获取图表实例，添加自定义图表事件
    React.useEffect((): void => {
        console.log("chart1", chart1);
        updateChart();
    }, [chart1]);

    return (
        <div>
            <Chart 
                key="chart1"
                className="chart1"
                option={chart1Data}
                onRender={(e): void => {chart1 = e}}
                style={{width: '100%', height: '400px'}}
                />
        </div>
    );
}


