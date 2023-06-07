<template>
  <div class="container">
    <shootingWindow :titleName="titleName" :name="name" :date="date" :period="period" :pageCount="pageCount" :actorsState="actorsState" />
  </div>
</template>

<script>
import shootingWindow from './components/shootingWindow.vue';

import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
  components: {
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