<template>
     <div class="rounded-big-card shadow-big-card mb-16"> 
          <div class="p-6">
               <div class="flex justify-between mb-4">
                    <div>
                         <h3 class="text-main-text-color">Следующие съёмки будут:</h3>
                         <h1 class="text-main-accent-color">18.20.2022 в 16:00</h1>
                    </div>
          
                    <div class="text-end">
                         <h3 class="text-main-text-color">Лучший актёр месяца:</h3>
                         <h1 class="text-main-accent-color">Pupel</h1>
                    </div>
               </div>
               <div v-show="listNote.length">
                    <h2 class="text-center text-main-text-color">Информация</h2>
                    <ul>
                         <li class="text-main-text-color"
                         v-for="list in listNote">
                         - {{ list }}
                         </li>
                    </ul>
               </div>
          </div>
     </div>

</template>
   
<script>
import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     name: 'MainInfoBanner',
     data() {
          return {
               listNote: ["Установить сборку", 'Проверить ГТА', 'Делайте скрины']
          }
     }
})
</script>