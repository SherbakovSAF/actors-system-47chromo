<template>
     <div class="px-12 py-2 font-montserrat shadow-big-card rounded-big-card">
          <div class="header">
               <h1 class="text-center text-4xl text-main-accent-color">{{ titleName }}</h1>
          </div>
          <hr-custom class="my-2" v-if="titleName.length > 0"/>
          <div class="flex justify-between text-center">
               <article v-for="nameList in tableNotationList">
                    <h3 class="font-medium text-xs mb-1">{{ nameList.nameTable }}</h3>
                    <h2 class="font-medium text-base text-main-accent-color">{{ nameList.valueTable }}</h2>
               </article>
          </div>
          <hr-custom class="my-2"/>
          <div>
               <p class="text-center text-main-text-color text-xl font-medium">Кто был на съёмках</p>
               <div v-for="actor in actorsState" class="grid grid-cols-3 mt-1">
                    <a href="#" class=""><p class="font-medium text-lg text-main-accent-color hover:rotate-3 transition-all ease-in-out duration-300">{{ actor.nickName }}</p></a>
                    <p class="text-center text-main-text-color text-lg">{{ reCalcPointNotification(actor) }}</p>
                    <div class="text-end"><notificationStatus :actorsStatus="{numberHours: actor.numberHours, statusNotification: actor.statusNotification}"/></div>
               </div>
               <h1 v-show="!actorsState.length" class="text-center text-2xl font-bold text-main-accent-color py-3">При загрузке данных произошла ошибка</h1>
          </div> 
     </div>
</template>

<script>
import { defineNuxtComponent } from 'nuxt/app';
import hrCustom from './UIKit/hrCustom.vue';
import notificationStatus from './UIKit/notificationStatus.vue';

export default defineNuxtComponent({
     name: 'shootingWindow',
     components: {
          hrCustom,
          notificationStatus
     },
     props: {
          titleName: {
               type: String,
               required: false,
               default: '😞 Ошибка'
          },
          name: {
               type: String,
               required: true,
               default: '😞 Ошибка'
          },
          date: {
               type: String,
               required: true,
               default: '00.00.0000'
          },
          period: {
               type: Number,
               required: true,
               default: 0 // minutes
          },
          pageCount: {
               type: Number,
               required: true,
               default: 0
          },
          actorsState: {
               type: Array,
               required: false, 
               default: []
          }
     },
     data() {
          return {
               tableNotationList: [
                    {
                         nameTable: 'Название',
                         valueTable: this.name
                    },
                    {
                         nameTable: 'Дата',
                         valueTable: this.date
                    },
                    {
                         nameTable: 'Период съёмок',
                         valueTable: this.period
                    },
                    {
                         nameTable: 'Кол-во листов',
                         valueTable: this.pageCount
                    },
                    {
                         nameTable: 'Минут на лист',
                         valueTable: this.period / this.pageCount
                    },
               ]
          }
     },
     methods: {
          reCalcPointNotification(actorStats){
               if(actorStats.numberHours > 0 && actorStats.statusNotification){
                    return `+${actorStats.numberHours * 2}`
               }

               if(actorStats.numberHours < 1 && actorStats.statusNotification){
                    return `-${Math.round(this.period / 60) * 2}`
               }

               return actorStats.numberHours
          }, 
     },     
})
     
</script>