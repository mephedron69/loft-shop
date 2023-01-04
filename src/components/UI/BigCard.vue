<template >
    <div class="bigCard">
        <div class="bigCard__block1">
            <div class="bigCard__block1__photo">
                <div class="bigCard__block1__photo-image" v-if="mainImage">
                    <img class="img" :src="require('@/assets/product1/'+ mainImage +'.png')" /> 
                </div>
                <div class="bigCard__block1__photo-desc">
                    <swiper
                                :slides-per-view="4"
                                :direction="'horizontal'"
                                :space-between="50"
                                @swiper="onSwiper"
                                @slideChange="onSlideChange"
                                 :navigation="{
                                prevEl: prev,
                                nextEl: next,
                                }"
                            >
                                <swiper-slide v-for="(item,index) in product.images" :key="index"><img @click="selectPhoto(item)" :src="require('@/assets/product1/'+ item +'.png')" /></swiper-slide>
                    </swiper>
                    <div ref="prev" class="swiper-button-prev2"></div>
                    <div ref="next" class="swiper-button-next2"></div>
                </div>
            </div>
            <div class="bigCard__block1__desc">
                <p class="p1">55555</p>
                <p class="p2" >  {{  product.name}}  </p>     
                <p class="p3">Диваны</p>
                <div class="p4">
                     <p class="p4-price" >  {{ product.price }} ₽  </p> 
                        <div class="p4-buy" >
                             <button
                            :class = "{activeButton: statusBasket}"
                            @click="addBasket(product)" 
                            
                            type="button"></button>
                        </div>   
                     <div class="p4-favour" @click = "addFavour(product)">
                        <button 
                                class="button1"
                                :class = "{active: status}"
                                
                                >
                                    <span>
                                    <svg
                                    width="20"
                                    height="20"
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    >
                                    <g clip-path="url(#clip0_514_7172)">
                                        <path
                                        d="M2.04673 11.0474L9.99935 19L17.952 11.0474C18.836 10.1633 19.3327 8.96429 19.3327 7.71404C19.3327 5.11055 17.2221 3 14.6186 3C13.3684 3 12.1694 3.49666 11.2853 4.38071L9.99935 5.66667L8.71339 4.38071C7.82934 3.49666 6.6303 3 5.38006 3C2.77657 3 0.666016 5.11055 0.666016 7.71404C0.666016 8.96429 1.16267 10.1633 2.04673 11.0474Z"
                                        fill="none"
                                        />
                                        <path
                                        d="M14.5835 1.59711C13.6451 1.6117 12.7272 1.87365 11.9224 2.3565C11.1177 2.83935 10.4546 3.526 10.0001 4.34711C9.54566 3.526 8.88257 2.83935 8.07783 2.3565C7.27308 1.87365 6.35517 1.6117 5.41679 1.59711C3.92091 1.6621 2.51155 2.31649 1.49661 3.4173C0.481678 4.51812 -0.0563308 5.97588 0.000128003 7.47211C0.000128003 11.2613 3.98846 15.3996 7.33346 18.2054C8.08031 18.833 9.02459 19.1771 10.0001 19.1771C10.9757 19.1771 11.9199 18.833 12.6668 18.2054C16.0118 15.3996 20.0001 11.2613 20.0001 7.47211C20.0566 5.97588 19.5186 4.51812 18.5036 3.4173C17.4887 2.31649 16.0793 1.6621 14.5835 1.59711ZM11.596 16.9304C11.1493 17.3066 10.5841 17.5129 10.0001 17.5129C9.41617 17.5129 8.85097 17.3066 8.40429 16.9304C4.12263 13.3379 1.66679 9.89127 1.66679 7.47211C1.60983 6.4177 1.9721 5.38355 2.6746 4.59519C3.37709 3.80683 4.36282 3.32823 5.41679 3.26377C6.47077 3.32823 7.45649 3.80683 8.15899 4.59519C8.86149 5.38355 9.22376 6.4177 9.16679 7.47211C9.16679 7.69312 9.25459 7.90508 9.41087 8.06136C9.56715 8.21764 9.77911 8.30544 10.0001 8.30544C10.2211 8.30544 10.4331 8.21764 10.5894 8.06136C10.7457 7.90508 10.8335 7.69312 10.8335 7.47211C10.7765 6.4177 11.1388 5.38355 11.8413 4.59519C12.5438 3.80683 13.5295 3.32823 14.5835 3.26377C15.6374 3.32823 16.6232 3.80683 17.3257 4.59519C18.0282 5.38355 18.3904 6.4177 18.3335 7.47211C18.3335 9.89127 15.8776 13.3379 11.596 16.9271V16.9304Z"
                                        fill="#727272"
                                        />
                                    </g>
                                    <defs>
                                        <clipPath id="clip0_514_7172">
                                        <rect width="20" height="20" fill="white" />
                                        </clipPath>
                                    </defs>
                                    </svg>
                                </span>
                                </button>
                        <p class="addfavour" :class = "{active: status}"></p>
                     </div>
                </div>
                <div class="p5">
                    <div class="p5-bet">
                        <p>Цвет</p>
                        <div class="buttonColor" @click="openDrop('color')">
                            <div>
                                <button class="buttonColor__p1" :style="`background: ${activeColor};`"></button>
                            </div>
                            <div >
                                <svg width="8" height="5" viewBox="0 0 8 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1 1L4 4L7 1" stroke="black" stroke-linecap="square"/>
                                </svg>
                            </div>
                        </div>
                        <div v-if="colorStatus" class="dropdown">
                            <template  v-for="(item, id) in color" :key="id">
                                <button v-if="item !== activeColor" @click="selectColor(item)" class="buttonColor__p1" :style="`background: ${item};`"></button>
                            </template>
                            
                        </div>
                    </div>
                    <div class="p5-bet"> 
                        <p>Количество</p>
                        <div>
                            <select class="select2">
                                <option selected disabled>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>
                    </div>
                    <div class="p5-bet"> 
                        <p>Размер (Д × Ш × В)</p>
                        <select class="select3">
                             <option selected disabled>{{ product.size1 }} СМ × {{ product.size2 }} СМ × {{ product.size3 }} СМ</option>
                            <option>{{ product.size1 }} СМ × {{ product.size2 }} СМ × {{ product.size3 }} СМ</option>
                            <option>{{ product.size1 }} СМ × {{ product.size2 }} СМ × {{ product.size3 }} СМ</option>
                        </select>
                    </div>
                </div>
                <div class="p6">
                    <p class="p6-desc">Описание</p>
                    <p class="p6-desc1">Лаконичные линии и простые формы, безупречный стиль и индивидуальность –
                         все это диван «Динс». Сдержанный скандинавский дизайн украсит любую современную обстановку.
                          Элегантность, комфорт и функциональность, собранные воедино – 
                          «Динс» просто создан для размеренного отдыха в кругу семьи или компании друзей!</p>
                </div>

            </div>
        </div>

        <div class="bigCard__block2">
           <div class="bigCard__block2__swipe">
                <button  class="bigCard__block2__swipe__line" @click="openCity(0)">Характеристики</button>
                <button  class="bigCard__block2__swipe__line" @click="openCity(1)">Отзывы</button>
                <button  class="bigCard__block2__swipe__line" @click="openCity(2)">Доставка и оплата</button>
            </div>

             <div class="bigCard__block2__bk1" v-if="tabId == 0">
                <div class="bigCard__block2__bk1__desc" v-for="(elem, id) in product.characteristics" :key="id">
                    <div class="bigCard__block2__bk1__desc-line">{{ elem.title }} </div>
                    <div class="dot"></div>
                    <div>{{ elem.value }}</div>
                </div>
            </div>

            <div class="bigCard__block2__bk2" v-else-if="tabId == 1">
                <img :src="require('@/assets/icons/pain.png')"/>
                <div class="desc">
                     <p>Пока не отзывов.</p>
                    <p>Совершайте покупки и делитесь вашим мнением!</p>
                </div>
            </div>

            <div class="bigCard__block2__bk3" v-else>

                <div class="contact__block1__p3">
        <div class="contact__block1__p3__s1">
          <div class="contact__block1__p3__s1-g1">
            <div class="desc">
              <label for="name">Ваше Имя</label>
              <input id="name" type="text" />
            </div>
            <div class='desc'>
              <label for="email">Ваш e-mail</label>
              <input id="email" type="text" />
            </div>
          </div>

          <label for="letter">Сообщение</label>
          <textarea name="" id="letter" cols="500" rows="8"></textarea>
          <br />

          <div class="sumbitS"><div class="submit1">
            <button>Отправить</button>
          </div>
          <div class="file1" >
          <button >Прикрепить файл</button>
          </div>
          
        </div>

        </div>

        <div class="contact__block1__p3-s2">
          <ButtonIcon
            :image="'phone1'"
            :text="'8 (964) 89 99 119'"
            :size="14"
          />
          <ButtonIcon
            :image="'mail'"
            :text="'mebel_loft_anapa@mail.ru'"
            :size="14"
          />
          <ButtonIcon :image="'inst'" :text="'INSTAGRAM'" :size="12" />
          <div>Адрес: г. Анапа, Анапское шоссе, 30 Ж/К Черное море</div>
        </div>
      </div>

            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import ButtonIcon from "@/components/UI/ButtonIcon.vue";
