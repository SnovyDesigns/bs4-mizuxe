import $ from 'jquery';

$('#year').text(new Date().getFullYear());

// $('body').scrollspy({ target: '#main-nav' });

// $('#main-nav a').on('click', function(e) {
//   // Check for a hash value
//   if (this.hash !== '') {
//     // Prevent default behaviour
//     e.preventDefault();
//   }
//   const hash = this.hash;

//   $('html, body').animate(
//     {
//       scrollTop: $(hash).offset().top
//     },
//     900,
//     function() {
//       // Add hash to URL after scroll
//       window.location.hash = hash;
//     }
//   );
// });
