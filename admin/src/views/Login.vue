<template>
  <div>
    <Dialog v-model:visible="display" :modal="true" :closable="false">
      <template #header>ログインして下さい。</template>

      <div class="p-mb-4 p-mt-4">
        <span class="p-float-label">
          <InputText
            id="username"
            type="text"
            v-model="username"
            :class="{ 'p-invalid': usernameIsInvalid }"
          />
          <label for="username">ユーザー名</label>
        </span>
        <div v-if="usernameIsInvalid">
          <small class="p-error">ユーザー名を入力して下さい。</small>
        </div>
      </div>

      <div class="p-mb-2">
        <span class="p-float-label">
          <InputText
            id="password"
            type="text"
            v-model="password"
            :class="{ 'p-invalid': passwordIsInvalid }"
          />
          <label for="password">パスワード</label>
        </span>
        <div v-if="passwordIsInvalid">
          <small class="p-error">パスワードを入力して下さい。</small>
        </div>
      </div>

      <template #footer>
        <div class="p-text-left">
          <Button icon="pi pi-check" label="ログイン" @click="send" />
        </div>
      </template>
    </Dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Dialog from "primevue/dialog";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
import store from "@/store";
import http from "@/helper/http";

export default defineComponent({
  components: {
    Button,
    Dialog,
    InputText,
  },
  data() {
    return {
      display: true,
      username: "",
      password: "",
      usernameIsInvalid: false,
      passwordIsInvalid: false,
    };
  },
  methods: {
    async send() {
      this.usernameIsInvalid = !this.username ? true : false;
      this.passwordIsInvalid = !this.password ? true : false;
      try {
        const response = await http.post("/api/login");
      } catch (e) {
        console.log("exp", e);
      }
    },
  },
  async mounted() {
    await http.get("/api/roles");
  },
});
</script>
