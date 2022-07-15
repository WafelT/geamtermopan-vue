<template>
    <section class="work-scheme g-line-title">
        <div class="work-scheme__container container__1150px">
            <h2>Как всё работает?</h2>
            <p>Всего 5 шагов до заказа окон твоей мечты</p>
            <div class="work-scheme__wrapper">
                <ul class="work-scheme__wrapper-table">
                    <li class="work-scheme__wrapper-table-item">
                        <span :style="{backgroundImage: `url(${require('@/assets/images/svg/circle-path-1.svg')})`}">1</span>
                        <h5>Звонок менеджеру</h5>
                    </li>
                    <li class="work-scheme__wrapper-table-item disabled" >
                        <span :style="{backgroundImage: `url(${require('@/assets/images/svg/circle-path-2.svg')})`}">2</span>
                        <h5>Бесплатная консультация специалистов</h5>
                    </li>
                    <li class="work-scheme__wrapper-table-item disabled">
                        <span :style="{backgroundImage: `url(${require('@/assets/images/svg/circle-path-3.svg')})`}">3</span>
                        <h5>Производство пластиковых окон или дверей</h5>
                    </li>
                    <li class="work-scheme__wrapper-table-item disabled">
                        <span :style="{backgroundImage: `url(${require('@/assets/images/svg/circle-path-4.svg')})`}">4</span>
                        <h5>Бесплатная установка твоих изделий</h5>
                    </li>
                </ul>
                <img class="work-scheme__wrapper-ill" src="@/assets/images/work-scheme-img.png" alt="schema">
            </div>
        </div>
    </section>
</template>

<script>
import './WorkScheme.scss'

export default {
    name: 'WorkScheme'
}
</script>
