// jQuery(document).ready(function() {
//     var navOffset = jQuery("nav").offset().top;

//     jQuery("nav").wrap('<div class="nav-placeholder"></div>');
//     jQuery(".nav-placeholder").height(jQuery("nav").outerHeight());

//     // jQuery(".nav").wrapInner('<div class="nav-innver"></div>');
//     // Query(".nav-inner").wrapInner('<div class="nav-innver-most"></div>');

//     jQuery(window).scroll(function() {
//          var scrollPos = jQuery(window).scrollTop();

//          if (scrollPos >= navOffset) {
//              jQuery("nav").addClass("fixed");
//          } else {
//              jQuery("nav").removeClass("fixed");
//          }
         
//     });
//  });  
document.addEventListener('DOMContentLoaded', function () {

    // Get all "navbar-burger" elements
    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {
  
      // Add a click event on each of them
      $navbarBurgers.forEach(function ($el) {
        $el.addEventListener('click', function () {
  
          // Get the target from the "data-target" attribute
          var target = $el.dataset.target;
          var $target = document.getElementById(target);
  
          // Toggle the class on both the "navbar-burger" and the "navbar-menu"
          $el.classList.toggle('is-active');
          $target.classList.toggle('is-active');
  
        });
      });
    }
  
  }); 