


/* Cookies */
$(document).ready(function(){
  $("#cookies").addClass("display");
   $("#close-cookies").click(function(){ 
    event.preventDefault();
    $("#cookies").addClass("close-cookies");
  });
});


$(document).ready(function() {
      // Show or hide the sticky footer button
      $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
        } else {
          $('.go-top').fadeOut(200);
        }
      });
      
      // Animate the scroll to top
      $('.go-top').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({scrollTop: 0}, 300);
      })
    });





$(document).ready(function(){




  $(function() {
  $('.burger-box,.sliding-panel-fade-screen,.sliding-panel-close, .burger2').on('click touchstart', function(e) {
    e.preventDefault();
    $('.burger-box').toggleClass('is-open');
    $('.burger2').toggleClass('is-open');
    $('.sliding-panel-content, .burger2, .sliding-panel-fade-screen, .header_left').toggleClass('is-visible');
  });
});

$(window).scroll(function() {
        if ($(this).scrollTop() > 800){
        $('.header-fixed').addClass("sticky");
        }
        else{
        $('.header-fixed').removeClass("sticky");
        }
        });






// accordion functionality
$('.accordion__title').on('click', function(){
  $(this).toggleClass('accordion__title--active').siblings('.accordion__title').removeClass('accordion__title--active'); 
  $(this).next('.accordion__content2').slideToggle().siblings('.accordion__content2').slideUp();
});

//tabs functionality
$('.tabs2 li').on('click', function(){
  var tabId = $(this).attr("data-tab");
  
  $('.tabs2 li').removeClass('tab--active2');
$('.accordion__content2').removeClass('accordion__content--active2');
  
  $(this).addClass('tab--active2');  
  $('#' + tabId).addClass('accordion__content--active2');
});



$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open');

    if (!e.data.multiple) {
      $el.find('.burger_accordion_content').not($next).slideUp().parent().removeClass('open');
    };
  } 

  var accordion = new Accordion($('#accordion'), false);
}); 


$(function() {
  var Accordion = function(el, multiple) {
    this.el = el || {};
    this.multiple = multiple || false;

    // Variables privadas
    var links = this.el.find('.link3');
    // Evento
    links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
  }

  Accordion.prototype.dropdown = function(e) {
    var $el = e.data.el;
      $this = $(this),
      $next = $this.next();

    $next.slideToggle();
    $this.parent().toggleClass('open3');

    if (!e.data.multiple) {
      $el.find('.burger_accordion_content').not($next).slideUp().parent().removeClass('open3');
    };
  } 

  var accordion = new Accordion($('#accordion3'), false);
}); 

// toggle menus
var navBarClosed = true;
var searchClosed = true;
var signInClosed = true;

// toggle navigation
$('.btn-toggle-menu').on('click', function() {
    if (signInClosed && searchClosed) {
      $(this).toggleClass('open');
      $('body').toggleClass('open');
      $('.overlay').toggleClass('open');
      $('.nav-toggle-menu').toggleClass('open');
      navBarClosed = !navBarClosed;
  }
});

// toggle search
$('.btn-toggle-search').on('click', function() {
	if (signInClosed && navBarClosed) {
		$(this).toggleClass('open');
    $('body').toggleClass('open');
		$('.overlay').toggleClass('open');
		$('.search-toggle-menu').toggleClass('open');
		searchClosed = !searchClosed;
	}
});



console.log($(window).scroll(function(evt){console.log('scroll')}));

$('a').click(function(){
  $('html, body').animate({
    scrollTop: $( $.attr(this, 'href') ).offset().top -0
  }, 750);
  return false;
});

$(window).scroll(function(evt){
  var currentActiveElement = jQuery('.home-menu li.active'), lookingAt, offset = 50;

  jQuery('.home-menu li').each(function(index) {
    //first element
    if(lookingAt === undefined) {
      lookingAt = jQuery(this);
    } else {
      var currentElem = jQuery(this);
      var pointingTo = jQuery(currentElem.find('a').attr('href'));
      
      if(jQuery(window).scrollTop() > (pointingTo.position().top - offset)) {
        lookingAt = currentElem;
      }
    }
  });
  
  if(lookingAt !== currentActiveElement) {
    currentActiveElement.removeClass('active');
    lookingAt.addClass('active');
  };
})



$(".open-burger").on("click", function() {
  $("#myNav").css("width", "100%");
  // $('body').toggleClass('open2');
});

$(".close-burger").on("click", function() {
  $("#myNav").css("width", "0%");
});



  $('.card').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: true,
  autoplay:false,
  arrows:false,
  dots: false,
  asNavFor: '.iss'
});

$('.iss').slick({
  slidesToShow:4,
  infinite: true,
  slidesToScroll: 1,
  vertical: true,
  verticalSwiping: true,
  asNavFor: '.card',
  active:true,
  autoplay:false,
  dots: false,
  arrows:false,
  centerPadding: '5px',
  focusOnSelect: true,
  responsive: [
  {
    breakpoint: 1260,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: false
    }
  },
  {
    breakpoint: 901,
    settings: {
      slidesToShow: 4,
      arrows:false,
      vertical: false,
      verticalSwiping: false,
      slidesToScroll: 1
    }
  },
  {
    breakpoint: 640,
    settings: {
      slidesToShow: 4,
      dots:false,
      arrows:false,
      arrows:false,
      vertical: false,
      slidesToScroll: 1
    }
  },

  {
      breakpoint: 565,
      settings: {
        slidesToShow: 4,
        dots:false,
        arrows:false,
        arrows:false,
        vertical: false,
        slidesToScroll: 1
      }
    }
]
});


$('.catalog_n_sl').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              dots: true,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true,
          }
        }
      ]
  });


$('.three_sl').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
  });


