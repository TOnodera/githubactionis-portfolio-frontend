<template>
  <div>
    <Breadcrumb :model="breadItems" :home="breadHome" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Breadcrumb from "primevue/breadcrumb";

export default defineComponent({
  components: {
    Breadcrumb,
  },
  data() {
    return {
      breadHome: { icon: "pi pi-home", to: "/", label: "Home" },
      breadItems: [],
    };
  },
  methods: {
    createBreadItems(path: string) {
      let to = "";
      const result: any = [];
      // /区切りで配列化、カラ文字は除外
      const paths: string[] = path.split("/").filter((value) => value);
      //返却用オブジェクト作成
      paths.forEach((path) => {
        to += `/${path}`;
        result.push({ label: path, to });
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
