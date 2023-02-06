$(document).ready(function(){    
    var s2_top=$('.s2').offset().top;    
    $(window).scroll(function(){
        var scrolltop=$(window).scrollTop();
        var winHeight=$(window).height();
        var s2_bottom=s2_top+$('.s2').height();
        // 스킬바
        $(window).scroll(function(){
            //윈도우의 스크롤탑 값을 cur_pos에 저장
            var cur_pos=$(this).scrollTop();
            //.s2 영역의 시작위치를 top변수에 저장
            var top=$('.s2').offset().top;
            // .s2영역의 마지막 위치를 bottom변수에 저장
            var bottom=top + $('.s2').outerHeight();
            //skill-bar의 위치가 top과 bottom사이에 있으면
            if(cur_pos >= top && cur_pos <= bottom){
                //스킬바에 active 클래스 추가
                $('.skillbar').addClass('active');
                //그렇지 않으면
            }else{
                //스킬바의 active 클래스 제거
                $('.skillbar').removeClass('active');
            }
        });

        // if(scrolltop+winHeight > s2_top && s2_bottom > winHeight){
            // $('.skillbar').each(function(){
                // $(this).find('.skillbar-bar').animate({
                   // width:$(this).attr('data-percent')
              // },3000);
            // });
        // }else{
           // $('.skillbar').each(function(){
               // $(this).find('.skillbar-bar').animate({
                 // width:0
               // },3000);
           // });
       // }
    });

    // section.s3의 갤러리(PC버전)
    if($(window).width() > 480){
        $('.buttons ul li:first').addClass('active');
        $('.photos ul li').hide();
        $('.photos ul li:first').show();
        $('.buttons ul li').click(function(e){
            e.preventDefault();
            $('.buttons ul li').removeClass('active');
            $(this).addClass('active');
            var btn=$(this).index();
            console.log(btn);
            $('.photos ul li').each(function(){
                if($(this).index()==btn){
                    $('.photos ul li').hide();
                    $(this).fadeIn();
                }
            });
        });
        $('.search_btn a').click(function(e){
            e.preventDefault();
            $('html,body').css('overflow','hidden');
            var str=$(this).parents('li').index()+1;
            console.log(str);
            $('<div />', {id: 'popup'}).appendTo('body');
            $('<div />', {class: 'popup_box'}).appendTo('#popup');
            $('.popup_box').append('<img src="img/banner_'+str+'.png">');
            $('#popup').append('<div class="close">X</div>');

            $('body').on('click','#popup .close', function(){
                $(this).parent().remove();
                $('html, body').css('overflow-x','hidden');
                $('html, body').css('overflow-y','visible');
            });

        });
      
    //section.s3의 갤러리(모바일 버전)
    }else{
        $('.buttons ul li:first').addClass('active');
        $('.photos ul li').hide();
        $('.buttons ul li').click(function(e){
            e.preventDefault();
            $('buttons ul li').removeClass('active');
            $(this).addClass('active');
            var btn1=$(this).index()+1;
            //모바일 팝업
            $('html, body').css('overflow','hidden');
            $('<div />', {id: 'popup1'}).appendTo('body');
            $('<div />', {class: 'popup_box1'}).appendTo('#popup1');
            $('.popup_box1').append('<img src="img/banner_'+btn1+'.png">');
            $('#popup1').append('<div class="close1">X</div>');

        });
        $('body').on('click','#popup1 .close1', function(){
            $(this).parent().remove();
            $('html, body').css('overflow-x','hidden');
            $('html, body').css('overflow-y','visible');
        });

    }


        


        

    // 탭메뉴
    $('.con1').show();
    $('.con2').hide();
    $('.tt1').click(function(e){
        e.preventDefault();
        $('.con1').show();
        $('.con2').hide();
    });
    $('.tt2').click(function(e){
        e.preventDefault();
        $('.con1').hide();
        $('.con2').show();
    });

    //리뷰 스와이퍼
    var swiper = new Swiper(".mySwiper", {
        loop:true,
        slidesPerView: 3,
        spaceBetween: 30,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },

        breakpoints:{
            480: {
                slidesPerView: 3,
                spaceBetween: 20,
            },
        }
    });

    // 탑버튼
    $('.top').click(function(){
        $('html, body').animate({'scrollTop':0});
    });

    // 모달팝업
    $(function(){
        $("#confirm").click(function(){
            modalClose();
            //컨펌 이벤트 처리
        });
        $("#modal-open").click(function(){$("#popup2").css('display','flex').hide().fadeIn();
        });
        $("#close").click(function(){
            modalClose();
        });
        function modalClose(){
          $("#popup2").fadeOut();
        }
    });



    


   

});



