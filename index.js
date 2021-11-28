var test=true;
var test1=true;
$(window).bind('scroll', function() {
    if($(window).scrollTop() >= $("#home").offset().top + 10) {
      $(".navbar").attr("id", "fixed");
    }
    if($(window).scrollTop() < $("#home").offset().top + 10) {
      $(".navbar").attr("id", "");
    }
    if($(window).scrollTop() >= $("#home").offset().top) {
        $(".h").attr("id", "current");
    }
    if($(window).scrollTop() >= $("#home").offset().top + 200) {
        $(".h").attr("id","");
    }
    if($(window).scrollTop() >= $("#about").offset().top - 100) {
        $(".a").attr("id","current");
    }
      if($(window).width() > 993) {
        if($(window).scrollTop() >= $("#skills").offset().top + 500) {
          if(test1) {
            move();
            test1=false;
          }
        }
      }
      else if($(window).scrollTop() >= $("#about").offset().top + 3000) {
        if(test) {
          move();
          test=false;
        }
      }
    if($(window).scrollTop() > $("#about").offset().top + 200 || $(window).scrollTop() < $("#about").offset().top - 100) {
        $(".a").attr("id","");
    }
    if($(window).scrollTop() >= $("#skills").offset().top - 200) {
        $(".s").attr("id","current");
      }
    if($(window).scrollTop() > $("#skills").offset().top + 500 || $(window).scrollTop() < $("#skills").offset().top -200) {
        $(".s").attr("id","");
    }
    if($(window).scrollTop() >= $("#certificates").offset().top - 200) {
      $(".ce").attr("id","current");
      }
    if($(window).scrollTop() > $("#certificates").offset().top + 200 || $(window).scrollTop() < $("#certificates").offset().top -200) {
        $(".ce").attr("id","");
    }
    if($(window).scrollTop() >= $("#contact").offset().top - 200) {
      $(".co").attr("id","current");
      }
    if($(window).scrollTop() > $("#contact").offset().top + 200 || $(window).scrollTop() < $("#contact").offset().top -200) {
        $(".co").attr("id","");
    }
});
function move() {
  var htmlelem = document.getElementById("html");
  var htmlwidth = 1;
  var htmlid = setInterval(htmlframe, 1);
  function htmlframe() {
    if (htmlwidth >= 90) {
      clearInterval(htmlid);
    } else {
      htmlwidth++;
      htmlelem.style.width = htmlwidth + '%';
    }
  }
  var csselem = document.getElementById("css");
  var csswidth = 1;
  var cssid = setInterval(cssframe, 1);
  function cssframe() {
    if (csswidth >= 80) {
      clearInterval(cssid);
    } else {
      csswidth++;
      csselem.style.width = csswidth + '%';
    }
  }
  var jselem = document.getElementById("js");
  var jswidth = 1;
  var jsid = setInterval(jsframe, 1);
  function jsframe() {
    if (jswidth >= 75) {
      clearInterval(jsid);
    } else {
      jswidth++;
      jselem.style.width = jswidth + '%';
    }
  }
  var phpelem = document.getElementById("php");
  var phpwidth = 1;
  var phpid = setInterval(phpframe, 1);
  function phpframe() {
    if (phpwidth >= 80) {
      clearInterval(phpid);
    } else {
      phpwidth++;
      phpelem.style.width = phpwidth + '%';
    }
  }
  var wpelem = document.getElementById("wp");
  var wpwidth = 1;
  var wpid = setInterval(wpframe, 1);
  function wpframe() {
    if (wpwidth >= 85) {
      clearInterval(wpid);
    } else {
      wpwidth++;
      wpelem.style.width = wpwidth + '%';
    }
  }
  var pselem = document.getElementById("ps");
  var pswidth = 1;
  var psid = setInterval(psframe, 1);
  function psframe() {
    if (pswidth >= 90) {
      clearInterval(psid);
    } else {
      pswidth++;
      pselem.style.width = pswidth + '%';
    }
  }
}

/**
 * Easy selector helper function
 */
const select = (el, all = false) => {
  el = el.trim()
  if (all) {
    return [...document.querySelectorAll(el)]
  } else {
    return document.querySelector(el)
  }
}

/**
 * Easy event listener function
 */
const on = (type, el, listener, all = false) => {
  let selectEl = select(el, all)
  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
      selectEl.addEventListener(type, listener)
    }
  }
}

/**
 * Easy on scroll event listener
 */
const onscroll = (el, listener) => {
  el.addEventListener('scroll', listener)
}
  /**
   * Testimonials slider
   */
  new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  });

  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  //Get the button:
  mybutton = document.getElementById("myBtn");
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
