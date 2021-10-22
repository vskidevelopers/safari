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

// const btn = document.getElementById("bookThisTrip");
// document
//   .getElementById("bookTripForm")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();

//     btn.value = "Sending...";

//     const serviceID = "service_2npiics";
//     const templateID = "template_3wwazs9";

//     emailjs.sendForm(serviceID, templateID, this).then(
//       () => {
//         btn.value = "Send Email";
//         alert("Sent!");
//         document.bookTripForm.reset();
//       },
//       (err) => {
//         btn.value = "Send Email";
//         console.log(JSON.stringify(err));
//       }
//     );
//   });
