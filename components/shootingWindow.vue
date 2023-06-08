<template>
     <div class="header">
          <h1>{{ titleName }}</h1>
     </div>
     <div>
          <hr>
          <div class="table__notation">
               <h3>Название</h3>
               <h2>{{name}}</h2>
          </div>
          <div class="table__notation">
               <h3>Дата</h3>
               <h2>{{date}}</h2>
          </div>
          <div class="table__notation">
               <h3>Период</h3>
               <h2>{{period}}</h2>
          </div>
          <div class="table__notation">
               <h3>Кол-во листов</h3>
               <h2>{{pageCount}}</h2>
          </div>
          <div class="table__notation">
               <h3>Минут на лист</h3>
               <h2>{{period / pageCount}}</h2>
          </div>
          <hr>
     </div>
     <div>
          <p>Кто был на съёмках</p>
          <div v-for="actor in actorsState">
               <p class="">{{ actor.nickName }}</p>
               <p>{{ actor.numberHours }}</p>
               <p>{{ actor.statusNotification }}</p> 
               <!-- Выше будет computed -->
          </div>
     </div>
</template>

<script>
import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     name: 'shootingWindow',
     props: {
          titleName: {
               type: String,
               required: false,
               default: 'Название съёмок'
          },
          name: {
               type: String,
               required: true,
               default: 'Название съёмок'
          },
          date: {
               type: String,
               required: true,
               default: '00.00.0000'
          },
          period: {
               type: Number,
               required: true,
               default: 200 // minutes
          },
          pageCount: {
               type: Number,
               required: true,
               default: 4
          },
          actorsState: {
               type: Array,
               required: false, 
               default: [
                    {
                         nickName: 'Егор',
                         numberHours: 5,
                         statusNotification: true,
                    },
                    {
                         nickName: 'Сергей',
                         numberHours: 0,
                         statusNotification: false,
                    }
          ]
          }
     }
     })
</script>

<style scoped>
</style>