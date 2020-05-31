<template>
    <div class="resource my-4">
        <div class="container">
            <div class="title">Resources Available</div>
            <section v-if="receivedData">
                <div class="row">
                    <div class="col-md-8 mx-auto shadow bg-white">
                        <div class="col-12 text-right">
                            <p><strong>Note:</strong><em>This section is only for <strong>India</strong></em></p>
                        </div>
                        <div class="form-group">
                            <div class="row">
                                <div class="col-md-5 col-12 mt-4">
                                    <input type="text" v-model="search" class="form-control shadow-none"
                                        placeholder="Search state..." />
                                </div>
                                <div class="col-md-7 col-12 my-4">
                                    <div class="input-group">
                                        <input type="text" v-model="searchcity" class="form-control shadow-none"
                                            placeholder="Search city...">
                                        <div class="input-group-append">
                                            <button class="btn btn-secondary" type="button" @click="toggleCity" data-toggle="modal" data-target="#city">
                                                <i class="fa fa-search"></i>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="cleafix row">
                    <div class="col-md-12 col-12">
                        <div class="float-right">
                            Showing <strong>{{ No_of_rec }}</strong> of <strong>{{ rsc_length }}</strong>
                        </div>
                    </div>
                </div>
                <div v-for="srcdata in filteredList.slice(0,No_of_rec)" :key="srcdata.id">
                    <div class="news p-3">
                        <div class="clearfix">
                            <span class="text-left font-weight-bold text-danger">{{ srcdata.category }}</span>
                            <span class="float-right font-weight-bolder font-smaller"><em> {{ srcdata.state }} /
                                    {{ srcdata.city }}</em></span>
                        </div>
                        <div class="clearfix">
                            <div class="row mt-3">
                                <div class="col-md-2 col-12">
                                    <span class="font-weight-bolder mr-5">Description</span>
                                </div>
                                <div class="col-md-10 col-12">
                                    <p class="text-left">{{ srcdata.descriptionandorserviceprovided }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 col-12">
                                    <span class="font-weight-bolder mr-5">Organisation</span>
                                </div>
                                <div class="col-md-10 col-12">
                                    <p class="text-left">{{ srcdata.nameoftheorganisation }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 col-12">
                                    <span class="font-weight-bolder mr-5">Contact No.</span>
                                </div>
                                <div class="col-md-10 col-12">
                                    <p class="text-left">{{ srcdata.phonenumber }}</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-2 col-12">
                                    <span class="font-weight-bolder mr-5">Website</span>
                                </div>
                                <div class="col-md-10 col-12">
                                    <!-- <router-link :to="srcdata.contact">{{ srcdata.contact }}</router-link> -->
                                    <a :href="srcdata.contact" target="blank"
                                        class="text-left text-break">{{ srcdata.contact }}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div v-else class="text-center">
                <img src="@/assets/load.gif" class="img-fluid" alt="wait.." width="200">
                <h3 class="text-center text-danger">Please wait...</h3>
            </div>
        </div>
        <!-- useful links -->
        <section class="colorbg container p-3 my-5">
            <h4>List of Some Useful links</h4>
            <div class="row">
                <div class="col-md-6 col-12">
                    <ul class="list-unstyled">
                        <li class="py-3 news">
                            <div class="row">
                                <div class="col-md-1 col-1">
                                    <i class="far fa-dot-circle mx-2"></i>
                                </div>
                                <div class="col-md-11 col-10">
                                    <a href="https://coronavirus.thebaselab.com/">World Report about Corona
                                        virus</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 news">
                            <div class="row">
                                <div class="col-md-1 col-1">
                                    <i class="far fa-dot-circle mx-2"></i>
                                </div>
                                <div class="col-md-11 col-10">
                                    <a href="https://indianhelpline.com/">India
                                        Emergency helpline number</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 news">
                            <div class="row">
                                <div class="col-md-1 col-1">
                                    <i class="far fa-dot-circle mx-2"></i>
                                </div>
                                <div class="col-md-11 col-10">
                                    <a
                                        href="https://www.siasat.com/herere-differences-between-symptoms-coronavirus-and-flu-1865832/">How
                                        to verify symptoms of Corona</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 news">
                            <div class="row">
                                <div class="col-md-1 col-1">
                                    <i class="far fa-dot-circle mx-2"></i>
                                </div>
                                <div class="col-md-11 col-10">
                                    <a
                                        href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/advice-for-public">Advice
                                        For Public</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="col-md-6 col-12">
                    <ul class="list-unstyled">
                        <li class="py-3 news">
                            <div class="row">
                                <div class="col-md-1 col-1">
                                    <i class="far fa-dot-circle mx-2"></i>
                                </div>
                                <div class="col-md-11 col-10">
                                    <a
                                        href="https://www.google.com/search?q=coronavirus+prevention&rlz=1C1CHBD_enIN842IN842&oq=coronavirus+pre&aqs=chrome.1.69i57j0l6j69i60.7759j0j9&sourceid=chrome&ie=UTF-8">5
                                        Steps to prevent corona</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 news">
                            <div class="row">
                                <div class="col-md-1 col-1">
                                    <i class="far fa-dot-circle mx-2"></i>
                                </div>
                                <div class="col-md-11 col-10">
                                    <a href="https://www.mohfw.gov.in/">Ministry
                                        of Health and Family Welfare</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 news">
                            <div class="row">
                                <div class="col-md-1 col-1">
                                    <i class="far fa-dot-circle mx-2"></i>
                                </div>
                                <div class="col-md-11 col-10">
                                    <a href="https://www.mohfw.gov.in/">Ministry
                                        of Health and Family Welfare</a>
                                </div>
                            </div>
                        </li>
                        <li class="py-3 news">
                            <div class="row">
                                <div class="col-md-1 col-1">
                                    <i class="far fa-dot-circle mx-2"></i>
                                </div>
                                <div class="col-md-11 col-10">
                                    <a href="https://www.covid19india.org/">Detailed information about corona</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
        <!-- end of useful links section -->
        <div class="modal fade" id="city" v-if="cityAvailable">
            <div class="modal-dialog modal-dialog-centered modal-lg">
                <div class="modal-content border-0">
                    <div class="modal-body colorbg">
                        <div class="float-right">
                            <button class="btn btn-danger btn-sm" data-dismiss="modal">Close</button>
                        </div>
                        <div v-for="citydata in filteredCity.slice(0,100)" :key="citydata.id">
                            <div class="news p-3">
                                <div class="clearfix">
                                    <span class="text-left font-weight-bold text-danger">{{ citydata.category }}</span>
                                    <span class="float-right font-weight-bolder font-smaller"><em> {{ citydata.state }}
                                            / {{ citydata.city }}</em></span>
                                </div>
                                <div class="clearfix">
                                    <div class="row mt-3">
                                        <div class="col-md-2 col-12">
                                            <span class="font-weight-bolder mr-5">Description</span>
                                        </div>
                                        <div class="col-md-10 col-12">
                                            <p class="text-left">{{ citydata.descriptionandorserviceprovided }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 col-12">
                                            <span class="font-weight-bolder mr-5">Organisation</span>
                                        </div>
                                        <div class="col-md-10 col-12">
                                            <p class="text-left">{{ citydata.nameoftheorganisation }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 col-12">
                                            <span class="font-weight-bolder mr-5">Contact</span>
                                        </div>
                                        <div class="col-md-10 col-12">
                                            <p class="text-left">{{ citydata.phonenumber }}</p>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-md-2 col-12">
                                            <span class="font-weight-bolder mr-5">Website</span>
                                        </div>
                                        <div class="col-md-10 col-12">
                                            <!-- <router-link :to="citydata.contact">{{ citydata.contact }}</router-link> -->
                                            <a :href="citydata.contact" target="blank"
                                                class="text-left text-break">{{ citydata.contact }}</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <h3 class="text-danger">No data available please make sure spelling is correct</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    export default {
        name: "resource",
        data() {
            return {
                resoucedata: {},
                search: "",
                searchcity: "",
                rsc_length:"",
                No_of_rec: 30,
                receivedData: false,
                cityAvailable: false,
                cityData: {},
            }
        },
        created() {
            /////////////////////////// 
            //API call for list of country
            ////////////////////////// 
            const tokenurl = 'https://api.covid19india.org/resources/resources.json';
            axios({
                    method: 'get',
                    url: tokenurl,
                })
                .then((response) => {
                    this.resoucedata = response.data.resources.reverse();
                    this.rsc_length = this.resoucedata.length;
                    this.receivedData = true;

                })
                .catch((error) => {
                    this.errors = error;
                })

        },
        computed: {
            filteredList() {
                return this.resoucedata.filter(state => {
                    return state.state.toLowerCase().includes(this.search.toLowerCase())
                })
            },
            filteredCity() {
                return this.resoucedata.filter(city => {
                    return city.city.toLowerCase().includes(this.searchcity.toLowerCase())
                })
            },
        },
        methods: {
            toggleCity() {
                this.cityAvailable = true;
            },
        }
    }
</script>
<style scoped>
    .resc {
        margin-top: 20px;
    }

    .news {
        border-radius: 8px;
        margin-left: 5px;
        background-color: #ffffff;
        margin-top: 10px;
        margin-bottom: 5px;
    }

    .colorbg {
        background-color: #F6F7FD;
    }

    .form-control {
        padding: 10px !important;
        border: 2px solid #000;
    }

    .form-control:focus,
    .form-control.active {
        border: 2px solid #000000;
    }
</style>