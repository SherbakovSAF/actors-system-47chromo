<template>
     <div>
          
          <div class="rounded-big-card shadow-big-card p-6">
               <div class="flex justify-around">
                    <button class="text-main-accent-color font-medium"
                         @click="selectComponentToggle(btn)"
                    v-for="btn in btnContent" :key="btn.id">{{ btn.title }}</button>
               </div>
               
               <div v-show="componentHTML" class="relative mt-6">
                    <component :is="componentHTML"></component>
               </div>
          </div>
          <div class="shadow-big-card rounded-big-card p-8 mt-8">
               <h1 class="text-main-accent-color text-center mb-7">Наши основной состав</h1>
               <actorsCard/>
          </div>
     </div>
</template>
   
<script>
import aboutMainCast from '~/components/actorsPage/aboutMainCast.vue'
import howGetMainCast from '~/components/actorsPage/howGetMainCast.vue'
import actorsCard from '~/components/actorsPage/actorsCard.vue'

import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     name: 'actorsPage',
     components: {
          aboutMainCast,
          howGetMainCast,
          actorsCard
     },
     data() {
          return {
               componentHTML: null,
               btnContent: [
                    {id: 0, title: 'Что значит основной состав', componentHTML: 'aboutMainCast'},
                    {id: 1, title: 'Как в него попасть', componentHTML: 'howGetMainCast'}
               ]
          }
     },
     methods: {
          selectComponentToggle(btn){
               if(this.componentHTML == btn.componentHTML){
                    this.componentHTML = null
                    return
               }
               this.componentHTML = btn.componentHTML
          }
     }
     
})
</script>

<style scoped>
</style>