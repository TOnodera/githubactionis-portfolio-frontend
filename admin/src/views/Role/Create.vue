<template>
  <Card>
    <template #content>
      <div class="p-grid p-jc-center">
        <div class="p-col-9 p-fluid">
          <h2 class="p-text-bold">新規登録</h2>
        </div>
        <div class="p-col-9 p-fluid">
          <p>タイトル</p>
          <InputText label="タイトル" v-model="title"></InputText>
        </div>

        <div class="p-col-9 p-fluid">
          <p>本文</p>
          <Textarea v-model="body" />
        </div>
        <div class="p-col-9 p-fluid">
          <p>画像</p>
          <InputText label="画像"></InputText>
        </div>
        <div class="p-col-9 p-fluid">
          <p>表示 <InputSwitch v-model="display" /></p>
        </div>
        <div class="p-col-9 p-text-right">
          <Button label="登録" @click="post" />
        </div>
      </div>
    </template>
  </Card>
</template>

<script>
import { defineComponent } from "vue";
import Card from "primevue/card";
import InputText from "primevue/inputtext";
import Textarea from "primevue/textarea";
import Button from "primevue/button";
import InputSwitch from "primevue/inputswitch";
import http from "@/helper/http";

export default defineComponent({
  components: {
    Card,
    InputText,
    Textarea,
    Button,
    InputSwitch,
  },
  data() {
    return {
      title: "",
      body: "",
      display: false,
    };
  },
  methods: {
    async post() {
      console.log(this.title, this.body, this.display);
      console.log(http);
      //const response = await http.post();
    },
  },
});
</script>
