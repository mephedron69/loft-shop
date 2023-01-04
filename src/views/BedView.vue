<template lang="">
    <div class="bed container">
        <div class="bed__block1">
        <router-link to="/">Главная</router-link>
        /
        <router-link to="/living">Гостинные</router-link>
        /
         <router-link to="">Мягкая мебель</router-link>
         /
        <router-link to="/bed">Диваны</router-link>
      </div>
      <div class="bed__block2"> 
            <BigCard :product="tovar[0]" />
      </div>
      <div class="bed__block3"> 
            <div class="bed__block3__name">
                Хиты продаж
            </div>
            <div class="bed__block3__card">
                <ProductCard v-for="(item, i) in tovar" :key="i" :product="item" />
            </div>
      </div>
    </div>
</template>
<script>
import ProductCard from "@/components/UI/ProductCard.vue";
import BigCard from "@/components/UI/BigCard.vue";
import products from "@/data/products.json"

export default {
    name: 'BedView',
    data() {
    return {
        tovar: products.elements,
    }
  },
  components: { ProductCard, BigCard},
}
</script>
<style lang="scss" scoped>

.bed {
    &__block1 {
        font-weight: 400;
        font-size: 12px;
        color: #969696;
        word-spacing: 7px;
        margin-top: 30px;
        a {
          font-weight: 400;
            font-size: 12px;
            color: #969696; 
        }
    }
    &__block2 {
        margin-bottom: 20px;
        margin-top: 20px;
    }
    &__block3 {
      &__name {
        font-weight: 400;
        font-size: 16px;
        margin: 30px 0 50px 0;
      }

      &__card {
        display: flex;
        flex-wrap: wrap;
        column-gap: 4.3%;
        row-gap: 40px;
        position: relative;
        margin-bottom: 10px;
      }

  }
}
</style>