$(function(){ //로드후실행
    

    /**
     * @언어선택
     * @window.open
     * 
     */

    $('#langBtn').click(function(){
        url = $('#langList').val();
        window.open(url);
    })    




    /**
     * @main슬라이드
     * 
     * 
     */

    const mainSlide = new Swiper(".main-slide", {
        
        speed:1000,
        loop:true,
        autoplay:{
            delay:1000,
            disableOnInteraction: false,
        },
        pagination:{
            el:".fraction",
            type:"fraction"
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        },
        on:{
            "slideChange":function(){
            if(this.realIndex >= 3){
                $('.sc-slidebanner .tab.citizen').addClass('on').siblings().removeClass('on');
            }else{
                $('.sc-slidebanner .tab.news').addClass('on').siblings().removeClass('on');
            }
        }
    }
    });


    $('.main-slide .autoplay').click(function(){

        if($(this).hasClass('on')){
            $(this).removeClass('on')
            mainSlide.autoplay.start()
        }else{
            $(this).addClass('on')
            mainSlide.autoplay.stop()
        }

    })


    $('.sc-slidebanner .group-tab .tab').click(function(){
        idx = $(this).data('tab')

        $(this).addClass('on').siblings().removeClass('on');
        mainSlide.slideTo(idx)
    })




    /**
     * @notice슬라이드
     * 
     * 
     */

    const noticeSlide = new Swiper(".notice-slide", {
        
        slidesPerView:3,
        spaceBetween:43,
        loop:true,
        autoplay:{
            delay:3000,
            disableOnInteraction: false,
        },
        pagination:{
            el:".fraction",
            type:"fraction"
        },
        navigation:{
            nextEl:'.next',
            prevEl:'.prev'
        }
    });


    $('.notice-slide .autoplay').click(function(){
        
        if($(this).hasClass('on')){
            $(this).removeClass('on')
            noticeSlide.autoplay.start()
        }else{
            $(this).addClass('on')
            noticeSlide.autoplay.stop()
        }

    })




    /**
     * @관련사이트
     * 
     */

    $('.sc-related .btn-nav').click(function(){

        url = $(this).data('url');

        if(url){
            window.open(url);
            return false; //탈출
        }

        if($(this).hasClass('on')){
            $('.btn-nav').removeClass('on');
            $('.sub-area').stop().slideUp();
            return false; //탈출
        }

        $('.btn-nav').removeClass('on');
        $('.sub-area').stop().slideUp();
        $(this).addClass('on').siblings('.sub-area').stop().slideDown();
    })


    $('.sc-related .sub-list li:first-child').keydown(function(e){
        key = e.keyCode;
        if(key === 9 && e.shiftKey){
            $('.btn-nav').removeClass('on');
            $('.sub-area').stop().slideUp();
        }
    })


    $('.sc-related .sub-list li:last-child').keydown(function(e){
        if(key === 9 && !e.shiftKey){
            $('.btn-nav').removeClass('on');
            $('.sub-area').stop().slideUp();
        }
    })




    /**
     * @상단으로이동
     * 
     * 
     */

    $(window).scroll(function(){
        curr = $(this).scrollTop();
        // target = $('header').offset().top;

        if (curr > 0) {
            $('#btnTop').addClass('show')
        } else {
            $('#btnTop').removeClass('show')
        }
    })


    $('#btnTop').click(function(e){
        e.preventDefault();
        $('html,body').animate({scrollTop:0},300)
        // window.scrollTo({top:0,behavior:"smooth"})
    })



})