<template>
    <div class="Statewise my-4">
        <div class="p-3 clearfix">
            <h2 class="title">India's Statewise Report</h2>
        </div>
        <div v-if="isStatewise">
            <!-- <div class="p-md-4 beds-title">India Statewise Beds Availability</div> -->
            <!-- <div class="row">
                <div class="col-md-12 col-12">
                    {{ hospitalData }}
                    <datatable :columns="columns" :data="hospitalData"></datatable>
                </div>
            </div> -->
            <div class="row container mb-5">
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics kerala shadow" data-toggle="modal" data-target="#FullData" @click="getStateData(name='Kerala')">
                        Kerala
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow delhi" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Delhi')">
                        Delhi
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow telangana" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Telangana')">
                        Telangana
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow raj" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Rajasthan')">
                        Rajasthan
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow hr" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Haryana')">
                        Haryana
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow up" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Uttar Pradesh')">
                        Uttar Pradesh
                    </div>
                </div>
            </div>
            <div class="row mb-5 container">
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow lad" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Ladakh')">
                        Ladakh
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow tn" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Tamil Nadu')">
                        Tamil Nadu
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow mizo" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Mizoram')">
                        Mizoram
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow kntk" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Karnataka')">
                        Karnataka
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow mh" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Maharashtra')">
                        Maharashtra
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow pub" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Punjab')">
                        Punjab
                    </div>
                </div>
            </div>
            <div class="row mb-5 container">
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow ap" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Andhra Pradesh')">
                        Andhra Pradesh
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow uk" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Uttarakhand')">
                        Uttarakhand
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow od" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Odisha')">
                        Odisha
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow pud" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Puducherry')">
                        Puducherry
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow wb" data-target="#FullData" data-toggle="modal" @click="getStateData(name='West Bengal')">
                        West Bengal
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow ch" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Chandigarh')">
                        Chandigarh
                    </div>
                </div>
            </div>
            <div class="row mb-5 container">
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow chh" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Chhattisgarh')">
                        Chhattisgarh
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow gj" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Gujarat')">
                        Gujarat
                    </div>
                </div>
                <div class="col-md-3 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow hp" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Himachal Pradesh')">
                        Himachal Pradesh
                    </div>
                </div>
                <div class="col-md-3 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow mp" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Madhya Pradesh')">
                        Madhya Pradesh
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow bh" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Bihar')">
                        Bihar
                    </div>
                </div>
            </div>
            <div class="row mb-5 container">
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow goa" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Goa')">
                        Goa
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow jharkhand" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Jharkhand')">
                        Jharkhand
                    </div>
                </div>
                <div class="col-md-2 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow mani" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Manipur')">
                        Manipur
                    </div>
                </div>
                <div class="col-md-3 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow jk" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Jammu and Kashmir')">
                        Jammu & Kashmir
                    </div>
                </div>
                <div class="col-md-3 col-12 mx-auto">
                    <div class="p-3 my-3 my-lg-0 card border-0 statistics shadow ani" data-target="#FullData" data-toggle="modal" @click="getStateData(name='Andaman and Nicobar Islands')">
                        Andaman & Nicobar Islands
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="200">
            <h3 class="text-center text-danger">Please wait...</h3>
        </div>
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
                                <tbody class="text-size2 p-3">
                                    <tr v-for="(cityData, city) in cleanData.districtData" :key="city">
                                        <td class="font-weight-bold state-small-device">
                                            {{ cityData.district }}
                                        </td>
                                        <td>
                                            {{ cityData.confirmed }}
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ cityData.delta.confirmed }}</span>
                                        </td>
                                        <td>
                                            {{ cityData.active }}
                                        </td>
                                        <td>{{ cityData.recovered }}
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ cityData.delta.recovered }}</span>
                                        </td>
                                        <td> {{ cityData.deceased }}
                                            <span class="text-update"> <i class="fas fa-arrow-up"></i> {{ cityData.delta.deceased }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- district wise  -->
        <section>
            <div class="container-fluid">
                <div>
                    <small class="font-weight-bolder d-md-none d-sm-block pl-3 text-left">Please note </small>
                    <ul class="list-unstyled d-md-none d-sm-block d-flex mt-3">
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">RH</span><br /> Rural Hospitals</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">RB</span><br /> Rural Beds</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">UH</span><br /> Urban Hospitals</small></li>
                    </ul>
                    <ul class="list-unstyled d-md-none d-sm-block d-flex mt-3">
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">UB</span><br /> Urban Beds</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">TH</span><br /> Total Hospitals</small></li>
                        <li class="px-2 mx-2"><small><span class="bg-white font-weight-bolder p-2">TB</span><br /> Total beds</small></li>
                    </ul>
                </div>
                <div class="table-responsive-sm stateTable shadow mt-5 bg-white">
                    <div class="h4 mx-3 pt-3">India Statewise Hospital & Beds Availability</div>
                    <table class="table table-bordered table p-0" id="stateTable">
                        <thead>
                            <tr>
                                <th class="text-left">State</th>
                                <th><span class="d-none d-md-block">Rural Hospitals</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">RH</span></th>
                                <th><span class="d-none d-md-block">Rural Beds</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">RB</span></th>
                                <th><span class="d-none d-md-block">Urban Hospitals</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">UH</span></th>
                                <th><span class="d-none d-md-block">Urban Beds</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">UB</span></th>
                                <th><span class="d-none d-md-block">Total Hospitals</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TH</span></th>
                                <th><span class="d-none d-md-block">Total beds</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TB</span></th>
                                <th class="last-update">As on</th>
                            </tr>
                        </thead>
                        <tbody v-if="isAvailable">
                            <tr v-for="bed in hospitaldata" :key="bed.state" class="font-small">
                                <td class="font-weight-bold state-small-device">{{ bed.state }}</td>
                                <td class="small-device-text">{{ bed.ruralHospitals }}</td>
                                <td class="small-device-text">{{ bed.ruralBeds }}</td>
                                <td class="small-device-text">{{ bed.urbanHospitals }}</td>
                                <td class="small-device-text">{{ bed.urbanBeds }}</td>
                                <td class="small-device-text">{{ bed.totalHospitals}}</td>
                                <td class="small-device-text">{{ bed.totalBeds }}</td>
                                <td class="small-device-text last-update">{{ bed.asOn | formatDate }}</td>        
                            </tr>
                        </tbody>
                        <tbody v-else>
                            <tr class="text-center">
                                <td colspan="8">
                                    <div class="text-center">
                                        <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="200">
                                        <h3 class="text-center text-danger">Please wait...</h3>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                        <tfoot>
                            <tr>
                                <th class="text-left">State</th>
                                <th><span class="d-none d-md-block">Rural Hospitals</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">RH</span></th>
                                <th><span class="d-none d-md-block">Rural Beds</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">RB</span></th>
                                <th><span class="d-none d-md-block">Urban Hospitals</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">UH</span></th>
                                <th><span class="d-none d-md-block">Urban Beds</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">UB</span></th>
                                <th><span class="d-none d-md-block">Total Hospitals</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TH</span></th>
                                <th><span class="d-none d-md-block">Total beds</span><span class="text-dark font-weight-bolder d-md-none d-sm-block">TB</span></th>
                                <th class="last-update">As on</th>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </section>
    </div>
</template>
<script>
    import axios from "axios";

    export default {
        name: "Statewise",
        data() {
            return {
                statewise: [],
                cleanData: {},
                hospitaldata: {},
                isStatewise: false,
                isAvailable:false,
                show:false,
                errors:"",
                dname : '',
            };
        },
        created() {
            ///////////////////////////
            //API call for list of vms
            //////////////////////////
            const tokenurl = "https://api.covid19india.org/v2/state_district_wise.json";
                axios({
                        method: "get",
                        url: tokenurl
                    })
                    .then(response => {
                        this.statewise =  response.data;
                        this.isStatewise = true;
                    })
                    .catch(error => {
                        this.errors = error;
                    });

            //beds hospitals details

            const tokenbeds = 'https://api.rootnet.in/covid19-in/hospitals/beds';
            axios({
                    method: 'get',
                    url: tokenbeds,
                })
                .then((response) => {
                   this.hospitaldata = response.data.data.regional;
                   this.isAvailable = true;
               
                })
                .catch((error) => {
                    this.errors = error;
                })        
        },
        methods: {
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
                       
                        })
                        .catch((error) => {
                        this.errors = error;
                        })  
            },
            alertDisplay() {
                this.$swal.fire({
                    position: 'center',
                    title: 'Please wait ......',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                })
                this.$swal.showLoading();
            }
        }
    };
