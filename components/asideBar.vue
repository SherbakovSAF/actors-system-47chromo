<template>
     <div class="bg-main-accent-color">
          <div class="bg-white fixed top-1/2 flex items-center justify-between z-10 border-2  -translate-y-1/2 
               transition-all ease-in-out duration-200">
                         <ul class="flex flex-col justify-between h-screen ">
                              <li v-for="link in linkState">
                                   <NuxtLink :to="link.url">
                                        <div 
                                        class="text__writing inline text-main-accent-color font-medium rotate-180 p-4 
                                             transition-all ease-in-out duration-200 
                                             hover:rotate-[185deg]">
                                             {{ link.title }}
                                        </div>
                                   </NuxtLink>
                              </li>
                         </ul>     
               <!-- <svg class="w-5 cursor-pointer m-2
                    transition-all ease-in-out duration-300 " :class="{
                    'rotate-0': !isActive,
                    'rotate-180': isActive}" 
                    @click="isActive = !isActive" 
                    viewBox="0 0 9 14" fill="#A9C189">
                    <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" />
               </svg> -->
          </div>
     </div>
</template>
   
<script>
import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     name: 'AsideBar',
     data() {
          return {
               linkState: [
                    { title: 'F.A.Q', url: 'faq' },
                    { title: 'Съёмки', url: 'shootings' },
                    { title: 'Главная страница', url: '/' },
                    { title: 'Основной состав', url: 'actors' },
                    { title: 'О нас/Как к нам попасть', url: 'about' },     
               ],
               isActive: false
          }
     },
     // mounted() {
     //      console.log(this.linkState.reverse())
     // }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
     transition: all .1s ease;
}

.fade-enter-from,
.fade-leave-to {
     transform: translateX(-100%);
     opacity: 0;
     
}

.text__writing{
     writing-mode: vertical-lr;
}
</style>