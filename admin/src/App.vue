<template>
  <layout>
    <template #main>
      <router-view />
    </template>
  </layout>
</template>

<script>
import { defineComponent } from "vue";
import Layout from "@/components/layout/Layout.vue";
export default defineComponent({
  components: {
    layout: Layout,
  },
});
</script>
