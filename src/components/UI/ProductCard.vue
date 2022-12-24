<template>
    <div class="product" v-if="product">
    <div class="proCard">
        <img class="icon" :src="require('@/assets/icons/'+ product.icon +'.png')" /> 
        <img class="img" :src="require('@/assets/images/'+ product.image +'.png')" /> 
        <p class="text1" >  {{ product.name }}  </p>     
        <p class="text2" >  {{ product.desc }}  </p>   
        <div class="p"> 
           <p class="p__text3" >  {{ product.price }}   </p>
           <p class="p__text4" >  {{ product.priceN }}  </p>
        </div>
        <div class="bask"> 
            <div class="bask-size">
                Размеры
            </div>
            <div class="bask__sizes">
                <div class="bask__sizes-text">
                    ШИРИНА
                    <span>{{ product.size1 }} СМ</span>
                </div>
                ×
                <div class="bask__sizes-text">
                    ШИРИНА
                    <span>{{ product.size2 }} СМ</span>
                </div>
                ×
                <div class="bask__sizes-text">
                    ШИРИНА
                    <span>{{ product.size3 }} СМ</span>
                </div>
            </div>
            <div class="bask-buy">
                <button>Добавить в корзину</button>
            </div>
        </div>  
    </div>
    </div>
</template>
<script>

export default {
    name: "ProductCard",
    props: ['product']
    
}
</script>
<style lang="scss" scoped>
.product {
    position: relative;
    width: 21%;
    height: 355px;
}
.proCard {
    display: flex;
    width: 100%;
    padding: 20px;
    flex-direction: column;
    flex-wrap: wrap;
    position: absolute;
    overflow: hidden;
    background: white;
    .bask {
        display: none;
    }
    &:hover{
        top: 0;
        z-index: 1;
        box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.11);
        cursor: pointer;
        .bask {
            display: block;
            &-size {
                font-weight: 400;
                font-size: 12px;
                margin-bottom: 8px;
            }
            &__sizes {
                display: flex;
                align-items: center;
                gap: 15px;
                &-text {
                    color: #C4C4C4;
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                    font-size: 9px;
                    span {
                        color: #414141;
                    }
                }
            }
            &-buy button{
                padding: 13px 50px;
                background-color:#245462;;
                outline: none !important;
                border: none;
                color: white;
                width: 100%;
                margin-top: 17px;
            }

        }
    }
    .icon{
        position: absolute;
        right: 15.5px;
        top: 21px;
        max-height: 15px;
        max-width: 17.5px;
    }
    .img {
        object-fit: contain;
        margin: 54px 12px;
    }
    

    .text1 {
        font-weight: 500;
        font-size: 16px;
    }
     .text2 {
        font-weight: 400;
        font-size: 11px;
        margin: 6px 0 9px;
    }
     .p {
        display: flex;
        gap: 6px;
        padding-bottom: 15px;
            align-items: center;
        &__text3 {
            font-weight: 500;
            font-size: 16px;
        }
        &__text4 {
            color: #CCCCCC;
            font-weight: 500;
            font-size: 12px;
            text-decoration-line: line-through;
        }
     }


    .icon1 {
        position: absolute;
        left: 15px;
        top: 21px;
        max-height: 17px;
        max-width: 17px;
        
    }

}
</style>