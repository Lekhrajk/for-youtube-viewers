<template>
    <div class="home my-4">
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-sm-6 col-12 mx-auto card shadow-lg bg-blue text-white border-0">
                        <h1 class="title text-white mt-4">INDIA COVID19 LIVE REPORTS</h1>
                        <div class="text-center my-auto" v-if="isActive" data-aos="fade-up" data-aos-duration="2000">
                            <div class="display-4 text-sm ">
                                <h1 class="text-sm">Total Samples Tested </h1>
                                {{ totalTests[0].totalsamplestested }} <i class="fas fa-flask"></i>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6 col-12">
                        <div class="my-auto">
                            <img src="@/assets/images/doctors.svg" class="img-fluid text-primary" alt="india" width="400">
                        </div>
                    </div>
                </div>
                <div class="row" v-if="isActive">
                    <div class="col-md-3 col-12 mt-4" data-aos="fade-up" data-aos-duration="2000">
                        <div class="shadow stats-card border-black">
                            <div class="row">
                                <div class="col-sm-4 col-4">
                                    <span><i class="fas fa-hospital text-dark fa-2x mr-3"></i></span>
                                </div>
                                <div class="col-sm-8 text-right col-8">
                                    <h5 class="font-weight-bold text-dark mb-0">{{ totalStatistics[0].confirmed }}</h5>
                                    <span class="delta-text">{{ totalStatistics[0].deltaconfirmed }} <i class="fas fa-arrow-up"></i></span>
                                    <h6 class="text-dark mb-0 ">Confirmed</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12 mt-4" data-aos="fade-up" data-aos-duration="2000">
                        <div class="shadow stats-card border-blue">
                            <div class="row">
                                <div class="col-sm-4 col-4">
                                    <span><i class="fas fa-hospital-user text-primary fa-2x mr-3"></i></span>
                                </div>
                                <div class="col-sm-8 text-right col-8">
                                    <h5 class="font-weight-bold text-dark mb-0">{{ totalStatistics[0].active }}</h5>
                                    <span class="delta-text">{{ totalStatistics[0].deltaactive }} <i class="fas fa-arrow-up"></i></span>
                                    <h6 class="text-dark mb-0 ">Active</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12 mt-4" data-aos="fade-down" data-aos-duration="2000">
                        <div class="shadow stats-card border-light-green">
                            <div class="row">
                                <div class="col-sm-4 col-4">
                                    <span><i class="fas fa-shield-virus text-green fa-2x mr-3"></i></span>
                                </div>
                                <div class="col-sm-8 text-right col-8">
                                    <h5 class="font-weight-bold text-dark mb-0"><span>{{ totalStatistics[0].recovered }}</span></h5>
                                    <span class="delta-text">{{ totalStatistics[0].deltarecovered }} <i class="fas fa-arrow-up"></i></span>
                                    <h6 class="text-dark mb-0 ">Recovered</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3 col-12 mt-4" data-aos="fade-down" data-aos-duration="2000">
                        <div class="shadow stats-card border-red">
                            <div class="row">
                                <div class="col-sm-4 col-4">
                                    <span><i class="fas fa-procedures text-danger fa-2x mr-3"></i></span>
                                </div>
                                <div class="col-sm-8 text-right col-8">
                                    <h5 class="font-weight-bold text-dark mb-0"><span>{{ totalStatistics[0].deaths }}</span></h5>
                                    <span class="delta-text">{{ totalStatistics[0].deltadeaths }} <i class="fas fa-arrow-up"></i></span>
                                    <h6 class="text-dark mb-0">Deceased</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="text-center my-5">
                    <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="200">
                    <h3 class="text-center text-danger">Please wait...</h3>
                </div>
            </div>
        </section>
        <Zone/>
        <!-- India reports -->
        <section>
            <div class="container-fluid">
                <div>
                    <small class="font-weight-bolder d-md-none d-sm-block pl-3">Please note </small>
                    <ul class="list-unstyled d-md-none d-sm-block d-flex mt-3">
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">TC</span> Total Cases</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">AC</span> Active Cases</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">RC</span> Recovered Cases</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">DC</span> Deceased Cases</small></li>
                    </ul>
                    <small class="font-weight-bolder d-md-none d-sm-block pl-3 bg-warning">Click on any state name to see full details</small>
                </div>
                <div class="table-responsive-sm stateTable shadow mt-5 bg-white" v-if="isActive">
                    <div class="h4 mx-3 pt-3">Statewise Report <button class="btn btn-primary btn-sm float-right my-2" @click="RefreshData">Refresh <i class="fas fa-redo-alt"></i></button></div>
                    <table class="table table-bordered p-0" id="stateTable">
                        <thead>
                            <tr>
                                <th><span class="d-none d-md-block lbtn">State</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">State</span></th>
                                <th><span class="d-none d-md-block lbtn">Total</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TC</span></th>
                                <th><span class="d-none d-md-block lbtn">Active</span><span class="text-primary font-weight-bolder d-md-none d-sm-block">AC</span></th>
                                <th><span class="d-none d-md-block lbtn ">Recovered</span><span class="text-success font-weight-bolder d-md-none d-sm-block">RC</span></th>
                                <th><span class="d-none d-md-block lbtn">Deceased</span><span class="text-danger font-weight-bolder d-md-none d-sm-block">DC</span></th>
                                <th class="lbtn last-update">Last update </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="data in covid" :key="data.id" class="font-small">
                                <td class="font-weight-bold state-small-device" data-target="#FullData" data-toggle="modal" @click="getStateData(name=data.state)">{{ data.state }}</td>
                                <td class="text-center">
                                    <div class="row">
                                        <div class="col-md-8 col-12">
                                            {{ data.confirmed }}
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ data.deltaconfirmed }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">{{ data.active }}</td>
                                <td class="text-center">
                                    <div class="row">
                                        <div class="col-md-8 col-12">
                                            {{ data.recovered }}
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ data.deltarecovered }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="text-center">
                                    <div class="row">
                                        <div class="col-md-8 col-12">
                                            {{ data.deaths }}
                                        </div>
                                        <div class="col-md-4 col-12">
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ data.deltadeaths }}</span>
                                        </div>
                                    </div>
                                </td>
                                <td class="last-update">{{ data.lastupdatedtime }}</td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th><span class="d-none d-md-block lbtn">State</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">State</span></th>
                                <th><span class="d-none d-md-block lbtn">Total</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TC</span></th>
                                <th><span class="d-none d-md-block lbtn">Active</span><span class="text-primary font-weight-bolder d-md-none d-sm-block">AC</span></th>
                                <th><span class="d-none d-md-block lbtn ">Recovered</span><span class="text-success font-weight-bolder d-md-none d-sm-block">RC</span></th>
                                <th><span class="d-none d-md-block lbtn">Deceased</span><span class="text-danger font-weight-bolder d-md-none d-sm-block">DC</span></th>
                                <th class="lbtn last-update">Last update</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
                <div v-else class="text-center my-5">
                    <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="200">
                    <h3 class="text-center text-danger">Please wait...</h3>
                </div>
            </div>
        </section>
        <Indiastats />
        <div class="modal fade" id="FullData">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <div class="modal-body">
                        <div> <span class="font-weight-bolder h5 district-name">{{ cleanData.state }}</span> District wise Report <a class="btn btn-danger btn-sm float-right text-white" data-dismiss="modal"><i class="fas fa-times fa-lg"></i></a></div>
                        <div>
                            <small class="font-weight-bolder d-md-none d-sm-block pl-3">Please note </small>
                            <ul class="list-unstyled d-md-none d-sm-block d-flex mt-3">
                                <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">TC</span> Total Cases</small></li>
                                <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">AC</span> Active Cases</small></li>
                                <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">RC</span> Recovered Cases</small></li>
                                <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">DC</span> Deceased Cases</small></li>
                            </ul>
                        </div>
                        <div class="table-small-device">
                            <table class="table table-bordered table-sm">
                                <thead class="text-size thead-light">
                                    <th><span class="text-heading">Name</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">Name</span></th>
                                    <th><span class="text-heading">Total</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TC</span></th>
                                    <th><span class="text-heading">Active</span><span class="text-primary font-weight-bolder d-md-none d-sm-block">AC</span></th>
                                    <th><span class="text-heading ">Recovered</span><span class="text-success font-weight-bolder d-md-none d-sm-block">RC</span></th>
                                    <th><span class="text-heading">Deceased</span><span class="text-danger font-weight-bolder d-md-none d-sm-block">DC</span></th>
                                </thead>
                                <tbody class="text-size2 p-3" v-if="isStatewise">
                                    <tr v-for="(cityData, city) in cleanData.districtData" :key="city">
                                        <td class="font-weight-bold small-text">
                                            {{ cityData.district }}
                                        </td>
                                        <td class="text-medium">
                                            {{ cityData.confirmed }}
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ cityData.delta.confirmed }}</span>
                                        </td>
                                        <td class="text-medium">
                                            {{ cityData.active }}
                                        </td>
                                        <td class="text-medium">{{ cityData.recovered }}
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ cityData.delta.recovered }}</span>
                                        </td>
                                        <td  class="text-medium"> {{ cityData.deceased }}
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ cityData.delta.deceased }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                                <tbody v-else class="text-center">
                                    <tr>
                                        <td colspan="5" class="text-center">
                                            <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="100">
                                            <div class="h5 text-center text-danger">Please wait fetching latest data</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
  // @ is an alias to /src
  /* eslint-disable */
  import axios from 'axios';
  import Indiastats from '@/views/Indiastats';
  import Zone from '@/views/zone';
  export default {
    name: 'Home',
    data() {
      return{
        covid: {},
        errors: "",
        cleanData: {},
        isStatewise: false,
        totalStatistics: {},
        totalTests: {},
        isActive: false
      }
    },
    components:{
      Indiastats,
      Zone
    },
    created() {
      /////////////////////////// 
      //API call for cases in India 
      ////////////////////////// 
      const tokenurl = 'https://api.covid19india.org/data.json';
      axios({
          method: 'get',
          url: tokenurl,
        })
        .then((response) => {
          this.covid = response.data.statewise.filter((item, i) => i > 0);
          this.totalTests = response.data.tested.reverse().slice(0,1);
          this.totalStatistics = response.data.statewise.filter(state => state.state === "Total");
          this.averageMarks();     
        })
        .catch((error) => {
          this.errors = error;
        })
    },

    mounted() {
      this.showData();     
    },
    methods: {
      showData() {
        setTimeout(() => {
          this.isActive = !this.isActive;
        }, 2000);
      },
      getStateData(dname){
                
                const counturl = 'https://api.covid19india.org/v2/state_district_wise.json';
                axios({
                        method: 'get',
                        url: counturl,
                        })
                        .then((response) => {  
                        this.cleanData= response.data.find(state =>{
                            return state.state === dname
                        });
                          this.isStatewise = true;
                        })
                        .catch((error) => {
                        this.errors = error;
                        })  
            },
      RefreshData() {
        const tokenurl = 'https://api.covid19india.org/data.json';
        axios({
            method: 'get',
            url: tokenurl,
          })
          .then((response) => {
            this.covid = response.data.statewise.filter((item, i) => i > 0);
            this.totalStatistics = response.data.statewise.filter(state => state.state === "Total");
            this.message = "Data is Refreshed Successfully";
            this.alertDisplay();
          })
          .catch((error) => {
            this.errors = error;
          })
      },
      alertDisplay() {
        this.$swal.fire({
          position: 'center',
          title: 'Please wait while data is refreshing',
          showConfirmButton: false,
          timer: 2000,
          timerProgressBar: true,
        })
        this.$swal.showLoading();
        setTimeout(() => {
          this.$swal.fire({
            position: 'center',
            icon: "success",
            title: 'Data is Refreshed',
            showConfirmButton: false,
            timer: 2000,
          })

        }, 3000)
      },
    }  

  }
