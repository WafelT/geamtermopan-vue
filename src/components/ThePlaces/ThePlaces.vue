<template>
    <section class="places">
        <div class="places__container container__1150px">
            <div class="places__table">
                <!-- ITEM -->
                <div class="places__table-item">
                    <div class="places__table-item-img" :style="{backgroundImage: `url(${require('@/assets/images/places-1.png')})`}"></div>
                    <a href="#">
                        <span>Окна и двери квартиры</span>
                        <svg><use xlink:href="@/assets/images/svg/sprite.svg#smallTailArrow"></use></svg>
                    </a>
                    <p>Раздвижные алюминиевые балконы разнообразных форм и размеров. Оптимальное решение.</p>
                </div>
                <!-- ITEM -->
                <div class="places__table-item">
                    <div class="places__table-item-img" :style="{backgroundImage: `url(${require('@/assets/images/places-2.png')})`}"></div>
                    <a href="#">
                        <span>Окна и двери квартиры</span>
                        <svg><use xlink:href="@/assets/images/svg/sprite.svg#smallTailArrow"></use></svg>
                    </a>
                    <p>Раздвижные алюминиевые балконы разнообразных форм и размеров. Оптимальное решение.</p>
                </div>
                <!-- ITEM -->
                <div class="places__table-item">
                    <div class="places__table-item-img" :style="{backgroundImage: `url(${require('@/assets/images/places-3.png')})`}"></div>
                    <a href="#">
                        <span>Окна и двери квартиры</span>
                        <svg><use xlink:href="@/assets/images/svg/sprite.svg#smallTailArrow"></use></svg>
                    </a>
                    <p>Раздвижные алюминиевые балконы разнообразных форм и размеров. Оптимальное решение.</p>
                </div>
                <!-- ITEM -->
                <div class="places__table-item">
                    <div class="places__table-item-img" :style="{backgroundImage: `url(${require('@/assets/images/places-4.png')})`}"></div>
                    <a href="#">
                        <span>Окна и двери квартиры</span>
                        <svg><use xlink:href="@/assets/images/svg/sprite.svg#smallTailArrow"></use></svg>
                    </a>
                    <p>Раздвижные алюминиевые балконы разнообразных форм и размеров. Оптимальное решение.</p>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import './ThePlaces.scss'

export default {
    name: 'ThePlaces'
}
</script>
