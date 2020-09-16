import React from 'react';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/bar';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import 'echarts/lib/component/legend';
import 'echarts/lib/component/toolbox';
import 'echarts/lib/component/markPoint';
import 'echarts/lib/component/markLine';


interface IProps{
    
}
interface IState{
    xdata : string[],
    ydata : any
}

class LineEcharts extends React.Component<IProps, IState> {
    constructor(props: IProps){
        super(props)
        this.state = {
            xdata: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            ydata: {
                ydata1:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
                ydata2:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            }
        }
    }
    componentDidMount() {
    // 初始化
    // var myChart = echarts.init();
    // 绘制图表
    /*
    myChart.setOption({
        title: { text: '某地区蒸发量和降水量' },
        tooltip : {
          trigger: 'axis'
      },
      legend: {
          data:['蒸发量','降水量']
      },
      toolbox: {
          show : true,
          feature : {
              dataView : {show: true, readOnly: false},
              magicType : {show: true, type: ['line', 'bar']},
              restore : {show: true},
              saveAsImage : {
                show: true,
                type: 'jpg'
              }
          }
      },
        xAxis : [
          {
              type : 'category',
              data : this.state.xdata
          }
      ],
      yAxis : [
          {
              type : 'value'
          }
      ],
        series : [
          {
              name:'蒸发量',
              type:'bar',
              data: this.state.ydata.ydata1,
              markPoint : {
                  data : [
                      {type : 'max', name: '最大值'},
                      {type : 'min', name: '最小值'}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name: '平均值'}
                  ]
              }
          },
          {
              name:'降水量',
              type:'bar',
              data: this.state.ydata.ydata2,
              markPoint : {
                  data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                  ]
              },
              markLine : {
                  data : [
                      {type : 'average', name : '平均值'}
                  ]
              }
          },
      ]
    });
    */
}
render() {
    return (
        <div id="main" style={{ width: '100%', height: 500 }}></div>
    );
}
}

export default LineEcharts;
