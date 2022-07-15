<template>
    <section class="benefits">
        <div class="benefits__container container__1150px">
            <swiper 
                class="benefits__slider"
                :slides-per-view="'auto'"
                :space-between="24"
                :grab-cursor="true"
            >
                <!-- ITEM -->
                <swiper-slide>
                    <picture><img src="@/assets/images/benefits-1.png" alt="benefits"></picture>
                    <h4>Положительные отзывы</h4>
                    <p>Многочисленные положительные отзывы наших клиентов подтверждают качество нашей работы и продукции.</p>
                </swiper-slide>
                <!-- ITEM -->
                <swiper-slide>
                    <picture><img src="@/assets/images/benefits-2.png" alt="benefits"></picture>
                    <h4>Положительные отзывы</h4>
                    <p>Многочисленные положительные отзывы наших клиентов подтверждают качество нашей работы и продукции.</p>
                </swiper-slide>
                <!-- ITEM -->
                <swiper-slide>
                    <picture><img src="@/assets/images/benefits-3.png" alt="benefits"></picture>
                    <h4>Положительные отзывы</h4>
                    <p>Многочисленные положительные отзывы наших клиентов подтверждают качество нашей работы и продукции.</p>
                </swiper-slide>
                <!-- ITEM -->
                <swiper-slide>
                    <picture><img src="@/assets/images/benefits-4.png" alt="benefits"></picture>
                    <h4>Положительные отзывы</h4>
                    <p>Многочисленные положительные отзывы наших клиентов подтверждают качество нашей работы и продукции.</p>
                </swiper-slide>
            </swiper>
            <img class="slider__marker" src="@/assets/images/svg/slider-marker.svg" alt="slider-marker">
        </div>
    </section>
</template>

<script>
    import { Swiper, SwiperSlide } from 'swiper/vue';
    import 'swiper/css';
    
    import './TheBenefits.scss'

    export default {
        name: 'TheBenefits',
        components: { Swiper, SwiperSlide }
    }
</script>
