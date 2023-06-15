<template>
<<<<<<< Updated upstream
  <div class="container">
    <shootingWindow :titleName="''" :name="name" :date="date" :period="period" :pageCount="pageCount" :actorsState="actorsState" />
=======
  <div class="container relative h-screen">
    <asideBar />
    <NuxtPage />
>>>>>>> Stashed changes
  </div>
</template>

<script>
<<<<<<< Updated upstream
import shootingWindow from './components/shootingWindow.vue';
=======
import asideBar from './components/asideBar.vue';
>>>>>>> Stashed changes

import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
  components: {
<<<<<<< Updated upstream
    shootingWindow
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
          numberHours: 5,
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
=======
    asideBar
  },
  data(){
    
>>>>>>> Stashed changes
  }
})
</script>
<style scoped>
.container{
  max-width: 750px;
  margin: 0 auto;
}
</style>