$(document).ready(function() {
  let navbar = $('.navbar');
  let icon = $('.burger');
  let overlay = $('.toggleNavbar');
  let nav_overlay_link = $('.toggle-overlay-links')
  let exit = $('.exit')

  $(document).scroll(function () {
    navbar.toggleClass('scrolled', $(this).scrollTop() > 610);
  });

  icon.click(function() {
    overlay.toggleClass('visible', 800);
  });

  exit.click(function() {
    overlay.toggleClass('visible', 800);
  });

  nav_overlay_link.click(function() {
    overlay.toggleClass('visible', 800);
  })
  
  
})
