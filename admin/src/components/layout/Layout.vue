<template>
  <div>
    <Toolbar title="Admin" @menu-button-click="onMenuButtonClick" />
    <main>
      <slot name="main"></slot>
    </main>
    <Sidebar v-model:visible="sidebarIsVisible">
      <MegaMenu :model="menu" orientation="vertical" />
    </Sidebar>
    <Bottom />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Toolbar from "./Toolbar.vue";
import Bottom from "./Bottom.vue";
import Sidebar from "primevue/sidebar";
import MegaMenu from "primevue/megamenu";
export default defineComponent({
  components: {
    Toolbar,
    Bottom,
    Sidebar,
    MegaMenu,
  },
  data() {
    return {
      sidebarIsVisible: false,
      menu: [
        {
          label: "Videos",
          icon: "pi pi-fw pi-video",
          items: [
            [
              {
                label: "Video 1",
                items: [{ label: "Video 1.1" }, { label: "Video 1.2" }],
              },
              {
                label: "Video 2",
                items: [{ label: "Video 2.1" }, { label: "Video 2.2" }],
              },
            ],
            [
              {
                label: "Video 3",
                items: [{ label: "Video 3.1" }, { label: "Video 3.2" }],
              },
              {
                label: "Video 4",
                items: [{ label: "Video 4.1" }, { label: "Video 4.2" }],
              },
            ],
          ],
        },
      ],
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
