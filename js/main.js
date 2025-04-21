(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        margin: 30,
        dots: true,
        loop: true,
        center: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
})(jQuery);

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      // when window width is <= 768px (Tablet / Mobile)
      768: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 3,
      }
    }
  });

   function viewMoreBtn() {
    // JavaScript to toggle visibility of hidden images
    const viewMoreBtn = document.getElementById('viewMoreBtn');
        const moreImages = document.getElementById('moreImages');
        if (moreImages.classList.contains('d-none')) {
            moreImages.classList.remove('d-none');
            viewMoreBtn.textContent = 'View Less';
        } else {
            moreImages.classList.add('d-none');
            viewMoreBtn.textContent = 'View More';
        }
   }

   document.addEventListener("DOMContentLoaded", function () {
    // Get the current page URL
    const currentPage = window.location.pathname.split("/").pop();

    // Remove active class from all nav links
    document.querySelectorAll('.nav-item.nav-link').forEach(link => {
        link.classList.remove('active');
    });

    // Add active class to the current page link
    if (currentPage === "index.html") {
        document.getElementById("homeLink").classList.add("active");
    } else if (currentPage === "about.html") {
        document.getElementById("aboutLink").classList.add("active");
    } else if (currentPage === "gallery.html") {
        document.getElementById("galleryLink").classList.add("active");
    } else if (currentPage === "contact.html") {
        document.getElementById("contactLink").classList.add("active");
    }
});

