document.addEventListener("DOMContentLoaded", function () {
  const backToTopButton = document.getElementById("back-to-top");

  // Show/Hide Button Based on Scroll Position
  window.addEventListener("scroll", function () {
    const scrollHeight = document.documentElement.scrollHeight; // Total page height
    const scrollPosition = window.scrollY; // Current scroll position
    const viewportHeight = window.innerHeight; // Height of the visible area

    // Show button if scrolled 30% of the total page height
    if (scrollPosition > (scrollHeight - viewportHeight) * 0.3) {
      backToTopButton.style.display = "flex"; // Use flex to center content
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
