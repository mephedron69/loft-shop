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
                        <select @change="changeCategory($event.target.value)" name="format" id="format">
                            <option  :value="i" v-for="(item, i) in category" :key="i" :selected="item.link === $route.params.slug">{{ item.title }}</option>
                        </select>

                        <select  @change="changeSubcategory($event.target.value)" name="format1" id="format1">
                            <option :value="i" v-for="(item, i) in subcategory" :key="i">{{ item.title }}</option>
                            <option v-if="!subcategory.length" >Нет данных</option>
                        </select>

                        <select name="format2" id="format2">
                            <option :value="i" v-for="(item, i) in subcategory1" :key="i">{{ item.title }}</option>
                            <option v-if="!subcategory1.length" >Нет данных</option>
                        </select>
                    </div>
                </div>
                <div class="living__block1__filtr__p2">
                    <div class="price">Цена</div>
                    <div class="range-slider">
                        <VueSimpleRangeSlider
                        style="width: 100%"
                        :min="0"
                        :max="30000"
                        exponential
                        v-model="state.range"
                        >
                        </VueSimpleRangeSlider>
                    </div>
                    <div class="value">
                        <div class="value__sum">
                        <input type="number" v-model="state.range[0]"/>
                            </div>
                        <div class="value__top"></div>
                       <div class="value__sum">
                        <input type="number" v-model="state.range[1]"/>
                            </div>
                    </div>
                </div>
                <div class="living__block1__filtr__p3">
                    <div class="color">Цвет</div>
                    <div class="checkbox">
                        <div class="checkbox__content" v-for="(item, i) in colors" :key=i :style="'background-color:' + item.color">
                            <input class="checkbox__content-input" type="checkbox" :id="item.id"/>
                            <label class="checkbox__content-label" :for="item.id"></label>
                        </div>

                        <!-- <div class="checkbox__content" style="background-color: green;">
                            <input class="checkbox__content-input" type="checkbox" id="checkbox1"/>
                            <label class="checkbox__content-label" for="checkbox1"></label>
                        </div>

                        <div class="checkbox__content" style="background-color: #E4E4E4;">
                            <input class="checkbox__content-input" type="checkbox" id="checkbox2"/>
                            <label class="checkbox__content-label" for="checkbox2"></label>
                        </div>
                        
                        <div class="checkbox__content" style="background-color: black;">
                            <input class="checkbox__content-input" type="checkbox" id="checkbox3"/>
                            <label class="checkbox__content-label" for="checkbox3"></label>
                        </div>

                        <div class="checkbox__content" style="background-color: #675A5A;">
                            <input class="checkbox__content-input" type="checkbox" id="checkbox4"/>
                            <label class="checkbox__content-label" for="checkbox4"></label>
                        </div>

                        <div class="checkbox__content" style="background-color: #864F4F;">
                            <input class="checkbox__content-input" type="checkbox" id="checkbox5"/>
                            <label class="checkbox__content-label" for="checkbox5"></label>
                        </div> -->

                    </div>
                </div>
                <div class="living__block1__filtr__p4">
                    <div class="brand">Бренд</div>
                          <div class="block" :class="{'is-collapsed' : collapsed }">
                            <div class="box" v-for="(item, i) in brands" :key="i" ><input type="checkbox"><div>{{ item.title }}</div></div>

                            <!-- <div class="box"><input type="checkbox">Кускен</div>
                            <div class="box"><input type="checkbox">Эби</div>
                            <div class="box"><input type="checkbox">Реджио</div>
                            <div class="box"><input type="checkbox">Сайле</div>
                             <div class="box"><input type="checkbox">Валенсия</div>
                            <div class="box"><input type="checkbox">Толикс-1</div>
                             <div class="box"><input type="checkbox">Толикс-2</div>
                            <div class="box"><input type="checkbox">Авиньон</div> -->
                        </div>
                        <button class="button" @click=" collapsed = !collapsed">Показать еще</button>
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
import brands from "@/data/brands.json";
import colors from "@/data/colors.json"
import category from "@/data/category.json"

