<template>
    <div class="credits">
        <div id="mySidenav" class="sidenav">
            <a href="javascript:void(0)" class="closebtn mt-5 " @click="closeNav()">&times;</a>
            <a href="javascript:void(0)" class="btn btn-outline-light fixed-bottom position-relative  d-inline-block" @click="closeNav()">Close</a>
            <div class="container">
                <div class="row">
                    <div class="col-md-5 col-12">
                        <img src="@/assets/images/carousel/thanks.svg" alt="thanks" class="img-fluid" width="300" height="300">
                    </div>
                    <div class="col-md-2 col-12 display-2 text-danger">
                    Credits
                    </div>
                    <div class="col-md-5 col-12 extra-img">
                        <img src="@/assets/images/carousel/thanks1.svg" alt="thanks" class="img-fluid" width="400">
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-12 mx-auto my-auto">
                        <div class="news display-1">
                            Special Thanks to
                        </div>
                    </div>
                    <div class="col-md-6 col-12 mx-auto">
                        <div class="news">
                            <ul class="list-unstyled">
                                <li class="thanks-list"><a href="https://api.covid19india.org/">Covid19India.org For Api</a> </li>
                                <li class="thanks-list"><a href="https://corona.lmao.ninja/">https://corona.lmao.ninja/ For Api</a></li>
                                <li class="thanks-list"><a href="https://about-corona.net/">About-corona.net For Api</a></li>
                                <li class="thanks-list"><a href="https://undraw.co/illustrations">Undraw for Beautiful svg images</a></li>
                                <li class="thanks-list"><a href="https://cliply.co/clips/">Cliply for Beautiful gifs</a></li>
                                <li class="thanks-list"><a href="https://levelup.gitconnected.com/building-covid-19-dashboard-with-charts-js-and-vue-js-5b054443fa4">Diligent Dev for blog on vue.js+chart.js</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:"credits",
    methods:{
        openNav() {
            document.getElementById("mySidenav").style.width = "85%";
        },
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
         }
    },
}
</script>
<style scoped>
body {
  font-family: "Nunito", sans-serif;
}
.news{
        border-radius: 8px;
        margin-top: 5px;
        background-color: #E5E7E9;
        color: #1C2833;
        font-weight: 700;
}
.thanks-list{
        border-radius: 8px;
        display: block;
        margin-top: 10px;
        margin-bottom: 5px;
        padding: 14px 18px;
}
.thanks-list a:hover{
text-decoration: none;
color: #1C2833;
font-weight: 700;
}

.sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  bottom: 0;
  right: 0;
  background-color: #1C2833;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
  text-align:center;
}

.sidenav .closebtn {
  position: absolute;
  color: #fff;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

.sidenav .closebtn:hover{
 color: #ffffff;
}
@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
@media (max-width: 576px){
    .extra-img{
        display: none;
    }
    .display-1{
        font-size: 40px!important;
    }
    .display-2{
        font-size: 50px!important;
    }

}

    
</style>