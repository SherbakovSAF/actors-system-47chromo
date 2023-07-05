<template>
     <div>
          <shooting-window v-for="shootin in shootingsArray"
          title-name=""
          :name="shootin.name"
          :date="shootin.date"
          :period="shootin.timeMinute"
          :pageCount="shootin.pageCount"
          :actors-state="shootin.actors"
          />
     </div>
</template>

<script>
import shootingWindow from '~/components/shootingWindow.vue';

export default {
     name: 'ShootingsPage',
     components: {
          shootingWindow
     },
     data(){
          return {
               shootingsArray: []
          }
     },
     async mounted() {
          let res = await fetch('../API/state.json')
          let aa = await res.json()
          this.shootingsArray = [...aa]
          console.log(this.shootingsArray)
     }
}
</script>