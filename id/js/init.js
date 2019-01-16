(function ($) {
  $(function () {

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    window.onscroll = function () {
      scrollFunction()
    };

    function scrollFunction() {
      if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        $("#navbar-auto").css("top", "0");
      } else {
        $("#navbar-auto").css("top", "-70px");
      }
    }

    $(".sidenav-trigger-first").click(
      function () {
        $("#menu-first").toggleClass("active");
      }
    );

    $("div").addClass(function (index, currentClass) {
      var addedClass;

      if (currentClass === "red") {
        addedClass = "green";
        $("p").text("There is one green div");
      }

      return addedClass;
    });

    $('.modal').modal();
    $('.modal').modal("open");

    // Get height: 
    var w = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName('body')[0],
      x = w.innerWidth || e.clientWidth || g.clientWidth,
      y = w.innerHeight || e.clientHeight || g.clientHeight;

    function t() {
      $(".parallax-container").css('height', y);
    }

    window.onload = t;
    window.onresize = t;


    // Tooltp
    $('.tooltipped').tooltip();


  }); // end of document ready
})(jQuery); // end of jQuery name space
