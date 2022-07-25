///////////////defaults////////////////////
$(".aboutPage .svg-border").attr('stroke',"url('#myGradient1')")
$(".aboutPage .dot").attr('fill',"url('#myGradient2')")
$(".aboutPage img").hide();
$("img.lomegalull").show();


//////////////// functions ////////////////

function imgsIN(n) {
    switch (n) {
        case 0:

            $(".s1-img-border").css("animation", "main-in 2s forwards");
            $(".wvy-img1").delay(2000).fadeIn(800);

            break;


        case 1:
            $(".s3-img-border").css("animation", "main-in 2s forwards");
            $(".logo-border").css("animation", "main-in 2s forwards");
            $(".wvy-img2").delay(2000).fadeIn(800);

            break;

        case 2:
            $(".path-1").animate({'stroke-dashoffset': 0},2500,'swing')
            setTimeout(()=>{
                $(".path-purple").css("animation", "path-purple-in 2s forwards")
                $(".path-white").css("animation", "path-white-in 2s forwards")
            
            },2000)
            $(".s4-img-border").css("animation", "main-in 2s forwards");
            $(".wvy-img4").delay(2000).fadeIn(800);

            break;
        
        case 3:
            $(".s5-img-border").css("animation", "main-in 2s forwards");
            $(".wvy-img5").delay(2000).fadeIn(800);

            break;

        case 4:
            $(".s6-img-border").css("animation", "main-in 2s forwards");
            $(".wvy-img6").delay(2000).fadeIn(800);

            break;
    }

}

function imgsOUT(n) {
    switch (n) {
        case 0:

            $(".wvy-img1").fadeOut(800);
            setTimeout(() => {
                $(".s1-img-border").css("animation", "img-1-out 2s forwards");
            },800)

            break;

        case 1:
            $(".wvy-img2").fadeOut(800);
            setTimeout(() => {
                $(".s3-img-border").css("animation", "img-3-1-out 2s forwards");
                $(".logo-border").css("animation", "img-3-2-out 2s forwards");

            },800)

            
            break;

        case 2:
            $(".paths").css("animation", "paths-out 2s forwards")
            $(".wvy-img4").fadeOut(800);
            $(".path-1").delay(1000).animate({'stroke-dashoffset': 200},2500,'swing')
            setTimeout(() => {
                $(".s4-img-border").css("animation", "img-1-out 2s forwards");

            },800)

            break;

        case 3:
            $(".wvy-img5").fadeOut(800);
            setTimeout(() => {
                $(".s5-img-border").css("animation", "img-5-out 2s forwards");
            },800)
   
            break;

        case 4:
            $(".wvy-img6").fadeOut(800);
            setTimeout(() => {
                $(".s6-img-border").css("animation", "img-3-1-out 2s forwards");
            },800)

            break;
            
    }

}

//////////////Hover Animations/////////////
let timer;
let x = 0;
let outNum;
let section = $(".section").toArray();


for (let i = 0; i < section.length; i++) {

    $(section[i]).mouseenter(() => {
        let sNum = $(section[i]).index(); //sNum = section number(index)
        console.log(section[i]);
        // console.log(outNum);

        timer = setTimeout(() => {
            if ($(".section").not(section[sNum]).hasClass('activeSection')) { //if activeSection section
                outNum = $(".section.activeSection").index(); //outNum = activeSection section index 

                $(".section:eq(" + outNum + ") > .svg-wrapper > .svg-border").css("animation", "main-out 2s ease-in-out forwards")
                $(".section:eq(" + outNum + ") > .svg-wrapper > .svg-border").removeAttr('style');
                $(".section:eq(" + outNum + ") > .svg-wrapper > .dot").removeAttr('style');

                $(".section.activeSection").removeClass("activeSection");
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke-dashoffset", 0)
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke-dasharray", 1542)
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke", '#cccccc')
                $(".section:eq(" + sNum + ") > .svg-wrapper > .dot").css("r", '0%')



                imgsOUT(outNum);
                
                setTimeout(() =>{
                    imgsIN(sNum);
                    $(section[i]).addClass('activeSection');
                },3000)

            }
            else{ //first load 
                imgsIN(sNum);
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke-dashoffset", 0)
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke-dasharray", 1542)
                $(".section:eq(" + sNum + ") > .svg-wrapper > .svg-border").css("stroke", '#cccccc')
                $(".section:eq(" + sNum + ") > .svg-wrapper > .dot").css("r", '0%')


                $(section[i]).addClass('activeSection');

            }
        }, 2000)
    });


    $(section[i]).mouseleave(() => {
        clearTimeout(timer);
    });
}