</script>

<style scoped>
    .bg-light-color {
        background-color: #E5E7E9;
    }
    .title-text{
        border-radius: 8px;
        margin-left: 5px;
        background-color: #ffffff;
        display: inline-block;
    } 
    .up{
        background: url(../assets/images/up.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .delhi{
        background: url(../assets/images/delhi.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .kerala{
        background: url(../assets/images/Kerala.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .telangana{
        background: url(../assets/images/telangana.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .raj{
        background: url(../assets/images/raj.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .hr{
        background: url(../assets/images/hr.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .lad{
        background: url(../assets/images/ladakh.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .jharkhand{
        background: url(../assets/images/jknd.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .tn{
        background: url(../assets/images/tn.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .mizo{
        background: url(../assets/images/mizoram.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .kntk{
        background: url(../assets/images/kntka.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .mh{
        background: url(../assets/images/mh.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .pub{
        background: url(../assets/images/pb.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .ap{
        background: url(../assets/images/ap.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .uk{
        background: url(../assets/images/uk.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .od{
        background: url(../assets/images/od.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .pud{
        background: url(../assets/images/pc.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .wb{
        background: url(../assets/images/wb.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .ch{
        background: url(../assets/images/ch.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .chh{
        background: url(../assets/images/chh.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .gj{
        background: url(../assets/images/gj.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .hp{
        background: url(../assets/images/hp.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .mp{
        background: url(../assets/images/mp.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .bh{
        background: url(../assets/images/bh.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .goa{
        background: url(../assets/images/goa.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .mani{
        background: url(../assets/images/mani.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .jk{
        background: url(../assets/images/jk.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:5px;
    }
    .ani{
        background: url(../assets/images/ani.svg) 0% center no-repeat;
        height: 70px;
        background-size:contain;
        padding:10px;
    }
    .statistics {
        background-color: #fff;
        font-weight: 800;
        text-align: right;
        align-content: center;
        transition: 0.2s linear;
    }

    .statistics:hover {
        background-color: #FFA07A;
        color: #000;
        cursor: pointer;
    }
    .text-update{
      font-size: 12px;
      color: #F62010;
    }
    
    .beds-title{
        font-size: 32px;
    }
    @media (max-width: 576px) {
        .table{
            overflow-x: hidden!important;
            padding: 0px!important;
            margin: 0px!important;
        }
        .text-size{
            padding: 0px!important;
            margin: 0px!important;
            font-size: 15px!important;
        }
        .text-size2{
            font-size: 14px!important;
            padding: 0px!important;
            margin: 0px!important;
        }
        .beds-title{
        font-size: 20px!important;
        font-weight: 800;
        padding: 10px!important;
        } 
            .text-heading{
            display: none;
        }
        .modal-body{
            padding: 0px!important;
            margin: 0px!important;
        }
        .district-name{
            margin-left: 5px!important;
            padding: 5px!important;
        }
        .text-update{
            display: block;
        }
        .title-text,title{
            text-align: left!important;
        }
        .state-small-device{
          max-width: 90px!important;
          word-break: normal;
        }

    .font-small{
      font-size: 14px;
    }
    .state-small-device{
      max-width: 100px!important;
      word-break: normal;
    }
    .last-update{
      display: none;
    }
    .container-fluid{
        padding-left: 0px;
        padding-right: 0px;
    }
    }
</style>
