<template>
  <div>
    <Toolbar title="Admin" @menu-button-click="onMenuButtonClick" />
    <main>
      <Breadcrumb :model="breadItems" :home="breadHome" class="p-mb-2" />
      <slot name="main"></slot>
    </main>
    <Sidebar :sidebarIsVisible="sidebarIsVisible" />
    <Bottom />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Toolbar from "./Toolbar.vue";
import Bottom from "./Bottom.vue";
import Sidebar from "./Sidebar.vue";
import Breadcrumb from "./Breadcrumb.vue";

export default defineComponent({
  components: {
    Toolbar,
    Bottom,
    Sidebar,
    Breadcrumb,
  },
  data() {
    return {
      //サイドバー
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
.side-bar-header {
  h2 {
    font-size: 1.2rem;
    margin-bottom: 0.2rem;
  }
  margin-bottom: 0.5rem;
}
main {
  min-height: 100vh;
  padding: 50px;
}
</style>
