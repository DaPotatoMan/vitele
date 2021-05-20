<template>
   <main class="view-dashboard">
      Lorem ipsum
   </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
   name: 'Dashboard'
});
</script>

<route>
name: Dashboard
meta:
   requiresAuth: false
</route>
