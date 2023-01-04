<template>
  <div class="header">
    <div class="header__top">
      <div class="container">
        <div class="header__top__left">
          <router-link to="/">Главная</router-link>
          <router-link to="/about">О нас</router-link>
          <router-link to="/contact">Контакты</router-link>
        </div>
        <div class="header__top__right">
          <div class="header__top__right-item">
            <img :src="require('@/assets/icons/phone.png')" />
            8 (964) 89 99 119
          </div>
          <div class="header__top__right-item">
            <img :src="require('@/assets/icons/delivery-icon.png')" />
            Доставка
          </div>
        </div>
      </div>
    </div>
    <div class="header__middle container">
      <router-link to="/"><img :src="require('@/assets/icons/LOGO.png')" /></router-link>
      <div class="header__middle-search">
        <img :src="require('@/assets/icons/search.png')" />
        <input type="text" placeholder="Поиск" />
      </div>
      <div class="header__middle-icons">

        <router-link 
          class="basketlist"
          :class="{active: status }"
          to="/favour">
              <img :src="require('@/assets/icons/wishlist.png')" />
        </router-link>

        <RouterLink to="/basket"><img :src="require('@/assets/icons/bag.png')" /></RouterLink>
        <router-link to="/profile"
          ><img :src="require('@/assets/icons/profile.png')"
        /></router-link>
      </div>
    </div>
    <div class="header__low container">
      <router-link v-for="(item, i) in category" :key="i" :to="'/catalog/'+ item.link"><ButtonIcon :image="item.icon" :text="item.title" :size="16" /></router-link>
      <!-- <ButtonIcon :image="'bedroom'" :text="'Спальни'" :size="16" />
      <router-link to="/catalog/living"><ButtonIcon :image="'livingroom'" :text="'Гостинные'" :size="16" /></router-link>
      <ButtonIcon :image="'closet'" :text="'Прихожие'" :size="16" />
      <ButtonIcon :image="'office'" :text="'Офисная мебель'" :size="16" />
      <router-link to="/bed"><ButtonIcon :image="'childrensroom'" :text="'Детская'" :size="16" /></router-link>
      <div class="header__low-stock">Акция</div>
      <div>:</div> -->
    </div>
  </div>
</template>

<script>
import ButtonIcon from "../UI/ButtonIcon.vue";
import category from "@/data/category.json"

export default {
  name: 'Header',
  components: { ButtonIcon,},
  data() {
    return {
      status: false,
      sum1: 5,
      sum2: 10,
      category: category.category
    }
  },
  props: ['product'],
  created() {
    // при создание компоненте (недоступна DOM-дерево)
  },
  mounted() {
    // при загрузке компонента
  },
  methods: {
    // набор функции
    countEr() {
      this.sum1++
    },
    testFunction() {
      // Определенная логика
    }
  },
  computed: {
    // Вычисляемые свойства и слежение
    totalSum() {
      return this.sum1 + this.sum2
    }
  },
  watch: {
    // отследить состояние определенных данных
    totalSum() {
      console.log('counter');
    }
  }    
};
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  flex-direction: column;
  &__top {
    padding: 10px 0px;
    background: #313131;
    font-weight: 400;
    font-size: 14px;
    color: #ffffff;
    .container {
      display: flex;
      justify-content: space-between;
    }

    &__left {
      display: flex;
      gap: 30px;
      a {
        font-weight: 400;
        font-size: 14px;
        color: #ffffff;
      }
    }

    &__right {
      display: flex;
      gap: 30px;

      &-item {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }

  &__middle {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 37px;
    margin-top: 20px;
    margin-bottom: 20px;

    &-search {
      border: 1px solid #e6e6e6;
      flex-grow: 1;
      display: flex;
      align-items: center;
      gap: 20px;
      padding: 17px 15px;
      input {
        outline: none;
        border: none;
        width: 100%;
      }
    }

    &-icons {
      display: flex;
      gap: 30px;
      width: 115px;
      height: 18px;

      .basketlist {
        &.active{
          background: url('@/assets/icons/listlikeB.png') no-repeat bottom;
        }
      }

    }
  }

  &__low {
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 400;
    font-size: 16px;
    padding: 23px 0 23px 0;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.07);
    column-gap: 5px;

    a {
      text-decoration: none;
      color: black;
    }

    &-stock {
      color: #d74444;
      font-weight: 400;
      font-size: 16px;
    }
  }
}
</style>
