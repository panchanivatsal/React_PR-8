/*=== Javascript function indexing hear===========
1.counterUp ----------(Its use for counting number)
2.stickyHeader -------(header class sticky)
3.wowActive ----------( Waw js plugins activation)
4.swiperJs -----------(All swiper in this website hear)
5.salActive ----------(Sal animation for card and all text)
6.textChanger --------(Text flip for banner section)
7.timeLine -----------(History Time line)
8.datePicker ---------(On click date calender)
10.timeLineStory -----(History page time line)
11.vedioActivation----(Vedio activation)
12.searchOption ------(search open)
13.cartBarshow -------(Cart sode bar)
14.sideMenu ----------(Open side menu for desktop)
15.Back to top -------(back to top)
16.filterPrice -------(Price filtering)
==================================================*/

(function ($) {
  'use strict';

  var rtsJs = {
      m: function (e) {
          rtsJs.d();
          rtsJs.methods();
      },
      d: function (e) {
          this._window = $(window),
          this._document = $(document),
          this._body = $('body'),
          this._html = $('html')
      },
      methods: function (e) {
          rtsJs.swiperJs();
          rtsJs.datePicker();
          rtsJs.gridList();
          rtsJs.passwordHideShow();
          rtsJs.custonSelectBox();
          rtsJs.videoSinglePlay();
          rtsJs.countDown();
          rtsJs.mobileMenu();
          rtsJs.searchPopup();
          rtsJs.stickyHeader();
          rtsJs.counTerJsActive();
          rtsJs.preLoaderActivation();
      },



      // Swiper
      swiperJs: function () {
          
        $(document).ready(function(){
          // Start Bron Today Slider (swiper slider)
          var swiper = new Swiper(".brond-today-slider", {
            slidesPerView: 6,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop:true,
            autoPlay: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
              breakpoints:{
                1500: {
                  slidesPerView: 6,
                },
                992: {
                  slidesPerView: 6,
                },
                991: {
                  slidesPerView: 3,
                },
                575: {
                  slidesPerView: 3,
                },
                0: {
                  slidesPerView: 2,
                }
              },
          });
        // End Bron Today Slider (swiper slider)
        });


        $(document).ready(function(){
            // Start New Movie Slider (swiper slider)
            var swiper = new Swiper(".new-movie-slider", {
              slidesPerView: 4,
              spaceBetween: 30,
              slidesPerGroup: 1,
              loop:true,
              autoPlay: true,
              pagination: {
                  el: ".swiper-pagination",
                  clickable: true,
                },
              navigation: {
                  nextEl: ".swiper-button-next2",
                  prevEl: ".swiper-button-prev2",
                },
                breakpoints:{
                  1500: {
                    slidesPerView: 4,
                  },
                  992: {
                    slidesPerView: 4,
                  },
                  991: {
                    slidesPerView: 3,
                  },
                  767: {
                    slidesPerView: 2,
                  },
                  0: {
                    slidesPerView: 1,
                  }
                },
            });
            // End New Movie Slider (swiper slider)
        });

        $(document).ready(function(){
          // Start Full Slider Content
         var swiper = new Swiper(".full-slider-content", {
          slidesPerView: 2,
          spaceBetween: 0,
          slidesPerGroup: 1,
          centeredSlides: true,
          loop: true,
          autoplay: false,
          loopFillGroupWithBlank: true,
          speed:1800,
          pagination: {
            el: ".swiper-paginations",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 2,
            },
            1199: {
              slidesPerView: 2,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
        // End Full Slider Content
        });
        
        $(document).ready(function(){
          // Start Full Slider Hero Banner Home-3
         var swiper = new Swiper(".full-slider-hero-banner-hm3", {
          slidesPerView: 3,
          spaceBetween: 0,
          centeredSlides: true,
          loop: true,
          autoplay: false,
          loopAdditionalSliders: 30,
          initialSlide: 0,
          speed:1800,
          pagination: {
            el: ".swiper-paginations",
            clickable: true,
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            1500: {
              slidesPerView: 3,
              loopAdditionalSliders: 30,
              centeredSlides: true
            },
            1200:{
              slidesPerView: 3,
            },
            1199: {
              slidesPerView: 2,
              centeredSlides: false,
            },
            991: {
              slidesPerView: 2,
            },
            767: {
              slidesPerView: 1,
            },
            575: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            }
          },
        });
        // End Full Slider Hero Banner Home-3
        });

        $(document).ready(function(){
          // Start Latest News (swiper slider)
          var swiper = new Swiper(".latest-news", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next3",
              prevEl: ".swiper-button-prev3",
            },
            breakpoints: {
              1500: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              }
            },
          });
          // End Latest News (swiper slider)
        });
        $(document).ready(function(){
          // Start Latest News (swiper slider)
          var swiper = new Swiper(".tbo-slider ", {
            slidesPerView: 3,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next2",
              prevEl: ".swiper-button-prev2",
            },
            breakpoints: {
              1500: {
                slidesPerView: 3,
              },
              1199: {
                slidesPerView: 3,
              },
              991: {
                slidesPerView: 3,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              }
            },
          });
          // End Latest News (swiper slider)
        });
        $(document).ready(function(){
          // Start Blog Details (swiper slider)
          var swiper = new Swiper(".blog-latest-news", {
            slidesPerView: 2,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
          // End Blog Details (swiper slider)
        });
        $(document).ready(function (){
          // Start About Area Slider 
          var swiper = new Swiper(".about-tema-slider", {
            slidesPerView: 4,
            spaceBetween: 30,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            navigation: {
              nextEl: ".swiper-button-next2",
              prevEl: ".swiper-button-prev2",
            },
            breakpoints: {
              1500: {
                slidesPerView: 4,
              },
              1199: {
                slidesPerView: 4,
              },
              991: {
                slidesPerView: 4,
              },
              767: {
                slidesPerView: 2,
              },
              575: {
                slidesPerView: 1,
              },
              0: {
                slidesPerView: 1,
              }
            },
          });
          // End About Area Slider
        })
        $(document).ready(function(){
          // Start Hero Main Slider
          var swiper = new Swiper(".mySwiper", {
            loop: true,
            spaceBetween: 0,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesProgress: true,
          });
          var swiper2 = new Swiper(".mySwiper2", {
            loop: false,
            spaceBetween: 0,
            slidesPerView: 1,
            speed:2000,
            thumbs: {
              swiper: swiper,
            },
            pagination: {
              el: ".swiper-paginations",
              clickable: true,
            },
          });
          // End Top Box Office Slider
        });

        $(document).ready(function() {
          // Start Top Box Office Slider
          var swiper = new Swiper(".bfss-slider", {
            slidesPerView: 6,
            spaceBetween: 30,
            slidesPerGroup: 1,
            loop:true,
            autoPlay: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
              },
            navigation: {
                nextEl: ".swiper-button-next2",
                prevEl: ".swiper-button-prev2",
              },
              breakpoints: {
                1500: {
                  slidesPerView: 6,
                },
                1199: {
                  slidesPerView: 4,
                },
                991: {
                  slidesPerView: 4,
                },
                767: {
                  slidesPerView: 2,
                },
                575: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                }
              },
          });
          // End Top Box Office Slider
        });
        $(document).ready(function (){
          // Start Hero Slider Banner Home-2
          var swiper = new Swiper(".hero-slider-hm2", {
            slidesPerView: 1,
            slidesPerGroup: 1,
            loop: true,
            loopedSlides: 50,
            autoHeight: true,
            shortSwipes: false,
            longSwipes: false,
            effect: 'fade',
            speed:2000,
            autoPlay: true,
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
          });
          // End Hero Slider Banner Home-2
        });
      },

      // date picker
      datePicker: function () {
        jQuery(document).ready(function () {
          jQuery('#datepicker').datepicker({
              format: 'dd-mm-yyyy',
              startDate: '+1d'
          });
        });
      },

      // Grid - List System
      gridList: function(){
        $(document).ready(function (){
          // Start Griding
          $('.griding1').on('click', function (){
            $('.gridings-flexing').addClass('gridings-flexing-active');
            $('.grid-listings').addClass('grid-listings-removing'); 
          });
          $('.gridlist1').on('click', function (){
            $('.gridings-flexing').removeClass('gridings-flexing-active');
            $('.grid-listings').removeClass('grid-listings-removing');
          });
    
          $('.gridlists1').on('click', function (){
            $('.grid-listingss').addClass('grid-listingss-active');
            $('.gridings-flexings').addClass('gridings-flexings-removing'); 
          });
          $('.gridings1').on('click', function (){
            $('.grid-listingss').removeClass('grid-listingss-active');
            $('.gridings-flexings').removeClass('gridings-flexings-removing');
          });
    
          // End Griding
      });
      },

      // Password Show Hide
      passwordHideShow: function(){
        let passwordShowHide = document.getElementsByClassName('password-show-hide')
        if(passwordShowHide.length){
          $(document).ready(function(){
            // Start Password Show Hide 
          const passwordInput = document.querySelector("#password")
          const eye = document.querySelector("#eye")
          eye.addEventListener("click", function(){
            this.classList.toggle("fa-eye-slash")
            const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
            passwordInput.setAttribute("type", type)
          })
          // End Password Show Hide 
          });
        }
      },

      // Custom Category Box
      custonSelectBox: function(){
        $(document).ready(function (){
          $('.custom-select').each(function () {
            const selectBox = document.querySelector('.custom-select');
            const selectedOption = selectBox.querySelector('.selected-option');
            const optionsList = selectBox.querySelector('.options');
            // Close options list when clicking outside
            document.addEventListener('click', (event) => {
              if (!selectBox.contains(event.target)) {
                optionsList.style.display = 'none';
              }
            });
            
          });
        })
      },

      // Single Page Video Play
      videoSinglePlay: function(e){
        let videoBtnActive = document.getElementsByClassName('video-player-1');
        if(videoBtnActive.length){
          $(document).ready(function (){
            const video = document.getElementById("video-player");
            const playButton = document.getElementById("playButton");
            const pauseButton = document.getElementById("pauseButton");
            // Show the play button and hide the pause button initially
            playButton.classList.remove("hide");
            pauseButton.classList.add("hide");
            // When the play button is clicked, hide the play button and show the pause button
            playButton.addEventListener("click", () => {
              video.play();
              playButton.classList.add("hide");
              pauseButton.classList.remove("hide");
            });
            // When the pause button is clicked, hide the pause button and show the play button
            pauseButton.addEventListener("click", () => {
              video.pause();
              pauseButton.classList.add("hide");
              playButton.classList.remove("hide");
            });
            // When the video is clicked, pause the video and toggle the buttons
            video.addEventListener("click", () => {
              if (video.paused) {
                video.play();
                playButton.classList.add("hide");
                pauseButton.classList.remove("hide");
              } else {
                video.pause();
                pauseButton.classList.add("hide");
                playButton.classList.remove("hide");
              }
            });
          })
        }


      },

      // Time Count Down
      countDown: function(){


        let counetActive = document.getElementsByClassName('count-active');
        if(counetActive.length){
          $(document).ready(function (){
            // Set the date we're counting down to
            var countDownDate = new Date("2023-11-02 12:00").getTime();
            // Update the count down every 1 second
            var x = setInterval(function() {
            // Get today's date and time
            var now = new Date().getTime();
            // Find the distance between now and the count down date
            var distance = countDownDate - now;
            // Time calculations for days, hours, minutes and seconds
            var days = Math.floor(distance / (1000 * 60 * 60 * 24));
            var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            var seconds = Math.floor((distance % (1000 * 60)) / 1000);
            // Output the result in the elements with id="days", "hours", "minutes", and "seconds"
            document.getElementById("countdown-time").innerHTML = 
            days + " " + "<span>d</span>" + " "  + " <span> : </span> " + " "+ hours + " " + " " +  " " + "<span>h</span>" + " <span> : </span> " + minutes + " " + "<span>m</span>" + " <span> : </span> " + " "+ seconds +  "<span>s</span>";
            // If the count down is over, write some text
            if (distance < 0) {
                clearInterval(x);
                document.getElementById("countdown-time").innerHTML = "EXPIRED";
            }
            }, 1000);
          })
        }

        // Filter
          let grFilter = document.getElementsByClassName('gr-filter');
          if (grFilter.length){
            $(document).ready(function() {
              $('#show-hidden-menu').click(function() {
                $('.gr-sitebar').slideToggle("slow");
                return false;
              });
             });
          }





      },

      // Off Canvas And Mobile Menu
      mobileMenu: function(){
                

          $('#mobile-menu-active').metisMenu();

          $(document).on('click', '#menu-btn', function () {
            $("#side-bar").addClass("show");
            $("#anywhere-home").addClass("bgshow");
          });
          $(document).on('click', '.close-icon-menu', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });
          $(document).on('click', '#anywhere-home', function () {
            $("#side-bar").removeClass("show");
            $("#anywhere-home").removeClass("bgshow");
          });

      },

      // Full Screen Search Popup
      searchPopup: function(){
        $(document).ready(function (){
          var changeClass = function(name){
            $('#search').removeAttr('class').addClass(name);
          }
        })
      },

      // sticky header
      stickyHeader: function(){
        $(document).ready(function (){
          $(window).on("scroll", function(){
            var scrollBarPosition = $(this).scrollTop();
            if( scrollBarPosition > 100 ) {
                $(".header-sticky").addClass("sticky-on"); 
            } else {
                $(".header-sticky").removeClass("sticky-on");
            }
        });
        });
      },

      // counter js
      counTerJsActive: function(){
        const counterItems = document.querySelectorAll('.counter-item');
        const options = {
          rootMargin: '0px',
          threshold: 0.8,
        };
        
        const callback = (entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target;
              const count = target.querySelector('.count');
              const targetCount = parseInt(count.getAttribute('data-count'));
              let currentCount = 0;
        
              // Use GSAP to smoothly animate the counting
              gsap.to(count, {
                duration: 2, // Animation duration in seconds
                innerHTML: targetCount, // Use innerHTML to animate the number smoothly
                roundProps: 'innerHTML', // Round the property being animated (innerHTML in this case)
                ease: 'power1.out', // Easing function
              });
        
              observer.unobserve(target);
            }
          });
        };
        
        const observer = new IntersectionObserver(callback, options);
        
        counterItems.forEach((item) => {
          observer.observe(item);
        });
      },

      // preloader Activation
      preLoaderActivation: function() {
        var preload = $("#elevate-load");
        if (preload.length){
          window.addEventListener('load',function(){
            document.querySelector('#elevate-load').classList.add("loaded");
          }); 
        };
      },

  }

  rtsJs.m();


})(jQuery, window)