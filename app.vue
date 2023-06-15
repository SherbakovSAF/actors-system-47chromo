<template>
  <div class="container">
    <shootingWindow :titleName="''" :name="name" :date="date" :period="period" :pageCount="pageCount" :actorsState="actorsState" />
    <NuxtPage />
  </div>
</template>

<script>
import asideBar from './components/asideBar.vue';

import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
  components: {
    asideBar
  },
  data(){
    return {
      titleName: '',
      name: 'Бархатные тяги',
      date: '11.02.2000',
      period: 300,
      pageCount: 5,
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