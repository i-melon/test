<template>
  <custom-modal v-model:show="isModal" v-model:show-chart="isChart"/>
  <div class="mx-5 md:mx-10">
    <h1 class="text-3xl text-center font-bold my-2">Controllers</h1>
    <div class="flex justify-end">
      <custom-button @click="showModal">Scan</custom-button>
    </div>
    <resizable-table :controllers="controllers"/>
    <MyChart class="mt-10" v-model:show="isChart" v-model:controllers="controllers"/>
  </div>
</template>

<script>
import CustomModal from "@/components/CustomModal.vue";
import CustomButton from "@/components/UI/CustomButton.vue";
import MyChart from "@/components/MyChart.vue";
import ResizableTable from "@/components/ResizableTable.vue";

export default {
  components: {ResizableTable, MyChart, CustomButton, CustomModal},
  data() {
    return {
      isModal: false,
      isChart: false,

    }
  },
  methods:{
    showModal(){
      this.isModal = true;
    },
    hideModal(){
      this.isModal = false;
    }
  }
}
</script>

<style>
  @import "style.css";
  @import "output.css";
</style>
