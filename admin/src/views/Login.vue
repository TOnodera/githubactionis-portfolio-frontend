<template>
  <div>
    <Dialog v-model:visible="display" :modal="true" :closable="false">
      <Card class="p-shadow-7 p-p-4">
        <template #header>ログインして下さい。</template>
        <template #content>
          <div class="p-mb-2">
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
        </template>
        <template #footer>
          <Button icon="pi pi-check" label="ログイン" />
          <Button
            icon="pi pi-times"
            label="キャンセル"
            class="p-button-secondary"
            style="margin-left: 0.5em"
          />
        </template>
      </Card>
    </Dialog>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Dialog from "primevue/dialog";
import Card from "primevue/card";
import Button from "primevue/button";
import InputText from "primevue/inputtext";
export default defineComponent({
  components: {
    Button,
    Card,
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
