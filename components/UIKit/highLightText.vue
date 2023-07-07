<template>
     <a :href="aLink" target="_blank" class="text-main-accent-color underline cursor-pointer">
          {{ aText }}
     </a>
</template>

<script>
     export default {
          name: 'highlightText',
          props: {
               aText: {
                    type: String,
               },
               aLink: {
                    type: String,
               }
          }
     }
</script>