import { Swiper, SwiperSlide } from 'swiper/vue';
import SwiperCore, { Navigation } from "swiper";
SwiperCore.use([Navigation])

import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";

export default {
    name: 'BigCard',
    props: ['product'],
    components: {
        ButtonIcon,
        Swiper,
        SwiperSlide,
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
    
    data() {
        return {
            statusBasket: false,
            status: false,
            colorStatus: false,
            tabId: 0,
            activeColor: null,
            color: ['orange', 'red', 'blue', 'green'],
            mainImage: null
        }
    },
    mounted() {
        this.mainImage = this.product.image
        
        this.activeColor = this.color[0]
        var getFavour = JSON.parse(localStorage.getItem('favourites')) || []
        getFavour.findIndex(object => object.id === this.product.id) < 0 ? this.status = false : this.status = true

        var getBasket = JSON.parse(localStorage.getItem('basket')) || []
        getBasket.findIndex(object => object.id === this.product.id) < 0 ? this.statusBasket = false : this.statusBasket = true
    },

    methods: {
        selectPhoto(item) {
            this.mainImage = item;
        },

        openDrop(text) {
            if (text === 'color') {
                this.colorStatus = !this.colorStatus
            }
        },

        openCity(id) {
            this.tabId = id
        },

        selectColor(color) {
            this.activeColor = color
                this.colorStatus = false
        },

        addFavour(product) {
            var getFavour = JSON.parse(localStorage.getItem('favourites'))
            if (getFavour) {
                const result = getFavour.findIndex(object => object.id === product.id);
                if (result < 0) {
                    getFavour.push(product)
                    this.status = true
                }  
                else { 
                    getFavour.splice(result, 1)
                    this.status = false
                }
                localStorage.setItem('favourites', JSON.stringify(getFavour))
            }
            else {
                localStorage.setItem('favourites', JSON.stringify([product]))
                 this.status = true
            }
        },
        addBasket(product) {
            product.count = 1
            var getBasket = JSON.parse(localStorage.getItem('basket'))
            if (getBasket) {
                const result = getBasket.findIndex(object => object.id === product.id);
                if (result < 0) {
                    getBasket.push(product)
                    this.statusBasket = true
                }
                else {
                    getBasket.splice(result, 1)
                    this.statusBasket = false
                }
                localStorage.setItem('basket', JSON.stringify(getBasket))
            }
            else {
                localStorage.setItem('basket', JSON.stringify([product]))
                this.statusBasket = true
            }
        },
    }
}
</script>


<style lang="scss" scoped>
.bigCard {
    &__block1 {
        display: flex;
        gap: 57px;
        &__photo {
            width: 58%;
            max-width: 600px;
            &-image{
                 height: 354px;
                 
                .img {
                    object-fit: contain;
                    height: 100%;
                    width: 100%;
                    padding: 0 27px 0 27px;
                }
            }
            &-desc {
                position: relative;
                padding: 0 30px; 
            }
                
        }
        &__desc {
            position: relative;
            top: 50px;
            .p2 {
                font-weight: 500;
                font-size: 28px;
                color: #414141;
                margin: 10px 0 10px;
            }
            .p3 {
                font-weight: 400;
                font-size: 14px;
                color: #686868;
                }
            .p4 {
                display: flex;
                margin: 15px 0 15px;
                justify-content: space-between;
                align-items: center;
                &-price {
                    font-weight: 500;
                    font-size: 28px;
                    color: #414141;
                }
                &-buy button{
                    margin: 0 20px 0 30px;
                    border: none;
                    width: 143px;
                    height: 40px;
                    color: white;
                    background: #245462;
                    align-items: center;
                    cursor: pointer;  
                    &::after {
                        content: "Купить";
                    }
                    &:hover {
                    background: #2a6172;
                     color:white;
                    }
                    &.activeButton {
                    background-color: white;;
                    box-shadow: 0px 1px 9px rgba(0, 0, 0, 0.11);
                        color: black;
                    &:after {
                        content: "Удалить";
                        border: 1px solid black;
                        border: 1px;
                        
                    }
                    &:hover {
                     background: #2a6172;
                     color:white;
                }
                    
                }
                    
                 }
                &-favour {
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    gap: 7px;
                    .button1 {
                            position: relative;
                            top: 2px;
                            border: none;
                            background: rgb(255, 255, 255);
                            cursor: pointer;
                            svg {
                                &:hover {
                                    path {
                                        fill: #d81921;
                                    }
                                }
                                }
                                &.active {
                                animation: heartPulse 0.5s ease both;
                                svg {
                                    path {
                                    fill: #d81921;
                                    }
                                }
                                }
                    }
                    .addfavour {
                        &:after {
                            content: "Добавить в желаемое";
                        }
                        font-weight: 400;
                        font-size: 12px;
                        &:active {
                            &:after {
                            content: "Удалить из желаемое";
                        }
                    }
                        }
                }
            }  
            .p5 {
                display: flex;
                gap: 45px;
                p {
                    font-weight: 400;
                    font-size: 12px;
                }
                &-bet {
                    position: relative;
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                    .buttonColor {
                        display: flex;
                        align-items: center;
                        position: relative;
                        gap: 12px;
                        &:hover  {
                            cursor: pointer;
                        }
                        &__p1 {
                            padding: 12px;
                            border: none;
                            cursor: pointer;
                        }
                    }
                    .dropdown {
                        display: flex;
                        justify-content: center;
                        flex-direction: column;
                        position: absolute;
                        background: white;
                        top: 50px;
                    }
                }
                .select2 {
                    border: none;
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
                    text-align: center;
                    width: 50px;
                    height: 30px;
                    }
                .select3 {
                    border: none;
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
                    text-align: center;
                    padding: 7px 10px;
                    }    
            }  
            .p6 {
                margin-top: 20px;
                display: flex;
                flex-direction: column;
                gap: 10px;
                &-desc {
                    font-weight: 400;
                    font-size: 12px;
                    color: #414141;
                }
                &-desc1 {
                    font-weight: 400;
                    font-size: 12px;
                    color: #686868;
                    width: 456px;
                }
            }
        }
    }
    &__block2 {
        margin-top: 50px;
        &__swipe {
            display: flex;
            gap: 50px;
            button {
                font-family: 'Times New Roman', Times, serif;
                border: none;
                background: white;
                font-weight: 400;
                font-size: 16px;
                color: #686868;
            }
            &__line {
                    &:after {
                    margin-top: 5px;
                    content: "";
                    display: block;
                    width: 0;
                    height: 3px;
                    background-color: #245462;
                    transition: width 0.3s ease-in-out;
                }
            }
            
                    button:focus:after {
                    width: 100%;
                    }
        }
         &__bk1 {
            display: flex;
            flex-wrap: wrap;
            column-gap: 10%;
            align-items: center;
             margin-top: 27px;
             margin-bottom: 90px;
             row-gap: 20px;
             font-weight: 400;
            font-size: 14px;
             color: #686868;
             &__desc {
                display: flex;
                justify-content: space-between;
                width: 45%;
                .dot {
                    border-bottom: 1px dotted #686868;
                    margin: 3px 10px;
                    flex-grow: 1;
                }
             }
        }

        &__bk2 {
                margin-top: 50px;
                margin-bottom: 50px;
             display: flex;
             align-items: center;
             img {
                width: 110px;
             }
        }

         &__bk3 {
            margin-top: 25px;
            margin-bottom: 50px;
             .contact__block1__p3 {
      display: flex;
      margin-top: 30px;

      .sumbitS{
        margin-top: 20px;
        display: flex;
        gap: 20px;
        flex-direction: row-reverse;
      }
      &__s1 {
        &-g1 {
          display: flex;
          column-gap: 10px;

          .desc {
            flex-direction: column;
          }
        }
        margin-right: 99px;

        
      }

      &__s1 label {
        display: block;
        font-weight: 400;
        font-size: 12px;
        color: #969696;
        

      }

      &__s1 {
        input,
        textarea {
          width: 207px;
          border: none;
          background: #fcfcfc;
          box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
          padding: 14px 0 14px 7px;
          outline: none;
          font-family: inherit;
        }
        textarea {
          width: 431px;
          resize: none;
        }

        .file1 button{
          outline: none !important;
          border: none;
          padding: 12px 20px 13px 20px;
          box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
          background: white;
          font-weight: 400;
          font-size: 13px;

          &:hover {
            cursor: pointer;
          }
        }

        .submit1 button{
          outline: none;
          background: #245462;
          color: white;
          padding: 12px 20px 13px 20px;
          font-weight: 400;
          font-size: 13px;
          color: white;
          border: none;

          &:hover {
            cursor: pointer;
          }
        }
      }

      &-s2 {
        display: flex;
        flex-wrap: wrap;
        font-weight: 400;
        font-size: 14px;
        gap: 37px;
        max-width: 365px;
        max-height: 55px;
        margin: 15px;
      }
    }
        }
    }
}

.swiper-button-disabled {
    background: white !important;
}

</style>