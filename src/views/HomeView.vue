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
          <ProductCard :image="'Prod1'" text="Валенсия Beige"/>
          <ProductCard :image="'Prod2'" text="Толикс-2 White Gloss"/>
          <ProductCard :image="'Prod3'" text="Динс Velvet Yellow"/>
          <ProductCard :image="'Prod4'" text="Кускен Navy Blue"/>
          <ProductCard :image="'Prod5'" text="Шерона Barhat Grey"/>
          <ProductCard :image="'Prod6'" text="Авиньон-1"/>
          <ProductCard :image="'Prod7'" text="Стелла Дуб Сонома"/>
          <ProductCard :image="'Prod8'" text="Равенна-1 Light"/>
          <ProductCard :image="'Prod9'" text="Бенфлит Grey"/>
          <ProductCard :image="'Prod10'" text="Тиффани Вудлайн Крем"/>
          
      </div>

    </div>
    </div>

</template>

<script>
import ProductCard from "@/components/UI/ProductCard.vue";

export default {
  name: "HomeView",
  components: { ProductCard },
};
</script>

<style lang="scss" scoped>

.home {
  &__block1 {
    background-image: url('@/assets/images/1785.png');
    box-shadow: 0px 5px 11px 2px rgba(255, 255, 255, 0.09);
    align-items: center;
     width: 1140px; 
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
        margin: 30px 0 35px 0;
      }

      &__card {
        display: flex;
        flex-wrap: wrap;
        max-width: 950px;
      }

  }

}

</style>
