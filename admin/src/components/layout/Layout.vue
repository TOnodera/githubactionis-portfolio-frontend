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
import Sidebar from "./Sidebar";
import Breadcrumb from "primevue/breadcrumb";

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
      //パンくず
      breadHome: { icon: "pi pi-home", to: "/", label: "Home" },
      breadItems: [],
    };
  },
  methods: {
    onMenuButtonClick() {
      this.sidebarIsVisible = !this.sidebarIsVisible;
    },
    createBreadItems(path: string) {
      const paths: string[] = path.split("/").filter((value) => value);
      let to: string;
      to = "";
      const result: any = [];
      paths.forEach((path) => {
        to += `/${path}`;
        result.push({
          label: path,
          to: to,
        });
      });
      return result;
    },
  },
  watch: {
    $route() {
      this.breadItems = this.createBreadItems(this.$route.path);
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
