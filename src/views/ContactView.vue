<template>
  <div class="contact container">
    <div class="contact__block1">
      <div class="contact__block1__p1">
        <router-link to="/">Главная</router-link>
        /
        <router-link to="/contact">Контакты</router-link>
      </div>
      <div class="contact__block1__p2">Свяжитесь с нами</div>

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

    <div class="contact__block2">
      <div class="contact__block2-p1">Адрес нашей компании</div>
      <iframe
        src="https://yandex.ru/map-widget/v1/?um=constructor%3Ade653e03f4d9f21f985ee185976a1426afd14e49a2047b8d08aa78fdc09a2696&amp;source=constructor"
        width="100%"
        height="400"
        frameborder="0"
      ></iframe>
    </div>
  </div>
</template>
<script>
import ButtonIcon from "@/components/UI/ButtonIcon.vue";

export default {
  name: "ContactView",
  components: { ButtonIcon },
};
</script>
<style lang="scss" scoped>
.contact {
  &__block1 {
    &__p1 {
      font-weight: 400;
      font-size: 12px;
      color: #969696;
      padding: 30px 0 40px 0;
      word-spacing: 5px;
      a {
        color: #969696;
      }
    }

    &__p2 {
      font-weight: 400;
      font-size: 16px;
    }

    &__p3 {
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

  &__block2 {
    font-weight: 400;
    font-size: 16px;
    margin: 50px 0 70px 0;

    &-p1 {
      padding: 0 0 30px 0;
    }
  }
}
</style>