$('.catalog_dealers_sl').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1202,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
            dots: true
          }
        },
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: true
          }
        },
        
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        },

          {
            breakpoint: 585,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true
          }
        }
      ]
  });


$('.dealers_t_sl').slick({
        infinite: true,
        speed: 1000,
        slidesToShow: 4,
        slidesToScroll: 1,
        dots: true,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            dots: true,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
          }
        }
      ]
  });




$('.article_i_sl').slick({
        infinite: false,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 1025,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 901,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
        {
          breakpoint: 769,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },
          {
          breakpoint: 661,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        },

          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
          {
          breakpoint: 481,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
  });



jQuery(function($) {
  //play video btn
  $(".position-relative video").removeAttr("controls"); //hide controls by default
  //on clicking play button
  $(".video-section").each(function() {
    $(".play-btn").click(function() {
      var video = $(this)
        .closest(".position-relative")
        .find("video")
        .get(0);
      video.play();
      video.controls = true;
      $(this).css("visibility", "hidden");
      return false;
    });

    //when video is paused
    $(this)
      .find("video")
      .click(function() {
        var video = $(this).get(0);
        video.pause();
        video.controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        return false;
      });

    //when video has ended
    $(this)
      .find("video")
      .on("ended", function() {
        $(this).get(0).controls = false;
        $(this)
          .siblings(".play-btn")
          .css("visibility", "visible");
        $(this)
          .get(0)
          .load();
      });
  });
 });





});










let triggersModal = document.querySelectorAll(".js-show-modal");
let modals = document.querySelectorAll(".js-modal");

function closeModal() {
  modals.forEach(modal => {
    if (modal.classList.contains("is-open")) {
      modal.classList.remove("is-open");
    }
  });
}


modals.forEach(modal => {
  modal.addEventListener("click", function (event) {
    const isOutside = !event.target.closest(".modal__inner");
    const isCloseButton = event.target.matches(".js-close-modal");
    if (isCloseButton || isOutside) {
      closeModal();
    }
  });
});

triggersModal.forEach((button) =>
button.addEventListener("click", function (e) {
  e.preventDefault();
  let modalID = this.dataset.modal;
  console.log(modalID);
  modals.forEach(function (modal) {
    if (modal.dataset.modal == modalID) {
      modal.classList.add("is-open");
    }
  });
}));



let aboutBlocks = document.querySelectorAll(".about-block__item");
        if (aboutBlocks) {
            let proggress = document.querySelector(".about-block__scroll-bar-progress");
            aboutBlocks.forEach(((item, i) => {
                item.addEventListener("mouseover", (() => {
                    let progressPercent = 100 / aboutBlocks.length * i;
                    aboutBlocks.forEach((element => element.classList.remove("_active")));
                    item.classList.add("_active");
                    proggress.style.top = `${progressPercent}%`;
                }));
            }));
        }




          function openCity(evt, cityName) {
  // Объявить все переменные
  var i, tabcontent, tablinks;

  // Получить все элементы с помощью class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Получить все элементы с помощью class="tablinks" и удалить класс "active"
 tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Показать текущую вкладку и добавить класс "active" по ссылке, открывшей вкладку
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}







'use strict';



class Dropdown {
  constructor(element, options) {
    this.element = element;
    this.toggler = element.querySelector('.js-dropdown-toggler');
    this.title = element.querySelector('.js-dropdown-title');
    this.icon = element.querySelector('.js-dropdown-icon');
    this.choices = element.querySelectorAll('.js-dropdown-choice');
    
    this.classActive = options.cssElementActive || 'js-dropdown-active';
    this.classExpanded = options.cssElementExpanded || 'js-dropdown-expanded';
    
    this.modes = Array.prototype.map.call(this.choices, choice => choice.dataset['mode']);
    
    if (!this.element || !this.toggler || !this.title || !this.icon || !this.choices.length) {
      throw new Error('Something is missing! Check the layout!');
    }
    
    this.init();
  }
  
  init() {
    this.toggler.addEventListener('click', this.toggleExpanded.bind(this));
    Array.prototype.forEach.call(this.choices, choice => {
      choice.addEventListener('click', this.choose.bind(this));
    });
  }
  
  toggleExpanded() {
    if (!this.element.classList.contains(this.classExpanded) || !this.element.classList.contains('js-dropdown-expanded')) {
      this.setExpanded();
    } else {
      this.unsetExpanded();
    }
  }
  
  setExpanded() {
    this.element.classList.add(this.classExpanded, 'js-dropdown-expanded');
  }
  
  unsetExpanded() {
    this.element.classList.remove(this.classExpanded, 'js-dropdown-expanded');
  }
  
  choose(event) {
    console.log(event);
    const mode = event.target.dataset['mode'];
    const title = event.target.innerHTML;
    
    this.activate();
    this.setTitle(title);
    this.colorize(mode);
    this.setIcon(mode);
    this.unsetExpanded();
  }
  
  activate() {
    this.element.classList.add(this.classActive, 'js-dropdown-active');
  }
  
  setTitle(title) {
    this.title.innerHTML = title;
  }
  
  colorize(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.toggler.classList.remove(`dropdown__header_${item}`); });
    this.toggler.classList.add(`dropdown__header_${mode}`);
  }
  
  setIcon(mode) {
    Array.prototype.forEach.call(this.modes, item => { this.icon.classList.remove(`fa-${item}`); });
    this.icon.classList.add(`fa-${mode}`);
  }
}

function initDropdown(options) {
  const dropdown = [];
  Array.prototype.forEach.call(document.querySelectorAll('.js-dropdown'), (item) => {
    dropdown.push(new Dropdown(item, options));
  });
}

initDropdown({ 
  cssElementActive: 'is-active',
  cssElementExpanded: 'is-expanded',
});