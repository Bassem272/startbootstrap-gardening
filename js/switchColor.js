// Add this function to set the initial state
let links = [];
let modals = [];

function setInitialState() {
  var input = document.querySelector(".input");
  toggleColor(input);
  links = document.querySelectorAll(".link"); 
  modals = document.querySelectorAll(".modal-content");
  if (modals) {
    console.log("Modals found");
  } else {
    console.log("No modals found");
  }
}


// Call the setInitialState function when the page loads
document.addEventListener("DOMContentLoaded", setInitialState);


let elementsToChange = [
  document.getElementById("portfolio"),
  document.getElementById("page-top"),
  document.getElementById("team"),
  ...document.querySelectorAll("h2, h3, h4, h5, h6, p, .text-muted, .go"),
  // Add other elements as needed
];

var isColorChanged = false;

function toggleColor(input) {
  console.log("Toggle Color Clicked");
  elementsToChange.forEach(function (element) {
    if (
      element.classList.contains("portfolio-item") ||
      element.classList.contains("portfolio-caption-heading") ||
      element.classList.contains("portfolio-caption-subheading") ||
      element.classList.contains("bepartof") ||
      element.classList.contains("dont")
    ) {
      // Skip this element
      return;
    }

    // Add transition class to elements
    element.classList.add("color-transition");

    if (!isColorChanged) {
    
      element.classList.remove("bg-dark", "text-white");
      if (element.classList.contains("text-muted")) {
        element.classList.add("text-muted");
      }
      if (element.classList.contains("go")) {
        element.classList.remove("btn-light");
        element.classList.add("btn-dark");
        return;
      }
      if (element.classList.contains("link")) {
        element.classList.remove("link-light");
        element.classList.add("link-dark");
        return;
      }
      element.classList.add("bg-light", "text-dark");
      if (links) {
        links.forEach(function (element) {
          element.classList.add("link-dark");
          element.classList.remove("link-light");
        });
      } else {
        console.log("Link not found");
      }
      if (modals) {
        modals.forEach(function (element) {
          element.classList.remove("bg-dark");
          element.classList.add("bg-light");
        });
      } else {
        console.log("modal content not found");
      }
    } else {
      // Dark mode

      element.classList.remove("bg-light", "text-dark");
      if (element.classList.contains("text-muted")) {
        element.classList.remove("text-muted");
      }
      if (element.classList.contains("go")) {
        element.classList.remove("btn-dark");
        element.classList.add("btn-light");
        return;
      }
      if (element.classList.contains("link")) {
        element.classList.remove("link-dark");
        element.classList.add("link-light");
        return;
      }
      element.classList.add("bg-dark", "text-white");
      if (links) {
        links.forEach(function (element) {
          element.classList.remove("link-dark");
          element.classList.add("link-light");
        });
      } else {
        console.log("Link not found");
      }
      if (modals) {
        modals.forEach(function (element) {
          element.classList.add("bg-dark");
          element.classList.remove("bg-light");
        });
      } else {
        console.log("modal content not found");
      }
    }
  });
  isColorChanged = !isColorChanged;
}



// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    var navbarToggleBtn = document.getElementById('navbarToggleBtn');
    var barsIcon = document.getElementById('barsIcon');

    navbarToggleBtn.addEventListener('click', function() {
        barsIcon.classList.toggle('rotated');
    });
});

