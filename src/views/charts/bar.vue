<template>
  <div class="bar">
    <chart
      :options="option"
      :auto-resize="true"
    ></chart>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      option: {},
    }
  },
  mounted() {
    var xAxisData = [];
    var data1 = [];
    var data2 = [];
    for (var i = 0; i < 100; i++) {
      xAxisData.push('类目' + i);
      data1.push((Math.sin(i / 5) * (i / 5 - 10) + i / 6) * 5);
      data2.push((Math.cos(i / 5) * (i / 5 - 10) + i / 6) * 5);
    }
    this.option = {
      title: {
        text: '柱状图动画延迟'
      },
      legend: {
        data: ['bar', 'bar2'],
        align: 'left'
      },
      toolbox: {
        // y: 'bottom',
        feature: {
          magicType: {
            type: ['stack', 'tiled']
          },
          dataView: {},
          saveAsImage: {
            pixelRatio: 2
          }
        }
      },
      tooltip: {},
      xAxis: {
        data: xAxisData,
        silent: false,
        splitLine: {
          show: false
        }
      },
      yAxis: {
      },
      series: [{
        name: 'bar',
        type: 'bar',
        data: data1,
        animationDelay: function (idx) {
          return idx * 10;
        }
      }, {
        name: 'bar2',
        type: 'bar',
        data: data2,
        animationDelay: function (idx) {
          return idx * 10 + 100;
        }
      }],
      animationEasing: 'elasticOut',
      animationDelayUpdate: function (idx) {
        return idx * 5;
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.WH {
  width 100%
  height 100%
}

.bar {
  @extend .WH

  .echarts {
    width 80%
    height 80%
  }
}
</style>
