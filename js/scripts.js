/*!
* Start Bootstrap - Agency v7.0.12 (https://startbootstrap.com/theme/agency)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-agency/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        const navLinks = document.body.querySelectorAll('.nav-link')
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            // navbarCollapsible.classList.remove('navbar-shrink')
            navLinks.forEach(function(link) {
              link.classList.add("text-warning");  
              link.classList.add("font-weight-bold");  
              console.log("change");
            })
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
            navLinks.forEach(function(link) {
                if(link.classList.contains("text-dark") && link.classList.contains("font-weight-bold") ) {
                    link.classList.remove("text-info");  
                    link.classList.remove("font-weight-bold");  
                }
                })
            // links.classList.add("text-white");  
            console.log('moved and dark')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    //  Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

// this was added by bassem for the floating icons

document.addEventListener('DOMContentLoaded', function () {
    const navbarToggler = document.getElementById('navbar-toggler');
    const lottieIcon1 = document.getElementById('whatsapp');
    const lottieIcon2 = document.getElementById('call');
  
    let isIconsTranslated = false;
  
    navbarToggler.addEventListener('click', function () {
      if (isIconsTranslated) {
        // If icons are already translated, reset their positions
        resetIconsPosition();
      } else {
        // If icons are not translated, move them to the middle of the screen
        translateIconsToMiddle();
      }
  
      // Toggle the state
      isIconsTranslated = !isIconsTranslated;
    });
  
    function translateIconsToMiddle() {
      // Calculate the middle position based on the window size
      const middleX = window.innerWidth / 2 - lottieIcon1.clientWidth / 2;
      const middleY = window.innerHeight / 2 - lottieIcon1.clientHeight / 2;
  
      // Apply translation to the middle position
      lottieIcon1.style.transform = `translate(${middleX}px, ${middleY}px)`;
      lottieIcon2.style.transform = `translate(${middleX}px, ${middleY}px)`;
    }
  
    function resetIconsPosition() {
      // Reset icons to their original positions
      lottieIcon1.style.transform = 'translate(0, 0)';
      lottieIcon2.style.transform = 'translate(0, 0)';
    }
  });
  
