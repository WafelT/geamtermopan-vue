<template>
    <section class="partners g-line-title">
        <div class="partners__container container__1150px">
            <h2>Наши партнёры</h2>
            <swiper
                class="partners__slider"
                :slides-per-view="'auto'"
                :space-between="40"
                :grab-cursor="true"
            >
                <swiper-slide><img src="@/assets/images/partners-1.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-2.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-3.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-4.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-5.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-6.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-1.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-2.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-3.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-4.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-5.png" alt="partners"></swiper-slide>
                <swiper-slide><img src="@/assets/images/partners-6.png" alt="partners"></swiper-slide>
            </swiper>
            <img class="slider__marker" src="@/assets/images/svg/slider-marker.svg" alt="slider-marker">
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';

    import './ThePartners.scss'

    export default {
        name: 'ThePartners',
        components: { Swiper, SwiperSlide }
    }
</script>
