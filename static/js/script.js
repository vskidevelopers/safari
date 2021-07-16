function Notavailable() {
  alert("Function not available currently");
}

$(document).scroll(function () {
  if ($(window).scrollTop() >= $("header").offset().top) {
    $("nav").addClass("sticky");
    $(".logoImg").addClass("height");
  } else {
    $("nav").removeClass("sticky");
    $(".logoImg").removeClass("height");
  }
});

$("body").scrollspy({
  target: ".navbar",
  offset: 80,
});

function Show() {
  var hiddnelement = document.getElementById("hidden");
  hiddnelement.classList.toggle("hidden");
  var readmore = document.getElementById("readmore");
  readmore.classList.toggle("hidden");
}