</script>
<style scoped>
  .colorbg {
    background-color: #F6F7FD;
  }
  .bg-blue{
  background-color: #0061f2;
  background-image: linear-gradient(135deg, #0061f2 0%, rgba(105, 0, 199, 0.8) 100%);
}
.card{
  max-width: 500px!important;
}
  .delta-text{
    font-size: 13px!important;
    background-color: #E5E7E9;
    border-radius: 25px;
    box-shadow: 2px 5px 9px #CACFD2;
    padding: 2px;
  }
  .stats-card{
    background-color: #ffffff;
    padding: 8px 12px;
    border-radius: 5px;
}

   .border-light-gray {
        border-left: 7px solid #5D6874;
        border-right: 7px solid #5D6874;
    }


    .border-red {
        border-left: 7px solid #F5515f;
        border-right: 7px solid #F5515f;
    }

    .border-yellow {
        border-left: 7px solid yellow;
        border-right: 7px solid yellow;
    }
    .border-orange{
        border-left: 7px solid #DAD025;
        border-right: 7px solid #DAD025;
    }

    .border-black {
        border-left: 7px solid #000;
        border-right: 7px solid #000;
    }
    
    .border-light-black {
        border-left: 7px solid #1B2631;
        border-right: 7px solid #1B2631;
    }

    .border-blue {
        border-left: 7px solid #0470dc;
        border-right: 7px solid #0470dc;
    }
    .border-gray{
       border-left: 7px solid gray;
       border-right: 7px solid gray; 
    }

    .border-light-green {
        border-left: 7px solid #42e695;
        border-right: 7px solid #42e695;
    } 
    .text-green{
      color: #42e695;
    }  
    .text-update{
      font-size: 12px;
      color: #F62010;
    }
    .news {
        border-radius: 8px;
        margin-left: 5px;
        background-color: #ffffff;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .state-small-device{
      cursor: pointer;
    }
  @media (max-width: 576px) {
    .lbtn{
        padding: 2px;
        margin: 0px;
        text-align: center;
    }
    .home{
      margin-top:0px!important;
    }
    .card{
      max-width: 350px!important;
    }
    .font-small{
      font-size: 14px;
    }
    .stateTable{
      overflow-x: hidden!important;
    }
    .text-update{
      display: block;
      font-size: 12px!important;
    }
    .table-bordered{
      border: none!important;
    }
    .state-small-device{
      max-width: 100px!important;
      word-break: normal;
    }
    .container-fluid{
      padding-left: 0!important;
      padding-right: 0!important;
    }
    .text-heading{
      display: none;
     }
    .last-update{
      display: none;
    }
    .small-text{
      font-size: 15px!important;
    }
    .text-medium{
      font-size: 14px!important;
    }
    .text-sm{
        font-size: 32px!important;
    }

} 

</style>