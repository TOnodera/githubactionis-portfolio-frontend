<template>
  <div class="p-grid toolbar">
    <div class="p-col-12 p-md-6">
      <div @click="onMenuButtonClick" class="title">
        <i class="pi pi-bars menu-button" v-if="isNotLoginPage" /> {{ title }}
      </div>
    </div>
    <div class="p-col-12 p-md-6">
      <!-- アイコン等なにか追加する場合は自由に使う -->
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  props: ["title"],
  methods: {
    onMenuButtonClick() {
      this.$emit("menu-button-click");
    },
  },
  computed: {
    isNotLoginPage() {
      return (
        this.$route.path !== this.$router.resolve({ name: "Login" }).fullPath
      );
    },
  },
});
</script>

<style lang="scss" scoped>
.toolbar {
  background-color: var(--primary-color);
  color: var(--text-color-accent);
  .title {
    padding: 0.5rem;
    .menu-button {
      cursor: pointer;
      margin-right: 0.2rem;
    }
  }
}
</style>
