<template>
  <div class="home container">
    <div class="home__block1"> 
      <swiper
        :slides-per-view="1"
        :space-between="0"
        autoplay="true"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        :navigation="{
      prevEl: prev,
      nextEl: next,
    }"
      >
        <swiper-slide>
          <div class="home__block1">
            <div class="home__block1__p1" >
              loft мебель 
              
            </div>
            <div class="home__block1__p2">
              Современная и удобная мебель в Анапе
            </div>
            <div class="home__block1__p3">
              СМОТРЕТЬ КАТАЛОГ
            </div>
            <img src="@/assets/images/1785.jpg" />
          </div>         
        </swiper-slide>
        <swiper-slide>
          <div class="home__block1">
            <div class="home__block1__p1" >
              loft мебель 
              
            </div>
            <div class="home__block1__p2">
              Современная и удобная мебель в Анапе
            </div>
            <div class="home__block1__p3">
              СМОТРЕТЬ КАТАЛОГ
            </div>
            <img src="@/assets/images/1785.jpg" />
          </div>
        </swiper-slide>
        <div ref="prev" class="swiper-button-prev"></div>
        <div ref="next" class="swiper-button-next"></div>
      </swiper>
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
import { ref } from 'vue';
import ProductCard from "@/components/UI/ProductCard.vue";
import products from "@/data/products.json"
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation]);

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";


export default {
  name: "HomeView",
  data() {
    return {
      tovar: products.elements,
      
    }
  },
  
  setup() {
    const prev = ref(null);
    const next = ref(null);
    const onSwiper = (swiper) => {
        console.log(swiper);
    };
    const onSlideChange = () => {
        console.log('slide change');
    };
    return {
        onSwiper,
        onSlideChange,
        prev,
        next,
    };
  },
  components: { ProductCard,Swiper,
        SwiperSlide, },
};
</script>

<style lang="scss" scoped>

.home {
  &__block1 {
    position: relative;
    background-size: cover;
    box-shadow: 0px 5px 11px 2px rgba(255, 255, 255, 0.09);
    align-items: center;
     width: 100%; 
     height: 450px;
     img {
      position: absolute;
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
      z-index: -1;
     }
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
        column-gap: 4.3%;
        row-gap: 40px;
        position: relative;
        margin-bottom: 10px;
      }

  }

}

</style>
