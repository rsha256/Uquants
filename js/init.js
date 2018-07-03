(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

// start
$(document).ready(function () {

  // Dropdown
  $('.dropdown-trigger').dropdown({
      closeOnClick:true,
      coverTrigger: false,
      inDuration: 300,
      outDuration: 225,
      hover: true, // Activate on hover
      belowOrigin: false // Displays dropdown below the button
    }
  );

});
