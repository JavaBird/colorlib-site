
$(document).ready(function () {
    $('#left-menu').sidr({
        timing: 'ease-in-out',
        speed: 500
    });



});

$( window ).resize(function () {
    $.sidr('close', 'sidr');
});

$('#close-menu').click(function () {

    $.sidr('close', 'sidr');
});
