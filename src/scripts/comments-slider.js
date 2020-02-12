import Vue from "vue";
import { swiper, swiperSlide } from 'vue-awesome-swiper'

new Vue({
    el: "#comments-component",
    template: "#comments",
    components: {
        swiper,
        swiperSlide
    },
    data() {
        return {
            comments: [],
            swiperOption: {
                navigation: {
                    nextEl: '.comments__button--next',
                    prevEl: '.comments__button--prev',
                },
                slidesPerView: 2,
                slidesPerGroup: 2,
                spaceBetween: 80,
                breakpoints: {
                    1200: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 0,
                        slidesPerGroup: 1
                    }
                }
            }
        }
    },
    methods: {
        arrWithRequiredImages(array) {
            return array.map (item => {
                const requiredPic = require(`images/content/comments/${item["avatar"]}`);
                item["avatar"] = requiredPic;

                return item;
            });
        }
    },
    created() {
        const comments = require("../data/comments.json");
        this.comments = this.arrWithRequiredImages(comments);
    }
});