<template lang="">
  <div class="profile container">
    <div class="profile__block1">
      <div class="profile__block1__top">
        <router-link to="/">Главная</router-link>
         /
        <router-link to="/profile">Личный Кабинет</router-link>
      </div>

      <div class="profile__block1__middle"> 
        <div class="profile__block1__middle_left">
            Бонусная программа
        </div>

        <div class="profile__block1__middle_right">
          <div>
              У вас 0 бонусных баллов 
          </div>
           <div class="color1">
             Правила бонусной программы
          </div>
        </div>

      </div>

      <div class="profile__block1__low">
        <ButtonIcon :image="'cashback'" :text="'Возвращаем до 7% на бонусный счет'" :size="14" />
        <ButtonIcon :image="'Vector2'" :text="'1 бонус = 1 рубль'" :size="14" />
        <ButtonIcon :image="'gift'" :text="'Оплачивайте бонусами до 20% от покупки'" :size="14" />
      </div>

    </div>

    <div class="profile__block2">
      <div class="profile__block2__left">
        <div class="profile__block2__name">
          Личные данные
        </div>

        <div class="profile__block2__table">
          <div class="profile__block2__table__top">
             <div class="desc">
              <label for="name">Имя</label>
              <input id="name" type="text" placeholder="Дмитрий"/>
            </div>

            <div class='desc'>
              <label for="email">E-mail</label>
              <input id="email" type="text" placeholder="morlibae@gmail.com"/>
            </div>

            <div class='desc'>
              <label for="sname">Фамилия</label>
              <input id="sname" type="text" placeholder="Галькевич"/>
            </div>

            <div class='desc'>
              <label for="tel">Номер телефона</label>
              <input id="tel" type="text" placeholder="+7 (901) 784-65-45"/>
            </div>

          </div>

          <div class="profile__block2__table__bottom">
             <div class="desc1">
              <label for="town">Город</label>
              <input id="town" type="text" placeholder="Москва">
            </div>

            <div class='desc2'>
              <label for="town">Улица</label>
              <input id="town" type="text" placeholder="Святоозерская"/>
            </div>

            <div class='desc3'>
              <label for="home">Дом/Корпус</label>
              <input id="home" type="text" placeholder="16/1"/>
            </div>

            <div class='desc4'>
              <label for="flat">Квартира</label>
              <input id="flat" type="text" placeholder="29"/>
            </div>
          </div>

        </div>

        <div class="profile__block2__send">
          <input type="submit" value="Изменить">

        </div>

      </div>

      <div class="profile__block2__right">
          <div class="profile__block2__right-name">
              Мои заказы
          </div>

          <div class="profile__block2__right__table">
            <table class="profile__block2__right__table-g1">
              <tr>
                <th class="th1">Товар</th>
                <th>Цена</th>
                <th>Дата</th>
                <th class="td1">Статус</th>
              </tr>

              <tr class="table1__col1">
                <td class="th1" ><ButtonIcon :image="'image2'" :text="'Кускен Navy Blue'" :size="14" /></td>
                <td>16990</td>
                <td>01.05.2020</td>
                <td class="td1">Ожидается</td>
              </tr>

              <tr>
                <td class="th1" ><ButtonIcon :image="'image3'" :text="'Стелла Дуб Сонома'" :size="14" /></td>
                <td>28490</td>
                <td>01.05.2020</td>
                <td class="td1">Оплачено 50%</td>
              </tr>

              <tr>
                <td class="th1" ><ButtonIcon :image="'image4'" :text="'Вилли Pink'" :size="14" /></td>
                <td>21990</td>
                <td>01.05.2020</td>
                <td class="td1">Доставлено</td>
              </tr>

              <tr>
                <td class="th1" ><ButtonIcon :image="'image5'" :text="'Шерона Barhat Grey'" :size="14" /></td>
                <td>21990</td>
                <td>01.05.2020</td>
                <td class="td1">Отменен</td>
              </tr>
            </table>
          </div>

          <div class="profile__block2__right-view">
              Смотреть все
          </div>

      </div>

    </div>
    </div>
</template>

<script>
import ButtonIcon from "@/components/UI/ButtonIcon.vue";

