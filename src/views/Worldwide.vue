<template>
    <div class="worldwide my-4">
        <div class="container" v-if="isLoaded">
            <div class="row top-title">
                <div class="col-md-12 col-12">
                    <span class="title">Worldwide Statistics</span>
                    <span class="badge badge-warning float-right mt-3">Total affected country : {{ worldstats.affectedCountries }}</span>
                </div>
            </div>
            <div class="row flex-column-reverse flex-md-row">
                <div class="col-md-6 col-12 mx-auto">
                    <div class="cardbo">
                        <div class="row">
                            <div class="col-md-6 col-12 mt-4">
                                <div class="shadow stats-card border-gray">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Total cases</span>
                                            <div class="delta-text d-inline-block">{{ worldstats.todayCases }}<i class="fas fa-arrow-up"></i></div>
                                            <h6 class="font-weight-bolder">{{ worldstats.cases }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-plus-square fa-lg text-secondary"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mt-4">
                                <div class="shadow stats-card border-black">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Total Deaths</span>
                                            <div class="delta-text d-inline-block">{{ worldstats.todayDeaths }}<i class="fas fa-arrow-up"></i></div>
                                            <h6 class="font-weight-bolder">{{ worldstats.deaths }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-bed fa-lg text-dark"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mt-4">
                                <div class="shadow stats-card border-blue">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Recovered Cases</span>
                                            <h6 class="font-weight-bolder">{{ worldstats.recovered }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-shield-virus fa-lg text-primary"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mt-4">
                                <div class="shadow stats-card border-blue">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Active Cases</span>
                                            <h6 class="font-weight-bolder">{{ worldstats.active }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-hospital-user fa-lg text-primary"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mt-4">
                                <div class="shadow stats-card border-red">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Critical Cases</span>
                                            <h6 class="font-weight-bolder">{{ worldstats.critical }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-skull-crossbones fa-lg text-danger"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mt-4">
                                <div class="shadow stats-card border-red">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Total tests</span>
                                            <h6 class="font-weight-bolder">{{ worldstats.tests }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-vial fa-lg text-danger"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mt-4">
                                <div class="shadow stats-card border-orange">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Tests/Million</span>
                                            <h6 class="font-weight-bolder">{{ worldstats.testsPerOneMillion }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-vials fa-lg text-warning"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-6 col-12 mt-4">
                                <div class="shadow stats-card border-orange">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Deaths/Million</span>
                                            <h6 class="font-weight-bolder">{{ worldstats.casesPerOneMillion }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-book-dead fa-lg text-warning"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-12 col-12 mt-4">
                                <div class="shadow stats-card border-light-green">
                                    <div class="row">
                                        <div class="col-md-9 col-9">
                                            <span>Cases/Million worldwide</span>
                                            <h6 class="font-weight-bolder">{{ worldstats.deathsPerOneMillion }}</h6>
                                        </div>
                                        <div class="col-md-3 col-3 my-auto">
                                            <span><i class="fas fa-temperature-low fa-lg text-light-green"></i></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6 col-12 my-auto">
                    <img src="@/assets/images/world3.svg" alt="stats" class="img-fluid" width="500" height="400">
                    <h6 class="text-right my-2"><em>Updated at {{ worldstats.updated | formatDate }}</em></h6>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="200">
            <h3 class="text-center text-danger">Please wait...</h3>
        </div>
        <div class="container-md cardbox">
            <div class="table-responsive-sm worldTable shadow mt-5 bg-white">
                <div>
                    <small class="font-weight-bolder d-md-none d-sm-block pl-3">Please note </small>
                    <ul class="list-unstyled d-md-none d-sm-block d-flex mt-3">
                
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">TC</span> Total Cases</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">AC</span>  Active Cases</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">RC</span> Recovered Cases</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">DC</span>  Deceased Cases</small></li>
                    </ul>
                    <small class="font-weight-bolder d-md-none d-sm-block pl-3">Click on any country name to see full details</small>
                </div>
                <div class="h4 mx-3 pt-3 clearfix">Worldwide Report <input type="text" v-model="search" class="form-control float-right input-search" placeholder="Search country ...." /></div>
                <table class="table table-bordered p-0" id="worldTable">
                    <thead class="bg-light">
                        <tr>
                            <th><span class="d-none d-md-block lbtn">Country</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">Country</span></th>
                            <th><span class="d-none d-md-block lbtn">Total</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TC</span></th>
                            <th><span class="d-none d-md-block lbtn">Active</span><span class="text-primary font-weight-bolder d-md-none d-sm-block">AC</span></th>
                            <th><span class="d-none d-md-block lbtn ">Recovered</span><span class="text-success font-weight-bolder d-md-none d-sm-block">RC</span></th>
                            <th><span class="d-none d-md-block lbtn">Deceased</span><span class="text-danger font-weight-bolder d-md-none d-sm-block">DC</span></th>
                            <th class="lbtn last-update">Last update </th>
                            <th class="d-none d-md-block">Action</th>
                        </tr>
                    </thead>
                    <tbody v-if="receivedData">
                        <tr v-for="(cData, country) in filteredList" :key="country" class="font-small">
                            <td class="font-weight-bold country-small-device pointer" @click="getData(name=cData.country)" data-target="#fulldetails" data-toggle="modal"> <img :src="cData.countryInfo.flag" class="img-fluid mr-2 d-none d-md-block" width="45">{{ cData.country }}</td>
                            <td class="text-center font-small">
                                <div class="row">
                                    <div class="col-md-8 col-12">
                                        {{ cData.cases }}
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ cData.todayCases }}</span>
                                    </div>
                                </div>
                            </td>
                            <td class="text-center font-small">{{ cData.active }}</td>
                            <td class="text-center font-small">{{ cData.recovered }} </td>
                            <td class="text-center font-small">
                                <div class="row">
                                    <div class="col-md-8 col-12">
                                        {{ cData.deaths }}
                                    </div>
                                    <div class="col-md-4 col-12">
                                        <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ cData.todayDeaths }}</span>
                                    </div>
                                </div>
                            </td>
                            <td class="last-update">{{ cData.updated | formatDate }}</td>
                            <td class="action"><button class="btn btn-primary btn-sm" @click="getData(name=cData.country)" data-target="#fulldetails" data-toggle="modal"> More</button></td>
                        </tr>
                    </tbody>
                    <tbody v-else class="text-center">
                        <tr>
                            <td colspan="7" class="text-center">
                                <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="100">
                                <div class="h5 text-center text-danger">Please wait fetching latest data</div>
                            </td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <th><span class="d-none d-md-block lbtn">Country</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">Country</span></th>
                            <th><span class="d-none d-md-block lbtn">Total</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TC</span></th>
                            <th><span class="d-none d-md-block lbtn">Active</span><span class="text-primary font-weight-bolder d-md-none d-sm-block">AC</span></th>
                            <th><span class="d-none d-md-block lbtn ">Recovered</span><span class="text-success font-weight-bolder d-md-none d-sm-block">RC</span></th>
                            <th><span class="d-none d-md-block lbtn">Deceased</span><span class="text-danger font-weight-bolder d-md-none d-sm-block">DC</span></th>
                            <th class="lbtn last-update">Last update</th>
                            <th class="d-none d-md-block">Action</th>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
        <Statistics/>
            <div class="modal fade" id="fulldetails">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content border-0">
                        <div class="modal-body" v-if="dataRec">
                            <h4>{{ selecteddata.country }} Full Report<a class="float-right text-danger" data-dismiss="modal"><i class="fas fa-times fa-lg"></i></a></h4>
                            <div class="p-3">
                                <table class="table table-borderless table-sm" id="worldTable">
                                    <thead>
                                        <tr>
                                            <th>{{ selecteddata.country }} Flag</th>
                                            <td><img :src="selecteddata.countryInfo.flag" class="img-fluid mr-2" width="45">
                                            </td>
                                        </tr>
                                        <tr>
                                            <th>New cases</th>
                                            <td>{{ selecteddata.todayCases }}</td>
                                        </tr>
                                        <tr>
                                            <th>Today deaths</th>
                                            <td>{{ selecteddata.todayDeaths }}</td>
                                        </tr>
                                        <tr>
                                            <th>Total cases</th>
                                            <td>{{ selecteddata.cases }}</td>
                                        </tr>
                                        <tr>
                                            <th>Critical cases</th>
                                            <td>{{ selecteddata.critical }}</td>
                                        </tr>
                                        <tr>
                                            <th>Cases per 1 million</th>
                                            <td>{{ selecteddata.casesPerOneMillion }}</td>
                                        </tr>
                                        <tr>
                                            <th>Deaths per 1 million</th>
                                            <td>{{ selecteddata.deathsPerOneMillion }}</td>
                                        </tr>
                                        <tr>
                                            <th>Active cases</th>
                                            <td>{{ selecteddata.active }}</td>
                                        </tr>
                                        <tr>
                                            <th>Recovered cases</th>
                                            <td>{{ selecteddata.recovered }}</td>
                                        </tr>
                                        <tr>
                                            <th>Deceased cases</th>
                                            <td>{{ selecteddata.deaths }}</td>
                                        </tr>
                                        <tr>
                                            <th>Tests</th>
                                            <td>{{ selecteddata.tests }}</td>
                                        </tr>
                                        <tr>
                                            <th>Tests per 1 million</th>
                                            <td>{{ selecteddata.testsPerOneMillion }}</td>
                                        </tr>
                                        <tr>
                                            <th>Last update</th>
                                            <td>{{ selecteddata.updated | formatDate }}</td>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                        </div>
                        <div v-else class="text-center">
                            <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="100">
                             <h4 class="text-center text-danger">Please wait..</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
import axios from 'axios';
import Statistics from '@/components/Statistics';
export default {
    name: "Worldwide",
    data(){
        return{
            worldstats: "",
            isLoaded: false,
            countrydata: {},
            selecteddata: {},  
            receivedData:false,
            dataRec:false,
            errors: "",
            search: ""
        }
    },
    components:{
       Statistics,
    },
    created() {
            /////////////////////////// 
            //API call for list of country
            ////////////////////////// 
            const tokenurl = 'https://corona.lmao.ninja/v2/all';
            axios({
                    method: 'get',
                    url: tokenurl,
                })
                .then((response) => {
                    this.worldstats = response.data;
                    this.isLoaded = true;
                })
                .catch((error) => {
                    this.errors = error;
                })

            const url = 'https://corona.lmao.ninja/v2/countries?sort=country';
            axios({
                    method: 'get',
                    url: url,
                })
                .then((response) => {
                    this.countrydata = response.data;
                    this.receivedData = true;
                })
                .catch((error) => {
                    this.errors = error;
                })    

    },
    computed:{
            filteredList() {
                return this.countrydata.filter(country => {
                    return country.country.toLowerCase().includes(this.search.toLowerCase())
                })            
            },
    },
    methods:{
        getData(cname) {

                const counturl = 'https://corona.lmao.ninja/v2/countries/' + cname;
                axios({
                        method: 'get',
                        url: counturl,
                    })
                    .then((response) => {
                        this.selecteddata = response.data;
                        this.dataRec = true;
                    })
                    .catch((error) => {
                        this.errors = error;
                    })
            },
            alertDisplay() {
                this.$swal.fire({
                    position: 'center',
                    title: 'Data fetched Please click again to see details.',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                })
                this.$swal.showLoading();
            }
    }
    
}
</script>
<style scoped>
    .stats-card{
        background-color: #ffffff;
        padding: 5px 8px;
        border-radius: 5px;
    }
    .cardbox{
        top: 0px;
        left: 0px;
        max-height: 600px!important;
        overflow-y: scroll;
    }
    .delta-text{
        font-size: 11px!important;
        background-color: #EEB688;
        border-radius: 25px;
        border: 2px solid #FC0000;
        color: #AD1206 ;
        padding: 2px;
    }
   .border-light-gray {
        border-left: 5px solid #5D6874;
        border-right: 5px solid #5D6874;
    }
    .small-device{
        display: none;
    }
    .input-search{
        width: 50%;
    }
    .border-red {
        border-left: 5px solid #F5515f;
        border-right: 5px solid #F5515f;
    }

    .border-yellow {
        border-left: 5px solid yellow;
        border-right: 5px solid yellow;
    }
    .border-orange{
        border-left: 5px solid #DAD025;
        border-right: 5px solid #DAD025;
    }

    .border-black {
        border-left: 5px solid #000;
        border-right: 5px solid #000;
    }
    
    .border-light-black {
        border-left: 5px solid #1B2631;
        border-right: 5px solid #1B2631;
    }

    .border-blue {
        border-left: 5px solid #0470dc;
        border-right: 5px solid #0470dc;
    }
    .border-gray{
       border-left: 5px solid gray;
       border-right: 5px solid gray; 
    }

    .border-light-green {
        border-left: 5px solid #42e695;
        border-right: 5px solid #42e695;
    }   
    .news {
        border-radius: 8px;
        margin-left: 5px;
        background-color: #ffffff;
        margin-top: 10px;
        margin-bottom: 5px;
    } 

    .text-green{
      color: #42e695;
    }  
    .text-update{
      font-size: 12px;
      color: #F62010;
    }
    .form-control {
  display: block;
  width: 50%;
  height: calc(1.5em + 1rem + 2px);
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #000;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #000;
  border-radius: 0.35rem;
  -webkit-transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
@media (prefers-reduced-motion: reduce) {
  .form-control {
    -webkit-transition: none;
    transition: none;
  }
}
.form-control::-ms-expand {
  background-color: transparent;
  border: 0;
}
.form-control:-moz-focusring {
  color: transparent;
  text-shadow: 0 0 0 #687281;
}
.form-control:focus {
  color: #000;
  background-color: #fff;
  border-color: #000;
  outline: 0;
  box-shadow: 0 0 0 0.0625rem #000;
}
.form-control::-webkit-input-placeholder {
  color: #000;
  opacity: 1;
}
.form-control::-moz-placeholder {
  color: #000;
  opacity: 1;
}
.form-control:-ms-input-placeholder {
  color: #000;
  opacity: 1;
}
.form-control::-ms-input-placeholder {
  color: #000;
  opacity: 1;
}
.form-control::placeholder {
  color: #000;
  opacity: 1;
}
    .country-small-device{
        cursor: pointer;
    }

  @media (max-width: 576px) {
    .lbtn{
        padding: 2px;
        margin: 0px;
        text-align: center;
    }
    .font-small{
      font-size: 12px!important;
    }
    .text-update{
      display: block;
    }
    .country-small-device{
      max-width: 70px!important;
      font-size: 13px!important;
      word-break: normal;
      cursor: pointer;
    }
    .last-update,.action{
      display: none;
    }
    .table{
        padding: 0px!important;
    }
    .container-md{
        padding: 0px;
    }
    .input-search{
        width: 100%;
    }
}  
</style>