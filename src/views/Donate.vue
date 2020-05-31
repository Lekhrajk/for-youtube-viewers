<template>
    <div class="donate container-fluid px-0">
        <div class="bg-blue">
          <div class="p-5 ml-4">
              <h1 class="text-white display-4">Donate <img src="@/assets/images/carousel/handshake.gif" class="img-fluid rounded-circle" alt="donation" width="100" /></h1>
              <p class="text-white">Every single rupee counts</p>
          </div>
        </div>  
        <div class="row">
            <div class="mt-n10 card shadow-lg border-0 col-md-10 mx-auto p-4">
               <p>Prime Minister's National Relief Fund, (PMNRF) accepts voluntary contributions from Individuals, Organizations, Trusts, Companies and Institutions etc. All contributions towards PMNRF are exempt from Income Tax under section 80(G).</p>
               <ul class="nav nav-pills" role="tablist">
                    <li class="nav-item">
                       <a class="nav-link active" data-toggle="pill" href="#directpay">Direct Online</a>
                    </li>
                    <li class="nav-item">
                       <a class="nav-link" data-toggle="pill" href="#bhim">BHIM/UPI</a>
                    </li>
                </ul>
               <div class="p-4 mt-2">
                   <div class="tab-content">
                        <div id="directpay" class="container tab-pane active"><br>
                            <h3>Direct Pay online</h3>
                            <img src="@/assets/images/carousel/credit.gif" alt="credit card" class="img-fluid" width="200" >
                            <a href="https://pmnrf.gov.in/en/online-donation" class="btn btn-outline-primary">https://pmnrf.gov.in/en/online-donation</a>
                        </div>
                        <div id="bhim" class="container tab-pane fade"><br>
                            <h3>BHIM/UPI</h3>     
                            <div class="d-md-flex d-block">
                                <img src="@/assets/images/carousel/typing.gif" alt="credit card" class="img-fluid" width="200" >
                                <h5 class="mt-4">Pay using BHIM/UPI <span class="text-info ml-5">pmnrf@centralbank</span></h5>
                            </div>
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:"donate"
}
</script>
<style scoped>
.bg-blue{
  background-color: #0061f2;
  background-image: linear-gradient(135deg, #0061f2 0%, rgba(105, 0, 199, 0.8) 100%);
}
.container-fluid{
    overflow-x: hidden;
}
.mt-n10
{
  margin-top: -4rem !important;
}
@media (max-width: 576px){

}
    
</style>