<template>
    <div>
        <button class="goTop" v-if="isVisible" @click="backToTop">
            <i class="fas fa-angle-up text-white fa-lg" aria-hidden="true"></i>
        </button>
    </div>
</template>
<script>
import jquery from 'jquery';
export default {
    name: "BacktoTop",
      data: function() {
    return {
      isVisible: false
    };
  },
  methods: {
        initToTopButton: function() 
        {
            let $ = jquery;
        $(document).bind('scroll', function() {
            var backToTopButton = $('.goTop');
            if ($(document).scrollTop() > 250) {
            backToTopButton.addClass('isVisible');
            this.isVisible = true;
            } else {
            backToTopButton.removeClass('isVisible');
            this.isVisible = false;
            }
        }.bind(this));
        },
        backToTop: function() 
        {  let $ = jquery;
            $('html,body').stop().animate({
                scrollTop: 0
            }, 'slow', 'swing');
        }
    },
    mounted: function() {
        this.$nextTick(function() {
        this.initToTopButton();
        });
    }
}
</script>
<style scoped>
    body {
  margin-top: 5px;
}

.navbar {
  margin-bottom: 0;
}

.box {
  height: 200px;
}
.box:first-of-type {
  background-color: #E5E7E9;
}
.box:last-of-type {
  background-color: #0000ff;
}

.goTop {
  border-radius: 8px;
  background-color: #EB984E;
  position: fixed;
  width: 40px;
  height: 40px;
  display: block;
  right: 15px;
  bottom: 45px;
  border: none;
  opacity: 0;
  z-index: -1;
}

.goTop:hover ,.goTop.active,.goTop:focus{
  opacity: 1;
  background-color: #010e1b;
  background-color: rgba(1, 14, 27, 0.9);
  outline: none;
}

.isVisible {
  opacity: .8;
  z-index: 4;
  -webkit-transition: all .4s ease-in;
  transition: all .4s ease-in;
}

</style>
