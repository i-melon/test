<template>
  <div class="card bg-base-100 shadow-xl p-4 my-2">
    <h1 class="font-bold  text-white">IP - адрес</h1>
    <div class="flex flex-wrap gap-2">
      <div v-for="elem in this.ip" v-bind:key="elem.id">
        <custom-input :disabled="elem==0" :value = elem></custom-input>
      </div>

    </div>
  </div>
</template>

<script>
import CustomInput from "@/components/UI/CustomInput.vue";

export default {
  components: {CustomInput},
  data(){
    return{
      ip: [123, 89, 46, 0]
    }
  }

}
</script>

<style>

</style>