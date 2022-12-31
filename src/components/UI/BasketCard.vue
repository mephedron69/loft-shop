<template >
    <div class="basket">
        <div class="basket__card">
            <img class="img" :src="require('@/assets/images/'+ product.image +'.png')" /> 
            <div class="basket__card__top">
                <div class="basket__card__top-part1">
                    <div>
                        <p> {{ product.name }}</p>
                    </div>       
                    <div> 
                        <p> {{ product.count*product.price }} ₽ </p>
                    </div>
                </div>
                <div class="basket__card__top__part2">
                    <div class="basket__card__top__part2-p1">
                        <div> 
                        Цвет: <span>{{ product.color }}</span> 
                    </div>
                    <div>
                        Количество: 1
                    </div>
                    <div class="basket__card__top__part2-p1">
                        <div>Размер(Ш×Д×В):</div>
                        <span>
                            {{ product.size1 }} CM × {{ product.size2 }} CM × {{ product.size3 }} CM 
                        </span>
                    </div>
                    </div>

                    <div class="basket__card__top__part2-p2">
                        <p>Количество:</p>
                        <p>
                            <span @click = "minusCounter(product)">-</span>
                            {{ product.count }}
                            <span @click = "plusCounter(product)">+</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div class="basket__right">
            <button
            @click = "addBasket(product)">
                X   
            </button>
        </div>
    </div>
</template>
<script>

export default {
    name: "BasketCard",
    props: ['product'],
    data() {
        return {
        }
    },
    mounted() {
        
    },
    computed: {
        
    },

    methods: {
        addBasket(product) {
            var getBasket = JSON.parse(localStorage.getItem('basket'))
            const result = getBasket.filter(object => object.id !== product.id)
            localStorage.setItem('basket', JSON.stringify(result))
        },

        plusCounter(product) {
            var getCounter = JSON.parse(localStorage.getItem('basket'))
            const index = getCounter.findIndex(object => object.id === product.id);
            getCounter[index].count++

            
            localStorage.setItem('basket', JSON.stringify(getCounter))
        },

        minusCounter(product) {
            var getCounter = JSON.parse(localStorage.getItem('basket'))
            const index = getCounter.findIndex(object => object.id === product.id);
            if (getCounter[index].count > 1) {
                getCounter[index].count--
            }
            
            localStorage.setItem('basket', JSON.stringify(getCounter))
        },
        
    }
}
</script>
<style lang="scss" scoped>
.basket {
    display: flex;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
    align-items: stretch;
    margin: 20px 0 20px 0;

    .img {
        max-width: 100px;
        max-height: 75px;
    }
    &__card {
        display: flex;
        align-items: center;
        padding: 20px;
        gap: 40px;
        width: 100%;
        &__top {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
            &-part1 {
                display: flex;
                font-weight: 500;
                font-size: 16px;
                justify-content: space-between;
            }
            &__part2 {
                justify-content: space-between;
                display: flex;
                gap: 530px;
                align-items: center;
                &-p1 {
                    display: flex;
                gap: 15px;
                font-weight: 400;
                font-size: 12px;
                &-p2 {
                    display: flex;
                    gap: 10px;
                    
                }
                &-p2 span {
                    cursor: pointer;
                }
            }
            &-p1 span {
                color: #9E9E9E;
                font-weight: 400;
                font-size: 12px;
            }
            &-p2 {
                display: flex;
                 font-weight: 400;
                 font-size: 14px;
                align-items: center;
                gap: 10px;
            }
              &-p2 span {
                    cursor: pointer;
                }
            
         }

        }
    }    
    &__right {
        width: 57px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: #C9C9C9;
        background: #F9F9F9;
    }
    &__right button {
        border: none;
        background: #F9F9F9;
        color: #C9C9C9;
        cursor: pointer;
    }
    
}
</style>