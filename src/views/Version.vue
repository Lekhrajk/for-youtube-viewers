<template>
    <div class="donate container-fluid px-0">
        <div class="bg-light-blue">
          <div class="p-5 ml-md-4 title-text">
              <h1 class="text-white display-1">Versions</h1>
              <p class="text-white">Covid-19 dashboard versions</p>
          </div>
        </div>  
        <div class="row">
            <div class="mt-n10 card border-0 col-md-10 mx-auto p-4">
               <div class="row">
                    <div class="col-sm-6 col-6 mx-auto">
                        <a href="#" class="title-large border-right pr-3" data-toggle="modal" data-target="#ver1">
                            Covid19 version 1.0
                        </a>
                    </div>
                    <div class="col-sm-6 col-6 mx-auto">
                        <a href="#" class="title-large border-left pl-3 active" data-toggle="modal" data-target="#ver2">
                            Covid19 version 2.0
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row mt-5">
            <div class="col-sm-12 col-12 mx-auto text-center">
                <span class="text-center"><i class="fas fa-praying-hands fa-3x text-info"></i></span>
                <h1 class="text-center">Stay Home Stay Safe</h1>
            </div>
        </div>
        <div class="modal fade" id="ver2">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">  
                    <div class="modal-body">
                        <div class="p-3 display-4 text-primary">
                        <i class="fas fa-grin"></i>
                          This is the Latest version 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
         <div class="modal fade" id="ver1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content border-0">  
                    <div class="modal-body">
                        <div class="p-3 h1 text-info">
                           Previous version is currently removed. 
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </div>
</template>
<script>
export default {
    name:"version"
}
</script>
<style scoped>
.bg-blue{
  background-color: #0061f2;
  background-image: linear-gradient(135deg, #0061f2 0%, rgba(105, 0, 199, 0.8) 100%);
}
.bg-light-blue{
 background-color: #0000ff;   
background-image: linear-gradient( -138deg,  rgba(32,201,255,1) 36.7%, rgba(0,8,187,1) 119.4%, rgba(255,255,255,1) 84.7% );
}
.container-fluid{
    overflow-x: hidden;
}
.mt-n10
{
  margin-top: -4rem !important;
}
.title-large{
    font-size: 40px;
    color: #A6ACAF;
}
.title-large:hover,.title-large.active,.title-large:focus{
    color:#0000ff;
    text-decoration: none;
}
@media (max-width: 576px){
    .title-text{
       margin-left: 0px!important;
    }
    .display-1{
        font-size: 50px!important;
    }
    .title-large{
        font-size: 30px;
        border: none!important;
        padding: 0px!important;
    }
}
    
</style>