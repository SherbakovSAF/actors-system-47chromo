<template>
     <div class="absolute z-20 top-1/2 shadow-big-card h-36 w-full rounded-big-card flex items-center justify-between">
          <div>
               <ul class="flex">
                    <li v-for="link in linkState"><a :href="link.url" class="text-main-accent-color font-medium m-4">{{link.title}}</a></li>
                    
               </ul>
          </div>
          <svg class="w-6" viewBox="0 0 9 14" fill="#A9C189">
               <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" />
           </svg>
     </div>
</template>
   
<script>
import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     data(){
          return {
               linkState: [
                    {title: 'Главная страница', url: '#'},
                    {title: 'Основной состав', url: '#'},
                    {title: 'Съёмки', url: '#'},
                    {title: 'F.A.Q', url: '#'},
                    {title: 'О нас/Как к нам попасть', url: '#'},
               ]
          }
     }
})
</script>
