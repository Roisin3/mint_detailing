window.onload = function() {
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName('slideReviews');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        myIndex++;
        if (myIndex > x.length) {myIndex = 1}
        x[myIndex - 1].style.display = 'block';
        setTimeout(carousel, 10000);
    }

    var myIndex2 = 0;
    carouselImg();

    function carouselImg () {
        var i;
        var x = document.getElementsByClassName('slideRevImg');
        for (i = 0; i < x.length; i++) {
            x[i].style.display = 'none';
        }
        myIndex2++;
        if (myIndex2 > x.length) {myIndex2 = 1}
        x[myIndex2 - 1].style.display = 'block';
        setTimeout(carouselImg, 5000);
    }
};