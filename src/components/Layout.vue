<template>
    <div class="nav-fixed">
        <nav class="topnav navbar navbar-expand shadow navbar-light bg-white" id="sidenavAccordion">
            <div class="sidebar-heading"><a class="ml-2 brand" href="#" data-aos="zoom-out" data-aos-duration="3000"> COVID-19 <i class="fas fa-viruses mx-sm-5 mx-0 fa-lg"></i> </a></div><button class="btn btn-icon btn-transparent-dark order-1 order-sm-0 mr-lg-2" id="sidebarToggle" href="#"><i class="fas fa-bars fa-lg"></i></button>
            <ul class="navbar-nav align-items-center ml-auto">
                <li class="nav-item">
                    <a href="#" class="nav-link" data-target="#news" data-toggle="modal" @click="notification"><i class="fas fa-newspaper fa-lg"></i><sub class="noti text-white bg-danger" id="noti">news</sub></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link btn btn-light btn-sm text-dark" target="blank" href="https://api.whatsapp.com/send?phone=+91(9013)-151-515&text=Namaste"><span class="mr-1"><i class="fab fa-whatsapp mx-2 fa-lg"></i>Help </span></a>
                </li>
            </ul>
        </nav>
        <!-- Sidebar -->
        <div id="layoutSidenav">
            <div id="layoutSidenav_nav">
                <nav class="sidenav shadow-right sidenav-light">
                    <div class="sidenav-menu">
                        <div class="nav accordion" id="accordionSidenav">
                            <div class="list-group list-group-flush">
                                <router-link to="dashboard" class="list-group-item list-group-item-action">
                                    <div class="row">
                                        <div class="col-3 col-md-3">
                                            <i class="fas fa-desktop fa-lg mx-2"></i>
                                        </div>
                                        <div class="col-md-9 col-9">
                                            Dashboard
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="statewise" class="list-group-item list-group-item-action">
                                    <div class="row">
                                        <div class="col-3 col-md-3">
                                            <i class="fas fa-flag fa-lg mx-2"></i>
                                        </div>
                                        <div class="col-md-9 col-9">
                                            India Statewise
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="worldwide" class="list-group-item list-group-item-action">
                                    <div class="row">
                                        <div class="col-3 col-md-3">
                                            <i class="fas fa-globe fa-lg mx-2"></i>
                                        </div>
                                        <div class="col-md-9 col-9">
                                            Worldwide stats
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="resources" class="list-group-item list-group-item-action">
                                    <div class="row">
                                        <div class="col-3 col-md-3">
                                            <i class="fas fa-hand-holding-medical fa-lg mx-2"></i>
                                        </div>
                                        <div class="col-md-9 col-9">
                                            Resources
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="helpinghands" class="list-group-item list-group-item-action">
                                    <div class="row">
                                        <div class="col-3 col-md-3">
                                            <i class="fas fa-hands-helping fa-lg mx-2"></i>
                                        </div>
                                        <div class="col-md-9 col-9">
                                            Helping Hands
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="tips" class="list-group-item list-group-item-action">
                                    <div class="row">
                                        <div class="col-3 col-md-3">
                                            <i class="fas fa-lightbulb fa-lg mx-2"></i>
                                        </div>
                                        <div class="col-md-9 col-9">
                                            Do's & Don'ts
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="donate" class="list-group-item list-group-item-action">
                                    <div class="row">
                                        <div class="col-3 col-md-3">
                                            <i class="fas fa-hand-holding-usd fa-lg mx-2"></i>
                                        </div>
                                        <div class="col-md-9 col-9">
                                            Donate
                                        </div>
                                    </div>
                                </router-link>
                                <router-link to="version" class="list-group-item list-group-item-action">
                                    <div class="row">
                                        <div class="col-3 col-md-3">
                                            <i class="fab fa-vine fa-lg mx-2"></i>
                                        </div>
                                        <div class="col-md-9 col-9">
                                            Version 2.0
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="sidenav-footer">
                        <div class="sidenav-footer-content">
                            <div class="sidenav-footer-subtitle"> <img class="img-fluid" src="@/assets/images/carousel/rocket.gif" width="50"/> Hosted on <a href="#" @click="openNav()"><img src="@/assets/thanks.gif" class="img-fluid float-right"  width="50"/></a></div>
                            <div class="sidenav-footer-title"><a href="https://www.xongl.com/" target="blank" ><i class="fab fa-cloudversify mr-2"></i> Xongl Cloud Pvt. Ltd.</a></div>
                        </div>
                    </div>
                </nav>
            </div>
        
        <!-- /#sidebar-wrapper -->
        <!-- Page Content -->
        <div id="layoutSidenav_content" class="colorbg ">
            <main>
                <div>
                    <NewsModal />
                    <Credits/>
                    <router-view></router-view>
                </div>
            </main>
            <!-- /#page-content-wrapper -->
            <footer class="footer sticky">
                <div class="footer-bottom">
                    <div class="container">
                        <div class="row">
                            <div class="d-flex align-items-center col-md-6 col-12">
                                <p class="text-small">© 2020-2021 <a href="http://lrajkashyap.dx.am/personal/" target="_blank">Haryanvi
                                        Developer</a>. All rights reserved.<a data-toggle="modal" data-target="#terms" class="text-small mx-2">T&C</a>
                                </p>
                            </div>
                            <div class="col-md-6 col-12 align-items-end">
                                <div class="social-icons text-right">
                                    <a href="https://github.com/Lekhrajk" class="mx-2"><i class="fab fa-2x  fa-github"></i></a>
                                    <a href="https://www.facebook.com/lekhraj.kashyap.75?ref=bookmarks" class="mx-2"><i class="fab fa-2x  fa-facebook"></i></a>
                                    <a href="https://www.linkedin.com/in/lekhraj-kashyap-b1aa15139/" class="mx-2"><i class="fab fa-2x  fa-linkedin"></i></a>
                                    <a href="https://www.youtube.com/channel/UCDGDXevsQo67KVkmjrd9ruQ" class="mx-2"><i class="fab fa-2x  fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
        </div>
        <div class="modal fade" id="terms">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">
                    <!-- Modal body -->
                    <div class="modal-body colorbg">
                        <h4>Terms and Conditions <a class="btn btn-danger btn-sm float-right text-white" data-dismiss="modal">Close</a>
                        </h4>
                        <div class="p-3">
                            <ul class="list-unstyled">
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            Neither in any way i did modification in the data.
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            Real Data maybe Differ.
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            I don't gurantee that data is 100% accurate.
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            I am just fetching data from third party API.
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            This website is totally for spreading awareness among people about the corona virus.
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            I don't sell anykind of information .
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            Website doesn't contains any kind promotional data or ads.
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            This dashboard is just for knowledge purpose.
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            All the reference of data is taken from https://www.covid19india.org website.
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            As a resource from https://www.covid19india.org
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            For more accurate and statistics data please visit <a href="https://www.covid19india.org/">covid19india.org</a>
                                        </div>
                                    </div>
                                </li>
                                <li class="py-3 news">
                                    <div class="row">
                                        <div class="col-md-1 col-1">
                                            <i class="far fa-dot-circle ml-2"></i>
                                        </div>
                                        <div class="col-md-11 col-10">
                                            If anybody find this is illegal or anyway wrong please contact me.
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BacktoTop />
        <div class="fixed-bottom d-sm-none d-inline">
            <a href="https://www.xongl.com/" target="blank" class="badge badge-primary float-right" ><i class="fab fa-cloudversify mr-2"></i>Hosted on Xongl Cloud</a>
        </div>
    </div>
