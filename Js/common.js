// Grow animation

// let growAnimation = document.querySelector('')
// growAnimation.classList.add("undl");

// About us
// let aboutUs = document.querySelector('#about-us_header');
// let aboutUs = document.getElementById("about-us_header");
// aboutUs.style.backgroundColor("pink");
// aboutUs.classList.add("undl");


// Roller Function start
display = true;
$(window).scroll(function(){
  
  function elementScrolled(elem)
  {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }

  if(elementScrolled('#scroll-to') && display) {

    $('.Count').each(function (_, self) {
      jQuery({
          Counter: 0
      }).animate({
          Counter: $(self).text()
      }, {
          duration: 2500,
          easing: 'swing',
          step: function () {
              $(self).text(Math.ceil(this.Counter));
          }
      });
    });


    // console.log("activated");
    display = false;
  }
});
// Roller Function end

  
$(window).scroll(function(){
  
  function elementScrolled(elem)
  {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    return ((elemTop <= docViewBottom) && (elemTop >= docViewTop));
  }

  if(elementScrolled('#about-us_header')) {
    
  }
});


 
