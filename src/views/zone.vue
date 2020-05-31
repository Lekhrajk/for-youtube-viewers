<template>
    <div class="zone">
        <div class="container my-5">
            <div class="title mb-3 text-center">Check your district zone</div>
            <section v-if="receivedData">
                <div class="row">
                    <div class="col-md-8 mx-auto shadow bg-white">
                        <div class="col-12 text-right text-sm-center">
                            <p><strong>Note:</strong><em>There are 3 zones <strong>RED,GREEN,ORANGE</strong></em></p>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-10 col-12 my-4 mx-auto">
                                    <div class="input-group">
                                        <input type="text" v-model="searchcity" class="form-control shadow-none"
                                            placeholder="Search district..." @click="showlist">
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" type="button" @click="toggleCity"
                                                data-toggle="modal" data-target="#city">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                    <div class="select-area" v-if="listavailable">
                                        <div class="" v-for="citydata in filteredCity" :key="citydata.id">
                                            <div class="list-item" @click="getName(citydata.district)">{{ citydata.district }}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <div class="modal fade" id="city">
            <div class="modal-dialog modal-dialog-centered modal">
                <div class="modal-content border-0">
                    <div class="modal-body colorbg" v-if="cityAvailable">
                        <div class="float-right">
                            <button class="btn btn-danger btn-sm" data-dismiss="modal"><i class="fas fa-times"></i></button>
                        </div>
                        <div v-for="citydata in filteredCity" :key="citydata.id">
                            <div class="news p-3">
                                <div class="clearfix">
                                    <div class="row mt-3">
                                        <div class="col-md-6 col-6">
                                            <span class="font-weight-bolder mr-5">State</span>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <p class="text-left">{{ citydata.state }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-6">
                                            <span class="font-weight-bolder mr-5">District</span>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <p class="text-left">{{ citydata.district }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-6">
                                            <span class="font-weight-bolder mr-5">Zone</span>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <p class="text-left font-weight-bold" id="zone">{{ citydata.zone }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-6 col-6">
                                            <span class="font-weight-bolder mr-5">Last Updated</span>
                                        </div>
                                        <div class="col-md-6 col-6">
                                            <p class="text-left" id="zone">{{ citydata.lastupdated }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
    export default {
        name: "zone",
         data() {
            return {
                searchcity: "",
                receivedData: false,
                cityAvailable: false,
                cityData: {},
                listavailable: false,
            }
        },
        created() {
            /////////////////////////// 
            //API call for list of country
            ////////////////////////// 
            const tokenurl = 'https://api.covid19india.org/zones.json';
            axios({
                    method: 'get',
                    url: tokenurl,
                })
                .then((response) => {
                    this.cityData = response.data.zones;
                    this.receivedData = true;
                })
                .catch((error) => {
                    this.errors = error;
                })

        },
        computed: {
            filteredCity() {
                return this.cityData.filter(city => {
                    return city.district.toLowerCase().includes(this.searchcity.toLowerCase())
                })
            },
        },
        methods: {
            toggleCity() {
                this.cityAvailable = true;
            },
            // color(clr){
            //     console.log(clr);
            //     if(clr ==="Red"){
            //         document.getElementById("zone").style.cssText = "background-color: red; color: white; padding: 4px 8px";
            //     }
            //     else if(clr ==="Orange"){
            //         document.getElementById("zone").style.cssText = "background-color: orange; color: white; padding: 4px 8px";
            //     }
            //     else{
            //         document.getElementById("zone").style.cssText = "background-color: green; color: white; padding: 4px 8px";
            //     }
            // },
            showlist(){
                this.listavailable = true;
            },
            getName(name){
                console.log(name);
                this.searchcity = name;
            }
        }
    }
</script>
<style scoped>
   .news {
        border-radius: 8px;
        margin-left: 5px;
        background-color: #ffffff;
        margin-top: 10px;
        margin-bottom: 5px;
    }
    .modal-body{
        border-radius: 8px!important;
    }

    .colorbg {
        background-color: #F6F7FD;
    }

    .form-control {
        padding: 10px !important;
        border: 2px solid #000;
        margin-top: 10px;
        margin-bottom: 10px;
    }

    .form-control:focus,
    .form-control.active {
        border: 2px solid #000000;
    }
    .list-item{
        padding: 8px 15px;
    }
    .list-item:hover{
        background-color: #E5E7E9 ;
        color: #000;
        font-weight: 800;
        padding: 8px 15px;
        cursor: pointer;
    }
    .select-area{
        max-height: 300px!important;
        overflow-y: scroll;
    }
    @media (max-width: 576px) {
        .text-sm-center{
            text-align: left!important;
        }
    }

</style>