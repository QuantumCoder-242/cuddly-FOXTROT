// Function to toggle the hamburger menu in mobile view
function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}



document.addEventListener("DOMContentLoaded", function() {
  // Check if the explore link exists
  const exploreLink = document.querySelector('a[href="#footer"]');
  if (exploreLink) {
      exploreLink.addEventListener('click', function(e) {
          e.preventDefault(); // Prevent the default anchor behavior
          const footer = document.getElementById('footer');
          if (footer) {
              footer.scrollIntoView({ behavior: 'smooth' });
          }
      });
  }
});



document.addEventListener("DOMContentLoaded", function() {
  // For scrolling to the footer
  const exploreLink = document.querySelector('a[href="#footer"]');
  if (exploreLink) {
      exploreLink.addEventListener('click', function(e) {
          e.preventDefault();
          const footer = document.getElementById('footer');
          if (footer) {
              footer.scrollIntoView({ behavior: 'smooth' });
          }
      });
  }

  // For scrolling back to top
  const backToTopLinks = document.querySelectorAll('a[href="#"]');
  backToTopLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          window.scrollTo({
              top: 0,
              behavior: "smooth"
          });
      });
  });
});



