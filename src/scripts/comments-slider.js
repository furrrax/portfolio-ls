import Vue from "vue";

const commentBtnPrev = document.querySelector('.comments__button--prev');
const commentBtnNext = document.querySelector('.comments__button--next');

commentBtnPrev.addEventListener('click', function(e) {
    e.preventDefault();
});
commentBtnNext.addEventListener('click', function(e) {
    e.preventDefault();
});
