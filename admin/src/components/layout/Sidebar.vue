<template>
  <Sidebar v-model:visible="visible">
    <div class="side-bar-header">
      <h2>メニュー</h2>
      <hr />
    </div>
    <MegaMenu :model="menu" orientation="vertical" />
  </Sidebar>
</template>
<script>
import { defineComponent } from "vue";
import Sidebar from "primevue/sidebar";
import MegaMenu from "primevue/megamenu";
export default defineComponent({
  components: {
    Sidebar,
    MegaMenu,
  },
  props: {
    sidebarIsVisible: {
      type: Boolean,
      required: true,
    },
  },
  watch: {
    sidebarIsVisible(newValue) {
      this.visible = newValue;
    },
  },
  data() {
    return {
      visible: this.sidebarIsVisible,
      menu: [
        {
          label: "ブログ",
          icon: "pi pi-book",
          items: [
            [
              {
                label: "一覧",
                items: [{ label: "ブログ一覧", to: "/blogs" }],
              },
              {
                label: "新規作成",
                items: [{ label: "ブログ新規作成", to: "/blogs/create" }],
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
                items: [{ label: "ユーザー一覧", to: "/users" }],
              },
              {
                label: "新規作成",
                items: [{ label: "ユーザー新規作成", to: "/users/create" }],
              },
            ],
          ],
        },
        {
          label: "ロール",
          icon: "pi pi-user",
          items: [
            [
              {
                label: "一覧",
                items: [{ label: "ロール一覧", to: "/roles" }],
              },
              {
                label: "新規作成",
                items: [{ label: "ロール新規作成", to: "/roles/create" }],
              },
            ],
          ],
        },
      ],
    };
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
</style>
