<template>
  <div class="home container">
   <div class="home__block1">
       <div class="home__block1__p1" >
        loft мебель 
        <swiper-slide />
        
      </div>
      <div class="home__block1__p2">
        Современная и удобная мебель в Анапе
      </div>
      <div class="home__block1__p3">
        СМОТРЕТЬ КАТАЛОГ
      </div>
    </div>

    <div class="home__block2">
      <div class="home__block2__name">
        Хиты продаж
      </div>
      <div class="home__block2__card">
          <ProductCard v-for="(item, i) in tovar" :key="i" :product="item" />
      </div>

    </div>
    </div>

</template>

<script>
import ProductCard from "@/components/UI/ProductCard.vue";
import products from "@/data/products.json"

export default {
  name: "HomeView",
  data() {
    return {
      tovar: products.elements,
    }
  },
  components: { ProductCard },
};
</script>

<style lang="scss" scoped>

.home {
  &__block1 {
    background: url('@/assets/images/1785.jpg') no-repeat bottom;
    background-size: cover;
    margin-top: 30px;
    box-shadow: 0px 5px 11px 2px rgba(255, 255, 255, 0.09);
    align-items: center;
     width: 100%; 
     height: 450px;
     &__p1 {
      text-transform: uppercase;
      font-weight: 700;
      font-size: 50px;
      letter-spacing: 0.02em;
      width: 216px;
      padding: 100px 0 15px 120px;
     }
     &__p2 {
      font-weight: 400;
      font-size: 16px;
      letter-spacing: 0.02em;
      padding-left: 120px;
      padding-bottom: 20px;
     }
     &__p3 {
      font-weight: 700;
      font-size: 12px;
      background-color: white;
      padding: 14px 25px;
      max-width: 130px;
      margin-left: 120px;
     }
  }

  &__block2 {
      &__name {
        font-weight: 400;
        font-size: 16px;
        margin: 30px 0 50px 0;
      }

      &__card {
        display: flex;
        flex-wrap: wrap;
        column-gap: 5.3%;
        row-gap: 40px;
        position: relative;
        justify-content: space-between;
        margin-bottom: 10px;
      }

  }

}

</style>
