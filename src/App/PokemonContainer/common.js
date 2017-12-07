let elem = document.querySelectorAll('.like>a>img');
elem.forEach(function (item) {
    item.addEventListener('mouseover', function () {
        if (!this.dimaCheched)
            this.setAttribute('src', 'img/like-red.svg');
    });
    item.addEventListener('mouseout', function () {
        if (!this.dimaCheched)
            this.setAttribute('src', 'img/like-black.svg');
    });
    item.addEventListener('click', function (e) {
        e.preventDefault();
        if (this.dimaCheched) {
            this.dimaCheched = false;
            this.setAttribute('src', 'img/like-black.svg');
        }
        else {
            this.dimaCheched = true;
            this.setAttribute('src', 'img/like-red.svg');
        }
    });
});