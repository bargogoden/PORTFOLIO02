;(function($){



   var shop = {

    init:function(){
      this.picFn();
    },

    picFn:function(){
      var $pic1 = $('#section5 .content0');
      var $pic2 = $('#section5 .content1');
      var $pic3 = $('#section5 .wrap .gap .container .content .right-wrap .right-gap .slide-container .slide-view .slide-wrap .slide');


      $pic1.on({
        mouseenter:function(){
          $('#section5 .wrap').addClass('addPic1');
        },
        mouseleave:function(){
          $('#section5 .wrap').removeClass('addPic1');
        }
      });

      $pic2.on({
        mouseenter:function(){
          $('#section5 .wrap').addClass('addPic2');
        },
        mouseleave:function(){
          $('#section5 .wrap').removeClass('addPic2');
        }
      });
      $pic3.on({
        mouseenter:function(){
          $('#section5 .wrap').addClass('addPic3');
        },
        mouseleave:function(){
          $('#section5 .wrap').removeClass('addPic3');
        }
      });
    }
   }
   shop.init();
  
})(jQuery);