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

// *******************book-tab-menu*********
function openCity(cityName) {
  var i;
  var x = document.getElementsByClassName("summary");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  document.getElementById(cityName).style.display = "block";  
}