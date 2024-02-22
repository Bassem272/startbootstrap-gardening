// document.querySelector('.switch').addEventListener('click', toggleColor);


var elementsToChange = [
    document.getElementById("portfolio"),
    document.getElementById("page-top"),
    document.getElementById("team"),
    document.getElementsByTagName("h2"),
    document.getElementsByTagName("h3"),
    document.getElementsByTagName("h4"),
    document.getElementsByTagName("h5"),
    document.getElementsByTagName("h6"),
    document.getElementsByTagName("p"),

    // Add other elements as needed
  ];
  let counter =0; 
  console.log(counter);
  
  var originalColors = {}; // Store original colors for each element
  var isColorChanged = false;
  
  function toggleColor(input) {
      // event.preventDefault();
      console.log("I am clicked");
      console.log("I am alive");
      counter++; 
      let change = counter%2;
      console.log({counter, change});
      
    elementsToChange.forEach(function (element) {
      if (!originalColors[element]) {
        // Save the original color on the first click
        originalColors[element] = window.getComputedStyle(element).backgroundColor;
      }
  
      if (change == 0) {
        // Apply light mode
        element.classList.remove('bg-dark');
        element.classList.remove('text-white');
        element.classList.add('bg-light');
        // element.classList.add('text-dark');
      } else {
         console.log('ia  changed')
        // Apply dark mode
        element.classList.add('bg-dark');
        element.classList.add('text-white');
        element.classList.remove('bg-light');
        // element.classList.remove('text-dark');
      }
    });
  
    isColorChanged = !isColorChanged; // Toggle the state
  }
  