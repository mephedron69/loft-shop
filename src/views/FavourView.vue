<template>
    <div class="favour container">
        <div class="favour__part1">
        <router-link to="/">Главная</router-link>
        /
        <router-link to="/favour">Избранное</router-link>
      </div>
      <div class="favour__part4">
            <div class="favour__part4__p1">
                Ваше Избранное</div>
            <div class="favour__part4__p2">
                <ProductCard v-for="(item, i) in favourites" :key="i" :product="item" />
            </div>
        </div>
      <div class="favour__part4">
            <div class="favour__part4__p1">
                Вам может понравиться</div>
            <div class="favour__part4__p2">
                  <ProductCard :product="tovar[8]" />
                  <ProductCard :product="tovar[9]" />
                  <ProductCard :product="tovar[10]" />
                  <ProductCard :product="tovar[11]" />
            </div>
        </div>
    </div>
</template>
<script>
import ProductCard from "@/components/UI/ProductCard.vue";
import products from "@/data/products.json";

export default {
    name: 'FavourView',
    data() {
        return {
            tovar: products.elements,
            favourites: []
        }
    },
    mounted() {
        this.favourites = JSON.parse(localStorage.getItem('favourites'))
    },
    components: {
        ProductCard
    },
}
</script>
<style lang="scss" scoped>

.favour {
    &__part1 {
        font-weight: 400;
        font-size: 12px;
        color:  #969696;;
        word-spacing: 8px;
        padding-top: 30px;
        a {
            color:  #969696;;
        }
    }
    &__part2 {
        font-weight: 400;
        font-size: 16px;
        padding-top: 40px;
        padding-bottom: 20px;
    }
    &__part3 {

    }
    &__part4 {
        &__p1 {
            font-weight: 400;
            font-size: 16px;
            color: #414141;
            margin-bottom: 20px;
            margin-top: 40px;
        }
        &__p2 {
            display: flex;
            column-gap: 4.3%;
            margin-bottom: 70px;
        }
    }
}
</style>