export default {
  name: "ProfileView",
  components: { ButtonIcon },
};
</script>

<style lang="scss" scoped>

.profile {
  
  &__block1 {
    
     &__top {
      font-weight: 400;
      font-size: 12px;
      word-spacing: 5px;
      color: #969696;
      margin: 30px 0 40px 0;
      a {
        color: #969696;
      }
     }

     &__middle {
    justify-content: space-between;
      display: flex;
      margin: auto;
      
      
        &_left {
          font-weight: 400;
          font-size: 16px;
          margin-bottom: 30px;
        }
        
        &_right {
          display: flex;
          font-weight: 400;
          font-size: 12px;
          gap: 20px;
          .color1 {
            color: #245462;
          }
        }
     }
     &__low {
      display: flex;
      justify-content: center;
      margin-bottom: 42px;
      padding: 20px 0 20px;
      background: #F8F8F8;
      gap: 58px;
      align-content: center;
     }
  }

  &__block2 {
    display: flex;
    justify-content: space-between;

    &__left {
      padding-bottom:250px ;
      position: relative;
    }

    &__send input{
      background: #245462;
      width: 101px;
      color: white;
      border: none;
      padding: 12px 20px 13px 20px;
      outline: none;
      text-align: center;
      margin-top: 20px;
      position: absolute;
      right: 110px;
      &:hover {
        cursor: pointer;
      }

    }

    &__name {
      font-weight: 400;
      font-size: 16px;
      margin-bottom: 30px;
      }

    &__table {
        &__top {
          display: flex;
          column-gap: 10px;
          flex-wrap: wrap;
          max-width: 457px;
          row-gap: 10px;
          padding-right: 98px;


                  label {
              display: block;
                font-weight: 400;
                font-size: 12px;
                color: #969696;
            }

            input {
              width: 207px;
                  border: none;
                  background: #fcfcfc;
                  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
                  padding: 14px 0 14px 7px;
                  outline: none;
                  font-family: inherit;
    }
        }
       
        &__bottom {
      display: flex;
          column-gap: 10px;
          flex-wrap: wrap;
          max-width: 457px;
          row-gap: 10px;

          .desc1 {
              label {
              display: block;
                font-weight: 400;
                font-size: 12px;
                color: #969696;
            }

            input {
              width: 207px;
                  border: none;
                  background: #fcfcfc;
                  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
                  padding: 14px 0 14px 7px;
                  outline: none;
                  font-family: inherit;
    }
            }

            .desc2 {
              label {
              display: block;
                font-weight: 400;
                font-size: 12px;
                color: #969696;
            }

            input {
              width: 433px;
                  border: none;
                  background: #fcfcfc;
                  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
                  padding: 14px 0 14px 7px;
                  outline: none;
                  font-family: inherit;

                  
    }
            }
              .desc3 {
              label {
              display: block;
                font-weight: 400;
                font-size: 12px;
                color: #969696;
            }

            input {
              width: 117px;
                  border: none;
                  background: #fcfcfc;
                  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
                  padding: 14px 0 14px 7px;
                  outline: none;
                  font-family: inherit;

                  
    }
            }

             }
              .desc4 {
              label {
              display: block;
                font-weight: 400;
                font-size: 12px;
                color: #969696;
            }

            input {
              width: 80px;
                  border: none;
                  background: #fcfcfc;
                  box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.07);
                  padding: 14px 0 14px 7px;
                  outline: none;
                  font-family: inherit;


    }
            }
    }
    &__right {

      &-view {
          color: #245462;
          font-weight: 400;
          font-size: 12px;
          text-align: right;
          padding-top: 20px;
      }
      
      &-name {
        font-weight: 400;
        font-size: 16px;
        margin-bottom: 41px;
      }
      &__table {
        &-g1 {
          border-collapse: separate;
          background: rgb(239, 239, 239);
        }

        .th1 {
          padding-right: 150px;
          text-align: left;
        }
        .td1 {
          max-width: 60px;
          align-content: center;
        }
      } 
      th, td {
        padding: 15px;
        background: white;
        font-weight: 400;
        font-size: 12px;
        color: #686868;
      }
    }

    }
  }


</style>
