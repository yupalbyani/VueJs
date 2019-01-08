// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'


// line chart component

Vue.component('linechart', {
  extends: VueChartJs.Line,
  props: ['dataSets','labels'],
  watch: {
    dataSets(newvalue,oldvalue){
      if(newvalue.length==0){
        this.emptymap()
      }else{
        this.demoMethod()
        this.$emit('ShowIndex',true)
      }
    },
    labels(newvalue,oldvalue){
      if(newvalue.length==0){
        this.emptymap()
      }else{
        this.$emit('ShowIndex',true)

        this.demoMethod()
      }
    }
  },
  mounted () {
  },
  created() {
  },
  methods: {
    xxxxx: function(){
      alert("sddd")
    },
    emptymap : function(){
      this.renderChart(
        {
          labels: "",
          datasets: [
            
          ]
       },
        {
          responsive: true,
          maintainAspectRatio: false
        }

      )
    },

    demoMethod: function()  {
      this.renderChart(
        {
          labels: this.labels,
          datasets: [
            {
              label:this.dataSets[0]['label'],
              data:this.dataSets[0]['data'],
              borderWidth:2,
              borderColor: 'red'
            },
            {
                label:this.dataSets[1]['label'],
                data:this.dataSets[1]['data'],
                borderWidth:2,
                borderColor: 'orange'
            },
            {
                label:this.dataSets[2]['label'],
                data:this.dataSets[2]['data'],
                borderWidth:2,
                borderColor: 'yellow'
            },
            {
                label:this.dataSets[3]['label'],
                data:this.dataSets[3]['data'],
                borderWidth:2,
                borderColor: 'green'
            }
          ]
       },
        {
          responsive: true,
          maintainAspectRatio: false
        }
      )
    }
  }
  
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render:h=>h(App)
  // router,
  // components: { App },
  // template: '<App/>'
})
