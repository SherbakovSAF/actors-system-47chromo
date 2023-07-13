<template>
     <div>
          <div>
               <button @click="componentHTML = btn.componentHTML"
               v-for="btn in btnContent" :key="btn.id">{{ btn.title }}</button>
          </div>
          <div v-show="componentHTML">
               <button @click="componentHTML = null">X</button>     
               <component :is="componentHTML" ></component>
          </div>
     </div>
</template>
   
<script>
import aboutMainCast from '~/components/faqPage/aboutMainCast.vue'
import howGetMainCast from '~/components/faqPage/howGetMainCast.vue'

import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     name: 'faq',
     components: {
          aboutMainCast,
          howGetMainCast
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
     
})
</script>

<style scoped>
</style>