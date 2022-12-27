<template >
    <div class="living container">
         <div class="living__page">
                <router-link to="/">Главная</router-link>
                /
                <router-link to="/living">Гостинные</router-link>
            </div>

        <div class="living__block1">
            <div class="living__block1__filtr">
                Фильтр
            </div>

            <div class="living__block1__sort">
                    <ProductCard v-for="(item, i) in tovar" :key="i" :product="item" />
            </div>
        </div>
    </div>
</template>
<script>
import ProductCard from "@/components/UI/ProductCard.vue";
import products from "@/data/products.json";

export default {
    name: "LivingView",
    data() {
    return {
      tovar: products.elements,
    }
  },
  components: { ProductCard },
}
</script>
<style lang="scss" scoped>

.living {

    &__page {
        font-weight: 400;
        font-size: 12px;
        color: #969696;
        margin-top: 30px;
        word-spacing: 8px;
        margin-bottom: 30px;
        a {
            color: #969696;
        }
    }
    &__block1 {
        display: flex;
        flex-flow: row nowrap;

        &__sort {
            display: flex;
                flex-wrap: wrap;
                gap: 10%;
        }
        &__filtr {

        }
    }
}

</style>