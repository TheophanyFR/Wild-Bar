$(document).ready(function () {

// début partie navbar

    var affixElement = '#navbar-main';

    $(affixElement).affix({
        offset: {
            // Distance of between element and top page
            top: function () {
                return (this.top = $(affixElement).offset().top)
            },
            // when start #footer
            bottom: function () {
                return (this.bottom = $('#footer').outerHeight(true))
            }
        }
    });

// fin partie navbar

// début bouton go back to top

    var amountScrolled = 300;

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('#goToTopBtn').fadeIn('slow');
        } else {
            $('#goToTopBtn').fadeOut('slow');
        }
    });
    $('#goToTopBtn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
        return false;
    });



// fin bouton go back to top
});