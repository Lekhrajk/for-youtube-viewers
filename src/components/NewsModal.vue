<template>
        <div>
        <!-- The Modal-->
        <div class="modal fade" id="news" ref="news-modal" v-if="loaded">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">  
                    <div class="modal-body colorbg">
                         <h4>Live updates today<a class="btn btn-danger btn-sm float-right text-white" data-dismiss="modal">Close</a></h4>
                        <div class="p-3">
                            <ul class="list-unstyled" v-for="updates in news.slice(0,10)" :key="updates.id">
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="fas fa-arrow-right ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            {{ updates.update }}
                                            <div class="float-right"><small><em> {{ updates.timestamp | formatTime }}</em></small></div>
                                        </div>
                                    </div>
                                </li>
                            </ul>
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
    name: "newsmodal",
    data(){
        return{
            news:{},
            loaded: false,
            update_time:[],
        }
    },
    created(){
             //updates or news
            const tokennewmodal = 'https://api.covid19india.org/updatelog/log.json';
            axios({
                    method: 'get',
                    url: tokennewmodal,
                })
                .then((response) => {
                    this.news = response.data.reverse();
                    this.loaded = true;
                })
                .catch((error) => {
                    this.errors = error;
                }) 
    },
}
</script>
<style scoped>
     .news{
        border-radius: 8px;
        margin-left: 5px;
        background-color: #ffffff;
    }    
    .colorbg{
        background-color: #F6F7FD;
    }
</style>