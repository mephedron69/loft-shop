<template>
    <div class="product" v-if="product">
    <div class="proCard">
        <button 
         class="proCard__button1"
         :class="{active: status }"
         @click="addToFavourites(product)"
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
                    ГЛУБИНА
                    <span>{{ product.size2 }} СМ</span>
                </div>
                ×
                <div class="bask__sizes-text">
                    ВЫСОТА
                    <span>{{ product.size3 }} СМ</span>
                </div>
            </div>
            <div class="bask-buy">
                <button
                    :class="{activeButton: statusButton }"
                    @click="addToBasket(product)"
                    
                    >
                </button>
            </div>
        </div>  
    </div>
    </div>
</template>
<script>


export default {
    name: "ProductCard",
    data() {
        return {
            status: false,
            statusButton: false
        }
    },
    props: ['product'],
    mounted() {
        var getFavourites = JSON.parse(localStorage.getItem('favourites'))
        getFavourites.some(object => object.id === this.product.id) ? this.status = true : this.status = false

        var getBaskets = JSON.parse(localStorage.getItem('baskets'))
        getBaskets.some(object => object.id === this.product.id) ? this.statusButton = true : this.statusButton = false
    },
    methods: {
        addToFavourites(product) {
            var getFavourites = JSON.parse(localStorage.getItem('favourites'))
            if (getFavourites) {
                if (getFavourites.some(object => object.id === product.id)) {
                    getFavourites.map((item, index) => {
                        item.id === product.id ? getFavourites.splice(index, 1) : null
                    })
                    this.status = false
                } else {
                    getFavourites.push(product)
                    this.status = true
                }
                localStorage.setItem('favourites', JSON.stringify(getFavourites))
            }
            else {
                localStorage.setItem('favourites', JSON.stringify([product]))
                this.status = true
            }
        },

        addToBasket(product) {
            product.counter = 1
            var getBaskets = JSON.parse(localStorage.getItem('baskets'))
             if (getBaskets) {
                    if (getBaskets.some(object => object.id === product.id)) {
                    getBaskets.map((item, index) => {
                        item.id === product.id ? getBaskets.splice(index, 1) : null
                    })
                    this.statusButton = false
                }
                else {
                        getBaskets.push(product)
                         this.statusButton = true
                }   
                localStorage.setItem('baskets', JSON.stringify(getBaskets))
             }
             else {
                 localStorage.setItem('baskets', JSON.stringify([product]))
                this.statusButton = true
             }
        },

    }
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

    &__button1 {
        position: absolute;
        right: 15.5px;
        top: 21px;
        border: none;
        background: white;
        cursor: pointer;
        svg {
            display: inline-block;
            width: 20px;
            height: 20px;
            transition: all 0.5s ease 0s;
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
                cursor: pointer;
                &:after {
                    content: 'Добавить в корзину';
                }
                &:hover {
                    background: #2a6172;
                }
                &.activeButton {
                    background: white;
                    border: 1px solid #245462;
                    color: #245462;
                    &:after {
                        content: 'Удалить из корзины';
                    }         
                    &:hover {
                        background: #2a6172;
                        color: white;
                    }           
                }
            }
            &-buy {
            }

        }
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