<template>
  <div>
    <Dialog v-model:visible="display" :modal="true" :closable="false">
      <template #header>ログインして下さい。</template>

      <div class="p-mb-4 p-mt-4">
        <span class="p-float-label">
          <InputText
            id="email"
            type="text"
            v-model="email"
            :class="{ 'p-invalid': usernameIsInvalid }"
          />
          <label for="email">email</label>
        </span>
        <div v-if="usernameIsInvalid">
          <small class="p-error">emailを入力して下さい。</small>
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
        <div v-if="credentialError">
          <small class="p-error">{{ errorMessage }}</small>
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
import { LOGIN_SUCCESS } from "@/config/const";
import router from "@/router";
import { isEmail } from "@/helper/validation";

export default defineComponent({
  components: {
    Button,
    Dialog,
    InputText,
  },
  data() {
    return {
      display: true,
      email: "",
      password: "",
      usernameIsInvalid: false,
      passwordIsInvalid: false,
      credentialError: false,
      errorMessage: "",
    };
  },
  methods: {
    async send() {
      // 入力チェック
      this.usernameIsInvalid = !this.email || !isEmail(this.email);
      this.passwordIsInvalid = !this.password;
      if (this.usernameIsInvalid || this.passwordIsInvalid) {
        return;
      }

      // ログインに成功したらダッシュボードに遷移
      const credentials = { email: this.email, password: this.password };
      const response = await http.post("/api/login", credentials);
      if (response.data.success === LOGIN_SUCCESS) {
        router.push({ name: "Dashboard" });
        return;
      }

      // 失敗した場合はcredentialErrorをtrueにしてエラーメッセージを表示
      this.credentialError = true;
      this.errorMessage = response.data.message;
    },
  },
  async mounted() {
    await http.get("/api/roles");
  },
});
</script>
