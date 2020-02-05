var parallax = (function () {
    var mountains = document.querySelector('.parallax__layer--mountains');
    var train =  document.querySelector('.parallax__layer--train');
    var grass =  document.querySelector('.parallax__layer--grass');
    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + '%';
            var transformString = 'translate3d(0,' + strafe + ', 0)';
            var style = block.style;

            style.transform = transformString;
            style.webkitTransform = transformString;
        },

        init: function (wScroll) {
            this.move(mountains, wScroll, 45);
            this.move(train, wScroll, 40);
            this.move(grass, wScroll, 45);
        }
    }
}());

window.onscroll = function () {
    var wScroll = window.pageYOffset;

    parallax.init(wScroll);
};