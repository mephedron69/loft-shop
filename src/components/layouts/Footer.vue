<template>
  <div class="footer">
    <div class="container">
      <div class="footer__left">
        <div class="footer__left-nav">Навигация</div>
        <div class="footer__left__types">
          <div>Кухни</div>
          <div>Спальни</div>
          <div>Гостинные</div>
          <div>Прихожие</div>
          <div>Офисная мебель</div>
          <div>Детская</div>
          <div>Шкафы</div>
          <div>Матрасы</div>
          <div>Мягкая мебель</div>
        </div>
        <div class="footer__left__new">
          <dev class="footer__left__new-1"> Акция </dev>
          <dev> Новинки </dev>
        </div>
      </div>

      <div class="footer__right">
        <img :src="require('@/assets/icons/lm.png')" />
        <div class="footer__right__address">
          г. Анапа, Анапское шоссе, 30 Ж/К Черное море
        </div>
        <div class="footer__right__social">
          <ButtonIcon :image="'phone1'" :text="'8 (964) 89 99 119'" />
          <ButtonIcon :image="'inst'" :text="'INSTAGRAM'" :size="12" />
          <ButtonIcon :image="'mail'" :text="'mebel_loft_anapa@mail.ru'" />
          <!-- <div class="footer__right__social-phone">
                        <img :src="require('@/assets/icons/phone1.png')" />
                        8 (964) 89 99 119
                    </div>
                    <div class="footer__right__social-inst">
                        <img :src="require('@/assets/icons/inst.png')" />
                        INSTAGRAM
                    </div>
                    <div class="footer__right__social-mail">
                        <img :src="require('@/assets/icons/mail.png')" />
                        mebel_loft_anapa@mail.ru
                    </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ButtonIcon from "../UI/ButtonIcon.vue";

export default {
  components: { ButtonIcon },
};
</script>

<style lang="scss" scoped>
.footer {
  height: 100%;
  background: #ffffff;
  box-shadow: 0px -4px 10px rgba(0, 0, 0, 0.03);
  .container {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
    padding: 54px 0 32px 0;
  }

  &__left {
    display: flex;
    flex-direction: column;

    &-nav {
      font-weight: 600;
      font-size: 20px;
    }

    &__types {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      flex-wrap: wrap;
      font-weight: 400;
      font-size: 14px;
      max-height: 80px;
      row-gap: 7px;
      column-gap: 50px;
      margin: 10px 0 34px 0;
    }

    &__new {
      display: flex;
      font-weight: 400;
      font-size: 14px;
      gap: 30px;
      &-1 {
        color: #d74444;
      }
    }
  }

  &__right {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    &__social {
      display: flex;
      justify-content: flex-end;
      gap: 30px;
    }

    &__address {
      display: flex;
      flex-direction: column;
      max-width: 180px;
      font-weight: 400;
      font-size: 14px;
      text-align: right;
    }
  }
}
</style>
