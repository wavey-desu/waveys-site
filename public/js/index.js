
$(document).ready(function(){

    window.onload = function () {
        loadWindow(window.location.hash);
    }
    
    window.onhashchange = function () {
        hashChange(window.location.hash);
    }

});


function loadWindow(hash){

    $(".page").not(".homePage").hide();

    if (hash != "" && hash != "#home"){
        $(".homePage").css("opacity","0")
    }
    if (hash != ""){
        $(".preloader").css("display","none");
        $("*").removeClass("loading");
        $("*").css("animation-delay",".1s");
    }

    switch (hash) {
        case "":
            setTimeout(function(){
                $(".preloader").animate({opacity: "0"},500);
            },10000);
            setTimeout(function(){
                $("*").removeClass("loading");
            },11500);
            setTimeout(function(){
                $(".preloader").css("display","none");
            },13000);

            $(".homePage").addClass("activePage");
            $(".home-nav").addClass("activeNav");
        break;

        case "#home":
            $(".homePage").addClass("activePage");
            $(".home-nav").addClass("activeNav");
        break;

        case "#works":
            $(".worksPage").show();
            $(".worksPage").addClass("activePage");
            $(".works-nav").addClass("activeNav");
            
        break;

        case "#about":
            $(".aboutPage").fadeIn();
            $(".about-nav").addClass("activeNav");
            $(".aboutPage").addClass("activePage");
        
        break;

        case "#contact":
            $(".contactPage").fadeIn();
            $(".contact-nav").addClass("activeNav");
            $(".contactPage").addClass("activePage");
        break;
    
    }
}

function hashChange(hash) {
    $(".transitioner").animate({
        left: "0%"
    }, 1000);
    $(".transitioner").animate({
        left: "-300%"
    }, 1000);
    $("li").removeClass("activeNav");
    
    setTimeout(() => {
        $(".homePage").animate({
            opacity: "0"
        });
        $(".activePage").not(".homePage").fadeOut();
        $(".page").removeClass("activePage");

        switch (hash) {

            case "#home":

                $(".homePage").animate({
                    opacity: "1"
                });
                $(".home-nav").addClass("activeNav");
                setTimeout(() => {
                    $(".homePage").addClass("activePage");
                }, 500);

                break;
            case "#works":

                $(".worksPage").fadeIn();
                $(".works-nav").addClass("activeNav");
                setTimeout(() => {
                    $(".worksPage").addClass("activePage");
                }, 500);

                break;
            case "#about":

                $(".aboutPage").fadeIn();
                $(".about-nav").addClass("activeNav");
                setTimeout(() => {
                    $(".aboutPage").addClass("activePage");
                }, 500);

                break;
            case "#contact":

                $(".contactPage").fadeIn();
                $(".contact-nav").addClass("activeNav");
                setTimeout(() => {
                    $(".contactPage").addClass("activePage");
                }, 500);

                break;

        }
    }, 1000);
}