<template>
     <div>
          <figcaption class="text-white inline px-2 py-1 rounded-notificationStatus" 
          :class="renderClassActorsStatus"
          :title="renderTitleActorsStatus">
          {{ actorsStatus.statusNotification ? '✔' : '✖' }}
          </figcaption>
     </div>
</template>
<script>
import { defineNuxtComponent } from 'nuxt/app';
export default defineNuxtComponent({
     name: 'notificationStatus',

     props: {
          actorsStatus: {
               type: Object,
               required: false,
               default: {
                    numberHours: 0,
                    statusNotification: false
               }
          }
     },
     computed: {
          renderClassActorsStatus() {
               if (this.actorsStatus.numberHours > 0 && this.actorsStatus.statusNotification) {
                    return 'bg-notificationStatus-CameAndNotified'
               }
               if (this.actorsStatus.numberHours < 1 && this.actorsStatus.statusNotification) {
                    return 'bg-notificationStatus-notCameAndNotified'
               }
               if (this.actorsStatus.numberHours > 0 && !this.actorsStatus.statusNotification) {
                    return 'bg-notificationStatus-CameAndNotNotified'
               }

               return 'bg-notificationStatus-notCameAndNotNotified'
          },
          renderTitleActorsStatus() {
               if (this.actorsStatus.numberHours > 0 && this.actorsStatus.statusNotification) {
                    return 'Человек был на съёмках и оповестил, что придёт'
               }
               if (this.actorsStatus.numberHours < 1 && this.actorsStatus.statusNotification) {
                    return 'Человек оповестил что придёт, но не пришёл'
               }
               if (this.actorsStatus.numberHours > 0 && !this.actorsStatus.statusNotification) {
                    return 'Человек пришёл, но не оповестил об этом'
               }
               return 'Человек оповестил, что не придёт и не пришёл'
          }
     }

})

</script>