// Find the <select> element
const selectElement = document.querySelector(".goog-te-combo");

// Add an event listener for the 'change' event
selectElement.addEventListener("change", function (event) {
  // Access the selected option
  const selectedOption = event.target.value;

  // Log the selected option to the console
  console.log("Selected language:", selectedOption);

  // Add your logic here to handle the selected language
});
