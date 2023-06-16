<template>
     <div>
          <shootingWindow :titleName="'Привет'" :name="name" :date="date" :period="period" :pageCount="pageCount" :actorsState="actorsState" />
     </div>
</template>
   
<script>
import shootingWindow from '../components/shootingWindow.vue';

import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     components: {
          shootingWindow,
     },
     data() {
          return {
               titleName: 'Последние съёмки',
               name: 'Бархатные тяги',
               date: '25.05.2000',
               period: 200,
               pageCount: 4,
               actorsState: [
                    {
                         nickName: 'Егор',
                         numberHours: 2,
                         statusNotification: true,
                    },
                    {
                         nickName: 'Сергей',
                         numberHours: 0,
                         statusNotification: false,
                    },
                    {
                         nickName: 'Даниил',
                         numberHours: 0,
                         statusNotification: true,
                    },
                    {
                         nickName: 'Семён',
                         numberHours: 1,
                         statusNotification: false,
                    },
                    {
                         nickName: 'Игнат',
                         numberHours: 1,
                         statusNotification: false,
                    }
               ]
          }
     }
})
</script>