</template>
<script>
  import jquery from 'jquery';
  import Credits from '@/components/Credits'
  import NewsModal from '@/components/NewsModal'
  import BacktoTop from '@/components/BacktoTop'
  export default {
    name: "MainContainer",
    mounted() {
        jquery("#sidebarToggle").on("click", function(e) {
            e.preventDefault();
            jquery("body").toggleClass("sidenav-toggled");
        });
          jquery("#layoutSidenav_content").click(function() {
          if (window.innerWidth >= 992) {
            return;
          }

          if (jquery("body").hasClass("sidenav-toggled")) {
              jquery("body").toggleClass("sidenav-toggled");
          }
        });
    },
    components: {
      NewsModal,
      BacktoTop,
      Credits
    },
    methods: {
        openNav() {
            document.getElementById("mySidenav").style.width = "82%";
        },
        closeNav() {
            document.getElementById("mySidenav").style.width = "0";
         },
         notification(){
           document.getElementById("noti").style.display = "none";
         }

    }

  }
</script>
<style scoped>
  body {
    overflow-x: hidden;
    background-color: #F6F7FD;
  }

  * {
    font-family: Nunito, sans-serif;
  }

  .colorbg {
    background-color: #F6F7FD;
  }
  .navbar {
    -webkit-box-shadow: 0 9px 18px rgba(0, 0, 0, 0.1);
    box-shadow: 0 9px 18px rgba(0, 0, 0, 0.1);
    border: none !important;
  }

  .navbar .navbar-nav .nav-item {
    margin-right: .25rem;
    margin-right: .25rem;
  }

 .fixed-top, .nav-fixed #layoutSidenav #layoutSidenav_nav, .nav-fixed .topnav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 1030;
}
#layoutSidenav {
  display: -webkit-box;
  display: flex;
}
#layoutSidenav #layoutSidenav_nav {
  flex-basis: 15rem;
  flex-shrink: 0;
  -webkit-transition: -webkit-transform 0.15s ease-in-out;
  transition: -webkit-transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out;
  transition: transform 0.15s ease-in-out, -webkit-transform 0.15s ease-in-out;
  z-index: 1038;
  -webkit-transform: translateX(-15rem);
          transform: translateX(-15rem);
}
#layoutSidenav #layoutSidenav_content {
  position: relative;
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  -webkit-box-pack: justify;
          justify-content: space-between;
  min-width: 0;
  -webkit-box-flex: 1;
          flex-grow: 1;
  min-height: calc(100vh - 3.625rem);
  margin-left: -15rem;
}

