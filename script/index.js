// ***********mobile-menu***********
function toggleMenu() {
  var offcanvasMenu = document.getElementById("offcanvasMenu");
  var closeIcon = document.querySelector(".close-icon");
  var menuToggle = document.getElementById("menuToggle");
  
  offcanvasMenu.classList.toggle("active");
  closeIcon.style.display = offcanvasMenu.classList.contains("active") ? "block" : "none";
  menuToggle.style.display = offcanvasMenu.classList.contains("active") ? "none" : "block";
}
// **********drop-down************
function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  var ariaExpanded = dropdownContent.getAttribute("aria-expanded");
  if (ariaExpanded === "true") {
    dropdownContent.setAttribute("aria-expanded", "false");
    dropdownContent.classList.add("hidden");
  } else {
    dropdownContent.setAttribute("aria-expanded", "true");
    dropdownContent.classList.remove("hidden");
  }
}
// *************accordion**********
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.accordion-item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.accordion-header');
    header.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});
// *************info-accordion**********
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.info_accordion_item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.info_accordion_header');
    header.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});
// *************modile-nav-accordion**********
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.nav_accordion_item');
  accordionItems.forEach(item => {
    const header = item.querySelector('.nav_accordion_header');
    header.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});
// *************Metro-Detroit**********
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    // Toggle the 'active' class for styling
    this.classList.toggle("active");
    
    // Toggle the icon class to change the icon
    var icon = this.querySelector("i");
    icon.classList.toggle("fa-chevron-down");
    icon.classList.toggle("fa-chevron-right");

    // Select the next element (panel) after the clicked accordion
    var panel = this.nextElementSibling;

    // Check if the panel is currently displayed
    if (panel.style.display === "block" || window.getComputedStyle(panel).display === "block") {
      // If displayed, hide it
      panel.style.display = "none";
    } else {
      // If not displayed, show it
      panel.style.display = "block";
    }
  });
}
// *************pay-accordion**********
document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.pay_accordion_item');

  accordionItems.forEach(item => {
    const header = item.querySelector('.pay_accordion_header');
    header.addEventListener('click', function () {
      item.classList.toggle('active');
    });
  });
});

// *******************book-tab-menu*********
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("summary");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}
// *******************pay-tab-menu*********
function openPayment(paymentName) {
  var i;
  var x = document.getElementsByClassName("payment");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(paymentName).style.display = "block";  
}
// *******************pay-tab-menu-desktopn*********
function openPayment_desktop(paymentName) {
  var i;
  var x = document.getElementsByClassName("payment_desktop");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(paymentName).style.display = "block";  
}