<template>
     <article>
          <div class="flex justify-between items-center"> 
               <div class="flex items-center">
                    <div class="flex flex-col items-center justify-center">
                         <div class="text-main-text-color text-xl font-medium">6 lvl</div>
                         <div class="overflow-hidden w-24 h-24 border-2 border-main-accent-color rounded-full">
                              <img src="../../public/105.png" alt="ActorIMG">
                         </div>
                    </div>
                    <div class="ml-3">
                         <div class="font-bold text-3xl text-main-accent-color">Kenny</div>
                         <div class="text-xl text-main-text-color">250 баллов</div>
                    </div>
               </div>
               
               <div class="flex flex-col text-center text-xl text-main-text-color">В основном составе с <span class="font-bold text-main-accent-color">09.2020</span></div>
               <div>
                    Список наград <!-- Компонент -->
               </div>
          </div>
          <hr class=" border-main-accent-color border-[1px] rounded-big-card mt-4">
     </article>
</template>

<script>
import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     name: 'actorsCard',     
})
</script>