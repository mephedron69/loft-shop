<template >
    <div class="living container">
         <div class="living__page">
                <router-link to="/">Главная</router-link>
                /
                <router-link to="/living">Гостинные</router-link>
            </div>

        <div class="living__block1">
            <div class="living__block1__filtr">
                <div class="living__block1__filtr__p1">
                    <div class="name">Раздел</div>
                    <div class="rasdel">
                        <select name="format" id="format">
                            <option selected disabled>Выберите раздел </option>
                            <option>Кухни</option>
                            <option>Спальни</option>
                            <option>Гостинные</option>
                            <option>Прихожие</option>
                            <option>Офисная мебель</option>
                            <option>Детская</option>
                        </select>

                        <select name="format1" id="format1">
                            <option selected disabled>Мягкая мебель</option>
                            <option>Кухни</option>
                            <option>Спальни</option>
                            <option>Гостинные</option>
                            <option>Прихожие</option>
                            <option>Офисная мебель</option>
                            <option>Детская</option>
                        </select>

                        <select name="format2" id="format2">
                            <option selected disabled>Диваны</option>
                            <option>Кухни</option>
                            <option>Спальни</option>
                            <option>Гостинные</option>
                            <option>Прихожие</option>
                            <option>Офисная мебель</option>
                            <option>Детская</option>
                        </select>
                    </div>
                </div>
                <div class="living__block1__filtr__p2">
                    <div class="price">Цена</div>
                    <div class="range-slider">
                        <input class="range-min" type="range" min="0" max="12000"/>
                        <input class="range-max" type="range" min="0" max="12000"/>
                    </div>
                    <div class="value">
                        <div class="value__sum">
                        <input type="number" min="0" max="12000" value="1000"/>
                            </div>
                        <div class="value__top"></div>
                       <div class="value__sum">
                        <input type="number" min="0" max="12000" value="8000"/>
                            </div>
                    </div>
                </div>
                <div class="living__block1__filtr__p3">
                    <div class="color">Цвет</div>
                    <div class="boxcolor">
                        <div class="box"><input type="checkbox"></div>
                        <div class="box"><input type="checkbox"></div>
                        <div class="box"><input type="checkbox"></div>
                        <div class="box"><input type="checkbox"></div>
                        <div class="box"><input type="checkbox"></div>
                    </div>
                </div>
                <div class="living__block1__filtr__p4">
                    <div class="brand">Бренд</div>
                    <div class="check">
                        <div class="box"><input type="checkbox"><div>Динс</div></div>
                        <div class="box"><input type="checkbox">Кускен</div>
                        <div class="box"><input type="checkbox">Эби</div>
                        <div class="box"><input type="checkbox">Реджио</div>
                        <div class="box"><input type="checkbox">Сайле</div>
                    </div>
                    <div class="still">Показать еще</div>
                </div>
            </div>

            <div class="living__block1__sort">
                    <div class="sorting">
                        <select name="format" id="format">
                            <option selected disabled>Сортировать </option>
                            <option>по убыванию цены</option>
                            <option>по возрастанию цены</option>
                            <option>по популярности</option>
                        </select>
                    </div>
                    <div class="product1">
                        <ProductCard v-for="(item, i) in tovar" :key="i" :product="item" />
                    </div>
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
    methods: {

  }
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
        gap: 28px;

        &__sort {
            width: 100%;
            .sorting {
                font-weight: 400;
                font-size: 12px;
                display: flex;
                flex-direction: row-reverse;
                margin-bottom: 20px;
                select {
                    border: none;
                    option {
                        color: blue;
                    }
                }
            }
            .product1 {
                    display: flex;
                    flex-wrap: wrap;
                    column-gap: 16%;
                    row-gap: 40px;
                }
        }
        &__filtr {
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
            padding: 20px 20px 0 20px;
            max-height: 571px;
            max-width: 223px;
            &__p1 {
                display: flex;
                flex-direction: column;
                gap: 20px;
                .name {
                    font-weight: 400;
                    font-size: 14px;
                }
                .rasdel {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    select {
                        font-weight: 400;
                        font-size: 12px;
                        border: none;
                        color: #686868;
                        background: #F8F8F8;
                        border-radius: 3px;
                        padding: 7px 95px 8px 10px;
                    }
                    option {
                    }
                }
            }
            &__p2 {
                .price {
                    margin-bottom: 20px;
                }
                .range-slider {
                    display: flex;
                }
                .value {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    justify-content: center;
                    
                    &__top {
                        width: 19px;
                        height: 2px;
                       background: #414141;
                    }
                    &__sum {
                        padding: 7px 7px;
                        background: #F8F8F8;
                        input {
                            font-weight: 400;
                            font-size: 13px;
                            text-align: center;
                            border: none;
                            background: #F8F8F8;
                            border-radius: 3px;
                            max-width: 190px;
                        }
                    }
                }
            }
            &__p3 {
                .color {
                    color: #414141;
                    font-weight: 400;
                    font-size: 14px;
                    margin-bottom: 20px;
                }
                .boxcolor{
                    display: flex;
                    input{
                    accent-color: red;
                    transform:scale(1.2);
                    opacity:0.9;
                    }
                    .box {
                        border: none;
                    }
                }
            }

            &__p4 {
                .brand {
                    font-weight: 400;
                    font-size: 14px;
                    color: #414141;
                }
                .check {
                    display: flex;
                    flex-direction: column;
                    font-weight: 400;
                    font-size: 12px;
                    margin: 20px 0 15px;
                    input {
                        accent-color: #245462;
                        transform:scale(1.2);
                        opacity:0.9;
                        cursor:pointer;
                    }
                    .box {
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        
                }

                }
                .still {
                    font-weight: 400;
                    font-size: 12px;
                    color: #245462;
                }
            }
        }
    }
}

</style>