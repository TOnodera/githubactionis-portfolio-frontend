<template>
  <div>
    <Toolbar title="Admin" @menu-button-click="onMenuButtonClick" />
    <main>
      <slot name="main"></slot>
    </main>
    <Sidebar v-model:visible="sidebarIsVisible" />
    <Bottom />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Toolbar from "./Toolbar.vue";
import Bottom from "./Bottom.vue";
import Sidebar from "primevue/sidebar";
export default defineComponent({
  components: {
    Toolbar,
    Bottom,
    Sidebar,
  },
  data() {
    return {
      sidebarIsVisible: false,
    };
  },
  methods: {
    onMenuButtonClick() {
      this.sidebarIsVisible = !this.sidebarIsVisible;
    },
  },
});
</script>

<style lang="scss" scoped>
main {
  min-height: 100vh;
  padding: 50px;
}
</style>
