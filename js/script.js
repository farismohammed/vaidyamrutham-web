   //LOADER
   jQuery(window).on("load", function () {
    "use strict";
    jQuery(".loader").fadeOut(800);


 });

 

 jQuery(function ($) {
    "use strict";
    var $window = $(window);
    var windowsize = $(window).width();
    var $root = $("html, body");
    var $this = $(this);




    /*----- Menu On click -----*/
    if ($("#sidemenu_toggle").length) {
       $("body").addClass("pushwrap");
       $("#sidemenu_toggle").on("click", function () {
          $(".pushwrap").toggleClass("active");
          $(".side-menu").addClass("side-menu-active"), $("#close_side_menu").fadeIn(700)
       }), $("#close_side_menu").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $(this).fadeOut(200), $(".pushwrap").removeClass("active")
       }), $("#btn_sideNavClose").on("click", function () {
          $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
       }), $(".navbar-nav .nav-item").on("click", function () {
         $(".side-menu").removeClass("side-menu-active"), $("#close_side_menu").fadeOut(200), $(".pushwrap").removeClass("active")
      });
    }

    /* ------- Smooth scroll ------- */
    $("a.pagescroll").on("click", function (event) {
       event.preventDefault();
       $("html,body").animate({
          scrollTop: $(this.hash).offset().top
       }, 1200);
    });

    $(".navbar-nav>li>a").on("click", function () {
       $(".navbar-collapse").collapse("hide");
    });

    /*------ MENU Fixed ------*/
    if ($("nav.navbar").hasClass("static-nav")) {
       $window.scroll(function () {
          var $scroll = $window.scrollTop();
          var $navbar = $(".static-nav");
          if ($scroll > 100) {
             $navbar.addClass("fixedmenu");
          } else {
             $navbar.removeClass("fixedmenu");
          }
       });
    }

    function getVals(){
      // Get slider values
      let parent = this.parentNode;
      let slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat( slides[0].value );
        let slide2 = parseFloat( slides[1].value );
      // Neither slider will clip the other, so make sure we determine which is larger
      if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
      
      let displayElement = parent.getElementsByClassName("rangeValues")[0];
          displayElement.innerHTML = "Rs" + slide1 + " - Rs" + slide2;
    }
    

    
    var TxtType = function(el, toRotate, period) {
      this.toRotate = toRotate;
      this.el = el;
      this.loopNum = 0;
      this.period = parseInt(period, 10) || 2000;
      this.txt = '';
      this.tick();
      this.isDeleting = false;
  };

  TxtType.prototype.tick = function() {
      var i = this.loopNum % this.toRotate.length;
      var fullTxt = this.toRotate[i];

      if (this.isDeleting) {
      this.txt = fullTxt.substring(0, this.txt.length - 1);
      } else {
      this.txt = fullTxt.substring(0, this.txt.length + 1);
      }

      this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

      var that = this;
      var delta = 200 - Math.random() * 100;

      if (this.isDeleting) { delta /= 2; }

      if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
      } else if (this.isDeleting && this.txt === '') {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
      }

      setTimeout(function() {
      that.tick();
      }, delta);
  };

  window.onload = function() {
      var elements = document.getElementsByClassName('typewrite');
      for (var i=0; i<elements.length; i++) {
          var toRotate = elements[i].getAttribute('data-type');
          var period = elements[i].getAttribute('data-period');
          if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
          }
      }
      // INJECT CSS
      var css = document.createElement("style");
      css.type = "text/css";
      css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #663300}";
      document.body.appendChild(css);

       // Initialize Sliders
       let sliderSections = document.getElementsByClassName("range-slider");
       for( let x = 0; x < sliderSections.length; x++ ){
         let sliders = sliderSections[x].getElementsByTagName("input");
         for( let y = 0; y < sliders.length; y++ ){
           if( sliders[y].type ==="range" ){
             sliders[y].oninput = getVals;
             // Manually trigger event first time to display values
             sliders[y].oninput();
           }
         }
       }
  };

  $(document).ready(function(){
   $(".banner-slider").owlCarousel({
      loop:true,
      items:1,
      center: true,
      margin:30,
      nav:false,
      autoplay:true,
      autoplayTimeout:10000,
      autoplayHoverPause:true,
      animateOut: 'fadeOut',
      dots:true,
   });
   $(".category-slider").owlCarousel({
      loop:true,
      items:6,
      margin:30,
      nav:true,
      navText: [
         "<i class='fas fa-angle-left'></i>",
         "<i class='fas fa-angle-right'></i>"
     ],
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true,
      animateIn: 'fadeIn',
      dots:false,
   });
  });

  AOS.init();

  let count = document.querySelectorAll(".count")
let arr = Array.from(count)



arr.map(function(item){
  let startnumber = 0

  function counterup(){
  startnumber++
  item.innerHTML= startnumber
   
  if(startnumber == item.dataset.number){
      clearInterval(stop)
  }
}

let stop =setInterval(function(){
  counterup()
},50)

})

// Get the element
let topBtn = document.querySelector(".top-btn");

// On Click, Scroll to the page's top, replace 'smooth' with 'instant' if you don't want smooth scrolling
topBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// On scroll, Show/Hide the btn with animation
window.onscroll = () => topBtn.style.opacity = window.scrollY > 500 ? 1 : 0;


 });