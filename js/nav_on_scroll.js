$("#navbar a").click(function(event) {
    event.preventDefault();

    $('html, body').animate({
        scrollTop: $("#elementtoScrollToID").offset().top
    }, 2000);
});
