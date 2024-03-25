let cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.onmousemove = function (e) {
        let x = e.pageX - card.offsetLeft;
        let y = e.pageY - card.offsetTop;

        card.style.setProperty('--x', x + 'px');
        card.style.setProperty('--y', y + 'px');
    }
})

document.addEventListener("DOMContentLoaded", function() {
    var marquee1 = document.getElementById('marquee1');
    var marquee2 = document.getElementById('marquee2');
    var isMarquee1Running = false;

    function startMarquee1() {
        if (!isMarquee1Running) {
            marquee1.start();
            isMarquee1Running = true;
        }
    }

    marquee1.addEventListener('finish', function() {
        startMarquee2();
    });

    function startMarquee2() {
        marquee2.start();
    }

    startMarquee1();
});