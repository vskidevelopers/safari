function Notavailable() {
  alert("Function not available currently");
}

const btn = document.getElementById("sendMessage");
const bookbtn = document.getElementById("bookThisTrip");
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    btn.value = "Sending...";

    const serviceID = "service_mtkmfsb";
    const templateID = "template_ynbjg8a";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        btn.value = "Send Email";
        alert("Sent!");
        document.getElementById("contact-form").reset();
      },
      (err) => {
        btn.value = "Send Email";
        alert(
          "An error occured while sending your message. send it after some time"
        );
        console.error(err);
        // alert(JSON.stringify(err));
        document.getElementById("contact-form").reset();
      }
    );
  });

// BOOK TRIP
document
  .getElementById("bookTripForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    bookbtn.value = "Booking...";

    const serviceID = "service_mtkmfsb";
    const templateID = "template_l1dsf98";

    emailjs.sendForm(serviceID, templateID, this).then(
      () => {
        bookbtn.value = "Book Trip";
        alert("Trip Booked! Our team will get back to you in no time.");
        document.getElementById("bookTripForm").reset();
      },
      (err) => {
        bookbtn.value = "Book Trip";
        alert(
          "An error occured while sending your message. send it after some time"
        );
        console.error(err);
        // alert(JSON.stringify(err));
        document.getElementById("bookTripForm").reset();
      }
    );
  });

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
