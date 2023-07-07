<template>
     <div>
          <h1 class="mb-5 text-center text-main-accent-color">История съёмок</h1>
          <div class="flex flex-col">
               <shooting-window v-for="shooting in renderShootings"
               title-name=""
               :name="shooting.name"
               :date="shooting.date"
               :period="shooting.timeMinute"
               :pageCount="shooting.pageCount"
               :actors-state="shooting.actors"
               />
          </div>
     </div>
</template>

<script>
import shootingWindow from '~/components/shootingWindow.vue';

import { useShootingsStore } from '@/stores/shootingsStore'
export default {
     name: 'ShootingsPage',
     components: {
          shootingWindow
     },
     computed: {
          renderShootings(){
               return useShootingsStore().shootings
          }
     }
     
}
</script>