function openTab(evt, tabName) {
    var i, tabcontent, tablink;
    tabcontent = document.getElementsByClassName("about__tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablink = document.getElementsByClassName("about__tab--link");
    for (i = 0; i < tablink.length; i++) {
      tablink[i].className = tablink[i].className.replace(" active", "");
    }
  
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}
document.getElementById("defaultOpen").click();

$(document).ready(function(){
  $(".header__burger").click(function(event){
    $(".header__burger, .header__nav").toggleClass('active');
    $("body").toggleClass('lock')
  });
});