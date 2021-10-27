<template>
  <div class="p-grid p-jc-center">
    <div class="p-col-12 p-lg-4">
      <!--最近公開されたページ-->
      <Card class="p-shadow-7">
        <template #header>
          <h2 class="p-pl-3 p-pt-3 card-title">最近公開されたページ</h2>
        </template>
        <template #content>
          <DataTable :value="latestPageData">
            <Column field="vin" header="ブロガー名"></Column>
            <Column field="year" header="タイトル"></Column>
            <Column field="color" header="投稿日"></Column>
          </DataTable>
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-lg-4">
      <!--「いいね」が多いページ -->
      <Card class="p-shadow-7">
        <template #header>
          <h2 class="p-pl-3 p-pt-3 card-title">「いいね」が多いページ</h2>
        </template>
        <template #content>
          <DataTable :value="latestPageData">
            <Column field="vin" header="Vin"></Column>
            <Column field="year" header="Year"></Column>
            <Column field="brand" header="Brand"></Column>
            <Column field="color" header="Color"></Column>
          </DataTable>
        </template>
      </Card>
    </div>
    <div class="p-col-12 p-lg-4">
      <!--投稿が多いブロガー-->
      <Card class="p-shadow-7">
        <template #header>
          <h2 class="p-pl-3 p-pt-3 card-title">投稿が多いブロガー</h2>
        </template>
        <template #content>
          <DataTable :value="latestPageData">
            <Column field="vin" header="Vin"></Column>
            <Column field="year" header="Year"></Column>
            <Column field="brand" header="Brand"></Column>
            <Column field="color" header="Color"></Column>
          </DataTable>
        </template>
      </Card>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
//import Dialog from "primevue/dialog";
//import Button from "primevue/button";
//import InputText from "primevue/inputtext";
import Card from "primevue/card";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
export default defineComponent({
  components: {
    //Button,
    //Dialog,
    //InputText,
    Card,
    DataTable,
    Column,
  },
  data() {
    return {
      display: true,
      latestPageData: [
        {
          brand: "Volkswagen",
          year: 2012222222222,
          color: "Orange",
          vin: "dsad231ff",
        },
        { brand: "Audi", year: 2011, color: "Black", vin: "gwregre345" },
        { brand: "Renault", year: 2005, color: "Gray", vin: "h354htr" },
        { brand: "BMW", year: 2003, color: "Blue", vin: "j6w54qgh" },
        { brand: "Mercedes", year: 1995, color: "Orange", vin: "hrtwy34" },
        { brand: "Volvo", year: 2005, color: "Black", vin: "jejtyj" },
        { brand: "Honda", year: 2012, color: "Yellow", vin: "g43gr" },
        { brand: "Jaguar", year: 2013, color: "Orange", vin: "greg34" },
        { brand: "Ford", year: 2000, color: "Black", vin: "h54hw5" },
        { brand: "Fiat", year: 2013, color: "Red", vin: "245t2s" },
      ],
    };
  },
});
</script>

<style lang="scss">
.card-title {
  font-size: 1.2rem;
}
</style>
