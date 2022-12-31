<template lang="">
    <div class="basket container">
        <div class="basket__menu">
              <router-link to="/">Главная</router-link>
               /
             <router-link to="/basket">Корзина</router-link>
         </div>

        <div class="basket__block2">
            <div class="basket__block2__p1">
                <div> Ваша Корзина</div>
                <div> {{ basketLength }} предмета</div>
            </div>
            <div class="basket__block2__p2"> 
                <BasketCard v-for="(item, i) in basket" :key="i" :product="item" />
            </div>
            <div class="basket__block2__p3">
                <div class="basket__block2__p3-sum">
                    Итоговая стоимость: {{ totalCard }} ₽
                </div>
                <div class="basket__block2__p3-cout">
                  <button>Оформить заказ</button>   
                </div>  
            </div>
        </div>

        <div class="basket__block3">
            <div class="basket__block3__p1">
                Вам может понравиться</div>
            <div class="basket__block3__p2">
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
import BasketCard from "@/components/UI/BasketCard.vue";

export default {
    name: "BasketView",
    data() {
    return {
        tovar: products.elements,
        basket: []
    }
    },
    mounted() {
    console.log(this.products);
       this.basket = JSON.parse(localStorage.getItem('basket'))

       
       
    },
    computed: {
        totalCard() {
            let result = 0

            for (let item of this.basket) {
                result = result+(item.price * item.count)
            }
            return result;
        },
        basketLength() {
            let result = 0

            for (let item of this.basket) {
                result = result+(item.count)
            }
            return result;
        }
    },
    components: {
        ProductCard,
        BasketCard
    },
}
</script>
<style lang="scss" scoper>
.basket {
    &__menu {
        font-weight: 400;
        font-size: 12px;
        color: #969696;
        margin-top: 30px;
        margin-bottom: 40px;
        a {
            color: #969696;
        }
    }
    &__block2 {
        &__p1 {
            display: flex;
            justify-content: space-between;
            font-weight: 400;
            font-size: 16px;
        }
        &__p3 {
            display: flex;
            align-items: center;
            justify-content: flex-end;
            margin-top: 40px;
            &-sum {
                font-weight: 400;
                font-size: 14px;
            }
            &-cout button {
                border: none;
                padding: 13px 50px 12px 50px;
                background: #245462;
                color: white;
                margin-left: 25px;
                
            }
        }
    }
    &__block3 {
        &__p1 {
            margin-top: 100px;
            margin-bottom: 10px;
            font-weight: 400;
            font-size: 16px;
        }
        &__p2 {
            display: flex;
            column-gap: 4.3%;
            margin-bottom: 70px;
        }
    }
}
    
</style>