.sidenav-toggled #layoutSidenav #layoutSidenav_nav {
  -webkit-transform: translateX(0);
          transform: translateX(0);
}
.sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000;
  z-index: 1037;
  opacity: 0.5;
  -webkit-transition: opacity 0.3s ease-in-out;
  transition: opacity 0.3s ease-in-out;
}

@media (min-width: 992px) {
  #layoutSidenav #layoutSidenav_nav {
    -webkit-transform: translateX(0);
            transform: translateX(0);
  }
  #layoutSidenav #layoutSidenav_content {
    margin-left: 0;
    -webkit-transition: margin 0.15s ease-in-out;
    transition: margin 0.15s ease-in-out;
  }

  .sidenav-toggled #layoutSidenav #layoutSidenav_nav {
    -webkit-transform: translateX(-15rem);
            transform: translateX(-15rem);
  }
  .sidenav-toggled #layoutSidenav #layoutSidenav_content {
    margin-left: -15rem;
  }
  .sidenav-toggled #layoutSidenav #layoutSidenav_content:before {
    display: none;
  }
}
.nav-fixed .topnav {
  z-index: 1039;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav {
  width: 15rem;
  height: 100vh;
  z-index: 1038;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav {
  padding-top: 3.625rem;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav .sidenav-menu {
  overflow-y: auto;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav .sidenav-menu::-webkit-scrollbar {
  display: block;
  width: 0.5rem;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav .sidenav-menu::-webkit-scrollbar-thumb {
  border-radius: 10rem;
  height: 3em;
  border-width: 0.1rem;
  border-style: solid;
  background-clip: padding-box;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav .sidenav-menu::-webkit-scrollbar-button {
  width: 0;
  height: 0;
  display: none;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav .sidenav-menu::-webkit-scrollbar-corner {
  background-color: transparent;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav .sidenav-menu:hover::-webkit-scrollbar {
  display: block;
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav.sidenav-light .sidenav-menu::-webkit-scrollbar-thumb {
  background-color: #c5ccd6;
  border-color: rgba(0, 0, 0, 0);
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav.sidenav-light .sidenav-menu::-webkit-scrollbar-track {
  background-color: rgba(31, 45, 65, 0.05);
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav.sidenav-dark .sidenav-menu::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.25);
  border-color: rgba(0, 0, 0, 0);
}
.nav-fixed #layoutSidenav #layoutSidenav_nav .sidenav.sidenav-dark .sidenav-menu::-webkit-scrollbar-track {
  background-color: rgba(255, 255, 255, 0.1);
}
.nav-fixed #layoutSidenav #layoutSidenav_content {
  padding-left: 15rem;
  top: 3.625rem;
}
  .news {
    border-radius: 8px;
    margin-left: 5px;
    background-color: #ffffff;
    margin-top: 10px;
    margin-bottom: 5px;
  }

  .brand {
    font-weight: 600;
    font-size: 22px;
    color: #0000ff !important;
  }

  .brand:hover {
    text-decoration: none;
    color: #0000ff !important;
    font-weight: 700 !important;
  }

  .list-group-item-action {
    border: none !important;
    margin-top: 8px !important;
  }

  .list-group-item.router-link-active {
    background-color: #E5E7E9 !important;
    color: #000 !important;
    font-weight: 600 !important;
    border-right: 5px solid #0000ff !important;
  }

  /* footer */
  .footer {
    color: #A6ACAF;
    background-color: #17202A;
    padding-top: 8px;
    padding-bottom: 5px;
  }

  .footer p {
    margin-bottom: 0.25rem;
  }

  .footer a {
    font-weight: 600;
    color: #fff;
  }

  .footer a:hover {
    color: #0000ff;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    .social-icons {
      text-align: center !important;
      align-items: center !important;
    }

    .container-fluid {
      padding: 0px;
    }
    .brand{
      font-size: 17px!important;
    }
  }
  .topnav {
  padding-left: 0;
  height: 3.625rem;
  z-index: 1039;
  font-size: 0.9rem;
}
.topnav .navbar-brand {
  width: 15rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}
.topnav .navbar-brand img {
  height: 0.8rem;
}
.topnav.navbar-dark #sidebarToggle {
  color: rgba(255, 255, 255, 0.5);
}
.topnav.navbar-dark .navbar-brand {
  color: #fff;
}
.topnav.navbar-light #sidebarToggle {
  color: #1f2d41;
}
.topnav.navbar-light .navbar-brand {
  color: #323f52;
}

.nav .nav-link .nav-link-icon,
.sidenav-menu .nav-link .nav-link-icon {
  margin-right: 0.5rem;
}

.navbar .dropdown-menu {
  top: calc(100% + 0.5rem + 0.5rem) !important;
  font-size: 0.9rem;
}
.navbar .dropdown-menu .dropdown-header {
  color: #a2acba;
}
.navbar .form-control {
  font-size: 0.9rem;
}


/* end of navbar css */

/* shadow css */

/* end of css */
.shadow-sm {
  box-shadow: 0 0.125rem 0.25rem 0 rgba(31, 45, 65, 0.2) !important;
}

.shadow {
  box-shadow: 0 0.15rem 1.75rem 0 rgba(31, 45, 65, 0.15) !important;
}

.shadow-lg {
  box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
}

.shadow-none {
  box-shadow: none !important;
}

/* end of top nav */
/* sidenav */

nav .nav-link .nav-link-icon,
.sidenav-menu .nav-link .nav-link-icon {
  margin-right: 0.5rem;
}

.navbar .dropdown-menu {
  top: calc(100% + 0.5rem + 0.5rem) !important;
  font-size: 0.9rem;
}
.navbar .dropdown-menu .dropdown-header {
  color: #a2acba;
}
.navbar .form-control {
  font-size: 0.9rem;
}

.topnav {
  padding-left: 0;
  height: 3.625rem;
  z-index: 1039;
  font-size: 0.9rem;
}
.topnav .navbar-brand {
  width: 15rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0;
  font-size: 1rem;
  font-weight: bold;
}
.topnav .navbar-brand img {
  height: 0.8rem;
}
.topnav.navbar-dark #sidebarToggle {
  color: rgba(255, 255, 255, 0.5);
}
.topnav.navbar-dark .navbar-brand {
  color: #fff;
}
.topnav.navbar-light #sidebarToggle {
  color: #1f2d41;
}
.topnav.navbar-light .navbar-brand {
  color: #323f52;
}

.nav-sticky {
  top: 5.125rem;
  font-size: 0.9rem;
}
.nav-sticky .nav-link {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.nav-sticky .nav-link.active {
  font-weight: 600;
}
.nav-sticky ul.nav > li.nav-item > .nav {
  display: none;
}
.nav-sticky ul.nav > li.nav-item > a.nav-link.active ~ .nav {
  display: -webkit-box;
  display: flex;
}

.sidenav {
  display: -webkit-box;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  height: 100%;
  flex-wrap: nowrap;
  font-size: 0.9rem;
}
.sidenav .sidenav-menu {
  -webkit-box-flex: 1;
          flex-grow: 1;
}
.sidenav .sidenav-menu .nav {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  flex-wrap: nowrap;
}
.sidenav .sidenav-menu .nav .sidenav-menu-heading {
  padding: 1.75rem 1rem 0.75rem;
  font-size: 0.7rem;
  font-weight: bold;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}
.sidenav .sidenav-menu .nav .nav-link {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
          align-items: center;
  line-height: normal;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  position: relative;
}
.sidenav .sidenav-menu .nav .nav-link .nav-link-icon {
  font-size: 0.9rem;
  padding-right: 0.5rem;
  display: -webkit-inline-box;
  display: inline-flex;
}
.sidenav .sidenav-menu .nav .nav-link .nav-link-icon .feather {
  width: 1rem;
  height: 1rem;
}
.sidenav .sidenav-menu .nav .nav-link.active {
  font-weight: 600;
}
.sidenav .sidenav-menu .nav .nav-link.active .nav-icon {
  color: #0061f2;
}
.sidenav .sidenav-menu .nav .nav-link .sidenav-collapse-arrow {
  display: inline-block;
  margin-left: auto;
  -webkit-transition: -webkit-transform 0.15s ease;
  transition: -webkit-transform 0.15s ease;
  transition: transform 0.15s ease;
  transition: transform 0.15s ease, -webkit-transform 0.15s ease;
}
.sidenav .sidenav-menu .nav .nav-link.collapsed .sidenav-collapse-arrow {
  -webkit-transform: rotate(-90deg);
          transform: rotate(-90deg);
}
.sidenav .sidenav-menu .nav .sidenav-menu-nested {
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
          flex-direction: column;
  margin-left: 1.4375rem;
  border-left-style: solid;
  border-left-width: thin;
  padding-left: 0.5625rem;
}
.sidenav .sidenav-footer {
  display: -webkit-box;
  display: flex;
  flex-shrink: 0;
  -webkit-box-align: center;
          align-items: center;
  padding-left: 0.75rem;
  padding-right: 0.75rem;
  height: 5rem;
}
.sidenav .sidenav-footer .sidenav-footer-content {
  font-size: 0.9rem;
}
.sidenav .sidenav-footer .sidenav-footer-content .sidenav-footer-subtitle {
  font-size: 0.75rem;
}
.sidenav .sidenav-footer .sidenav-footer-content .sidenav-footer-title {
  font-weight: 500;
}

.sidenav-dark {
  background-color: #1f2d41;
  color: rgba(255, 255, 255, 0.5);
}
.sidenav-dark .sidenav-menu .sidenav-menu-heading {
  color: rgba(255, 255, 255, 0.25);
}
.sidenav-dark .sidenav-menu .nav-link {
  color: rgba(255, 255, 255, 0.5);
}
.sidenav-dark .sidenav-menu .nav-link .nav-link-icon {
  color: rgba(255, 255, 255, 0.25);
}
.sidenav-dark .sidenav-menu .nav-link .sidenav-collapse-arrow {
  color: rgba(255, 255, 255, 0.25);
}
.sidenav-dark .sidenav-menu .nav-link:hover {
  color: #fff;
}
.sidenav-dark .sidenav-menu .nav-link.active {
  color: #fff;
}
.sidenav-dark .sidenav-menu .nav-link.active .nav-link-icon {
  color: #fff;
}
.sidenav-dark .sidenav-menu-nested {
  border-left-color: rgba(255, 255, 255, 0.15);
}
.sidenav-dark .sidenav-footer {
  background-color: rgba(0, 0, 0, 0.25);
}

.sidenav-light {
  background-color: #fff;
  color: #1f2d41;
}
.sidenav-light .sidenav-menu .sidenav-menu-heading {
  color: #a2acba;
}
.sidenav-light .sidenav-menu .nav-link {
  color: #1f2d41;
}
.sidenav-light .sidenav-menu .nav-link .nav-link-icon {
  color: #a2acba;
}
.sidenav-light .sidenav-menu .nav-link .sidenav-collapse-arrow {
  color: #a2acba;
}
.sidenav-light .sidenav-menu .nav-link:hover {
  color: #0061f2;
}
.sidenav-light .sidenav-menu .nav-link.active {
  color: #0061f2;
}
.sidenav-light .sidenav-menu .nav-link.active .nav-link-icon {
  color: #0061f2;
}
.sidenav-light .sidenav-menu-nested {
  border-left-color: #d7dce3;
}
.sidenav-light .sidenav-footer {
  background-color: rgba(31, 45, 65, 0.05);
}
.sidenav-light .sidenav-footer .sidenav-footer-subtitle {
  color: #687281;
}
.shadow-right-sm {
  box-shadow: 0.125rem 0 0.25rem 0 rgba(31, 45, 65, 0.15);
}

.shadow-right {
  box-shadow: 0.15rem 0 1.75rem 0 rgba(31, 45, 65, 0.15);
}

.shadow-right-lg {
  box-shadow: 1rem 0 3rem 0 rgba(31, 45, 65, 0.15);
}

.shadow-left-sm {
  box-shadow: -0.125rem 0 0.25rem 0 rgba(31, 45, 65, 0.15);
}

.shadow-left {
  box-shadow: -0.15rem 0 1.75rem 0 rgba(31, 45, 65, 0.15);
}

.shadow-left-lg {
  box-shadow: -1rem 0 3rem 0 rgba(31, 45, 65, 0.15);
}
.noti{
  border-radius: 16px;
}
    
</style>