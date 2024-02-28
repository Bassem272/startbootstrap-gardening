// Add this function to set the initial state
function setInitialState() {
  var input = document.querySelector(".input");
  toggleColor(input);
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

let links = document.querySelectorAll(".link"); // Use querySelector to get the first element with class "link"
function toggleColor(input) {
  // link.classList.toggle("link-dark");
  // link.classList.toggle("link-light");
  console.log("Toggle Color Clicked");
  elementsToChange.forEach(function (element) {
    // Check if the element has the class 'portfolio-item' or other classes you want to exclude
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
      // Light mode
      changeLink();
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
      // let links = document.querySelectorAll(".link"); // Use querySelector to get the first element with class "link"

      if (links) {
        //  console.log(link);
        links.forEach(function (element) {
          element.classList.add("link-dark");
          element.classList.remove("link-light");
        });
      } else {
        console.error("Link not found");
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
      // let links = document.querySelectorAll(".link"); // Use querySelector to get the first element with class "link"
      if (links) {
        //  console.log(link);
        links.forEach(function (element) {
          element.classList.remove("link-dark");
          element.classList.add("link-light");
        });
      } else {
        console.error("Link not found");
      }
    }
  });

  isColorChanged = !isColorChanged;
}

function changeLink() {
  let links = document.querySelectorAll(".link"); // Use querySelector to get the first element with class "link"
  if (links) {
    //  console.log(link);
    links.forEach(function (element) {
      element.classList.toggle("link-light");
      element.classList.toggle("link-dark");
    });
  } else {
    console.error("Link not found");
  }
}

// function changeSocialIcons(){
//   var socialIcons = document.querySelectorAll('go');
// socialIcons.forEach(function(socialIcon) {
//     // if (!isColorChanged) {g
//       socialIcon.classList.remove("btn-dark");
//       socialIcon.classList.add("btn-light");
// // }
// });
// // isColorChanged = !isColorChanged;
// }

// function changeBack(){
//   var back = document.querySelectorAll('go');
// back.forEach(function(back) {
//     // if (!isColorChanged) {
//       back.classList.remove("btn-light");
//       back.classList.add("btn-dark");
//     // }
// });

// }
