window.addEventListener("resize", function () {
  if (window.innerWidth > 768) {
    document.getElementById("menu-toggle").checked = false;
  }
});

// Slide Show Functionality
let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[slideIndex - 1].className += " active";
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}

// Initialize EmailJS
(function () {
  emailjs.init("ylxAamj6lPGpxACme"); // Replace 'YOUR_USER_ID' with your actual EmailJS user ID
})();

function sendMail() {
  let params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send("service_tgm9yo8", "template_1wa2ny9", params).then(
    function (response) {
      console.log("SUCCESS!", response.status, response.text);
      alert("Email sent successfully!");
      document.getElementById("contactForm").reset();
    },
    function (error) {
      console.log("FAILED...", error);
      alert("Failed to send email. Please try again later.");
    }
  );
}
