// animation on scroll library
AOS.init({
    duration:2000,
});

// refresh page go to top
$(document).ready(function(){
    $(this).scrollTop(0);
});


// ==== Mobilemenu Navbar.
function toggle() {
    var dropdown = document.getElementById('toggleMenu');
    var menu = document.getElementById('dropdownMenu');
    dropdown.classList.toggle('hidden');
    menu.classList.add('left-0');
}

// navbar color change on scoll
$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('#navbarMenu').addClass('bg-white sticky top-0');
        $('#navbarMenu').removeClass('bg-light');
    } else {
        $('#navbarMenu').removeClass('bg-white sticky top-0');
        $('#navbarMenu').addClass('bg-light');
    }
});

// navbar scroll on active
var scrollLink = $('.nav-item');
$(window).scroll(function () {
    var scrollbarLocation = $(this).scrollTop();
    scrollLink.each(function () {
        var sectionOffset = $(this.hash).offset().top - 73;
        if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('border-b-2 border-primary');
            $(this).parent().siblings().removeClass('border-b-2 border-primary');
        }
    });
});

// testimonial slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("my-slides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[slideIndex - 1].style.display = "block";
}