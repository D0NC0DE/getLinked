var menuIcon = document.querySelector(".menu-icon");
var navBar = document.querySelector('.navBar');
var mainNav = document.querySelector('.mainNav');

// click event listener to the element
menuIcon.addEventListener("click", function () {
  
  this.classList.toggle("active");
  navBar.classList.toggle("active");
  mainNav.classList.toggle("active");
  
  var divElements = this.querySelectorAll("div");

  divElements.forEach(function (div) {
    div.classList.remove("no-animation");
  });
});

function checkMainNavScroll() {
    var mainNavRect = mainNav.getBoundingClientRect();
  
    if (mainNavRect.bottom < 0) {
      // MainNav is scrolled away from the viewport
      menuIcon.classList.remove("active");
      navBar.classList.remove("active");
      mainNav.classList.remove("active");
    }
  }
  
 
window.addEventListener("scroll", checkMainNavScroll);
