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
    $(".header__burger").click(function(event){
      $(".header__burger, .header__nav").toggleClass('active');
      $("body").toggleClass('lock')
    });
});