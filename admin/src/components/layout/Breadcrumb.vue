<template>
  <div>
    <Breadcrumb :model="breadItems" :home="breadHome" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "primevue/breadcrumb";
import { BreadcrumbType } from "@/types";

export default defineComponent({
  components: {
    Breadcrumb,
  },
  data() {
    return {
      breadHome: { icon: "pi pi-home", to: "/", label: "Home" },
      breadItems: [] as BreadcrumbType[],
    };
  },
  methods: {
    createBreadItemsFromRouterPath(path: string): BreadcrumbType[] {
      const result: BreadcrumbType[] = [];
      // /区切りで配列化、カラ文字は除外
      const paths: string[] = path.split("/").filter((value) => value);
      //返却用オブジェクト作成
      paths.forEach((path) => {
        const last = result.slice(-1)[0] || { to: "" };
        result.push({ label: path, to: `${last.to}/${path}` });
      });

      return result;
    },
  },
  watch: {
    $route() {
      this.breadItems = this.createBreadItemsFromRouterPath(this.$route.path);
    },
  },
});
</script>
