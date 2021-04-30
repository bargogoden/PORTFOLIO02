;(function($){
  var landscape = {

    init:function(){
      
      this.headerFn();
      this.scrollFn();
      this.section1Fn();
      this.section2Fn();
      this.section3Fn();
      this.section4Fn();
      this.section5Fn();
      this.section6Fn();
      this.section7Fn();
      this.section8Fn();
      this.footerFn();

    },
    headerFn:function(){
      var $slideViewW                  = $('#section1 .slide-view').innerWidth();
      var $sec1Top                     = $('#section1').scrollTop();
      var headerH                      = 0;
      var $logo1                      = $('#header .big-logo');
      var $logo2                      = $('#header .small-logo');

      var currentScroll               = 0;
      var previousScroll               = 0;


      // 너비 리사이즈      
      function haederResizeFn(){
        $slideViewW                  = $('#section1 .slide-view').innerWidth();

        headerH = $slideViewW;
        $('#header').css({width:$slideViewW});
      }
      setTimeout(haederResizeFn,10);
      $(window).resize(function(){
        haederResizeFn();
      });

      //로고- 스크롤이벤트 

     $(window).scroll(function(){


      currentScroll = $(window).scrollTop();

        if(currentScroll-previousScroll>0){   //아래로 


          if($(window).scrollTop()> $('#section1').offset().top+100){

              console.log('아래료');


              console.log('로고이벤트보여야함'+currentScroll);
              $logo1.removeClass('addBye');
              $logo2.removeClass('addBye');
              $logo1.removeClass('addInSection');
              $logo2.removeClass('addInSection');

              $logo1.addClass('addLogoE');
              $logo2.addClass('addLogoE');
            


          }


          if($(window).scrollTop() > $('#section2').offset().top+600){

              console.log('section모드작동');
              $logo1.removeClass('addLogoE');
              $logo2.removeClass('addLogoE');
              $logo1.removeClass('addBye');
              $logo2.removeClass('addBye');
              $logo1.addClass('addInSection');
              $logo2.addClass('addInSection');


          }

       
        }
        if(currentScroll-previousScroll < 0){   //위로

          console.log('위료');
          if($(window).scrollTop() == 0){

              console.log('탑0 찍음');
              $logo1.removeClass('addInSection');
              $logo2.removeClass('addInSection');
              $logo1.removeClass('addLogoE');
              $logo2.removeClass('addLogoE');
              $logo1.addClass('addBye');
              $logo2.addClass('addBye');



          }
          if(0<$(window).scrollTop() && $(window).scrollTop()< $('#section2').offset().top+200){

              console.log('section모드작동');
              $logo1.removeClass('addLogoE');
              $logo2.removeClass('addLogoE');
              $logo1.removeClass('addBye');
              $logo2.removeClass('addBye');
              $logo1.addClass('addInSection');
              $logo2.addClass('addInSection');



          }




      } 
      previousScroll= currentScroll; 

     })





    },
    scrollFn:function(){

    },
    section1Fn:function(){
      var $slide                    = $('#section1 .slide');
      var $upSlideContent           = $('#section1 .up-slide-content');
      var $upSlide                  = $('#section1 .up-slide');


      var cnt = 0;
      var setId = null;
      var setId2 = null;

      var $slideViewW                  = $('#section1 .slide-view').innerWidth();
      var slideViewH                   = 0;
      var $slideView                   = $('#section1 .slide-view');
      var $upSlide                     = $('#section1 .wrap .gap .container .slide-container .upper-slide-wrap');
      var $upSlideEach                 = $('#section1 .up-slide');
      var upSlideW                     = 0;
      var upSlideH                     = 0;
      var $upH2                        = $('#section1 .upper-h2-wrap');
      var upH2W                        = 0; 
      var $upP                         = $('#section1 .upper-p-wrap');                       
      var upPW                         = 0; 
      var upPH                         = 0; 
      var $upSns                       = $('#section1 .upper-sns-wrap');
      var upSnsW                       = 0;               
      var upSnsH                       = 0;               


      //높이, 너비를 가지고 자동화 
      function sec1ResizeFn(){

        $slideViewW                  = $('#section1 .slide-view').innerWidth();


        if($(window).innerWidth()>1100){
          
          slideViewH  = $slideViewW*0.5625;
          upSlideW    = $slideViewW*0.14583333;
          upSlideH    = $slideViewW*0.20833333;
          upH2W       = $slideViewW*0.22;
          upPW        = $slideViewW*0.26041666;
          upPH        = $slideViewW*0.15625;
          upSnsW      = $slideViewW*0.1041666;
          upSnsH      = $slideViewW*0.04166666;

        
          $slideView.css({height:slideViewH});
          $upSlide.css({width:upSlideW,height:upSlideH});
          $upH2.css({width:upH2W});
          $upP.css({width:upPW,height:upPH});
          $upSns.css({width:upSnsW,height:upSnsH});
        }
        if($(window).innerWidth()<1101){
          
          slideViewH  = $slideViewW*0.5625;
          upSlideW    = $slideViewW*0.27766666032;
          upSlideH    = $slideViewW*0.39666666032;
          upH2W       = $slideViewW*0.22;
          upPW        = $slideViewW*0.24;
          upPH        = $slideViewW*0.15625;
          upSnsW      = $slideViewW*0.1041666;
          upSnsH      = $slideViewW*0.04166666;

        
          $slideView.css({height:slideViewH});
          $upSlide.css({width:upSlideW,height:upSlideH});
          $upH2.css({width:upH2W});
          $upP.css({width:upPW,height:upPH});
          $upSns.css({width:upSnsW,height:upSnsH});
        }

        if($(window).innerWidth()<781){
          slideViewH  = $slideViewW*0.75;
          upSlideW    = $slideViewW*0.3966666576;
          upSlideH    = $slideViewW*0.5666666576;
          upH2W       = $slideViewW*0.38;
          upPW        = $slideViewW;


          $slideView.css({height:slideViewH});
          $upSlide.css({width:upSlideW,height:upSlideH});
          $upH2.css({width:upH2W});
          $upP.css({width:upPW});

        } 
        if($(window).innerWidth()<600){
          slideViewH  = $slideViewW*0.85;
          upSlideW    = $slideViewW*0.3966666576;
          upSlideH    = $slideViewW*0.5666666576;
          upH2W       = $slideViewW*0.38;
          upPW        = $slideViewW;


          $slideView.css({height:slideViewH});
          $upSlide.css({width:upSlideW,height:upSlideH});
          $upH2.css({width:upH2W});
          $upP.css({width:upPW});

        } 
        if($(window).innerWidth()<400){
          slideViewH  = $slideViewW*1.2;
          upSlideW    = $slideViewW*0.3966666576;
          upSlideH    = $slideViewW*0.5666666576;
          upH2W       = $slideViewW*0.38;
          upPW        = $slideViewW;


          $slideView.css({height:slideViewH});
          $upSlide.css({width:upSlideW,height:upSlideH});
          $upH2.css({width:upH2W});
          $upP.css({width:upPW});

        } 

      }
      setTimeout(sec1ResizeFn,10);

      $(window).resize(function(){
        sec1ResizeFn();
      });






    

      //1.메인슬라이드함수 
      function mainNextSlideFn(){
        //cnt = 1,2,3,0
        //초기화
        $slide.css({zIndex:1,opacity:0});
        $upSlide.css({zIndex:1});
        $('#section1 .slide-content').removeClass('addSlideEffect');
        $upSlideContent.eq(cnt).removeClass('addSlideEffect');
       


        //본함수내용
        $slide.eq(cnt<0?cnt=3:cnt-1).css({zIndex:3,opacity:1});  //0,1,2


        $slide.eq(cnt).css({zIndex:4}).stop().animate({opacity:0},0).animate({opacity:1},1000); //1,2,3

        addTopFn();
        function addTopFn(){
          $slide.eq(cnt).find('.slide-content').addClass('addSlideEffect');
          $upSlideContent.eq(cnt).addClass('addSlideEffect');
          $upSlide.eq(cnt).addClass('addSlideEffect');
          
        }
        
        timerFn();
      };

      //1-1 upper 슬라이드 함수 

      function upMainSlideFn(){

        //기본설정 
        $upSlideEach.css({zIndex:1,opacity:0}); 

        //본 함수 내용
        $upSlideEach.eq(cnt<1?3:cnt-1).css({zIndex:3,opacity:1}); 
        $upSlideEach.eq(cnt).css({zIndex:4,opacity:1}).find('.up-slide-content').stop().animate({width:0},0).animate({width:100+'%'},4000); 
        
        timerFn();
      }

      //2.카운트슬라이드함수
      function nextSlideCountFn(){

        if(cnt>=3){cnt = -1}
        cnt++;
         mainNextSlideFn();
         upMainSlideFn();

      }
     
      //3.버튼등록
      //4.스와이프등록

      //오토함수
      
      function autoplayFn(){
        setId = setInterval(nextSlideCountFn,0);   
      }
      setTimeout(autoplayFn,0);


      //타이머함수
      function timerFn(){
        var t = 0;
        
        clearInterval(setId);
        clearInterval(setId2);

        setId2 = setInterval(function(){
          if(!$slide.is(':animated')){
         
          t++;
          if(t>=7){
            clearInterval(setId);
            clearInterval(setId2);
            nextSlideCountFn();
             t=0;
          }
        }
        },1000);
      
      }

      

    },
    section2Fn:function(){
      var $txtWrap        = $('#section2 .txt-wrap');
      var $quotWrap       = $('#section2 .quot-wrap');
      var $profWrap       = $('#section2 .prof-wrap');
      var t               = 0;

      var $bg             = $('#section2 .slide-bg');
      var bgTop           = 0;
      var newScrollTop    = 0;
      var oldScrollTop    = 0;

      var sec2H             = 0;
      var $sec2W            = $('#section2').innerWidth();
      var $slide            = $('#section2 .slide');
      var $slideView        = $('#section2 .slide-view');
      var $sunsetBg         = $('#section2 .slide-content');
      var txtWrapW          = 0;
      var profWrapW         = 0;
      var quotWrapW         = 0; 

      //resize
      function sec2ResizeFn(){
        $sec2W            = $('#section2').innerWidth();

        if($(window).innerWidth()>780){
          sec2H             = $sec2W*2.08333333;
          txtWrapW          = $sec2W*0.625;
          profWrapW         = $sec2W*0.41666666;
          quotWrapW         = $sec2W*0.11;

  
  
          $('#section2').css({height:sec2H});
          $slide.css({height:sec2H});
          $sunsetBg.css({height:sec2H});
          $txtWrap.css({width:txtWrapW});
          $profWrap.css({width:profWrapW});
          $quotWrap.css({width:quotWrapW});
          $slideView.css({overflow:'hidden'});
  
        }
        
        if($(window).innerWidth()<781){
          sec2H             = $sec2W*2.08333333;
          txtWrapW          = $sec2W*0.8;
          profWrapW         = $sec2W*0.41666666;
          quotWrapW         = $sec2W*0.1;
  
  
          $('#section2').css({height:sec2H});
          $slide.css({height:sec2H});
          $sunsetBg.css({height:sec2H});
          $txtWrap.css({width:txtWrapW});
          $profWrap.css({width:profWrapW});
          $quotWrap.css({width:quotWrapW});
          $slideView.css({overflow:'hidden'});
  
        }

        if($(window).innerWidth()<600){
          sec2H             = $sec2W*2.08333333;
          txtWrapW          = $sec2W*0.8;
          profWrapW         = $sec2W*0.41666666;
          quotWrapW         = $sec2W*0.5;
  
  
          $('#section2').css({height:sec2H});
          $slide.css({height:sec2H});
          $sunsetBg.css({height:sec2H});
          $txtWrap.css({width:txtWrapW});
          $profWrap.css({width:profWrapW});
          $quotWrap.css({width:quotWrapW});
          $slideView.css({overflow:'hidden'});
  
        }
        if($(window).innerWidth()<500){
          sec2H             = $sec2W*2.08333333;
          txtWrapW          = $sec2W*0.8;
          profWrapW         = $sec2W*0.7;
  
  
          $('#section2').css({height:sec2H});
          $slide.css({height:sec2H});
          $sunsetBg.css({height:sec2H});
          $txtWrap.css({width:txtWrapW});
          $profWrap.css({width:profWrapW});
          $quotWrap.css({display:'none'});
          $slideView.css({overflow:'hidden'});
  
        }




      }
      setTimeout(sec2ResizeFn,10);

      $(window).resize(function(){
        sec2ResizeFn();
      });
      




      //text-wrap 영역안에서만 등장시키기
        $(window).scroll(function(){
          if($(window).scrollTop()>=$('#section2').offset().top-500){
            // if(t=0){
            //   t=1;

              $txtWrap.addClass('addShow');
              $quotWrap.addClass('addShow');
              $profWrap.addClass('addShow');
            }


          // }
          if($(window).scrollTop()<=$('#section2').offset().top){
            $txtWrap.removeClass('addShow');
            $quotWrap.removeClass('addShow');
            $profWrap.removeClass('addShow');

          }

          if($(window).scrollTop()>=$('#section3').offset().top-500){
      
              $txtWrap.removeClass('addShow');
              $quotWrap.removeClass('addShow');
              $profWrap.removeClass('addShow');

          }

          //backgroundImg 스크롤이벤트로 움직이기
            

          if($(window).scrollTop()>=$('#section2').offset().top>0 && $(window).scrollTop()<$('#section3').offset().top+400){
            newScrollTop = $(window).scrollTop();

              
              if(newScrollTop-oldScrollTop > 0){         //아래로
                bgTop+=2;                               //배경은 아래로
                $bg.css({top:bgTop});                    //적용          
              }
            
              if(oldScrollTop-newScrollTop > 0){        //위로
                bgTop-=2;                                //배경은 위로
                $bg.css({top:bgTop});                   //적용
              }


                    
            oldScrollTop=newScrollTop;                //oldScrollTop도 정의 // 그래야 숫자가 잡힌다. 
          }



          
        });



    },
    section3Fn:function(){

      var $sec3W                = $('#section3').innerWidth();
      var sec3H                 = 0;
      var sec3Padding           = 0;
      var $slideContainer       = $('#section3 .slide-container');
      var slideConH             = 0;
      
      var $galBtn               = $('#section3 .gal-btn');
      var $sec3SlideWrap        = $('#section3 .slide-wrap');
      var $sec3Slide            = $('#section3 .slide');

      var btnNum                = 0;
      var rows                  = Math.ceil(n/cols);  //반응형으로 cols가 바뀔때마다 줄수가 자동으로 바뀌게 하는 설정
      var cols                  = 3;                  //기본이 3칸
      var n                     = $('#section3 .slide').length;
      var imgW                  = $(window).innerWidth()/cols;
      var imgH                  = 0;                  //slideConH/3 ,이 식을 액티브갤러리함수안에서 선언해서 쓰자.
      var winW                  = $(window).innerWidth();


      //RESIZE
      function sec3ResizeFn(){
        $sec3W                = $('#section3').innerWidth();
        
        sec3Padding = $sec3W*0.0677083333;

        $('#section3').css({paddingTop:sec3Padding,paddingBottom:sec3Padding});
      }
      setTimeout(sec3ResizeFn,10);


      //parallax

      $(window).scroll(function(){
        if($(window).scrollTop()> $('#section3').offset().top-500 ){

          console.log('갤러리 패럴럭스 구동해야함');
          $('#section3 img').addClass('addGal');
        }
      });


      //ACTIVE GALLERY

      function responseGalleryFn(){

        winW                  = $(window).innerWidth();


       //1.responsive gallery function- 너비에 따른 cols변화 //여기서 cols는 1,2,3 총 3가지로 설정 됨.
        if(winW>1400)       {cols = 3;}
        else if(winW>780)   {cols = 2;}
        else if(winW<781)   {cols = 1;}


        //이미지 너비 설정//높이는 이미 리사이즈에서 정의 
        imgW = winW/cols; 
        imgH = imgW*0.565769498;


       //2. 버튼별로  slide-wrap, slide, imgW , imgH 설정
       //All
       if(btnNum == 0){
         n =7;
         rows = Math.ceil(n/cols);      //cols는 위에서 지정된걸 받는거고// n이 새롭게 정의됐으니, rows도 다시 정의해준다.

         //기본설정
         $slideContainer.css({width:winW,height:imgH*rows});
         $sec3SlideWrap.css({width:winW,height:imgH*rows});
         $sec3Slide.css({width:imgW,height:imgH});

         $sec3Slide.eq(0).fadeIn();
         $sec3Slide.eq(1).fadeIn();
         $sec3Slide.eq(2).fadeIn();
         $sec3Slide.eq(3).fadeIn();
         $sec3Slide.eq(4).fadeIn();
         $sec3Slide.eq(5).fadeIn();
         $sec3Slide.eq(6).fadeIn();

         //btnNum0 에서 너비의 반응형에 따른 cols의 변화별 이미지 위치(top,left) 재지정 //switch사용//animate로 지정
         
         switch(cols){
           case 3:
            $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*0},600, 'easeInOutExpo');
            $sec3Slide.eq(1).animate({left:imgW*1,top:imgH*0},600, 'easeInOutExpo');
            $sec3Slide.eq(2).animate({left:imgW*2,top:imgH*0},600, 'easeInOutExpo');
            $sec3Slide.eq(3).animate({left:imgW*0,top:imgH*1},600, 'easeInOutExpo');
            $sec3Slide.eq(4).animate({left:imgW*1,top:imgH*1},600, 'easeInOutExpo');
            $sec3Slide.eq(5).animate({left:imgW*2,top:imgH*1},600, 'easeInOutExpo');
            $sec3Slide.eq(6).animate({left:imgW*0,top:imgH*2},600, 'easeInOutExpo');
          break;
          case 2:
            $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*0},600 ,'easeInOutExpo');
            $sec3Slide.eq(1).animate({left:imgW*1,top:imgH*0},600 ,'easeInOutExpo');
            $sec3Slide.eq(2).animate({left:imgW*0,top:imgH*1},600 ,'easeInOutExpo');
            $sec3Slide.eq(3).animate({left:imgW*1,top:imgH*1},600 ,'easeInOutExpo');
            $sec3Slide.eq(4).animate({left:imgW*0,top:imgH*2},600 ,'easeInOutExpo');
            $sec3Slide.eq(5).animate({left:imgW*1,top:imgH*2},600 ,'easeInOutExpo');
            $sec3Slide.eq(6).animate({left:imgW*0,top:imgH*3},600 ,'easeInOutExpo');   
          break;
          default:
            $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*0},600, 'easeInOutExpo');
            $sec3Slide.eq(1).animate({left:imgW*0,top:imgH*1},600, 'easeInOutExpo');
            $sec3Slide.eq(2).animate({left:imgW*0,top:imgH*2},600, 'easeInOutExpo');
            $sec3Slide.eq(3).animate({left:imgW*0,top:imgH*3},600, 'easeInOutExpo');
            $sec3Slide.eq(4).animate({left:imgW*0,top:imgH*4},600, 'easeInOutExpo');
            $sec3Slide.eq(5).animate({left:imgW*0,top:imgH*5},600, 'easeInOutExpo');
            $sec3Slide.eq(6).animate({left:imgW*0,top:imgH*6},600, 'easeInOutExpo');   


          
         }



       }
       if(btnNum==1){
         n = 2;
         rows = Math.ceil(n/cols);

         //기본설정
         $slideContainer.css({width:winW,height:imgH*rows});
         $sec3SlideWrap.css({width:winW,height:imgH*rows});
         $sec3Slide.css({width:imgW,height:imgH});
         $sec3Slide.eq(0).stop().hide();
         $sec3Slide.eq(1).stop().hide();
         $sec3Slide.eq(3).stop().hide();
         $sec3Slide.eq(5).stop().hide();
         $sec3Slide.eq(6).stop().hide();

         $sec3Slide.eq(2).stop().fadeIn(300);
         $sec3Slide.eq(4).stop().fadeIn(300);


         switch(cols){
           case 3: 
           $sec3Slide.eq(2).animate({left:imgW*0,top:imgH*0},600 ,'easeInOutExpo');
           $sec3Slide.eq(4).animate({left:imgW*1,top:imgH*0},600 ,'easeInOutExpo');
           break;
           case 2: 
           $sec3Slide.eq(2).animate({left:imgW*0,top:imgH*0},600 ,'easeInOutExpo');
           $sec3Slide.eq(4).animate({left:imgW*1,top:imgH*0},600 ,'easeInOutExpo');
           break;
           default:s
            $sec3Slide.eq(2).animate({left:imgW*0,top:imgH*0},600 ,'easeInOutExpo');
            $sec3Slide.eq(4).animate({left:imgW*0,top:imgH*1},600 ,'easeInOutExpo');
         }    
       }
       if(btnNum==2){
        n = 2;
        rows = Math.ceil(n/cols);

        //기본설정
        $slideContainer.css({width:winW,height:imgH*rows});
        $sec3SlideWrap.css({width:winW,height:imgH*rows});
        $sec3Slide.css({width:imgW,height:imgH});
        $sec3Slide.eq(1).stop().hide();
        $sec3Slide.eq(2).stop().hide();
        $sec3Slide.eq(4).stop().hide();
        $sec3Slide.eq(5).stop().hide();
        $sec3Slide.eq(6).stop().hide();
        $sec3Slide.eq(0).stop().fadeIn(300);
        $sec3Slide.eq(3).stop().fadeIn(300);

        switch(cols){
          case 3: 
          $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*0},600 ,'easeInOutExpo');
          $sec3Slide.eq(3).animate({left:imgW*1,top:imgH*0},600 ,'easeInOutExpo');
          break;
          case 2: 
          $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*0},600, 'easeInOutExpo');
          $sec3Slide.eq(3).animate({left:imgW*1,top:imgH*0},600, 'easeInOutExpo');
          break;
          default: 
          $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*1},600 ,'easeInOutExpo');
          $sec3Slide.eq(3).animate({left:imgW*0,top:imgH*2},600 ,'easeInOutExpo');
        }  
       }
       if(btnNum==3){
        n = 5;
        rows = Math.ceil(n/cols);

        //기본설정
        $slideContainer.css({width:winW,height:imgH*rows});
        $sec3SlideWrap.css({width:winW,height:imgH*rows});
        $sec3Slide.css({width:imgW,height:imgH});
        $sec3Slide.eq(2).stop().hide();
        $sec3Slide.eq(4).stop().hide();

        $sec3Slide.eq(0).stop().fadeIn(300);
        $sec3Slide.eq(1).stop().fadeIn(300);
        $sec3Slide.eq(3).stop().fadeIn(300);
        $sec3Slide.eq(5).stop().fadeIn(300);
        $sec3Slide.eq(6).stop().fadeIn(300);

        switch(cols){
          case 3 :
            $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*0},600 ,'easeInOutExpo');
            $sec3Slide.eq(1).animate({left:imgW*1,top:imgH*0},600 ,'easeInOutExpo');
            $sec3Slide.eq(3).animate({left:imgW*2,top:imgH*0},600 ,'easeInOutExpo');
            $sec3Slide.eq(5).animate({left:imgW*0,top:imgH*1},600 ,'easeInOutExpo');
            $sec3Slide.eq(6).animate({left:imgW*1,top:imgH*1},600 ,'easeInOutExpo');
          break;
          case 2:
            $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*0},600,'easeInOutExpo');
            $sec3Slide.eq(1).animate({left:imgW*1,top:imgH*0},600,'easeInOutExpo');
            $sec3Slide.eq(3).animate({left:imgW*0,top:imgH*1},600,'easeInOutExpo');
            $sec3Slide.eq(5).animate({left:imgW*1,top:imgH*1},600,'easeInOutExpo');
            $sec3Slide.eq(6).animate({left:imgW*0,top:imgH*2},600,'easeInOutExpo');            
          break;
          default:
            $sec3Slide.eq(0).animate({left:imgW*0,top:imgH*0},600 ,'easeInOutExpo');
            $sec3Slide.eq(1).animate({left:imgW*0,top:imgH*1},600 ,'easeInOutExpo');
            $sec3Slide.eq(3).animate({left:imgW*0,top:imgH*2},600 ,'easeInOutExpo');
            $sec3Slide.eq(5).animate({left:imgW*0,top:imgH*3},600 ,'easeInOutExpo');
            $sec3Slide.eq(6).animate({left:imgW*0,top:imgH*4},600 ,'easeInOutExpo');  
        }


       }
      }

      setTimeout(responseGalleryFn,10);
      $(window).resize(function(){
        responseGalleryFn();
        sec3ResizeFn();
      });

      //3.갤러리버튼 이벤트등록 // galBtn과 btnNum 연결
      $galBtn.each(function(idx){
        $(this).on({
          click:function(){
            btnNum=idx;
            responseGalleryFn();
          }
        });
      }); 



    },
    section4Fn:function(){

      var $container             = $('#section4 .container');
      var $containerW            = $('#section4 .container').innerWidth();
      var containerH             = 0;
      var $backCont              = $('#section4 .back-content');
      var backContH              = 0;
      var $h2                    = $('#section4 h2');
      var h2FontS                = 0;
      var bgTop4                 = 0;
      var newScrollTop4          = 0;
      var oldScrollTop4          = 0;
      var $bg4                   = $('#section4 .back-content')

      //높이, 넓이값으로 반응형 설정하기
      function sec4ResizeFn(){
        $containerW             = $('#section4 .container').innerWidth();
        if($containerW>780){
          containerH = $containerW*0.46875;
          backContH  = $containerW*0.6;
          h2FontS    = $containerW*0.0625;
          
  
          $container.css({height:containerH});
          $backCont.css({height:backContH});
          $h2.css({fontSize:h2FontS});
        }
        else if($containerW<781){
          containerH = $containerW*0.46875;
          backContH  = $containerW*0.6;
          h2FontS    = $containerW*0.12;

          $container.css({height:containerH});
          $backCont.css({height:backContH});
          $h2.css({fontSize:h2FontS});

        }
      }
      setTimeout(sec4ResizeFn,10);
      $(window).resize(function(){
        sec4ResizeFn();
      });

      //스크롤이벤트로 배경 움직이기 + h2 parallax
      $(window).scroll(function(){
        if($(window).scrollTop()>=$('#section4').offset().top -100 && $(window).scrollTop()<$('#section4').offset().top+300){
          newScrollTop4 = $(window).scrollTop();
          console.log('섹션4 마우스무브 작동중');

          $('#section4 h2').addClass('addShow4');
          $('#section4 .loca-wrap').addClass('addShow4');
  
            
            if(newScrollTop4-oldScrollTop4 > 0){         //아래로
              bgTop4+=1;                               //배경은 아래로
              $bg4.css({top:bgTop4});                    //적용          
            }
          
            if(oldScrollTop4-newScrollTop4 > 0){        //위로
              bgTop4-=2;                                //배경은 위로
              $bg4.css({top:bgTop4});                   //적용
            }
  
  
                  
          oldScrollTop4=newScrollTop4;                //oldScrollTop도 정의 // 그래야 숫자가 잡힌다. 
        } 
  
      });




    },
    section5Fn:function(){

      var $container5         = $('#section5 .container');
      var $wrap5W             = $('#section5 .wrap').innerWidth();
      var container5H         = 0;
      var $shopBtnWrap        = $('#section5 .shop-btn-wrap');
      var shopBtnWrapPT       = 0;
      var $sec5SlideViewW     = $('#section5 .slide-view').innerWidth();
      var sec5SlideViewH     = 0;
      var sec5SlideW          = 0;
      var sec5SlideH          = 0;
      var $sec5Slide          = $('#section5 .slide');
      var $sec5SlideWrap      = $('#section5 .slide-wrap');
      var $leftWhite          = $('#section5 .left-side-white-content');
      var $rightWhite         = $('#section5 .right-side-white-content');
      var $circleBtn          = $('#section5 .circle-btn');
      var $textWrap           = $('#section5 .text-wrap');

      var $cirBtn             = $('#section5 .cir-btn'); 
      var cnt                 = 0;
      var t                   = 0;
      var sec5Set             = null;
      var sec5Set2            = null;

      //높이, 너비값이용해서 반응형 설정하기

      function sec5ResizeFn(){


        if($(window).innerWidth()>1200){
          $wrap5W             = $('#section5 .wrap').innerWidth();
          $sec5SlideViewW     = $('#section5 .slide-view').innerWidth();

          container5H         = $wrap5W*0.55;
          shopBtnWrapPT       = $wrap5W*0.08;
          sec5SlideW          = $sec5SlideViewW;
          sec5SlideH          = sec5SlideW*0.96054628;


          $container5.css({height:container5H});
          $shopBtnWrap.css({paddingTop:shopBtnWrapPT});
          $sec5Slide.css({width:sec5SlideW,height:sec5SlideH});
          $circleBtn.css({height:sec5SlideH});
          $leftWhite.css({height:sec5SlideH});
          $rightWhite.css({height:sec5SlideH});
          $sec5SlideWrap.css({width:sec5SlideW*5,marginLeft:-sec5SlideW});

        }
        if ($(window).innerWidth()<1201){  
          $wrap5W             = $('#section5 .wrap').innerWidth();
          $sec5SlideViewW     = $('#section5 .slide-view').innerWidth();       
          container5H         = $wrap5W*0.55;
          shopBtnWrapPT       = $wrap5W*0.1;
          sec5SlideW          = $sec5SlideViewW;
          sec5SlideH          = sec5SlideW*0.96054628;


          $container5.css({height:container5H});
          $shopBtnWrap.css({paddingTop:shopBtnWrapPT});
          $sec5Slide.css({width:sec5SlideW,height:sec5SlideH});
          $circleBtn.css({height:sec5SlideH});
          $leftWhite.css({height:sec5SlideH});
          $rightWhite.css({height:sec5SlideH});
          $sec5SlideWrap.css({width:sec5SlideW*5,marginLeft:-sec5SlideW});
          $textWrap.css({top:99+'%'});
        }
        if ($(window).innerWidth()<1000){    
          $wrap5W             = $('#section5 .wrap').innerWidth();
          $sec5SlideViewW     = $('#section5 .slide-view').innerWidth();     
          container5H         = $wrap5W*0.55;
          shopBtnWrapPT       = $wrap5W*0.1;
          sec5SlideW          = $sec5SlideViewW;
          sec5SlideH          = sec5SlideW*0.96054628;
          // console.log('1000에서 780');

          $container5.css({height:container5H});
          $shopBtnWrap.css({paddingTop:shopBtnWrapPT});
          $sec5Slide.css({width:sec5SlideW});
          $circleBtn.css({height:sec5SlideH});
          $leftWhite.css({height:sec5SlideH});
          $rightWhite.css({height:sec5SlideH});
          $sec5SlideWrap.css({width:sec5SlideW*5,marginLeft:-sec5SlideW});
        }    
        if ($(window).innerWidth()<781){  
          $wrap5W             = $('#section5 .wrap').innerWidth();
          
          container5H         = $wrap5W*0.55;

            // console.log('else 실행중' + container5H ); 
            $container5.css({height:container5H*2.5});

        }

      }      

      setTimeout(sec5ResizeFn,10);
      $(window).resize(function(){
        sec5ResizeFn();
      });


      //슬라이드
      //1.메인슬라이드함수
      function sec5mainNextSlideFn(){
        $sec5SlideViewW     = $('#section5 .slide-view').innerWidth();
        sec5SlideW          = $sec5SlideViewW;
        
        btnColorFn();  
        //슬라이드내용
        $sec5SlideWrap.stop().animate({left:-sec5SlideW*cnt},900,function(){
          if(cnt== 3){
            cnt = 0
            btnColorFn();  
            $sec5SlideWrap.stop().animate({left:-sec5SlideW*cnt},0);
          }
        });  
        sec5TimerFn();   
      }
      function sec5mainPrevSlideFn(){
        $sec5SlideViewW     = $('#section5 .slide-view').innerWidth();
        sec5SlideW          = $sec5SlideViewW;

        btnColorFn();  

        //슬라이드내용
        $sec5SlideWrap.stop().animate({left:-sec5SlideW*cnt},900,function(){
          if(cnt== -1){
            cnt = 2
            $sec5SlideWrap.stop().animate({left:-sec5SlideW*cnt},0);
          }
        });   
        sec5TimerFn();   
      }
      //2.슬라이드카운트함수

      function sec5NextCountFn(){
       cnt++;

       sec5mainNextSlideFn();
      }
      function sec5PrevCountFn(){}
       cnt--;

       sec5mainPrevSlideFn();

      //3.버튼등록
      $cirBtn.each(function(index){  //0 1 2 
        $(this).on({
          click:function(){
            cnt = index;
            sec5mainNextSlideFn();     
            sec5TimerFn();   
          }
        });
      });

      //3-1. 버튼컬러 
      function btnColorFn(){
        $cirBtn.removeClass('addLight');

        $cirBtn.eq(cnt).addClass('addLight');
      }


      //4.스와이프


      
      //5.오토함수 //처음에 자동으로 실행시작
      function sec5AutoFn(){
        sec5Set  = setInterval(sec5NextCountFn,2000);
      }
      setTimeout(sec5AutoFn,10);

      //6.타이머함수
      function sec5TimerFn(){
        
        clearInterval(sec5Set);
        clearInterval(sec5Set2);

        sec5Set2 = setInterval(function(){
          t++;
          if(t>2){
            t=0;
            clearInterval(sec5Set);
            clearInterval(sec5Set2);
            sec5NextCountFn();          
          }

        },1000);
      }


    },
    section6Fn:function(){

      var $wrap6           = $('#section6 .wrap');
      var $wrap6W          = $('#section6 .wrap').innerWidth();
      var wrap6H           = 0;
      var $ovalWrap        = $('#section6 .left-oval-wrap');
      var ovalWrapW        = 0;
      var $h2              = $('#section6 .first-gap > h2');
      var h2FontS          = 0;

      var $ovalImg         = $('#section6 .oval-back');

      function sec6ResizeFn(){
        if($(window).innerWidth()>780){
          console.log('섹션5 780이상 실행중');
          $wrap6W          = $('#section6 .wrap').innerWidth();
        
          wrap6H           = $wrap6W*0.66145833;
          ovalWrapW        = $wrap6W*0.51041666;
          h2FontS          = $wrap6W*0.0546875;
  
          $wrap6.css({height:wrap6H});
          $ovalWrap.css({width:ovalWrapW});
          $h2.css({fontSize:h2FontS});

        }
        if($(window).innerWidth()<781){
          console.log('섹션5 781미만 실행중');
          $wrap6W          = $('#section6 .wrap').innerWidth();
        
          wrap6H           = $wrap6W*2.5;
          ovalWrapW        = $wrap6W*0.95;
          h2FontS          = $wrap6W*0.1;
  
          $wrap6.css({height:wrap6H});
          $ovalWrap.css({width:ovalWrapW});
          $h2.css({fontSize:h2FontS});
        }


      }

      setTimeout(sec6ResizeFn,10);
      $(window).resize(function(){
        sec6ResizeFn();
      });
      
      //parallax

      $(window).scroll(function(){
        if($(window).scrollTop() > $('#section6').offset().top-500){
          $('#section6 h2').addClass('addShow6');
        }
      });

      //마우스무브 
      $('#section6 .oval-view').on({
        mousemove:function(event){
          x  =  event.clientX*.02;
          y  =  event.clientY*.03; 

          $ovalImg.stop().css({transform:'perspective(1800px) rotateY('+ y +'deg) rotateX('+ x+'deg)'});  



        }
      });


      


    },
    section7Fn:function(){

      var $container7         = $('#section7 .container');
      var $wrap7W             = $('#section7 .wrap').innerWidth();
      var container7H         = 0;


      function sec7ResizeFn(){
        if($(window).innerWidth()>780){
          $wrap7W             = $('#section7 .wrap').innerWidth();

          container7H         = $wrap7W*0.52083333;
  
          $container7.css({height:container7H});
        }
        if($(window).innerWidth()<781){
          $wrap7W             = $('#section7 .wrap').innerWidth();

          container7H         = $wrap7W*3;
  
          $container7.css({height:container7H});
        }


      }
      setTimeout(sec7ResizeFn,10);
      $(window).resize(function(){
        sec7ResizeFn();
      });

    },
    section8Fn:function(){
      var $bgSlide          = $('#section8 .bg-slide');

      var sec8SetId         = null;
      var sec8SetId2        = null;
      var cnt               = 0;

      var $contentWrap      = $('#section8 .content-wrap');
      var $contentWrapW     = $('#section8 .content-wrap').innerWidth();
      var contentWrapH      = 0;



      //높이 반응형 

      function sec8ResizeFn(){
        if($(window).innerWidth()>750){
          $contentWrapW     = $('#section8 .content-wrap').innerWidth();

          contentWrapH      = $contentWrapW*0.416666666;
  
          $contentWrap.css({height:contentWrapH});
        }

        if($(window).innerWidth()<751){

          $contentWrapW     = $('#section8 .content-wrap').innerWidth();

          contentWrapH      = $contentWrapW*0.6;
  
          $contentWrap.css({height:contentWrapH});


        }
        
        if($(window).innerWidth()<501){

          $contentWrapW     = $('#section8 .content-wrap').innerWidth();

          contentWrapH      = $contentWrapW*1.2;
  
          $contentWrap.css({height:contentWrapH});


        }




      }
      setTimeout(sec8ResizeFn,10);
      $(window).resize(function(){
        sec8ResizeFn;
      });
      





      //1.메인슬라이드함수
      function bgMainNextSlideFn(){
        // console.log(cnt);
        //cnt = 1,2,3,4,5,0
        //초기화
        $bgSlide.css({zIndex:2,opacity:0});

     
        //본함수내용
        
        //cnt = 1,2,3,4,5,0
        // console.log('제트인덱트6들어가는수'+cnt);
        $bgSlide.eq(cnt<0?cnt=5:cnt-1).css({zIndex:6,opacity:1});  //0,1,2,3,4,5
        // console.log('제트인덱스7들어가는수'+cnt);
        $bgSlide.eq(cnt).css({zIndex:7}).stop().animate({opacity:0},0).animate({opacity:1},3000); //1,2,3,4,5,0
        // console.log('타이머로 들어가기 직전 cnt'+cnt); //1,2,3,4,5.0
        
        timer8Fn();
      }

      //2.카운트슬라이드함수
      function bgNextSlideCountFn(){

        if(cnt>=5){cnt = -1}
        cnt++;
         bgMainNextSlideFn();
      }      

      //오토함수

      function auto8playFn(){
        sec8SetId = setInterval(bgNextSlideCountFn,0);   
      }
      setTimeout(auto8playFn,0);

      //타이머함수
      function timer8Fn(){
        var t = 0;
        
        clearInterval(sec8SetId);
        clearInterval(sec8SetId2);

        sec8SetId2 = setInterval(function(){
          if(!$bgSlide.is(':animated')){
          
          t++;
          if(t>=3){
            clearInterval(sec8SetId);
            clearInterval(sec8SetId2);
            bgNextSlideCountFn();
              t=0;
          }
        }
        },1000);
      }


    },
    footerFn:function(){}
  }
  landscape.init();

})(jQuery);

