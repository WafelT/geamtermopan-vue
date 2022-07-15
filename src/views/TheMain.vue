<template>
    <the-preview @showModalConsultation="showModalConsultation"></the-preview>
    <the-places></the-places>
    <products-preview></products-preview>
    <the-benefits></the-benefits>
    <the-proposal
        :bgColor="'#9BC1BC'"
        :title="'Заполни заявку и получи подарок'"
        :description="'Заказывай окна, двери и роллеты в рассрочку и оформляй кредит под 0%'"
        :btnText="'Заполнить заявку'"
        :illustration="'present-ill.png'"
    ></the-proposal>
    <the-chosen></the-chosen>
    <the-proposal
        :bgColor="'#f0e5d2'"
        :title="'Покупка в кредит'"
        :description="'У вас есть возможность приобрести любую продукцию компании Geam Termopan в кредит на выгодных условиях.'"
        :btnText="'Подробнее о кредитовании'"
        :illustration="'credit-ill.png'"
    ></the-proposal>
    <work-scheme></work-scheme>
    <make-order @onSubmit="showModalSuccess"></make-order>
    <the-partners></the-partners>
</template>

<script>
import ThePreview from '@/components/ThePreview/ThePreview.vue'
import ThePlaces from '@/components/ThePlaces/ThePlaces.vue'
import ProductsPreview from '@/components/ProductsPreview/ProductsPreview.vue'
import TheBenefits from '@/components/TheBenefits/TheBenefits.vue'
import TheProposal from '@/components/TheProposal/TheProposal.vue'
import TheChosen from '@/components/TheChosen/TheChosen.vue'
import WorkScheme from '@/components/WorkScheme/WorkScheme.vue'
import MakeOrder from '@/components/MakeOrder/MakeOrder.vue'
import ThePartners from '@/components/ThePartners/ThePartners.vue'

export default {
    name: 'TheMain',
    components: { 
        ThePreview,
        ThePlaces,
        ProductsPreview,
        TheBenefits,
        TheProposal,
        TheChosen,
        WorkScheme,
        MakeOrder,
        ThePartners,
    },
    methods: {
        showModalConsultation() {
            this.$emit('showModalConsultation')
        },
        showModalSuccess() {
            this.$emit('showModalSuccess')
        },
    }
}
</script>
