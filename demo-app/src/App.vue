<template>
  <div>
    <h1 class="text-center">{{title}}</h1>
    <div class="fileUpload">
        <div class="heading">
            <h3>Upload</h3>
        </div><!--heading-->
        <div class="Upload-file-content">
            <input type="file" ref="fileInput"  @change="loadTextFromFile">
            <div class="float-right span-browse">Browse</div>
        </div><!--Upload-file-content-->
        <button v-if = "getChartBtnDisplay" class="btn btn-sm btn-primary getChartBtn" @click="ChartData">Get Line Chart</button>
        <button id="clear" class="btn btn-sm btn-primary" v-if="clearBtnDisplay" @click="reset">Clear</button>
    </div><!--fileUpload-->
    <div class="chartBlock">
       <linechart v-bind:dataSets ="dataSets" v-bind:labels="labels"></linechart>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    
  },
  data () {
    return {
      title:"Line Chart",
      uploadfiledata:"",
      initialArr : [],
      uniqueArray:[],
      labels:[],
      dataSets : [],
      collection:{},
      getChartBtnDisplay : false,
      clearBtnDisplay : false,
    }
  },// end of data
  methods: {
      loadTextFromFile (ev) {
          const file = ev.target.files[0];
          const reader = new FileReader();
          reader.onload = e => {
            this.uploadfiledata = e.target.result;
          };
          reader.readAsText(file);
          this.getChartBtnDisplay = true;
          this.clearBtnDisplay = true
      }, // end of loadTextFromFile method
      reset(){
        const input = this.$refs.fileInput
        input.type = 'text'
        input.type = 'file'
        this.clearBtnDisplay = false
        this.getChartBtnDisplay = false
        this.labels = [],
        this.dataSets = [],
        $(".chartBlock").hide();
      },// reset the input field

       ChartData(){
          // displaying the chart block 
          $(".chartBlock").show();
          //creating the json object related to the chart
          if(this.uploadfiledata == ''){
              alert("Please Upload The File")
          }else{

              this.uploadfiledata.split("\n").filter((data) => {
                  if(data!=""){
                      this.initialArr.push(data)
                  }
              })
              
              this.initialArr.forEach((val,index)=>{
                  let splitVal = val.split(",");
                  let Obj = {};
                  let dataarr = [] 
                  splitVal.forEach((value,index)=>{
                      if(index != 0){
                          let splitBySlash = value.split("|");
                          if (this.labels.includes(splitBySlash[0]) === false) {
                              this.labels.push(splitBySlash[0])
                          }
                          dataarr.push(splitBySlash[1])
                      }else{
                          Obj["label"] = value;
                      }
                  })
                  Obj["data"] = dataarr;
                  Obj["background-color"] = "green";
                  this.dataSets.push(Obj)
              })
          }// end of if condition for uploadFile data
      },// end of chart data
  },// end of methods
}
</script>

<style>
*{margin:0px;padding:0px}
.fileUpload{margin: 0 auto;width:400px;margin-bottom:50px}
.heading{background-color:#000;padding:10px;}
.heading h3{color:#fff;font-size:18px;margin-bottom:0px!important}
.Upload-file-content{padding:10px 10px 11px;border:1px solid #000;float:left;width:100%;margin-bottom:20px;}
h1{color:#000;font-size:24px;}
.getChartBtn{float:right;}
linechart{width:500px;height:400px}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.chartBlock{float:left;width:100%;margin-top:20px;}
</style>
