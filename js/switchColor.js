var elementsToChange = [
  document.getElementById("portfolio"),
  document.getElementById("page-top"),
  document.getElementById("team"),

  ...document.querySelectorAll("h2, h3, h4, h5, h6, p, .text-muted"),
  // Add other elements as needed
];

var isColorChanged = false;

function toggleColor(input) {
  console.log("Toggle Color Clicked");
  elementsToChange.forEach(function (element) {
    // Check if the element has the class 'portfolio-item' or other classes you want to exclude
    if (
      element.classList.contains("portfolio-item") ||
      element.classList.contains("portfolio-caption-heading") ||
      element.classList.contains("portfolio-caption-subheading") ||
      element.classList.contains("bepartof")
    ) {
      // Skip this element
      return;
    }

    // Add transition class to elements
    element.classList.add("color-transition");

    if (!isColorChanged) {
      // Light mode
      element.classList.remove("bg-dark", "text-white");
      if (element.classList.contains("text-muted")) {
        element.classList.add("text-muted");
      }
      // if (element.classList.contains("go")) {
      //   element.classList.remove("btn-light");
      //   element.classList.add("btn-dark");
      //   return;
      // }
      element.classList.add("bg-light", "text-dark");
    } else {
      // Dark mode
      element.classList.remove("bg-light", "text-dark");
      if (element.classList.contains("text-muted")) {
        element.classList.remove("text-muted");
      }
      // if (element.classList.contains("go")) {
      //   element.classList.remove("btn-dark");
      //   element.classList.add("btn-light");
      //   return;
      // }
      element.classList.add("bg-dark", "text-white");
    }
  });

  isColorChanged = !isColorChanged;
}
