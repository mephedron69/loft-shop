<template >
    <div class="basket">
        <img class="img" :src="require('@/assets/images/'+ product.image +'.png')" /> 
        <div class="basket__top">
            <div class="basket__top-part1">
                <div>
                    <p> {{ product.name }}</p>
                </div>       
                <div> 
                    <p> {{ product.price }} </p>
                </div>
            </div>
            <div class="basket__top__part2">
                <div> Цвет: <span>{{ product.color }}</span> </div>
                <div>Количество: 1</div>
                <div class="basket__top__part2-p2">
                <div>Размер(Ш×Д×В):</div>
                <span>
                    {{ product.size1 }} CM × {{ product.size2 }} CM × {{ product.size3 }} CM 
                </span>
                </div>
            </div>
        </div>
        <div class="basket__right">X</div>
    </div>
</template>
<script>
export default {
    name: "BasketCard",
    props: ['product']
}
</script>
<style lang="scss" scoped>
.basket {
    display: flex;
    background: white;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
    background: linear-gradient(to right, white 96%, #F9F9F9 25%);
    align-items: center;
    padding: 22px 25px 23px 20px;
    margin: 20px 0 20px 0;

    .img {
        max-width: 100px;
        max-height: 75px;
    }
    &__top {
        display: flex;
        flex-direction: column;
        gap: 20px;
        margin-left: 40px;
        &-part1 {
            display: flex;
            font-weight: 500;
            font-size: 16px;
            justify-content: space-between;
        }
        &__part2 {
            display: flex;
            gap: 15px;
            font-weight: 400;
            font-size: 12px;
            &-p2 {
                display: flex;
                gap: 10px;
                
            }
        }
        &__part2 span {
            color: #9E9E9E;
            font-weight: 400;
            font-size: 12px;
        }
    }
    &__right {
        margin: left;
        color: #C9C9C9;
        flex-direction: row-reverse;
    }
}
</style>