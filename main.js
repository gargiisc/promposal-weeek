$(document).ready(function () {
    $('.container').mouseenter(function () {
        $('.card').stop().animate({
            top: '-90px'
        }, 'slow');
    }).mouseleave(function () {
        $('.card').stop().animate({
            top: 0
        }, 'slow');
    });
});

document.getElementById('revealButton').addEventListener('click', function() {
    document.getElementById('card').style.display = 'block';
  });

function redirectToNewPage() {
    window.location.href = "card.html";
}


