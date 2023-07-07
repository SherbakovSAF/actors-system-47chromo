<template>
     <a class="bg-main-accent-color w-1/3 py-2 rounded-big-card text-white font-medium m-auto" :href="btnLink" target="_blank">
          <div class="text-center">
               {{btnText}}
          </div>
     </a>
</template>

<script>
export default {
     name: 'btnLink',
     props: {
          btnText: {
               type: String,
               required: true
          },
          btnLink: {
               type: String,
               required: true
          }
     }
}
</script>