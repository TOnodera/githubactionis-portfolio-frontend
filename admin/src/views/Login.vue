<template>
  <div>
    <Dialog v-model:visible="display" :modal="true" :closable="false">
      <template #header>ログインして下さい。</template>

      <div class="p-mb-4">
        <span class="p-float-label">
          <InputText id="username" type="text" v-model="value" />
          <label for="username">ユーザー名</label>
        </span>
      </div>

      <div class="p-mb-2">
        <span class="p-float-label">
          <InputText id="password" type="text" v-model="value" />
          <label for="password">パスワード</label>
        </span>
      </div>

      <template #footer>
        <div class="p-text-left">
          <Button icon="pi pi-check" label="ログイン" />
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
export default defineComponent({
  components: {
    Button,
    Dialog,
    InputText,
  },
  data() {
    return {
      display: true,
    };
  },
});
</script>
