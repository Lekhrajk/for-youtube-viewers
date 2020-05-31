<template>
  <div class="container">
    <div class="row mt-5">
      <div class="col-12 col-md-12 d-flex">
        <h1 class="">Deep Analysis</h1>
      </div>
    </div>
    <div class="row mt-5" v-if="arrDaily.length > 0">
      <div class="col">
        <h2 class="text-center">Daily Analysis</h2>
        <Mixedchart
          :chartData="arrDaily"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label=""
        />
      </div>
    </div>
    <div class="row mt-5" v-if="arrPositive.length > 0">
      <div class="col-md-6 col-12 mx-auto">
        <h2 class="text-center">Total Confirmed</h2>
        <Linechart
          :chartData="arrPositive"
          :options="chartOptions"
          :chartColors="positiveChartColors"
          label="Confirmed Cases"
        />
      </div>
      <div class="col-md-6 col-12 mx-auto">
        <h2 class="text-center">Total Active</h2>
        <Linechart
          :chartData="arrActive"
          :options="chartOptions"
          :chartColors="activeColors"
          label="Active Cases"
        />
      </div>
    </div>


    <div class="row mt-5" v-if="arrRecovered.length > 0">
      <div class="col-md-6 col-12 mx-auto">
        <h2 class="text-center">Total Recovered</h2>
        <Linechart
          :chartData="arrRecovered"
          :options="chartOptions"
          :chartColors="recoveredColors"
          label="Recovered Cases"
        />
      </div>
      <div class="col-md-6 col-12 mx-auto">
        <h2 class="text-center">Total Deaths</h2>
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
import moment from 'moment';
import Linechart from "./Linechart.vue";
import Mixedchart from '@/components/Mixedchart';
export default {
  data() {
    return {
      countrydata:{},
      arrPositive: [],
      arrDaily:[],
      positiveChartColors: {
        borderColor: "#0000ff",
        pointBorderColor: "#0000ff",
        pointBackgroundColor: "#007bff",
        backgroundColor: "#007bff"
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
        borderColor: "#000",
        pointBorderColor: "#000",
        pointBackgroundColor: "#fff",
        backgroundColor: "#212F3D"
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
        maintainAspectRatio: false
      }
    };
  },
  components:{
      Linechart,
      Mixedchart
  },

  mounted(){
    this.onChange(this.countryname);
  },
 methods:{
    onChange(event) {
      this.countryname = event;
      const token = 'https://corona-api.com/timeline';
               axios({
                    method: 'get',
                    url: token,
                })
                .then((response) => {
                    this.countrydata = response.data.data;
                    this.countrydata.forEach(d => {
                    const date = moment(d.date, "YYYYMMDD").format("MM/DD");
                        const {
                              confirmed,
                              recovered,
                              deaths,
                              new_confirmed,
                              new_recovered,
                              new_deaths,
                            } = d;
                    this.arrPositive.push({ date, total: confirmed });
                    this.arrRecovered.push({ date, total: recovered });
                    this.arrDeaths.push({ date, total: deaths });
                    var sum =0;
                    this.arrActive.push({date,total:sum+=d.confirmed-d.recovered-d.deaths});
                    this.arrDaily.push({ date, active:  new_confirmed,recover: new_recovered,deaths: new_deaths });
                      
                    });
                })
                .catch((error) => {
                    this.errors = error;
                })
    
    }
 }
}
</script>