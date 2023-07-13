<template>
     <div><button @click="ggg">
          Нажать
     </button></div>
</template>

<script>
export default defineNuxtComponent({
     name: 'faq',
     methods: {
          ggg(){
               let k = Date.parse('2019-8-19')
               console.log(k)
          }
     }
})

</script>