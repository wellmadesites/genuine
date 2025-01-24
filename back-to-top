document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show/Hide the Back to Top button when scrolling
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // Show button after scrolling down 300px
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Scroll smoothly to the top when the button is clicked
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
