<template>
  
  <div class="container relative h-screen">
    <asideBar />
    <shootingWindow :titleName="''" :name="name" :date="date" :period="period" :pageCount="pageCount" :actorsState="actorsState" />
  </div>
</template>

<script>
import shootingWindow from './components/shootingWindow.vue';
import asideBar from './components/asideBar.vue';

import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
  components: {
    shootingWindow,
    asideBar
  },
  data(){
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
<style scoped>
.container{
  max-width: 750px;
  margin: 0 auto;
}
</style>