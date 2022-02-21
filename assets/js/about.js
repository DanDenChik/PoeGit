window.onscroll = function() {ScrollFunction()};

function ScrollFunction() {
    var scrolled;
    var winScroll;
    var height
    winScroll = (document.body.scrollTop) || (document.documentElement.scrollTop);
    height = document.documentElement.scrollHeight - window.innerHeight ;
    scrolled = (winScroll / height) * 100;
    document.getElementById("progress__bar").style.width = scrolled + "%";
}
$(document).ready(function(){
    $('.main__slider').slick({
        arrows:false,
        slidesToShow:3,
        dots:true,
        autoplay:true,
        centerMode:true,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                    dots:false,
                    centerMode:false,
                }  
            },{
                breakpoint: 480,
                settings:{
                    slidesToShow:1,
                    dots:false,
                    centerMode:false,
                }
            }
        ]
    });
});
$(document).ready(function(){
    $('.second__slider').slick({
        arrows:false,
        slidesToShow:3,
        slidesToScroll:3,
        dots:true,
        autoplay:true,
        responsive:[
            {
                breakpoint: 768,
                settings: {
                    slidesToShow:1,
                    dots:false,
                    slidesToScroll:1,
                }  
            },{
                breakpoint: 480,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
                    dots:false,
                }
            }
        ]
    });
});
$(document).ready(function(){
    $(".header__burger").click(function(event){
      $(".header__burger, .header__nav").toggleClass('active');
      $("body").toggleClass('lock')
    });
  });