import VueSimpleRangeSlider from "vue-simple-range-slider";
import "vue-simple-range-slider/css";
import { reactive } from "vue";

export default {
    name: "LivingView",
    data() {
        return {
            tovar: products.elements,
            collapsed: true,
            brands: brands.brands,
            colors: colors.colors,
            category: category.category,
            subcategory: [],
            subcategory1: []
    }
    },
  setup() {
    const state = reactive({ range: [10, 102000], number: 10 });
    return { state };
    },

    components: { ProductCard, VueSimpleRangeSlider  },
    methods: {
        changeCategory(item) {
            console.log(this.category[item]);
            if (this.category[item].subcategory) {
                this.subcategory = this.category[item].subcategory
            }
            else {
                this.subcategory = []
            }
        },
        changeSubcategory(item) {
            if (this.subcategory[item].subcategory) {
                this.subcategory1 = this.subcategory[item].subcategory
            }
            else {
                this.subcategory1 = []
            }
        },
        checkSubcategory() {
            if (this.category.find(item => item.link === this.$route.params.slug).subcategory) {
                this.subcategory = this.category.find(item => item.link === this.$route.params.slug).subcategory
            }
            else {
                this.subcategory = []
            }
        },
        checkInSubcategory() {
            if (this.subcategory.length) {
                this.subcategory1 = this.subcategory[0].subcategory
            }
            else {
                this.subcategory1 = []
            }
        },
    },
    mounted() {
        this.checkSubcategory(),
        this.checkInSubcategory()
    },
    computed: {
        
    },
    watch: {
        $route() {
            this.checkSubcategory(),
            this.checkInSubcategory()
        },
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
                    column-gap: 1%;
                    column-gap: 7%;
                    row-gap: 40px;
                    .product {
                        width: 27%;
                        .proCard {
                            width: auto !important;
                        }
                    }
                }
        }
        &__filtr {
            display: flex;
            flex-direction: column;
            gap: 20px;
            box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
            padding: 20px 20px 30px 20px;
            height: 100%;
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
                    color: #414141;
                    font-weight: 400;
                    font-size: 14px;
                }
                .range-slider {
                    display: flex;
                }
                .value {
                    display: flex;
                    align-items: center;
                    gap: 12px;
                    justify-content: center;
                    width: 100%;
                    margin-top: 10px;
                    
                    &__top {
                        width: 19px;
                        height: 2px;
                       background: #414141;
                    }
                    &__sum {
                        padding: 7px 7px;
                        background: #F8F8F8;
                        input {
                            width: 100%;
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
                .checkbox {
                    position: relative;
                    display: flex;
                    align-items: stretch;
                    gap: 10px;
                    &__content {
                        position: relative;
                        width: 18px;
                        height: 18px;
                        &-input {
                            -webkit-appearance: none;
                            appearance: none;
                            position: absolute;
                        }

                        &-label { 
                            cursor: pointer;
                            &:before {
                                content: "";
                                display: block;
                                width: 18px;
                                height: 18px;

                                border: 1px solid white;

                                position: absolute;
                                top: 0;
                                left: 0;
                                z-index: 1;
                            }

                            &:after {
                                content: "";
                                display: block;
                                width: 18px;
                                height: 18px;

                                background: url("@/assets/svg/pty.svg") no-repeat;
                                background-size: 15px 15px;
                                opacity: 0;

                                position: absolute;
                                top: 2px;
                                left: 3px;
                                z-index: 2;
                            }
                        }
                        
                        .checkbox__content-input:checked + .checkbox__content-label:after {
                            opacity: 1;
                        }
                    }
                }
            }

            &__p4 {
                .brand {
                    font-weight: 400;
                    font-size: 14px;
                    color: #414141;
                }
                    .is-collapsed {
                        .box:nth-child(n+5) {
                            display: none;
                        }
                    }
                .block {
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
                .button {
                    border: none;
                    font-weight: 400;
                    font-size: 12px;
                    background: white;
                    color: #245462;
                    cursor: pointer;
                }
            }
        }
    }
}
</style>