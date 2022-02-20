$(document).ready(function(){
    $(".main__item__grid").slice(0, 3).show();
    $("#loadMore").on("click", function(e){
      e.preventDefault();
      $(".main__item__grid:hidden").slice(0, 3).slideDown();
      if($(".main__item__grid:hidden").length == 0) {
        $("#loadMore").text("No Content").addClass("noContent");
      }
    });
    
})
$(document).ready(function(){
  $(".header__burger").click(function(event){
    $(".header__burger, .header__nav").toggleClass('active');
    $("body").toggleClass('lock')
  });
});