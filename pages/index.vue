<template>
     <div>
          <main-info-banner />
          <shooting-window
          :titleName="'Последние съёмки'" 
          :name="renderLastShooting.name"
          :date="renderLastShooting.date"
          :period="renderLastShooting.timeMinute"
          :pageCount="renderLastShooting.pageCount"
          :actors-state="renderLastShooting.actors"
          />
     </div>
</template>
   
<script>
import shootingWindow from '../components/shootingWindow.vue';
import mainInfoBanner from '~/components/mainInfoBanner.vue';
import { defineNuxtComponent } from 'nuxt/app';


import { useShootingsStore } from '@/stores/shootingsStore'

export default defineNuxtComponent({
     name: 'index',
     components: {
          shootingWindow,
          mainInfoBanner
     },
     computed: {
          renderLastShooting(){
               return useShootingsStore().shootings[0]
          }
     },
})
</script>
