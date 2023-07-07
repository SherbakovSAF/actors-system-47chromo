<template>
     <div>
          <div class="rounded-big-card shadow-big-card grid grid-cols-2 gap-x-5 p-4 justify-items-center">
               <button @click="currentTab = btn.component" v-for="btn in btnContent" :key="btn.id" 
               class=" bg-main-accent-color rounded-big-card w-full text-white font-medium py-1"
               :class="{'bg-main-text-color': currentTab == btn.component}"
               >
                    {{btn.title}}
               </button>
          </div>
     </div>
     <component :is="currentTab"></component>
</template>

<script>
import whyWe from '~/components/aboutPages/whyWe.vue'
import howGetUs from '~/components/aboutPages/howGetUs.vue'

export default{
     name: 'aboutPage',
     components: {
          whyWe,
          howGetUs
     },
     data(){
          return {
               currentTab: 'whyWe',
               btnContent: [
                    {id: 0, title: 'Кто мы', component: 'whyWe'},
                    {id: 1, title: 'Как к нам попасть', component: 'howGetUs'}
               ]
          }
     },
}
</script>