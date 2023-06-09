<template>
     <hr :style="{'background-color': color}">
</template>

<script>
import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     name: 'hrCustom',
     props: {
          color: {
               type: String,
               required: false,
               default: '#A9C189'
          }
     }
})
</script>

<style scoped>
hr {
     height: 2px;
     border: none;
}
</style>