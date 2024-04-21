<template>
  <div @click="hideDialog" v-show="show" class="wrapper fixed left-0 right-0 bottom-0 top-0 flex justify-center items-center">
    <div @click.stop class="bg-gray-800 rounded-xl p-5 shadow-lg flex flex-col text-lg max-w-7xl min-w-96 text-gray-800">
      <h1 class="text-2xl font-bold text-center dark:text-white">Subnet</h1>
      <div class="flex flex-col gap-2">
        <input-card></input-card>
        <button v-if="isOneCard" @click="addSecondCard" class="btn btn-success btn-sm text-white">+</button>
        <input-card v-else></input-card>
        <div class="flex justify-end gap-2">
          <custom-button @click="hideDialog" :is-sucsess="false">Close</custom-button>
          <custom-button @click="showChartBtn">Scan</custom-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import customButton from "@/components/UI/CustomButton.vue";
import InputCard from "@/components/UI/InputCard.vue";
export default {
  components:{InputCard, customButton},
  props:{
    show:{
      type: Boolean,
      required: true,
    },
    showChart:{
      type: Boolean,
      required: true,
    }
  },
  methods:{
    hideDialog(){
      this.$emit('update:show', false)
      this.isOneCard = true;
    },
    showChartBtn(){
      this.$emit('update:showChart', true);
      this.hideDialog()
    },
    addSecondCard(){
      this.isOneCard = false;
    }
  },
  data(){
    return{
      isOneCard: true,
    }
  }
}
</script>

<style>
.wrapper{
  background: rgba(0,0,0,0.3);
}
</style>