<template>
    <div id="chartsTest" ref="chartsTest">

    </div>
</template>

<script>
    export default {
        name: 'chartsTest',
        data () {
            return {
                msg: 'Welcome to Your Vue.js App'
            }
        },
        mounted(){
            this.drawLine();
        },
        methods: {
            drawLine(){
                var echarts = require('echarts');
                // 基于准备好的dom，初始化echarts实例
                let myChart = echarts.init(this.$refs.chartsTest)
                // 绘制图表
                myChart.setOption({
                    title: { text: '在Vue中使用echarts' },
                    tooltip: {},
                    xAxis: {
                        data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
                    },
                    yAxis: {},
                    series: [{
                        name: '销量',
                        type: 'bar',
                        data: [5, 20, 36, 10, 10, 20]
                    }]
                });
            }
        }
    }
</script>

<style scoped>

    #chartsTest{
        width: 300px;
        height: 300px;
}

</style>