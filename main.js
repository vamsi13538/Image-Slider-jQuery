$(document).ready(function () {
    // Creating all variables
    const prevButton = $('#prev');
    const nextButton = $('#next');
    const autoSwitchSpeed = 4500;
    const speed = 800;
    const autoSwitch = true;

    // Hide all slides except first one with class active
    $('.slide').first().addClass('active');
    $('.slide').hide();
    $('.active').show();

    // Slide forward
    nextButton.on('click', SlideForward);

    function SlideForward() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    // Slide backward
    prevButton.on('click', SlideBackward);

    function SlideBackward() {
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed);
    }

    // Auto slide
    if (autoSwitch == true) {
        setInterval(SlideForward, autoSwitchSpeed);
    }
})