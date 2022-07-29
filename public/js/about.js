///////////////defaults////////////////////
$(".aboutPage .svg-border").attr('stroke',"url('#myGradient1')")
$(".aboutPage .dot").attr('fill',"url('#myGradient2')")
$(".aboutPage img").hide();
$("img.lomegalull").show();
// $(".wvy-img5").show();


//////////////// functions ////////////////

function imgsIN(n) {
    switch (n) {
        case 0:

            $(".s1-img-border").css("stroke-dashoffset", 0);
            $(".wvy-img1").delay(800).fadeIn(600);

            break;


        case 1:
            $(".s2-img-border").css("stroke-dashoffset", 0);
            $(".logo-border").css("stroke-dashoffset", 0);
            $(".wvy-img2").delay(800).fadeIn(600);

            break;

        case 2:
            $(".twitch-border").css('stroke-dashoffset', 0)
            setTimeout(()=>{
                $(".path-purple").css("fill", "#8343c8")
                $(".path-white").css("fill", "#fafafa")
            },800)
            $(".s3-img-border").css("stroke-dashoffset", 0);
            $(".wvy-img3").delay(800).fadeIn(600);

            break;
        
        case 3:
            $(".s4-img-border").css("stroke-dashoffset", 0);
            $(".wvy-img4").delay(800).fadeIn(600);

            break;

        case 4:
            $(".s5-img-border").css("stroke-dashoffset", 0);
            $(".wvy-img5").delay(800).fadeIn(600);

            break;
    }

}

function imgsOUT(n) {
    switch (n) {
        case 0:

            $(".wvy-img1").fadeOut(500);
            setTimeout(() => {
                $(".s1-img-border").css("stroke-dashoffset", "400%");
            },500)

            break;

        case 1:
            $(".wvy-img2").fadeOut(500);
            setTimeout(() => {
                $(".s2-img-border").css("stroke-dashoffset", "400%");
                $(".logo-border").css("stroke-dashoffset", "333%");

            },500)

            
            break;

        case 2:
            $(".twitch-border").css('stroke-dashoffset', "275%")
            $(".paths").css("fill", "transparent")
            $(".wvy-img3").fadeOut(500);
            setTimeout(() => {
                $(".s3-img-border").css("stroke-dashoffset", "400%");
            },500)

            break;

        case 3:
            $(".wvy-img4").fadeOut(500);
            setTimeout(() => {
                $(".s4-img-border").css("stroke-dashoffset", "400%");
            },500)
   
            break;

        case 4:
            $(".wvy-img5").fadeOut(500);
            setTimeout(() => {
                $(".s5-img-border").css("stroke-dashoffset", "400%");
            },500)

            break;
            
    }

}

//////////////Hover Animations/////////////
let timer;
let outNum;
let section = $(".section").toArray();


for (let i = 0; i < section.length; i++) {

    $(section[i]).mouseenter(() => {
        let sNum = $(section[i]).index() - 1; //sNum = section number(index)
        // console.log(sNum);
        // console.log(section[i]);
        // console.log(outNum);

        timer = setTimeout(() => {
            if ($(".section").not(section[sNum]).hasClass('activeSection')) { //if there is activeSection section
                outNum = $(".section.activeSection").index() - 1; //outNum = activeSection section index 

                $(".section:eq(" + outNum + ") > .svg-wrapper > .svg-border").css("stroke-dashoffset", "315%")
                $(".section:eq(" + outNum + ") > .svg-wrapper > .svg-border").removeAttr('style');
                $(".section:eq(" + outNum + ") > .svg-wrapper > .dot").removeAttr('style');

                $(".section.activeSection").removeClass("activeSection");
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke-dashoffset", 0)
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke-dasharray", "315%")
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke", '#cccccc')
                $(".section:eq(" + sNum + ") > .svg-wrapper > .dot").css("r", '0%')

                imgsOUT(outNum);
                
                setTimeout(() =>{
                    imgsIN(sNum);
                    $(section[i]).addClass('activeSection');
                },1500)

            }
            else{ //first load 
                imgsIN(sNum);
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke-dashoffset", 0)
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke-dasharray", "315%")
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke", '#cccccc')
                $(".section:eq(" + sNum + ") > .svg-wrapper > .dot").css("r", '0%')


                $(section[i]).addClass('activeSection');

            }
        }, 1200)
    });


    $(section[i]).mouseleave(() => {
        clearTimeout(timer);
    });
}




