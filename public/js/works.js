$(document).ready(function(){

    gsap.to(".works-title", {
        scrollTrigger:{
            scroller: ".worksPage",
            // markers: true,
            start: "400 300",
            end: "450 50",
            scrub: 1
        },
        fontSize: "8vw",
    });

    gsap.from(".cocktail-genie-card", {
        scrollTrigger:{
            scroller: ".worksPage",
            // markers: true,
            start: "800 300",
            end: "900 50",
            toggleActions: "play none none reverse"
        },
        x:" 20%",
        opacity: 0,
        duration: 1,
        ease: "back.out(.7)",
    });

    gsap.from(".spender-buddy-card", {
        scrollTrigger:{
            scroller: ".worksPage",
            // markers: true,
            start: "1400 300",
            end: "1500 50",
            toggleActions: "play none none reverse"
        },
        x:" -20%",
        opacity: 0,
        duration: 1,
        ease: "back.out(.7)",
    });

    gsap.from(".wvy-playground-card", {
        scrollTrigger:{
            scroller: ".worksPage",
            // markers: true,
            start: "2000 300",
            end: "2100 50",
            toggleActions: "play none none reverse"
        },
        x:" 20%",
        opacity: 0,
        duration: 1,
        ease: "back.out(.7)",
    });

    gsap.from(".itwCont", {
        scrollTrigger:{
            scroller: ".worksPage",
            // markers: true,
            start: "2700 300",
            end: "2850 50",
            toggleActions: "play none none reverse"
        },
        rotateX: 90,
        duration: 3,
        ease: "elastic.out(1.5, 0.5)",
    });

});

let timer1;
let timer2;
$(".desc-text").hide();
$(".category").hide();


// descriptoin hover animations//
$(".title").mouseover( function(){
    timer1 = setTimeout(()=>{
        $(".desc-border").css({"height":" 100%","width":" 100%"});
        $(".desc-text").delay(1000).slideDown(500,'swing')
        
    },500)
    
});

$(".title").mouseout( function(){
    clearTimeout(timer1);
    $(".desc-text").slideUp(200,'swing')
    $(".desc-border").delay(500).removeAttr('style');
    $(".desc-svg").removeAttr('style');
    
});

// info hover animations //
$(".info-wrapper").mouseover( function(){
    timer2 = setTimeout(()=>{
        $(".categories").css({"height":" 10rem", "width":" 20rem", "visibility": "unset",});
        $(".category").delay(1000).fadeIn(500,'swing')
    },800)
    
});

$(".info-wrapper").mouseout( function(){
    clearTimeout(timer2);
    $(".category").fadeOut(200,'swing')
    $(".categories").removeAttr('style')
    $(".categories").css("visibility", "hidden");
    
});