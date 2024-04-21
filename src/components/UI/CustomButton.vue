<template>
  <button :class="{'btn-success':isSucsess, 'btn-error':!isSucsess}" class="btn  text-white my-4"><slot></slot></button>
</template>

<script>
export default {
  props:{
    isSucsess:{
      type: Boolean,
      default: true,
    }
  }

}
</script>

<style lang="scss" scoped>

</style>