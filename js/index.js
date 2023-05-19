function fade() {
    $('.preloader').fadeOut("slow");
    }
    $(document).ready(function() {
        var name = "Zil Patel"; // Preloader name for typewriter animation
        var text = "Ux Designer"; // Text to display in the second line
        var delay = 200; // Delay between each character (in milliseconds)
      
        var i = 0;
        var typewriterInterval = setInterval(function() {
          $(".typewriter").text(name.substring(0, i++));
          if (i > name.length) {
            clearInterval(typewriterInterval);
            $(".fade").removeClass("hidden").addClass("visible");
          }
        }, delay);
    setTimeout(fade, 3000); 
  
});



$(document).ready(function() {
    $(".dropdown").click(function() {
        $(this).toggleClass("active");
      $(this).find(".dropdown-content").toggle();
    });
    
    $(".navigation ul li").hover(
      function() {
        $(".dropdown.active").removeClass("active");
        $(this).siblings().find(".dropdown-content").hide();
      },
      
    );
  }); 

  $(document).ready(function() {
    // Smooth scroll animation on click
    $(".navigation a").on("click", function(event) {
      if ($(this).attr("href") === "#work") {
        event.preventDefault();
  
        // Store the target section
        var targetSection = $($(this).attr("href"));
  
        // Animate the scroll to the target section
        $("html, body").animate({
          scrollTop: targetSection.offset().top
        }, 800);
      }
    });
  });

  $(document).ready(function() {
    // Smooth scroll animation on click
    $(".navigation a").on("click", function(event) {
      if ($(this).attr("href") === "#about") {
        event.preventDefault();
  
        // Store the target section
        var targetSection = $($(this).attr("href"));
  
        // Animate the scroll to the target section
        $("html, body").animate({
          scrollTop: targetSection.offset().top
        }, 800);
      }
    });
  });

  $(document).ready(function() {
    $(".workcard").hover(
      function() {
        $(this).find(".workcard img").stop().fadeTo(300, 1); // Duration in milliseconds
      },
      function() {
        $(this).find(".workcard img").stop().fadeTo(300, 0); // Duration in milliseconds
      }
    );
  });