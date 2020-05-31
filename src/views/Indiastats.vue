<template>
  <div class="container">
    <div class="row my-5">
      <div class="col">
        <h1>Deep Analysis</h1>
      </div>
    </div>
    <div class="row" v-if="arrDaily.length > 0">
      <div class="col">
        <h2 class="text-center">Daily Analysis</h2>
        <MixedMap
          :chartData="arrDaily"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label=""
        />
      </div>
    </div>
    <!-- dailywise analysis -->
    <div class="row" v-if="arrPositive.length > 0">
      <div class="col-md-6 col-12 mx-auto mt-5">
        <h2 class="text-center">Total Positive</h2>
        <Linechart
          :chartData="arrPositive"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Positive/Active Cases"
        />
      </div>
      <div class="col-md-6 col-12 mx-auto mt-5">
        <h2 class="text-center">Total Active</h2>
        <Linechart
          :chartData="arrActive"
          :options="chartOptions"
          :chartColors="activeColors"
          label="Active Cases"
        />
      </div>
    </div>

    <div class="row mb-5" v-if="arrRecovered.length > 0">
      <div class="col-md-6 col-12 mx-auto mt-5">
        <h2 class="text-center">Total Recovered</h2>
        <Linechart
          :chartData="arrRecovered"
          :options="chartOptions"
          :chartColors="recoveredColors"
          label="Recovered Cases"
        />
      </div>
      <div class="col-md-6 col-12 mx-auto mt-5">
        <h2 class="text-center"> Total Deaths</h2>
        <Linechart
          v-if="arrDeaths.length > 0"
          :chartData="arrDeaths"
          :options="chartOptions"
          :chartColors="deathColors"
          label="Deaths Cases"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Linechart from "@/components/Linechart2.vue";
import MixedMap from '@/components/MixedMap';
export default {
  data() {
    return {
      countrydata:{},
      arrDaily:[],
      arrPositive: [],
      positiveChartColors: {
        borderColor: "#0000ff",
        pointBorderColor: "#0000ff",
        pointBackgroundColor: "#007bff",
        backgroundColor: "#007bff",
        pointHoverBackgroundColor:"#fff",
      }, 
      arrRecovered: [],
      recoveredColors: {
        borderColor: "#196F3D",
        pointBorderColor: "#196F3D",
        pointBackgroundColor: "#28B463",
        backgroundColor: "#28B463"
      },
      arrDeaths: [],
      deathColors: {
        borderColor: "#E06D06",
        pointBorderColor: "#E06D06",
        pointBackgroundColor: "#603A34 ",
        backgroundColor: "#603A34 "
      },
       arrActive: [],
      activeColors: {
        borderColor: "#D35400",
        pointBorderColor: "#D35400",
        pointBackgroundColor: "#E59866",
        backgroundColor: "#E59866 "
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      }
    };
  },
  components:{
      Linechart,
      MixedMap
  },
  created() {

    const url = 'https://api.covid19india.org/data.json';
            axios({
                    method: 'get',
                    url: url,
                })
                .then((response) => {
                    this.countrydata = response.data.cases_time_series;
                    this.countrydata.forEach(d => {
                    const date = d.date;
                        const {
                              totalconfirmed,
                              totalrecovered,
                              totaldeceased,
                              dailyconfirmed,
                              dailydeceased,
                              dailyrecovered

                            } = d;
                    this.arrPositive.push({ date, total: totalconfirmed });
                    this.arrRecovered.push({ date, total: totalrecovered });
                    this.arrDeaths.push({ date, total:  totaldeceased });
                    var sum =0;
                    this.arrActive.push({date,total:sum+=d.totalconfirmed-d.totalrecovered-d.totaldeceased});
                    this.arrDaily.push({ date, active:  dailyconfirmed,recover: dailyrecovered,deaths: dailydeceased });
                      
                    });
                    this.receivedData = true;
                })
                .catch((error) => {
                    this.errors = error;
                })  
 }
}
</script>