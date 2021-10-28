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

<script>
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
      //メニュー表示
      menu: [
        {
          label: "ブログ",
          icon: "pi pi-book",
          items: [
            [
              {
                label: "一覧",
                items: [{ label: "ブログ一覧" /* to: "/blogs" */ }],
              },
              {
                label: "新規作成",
                items: [{ label: "ブログ新規作成" }],
              },
            ],
          ],
        },
        {
          label: "ユーザー",
          icon: "pi pi-user",
          items: [
            [
              {
                label: "一覧",
                items: [{ label: "ユーザー一覧" /* to: "/blogs" */ }],
              },
              {
                label: "新規作成",
                items: [{ label: "ユーザー新規作成" }],
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
    createBreadItems() {
      this.breadItems = [];
    },
  },
  mounted() {
    this.createBreadItems();
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
