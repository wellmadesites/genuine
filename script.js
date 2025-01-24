// Back to Top Button Logic
document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show/Hide Button Based on Scroll Position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) { // Show when scrolled down 300px
      backToTopButton.style.display = "block";
    } else {
      backToTopButton.style.display = "none";
    }
  });

  // Smooth Scroll to Top
  backToTopButton.addEventListener("click", function (e) {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
});
