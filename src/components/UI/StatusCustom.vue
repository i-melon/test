<template>
  <div class="w-full flex justify-center">
    <div :class="{'bg-error':(value=='Error'), 'bg-success':(value=='Succeed'), 'text-white':(value!='Empty')}" class="w-fit px-3 rounded-full">
      <p v-if="(value!='Loading')">{{value}}</p>
      <div v-else class="loader">
        <div class="dot dot1"></div>
        <div class="dot dot2"></div>
        <div class="dot dot3"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    value:{
      type:String,
      required:true,
    }
  }

}
</script>

<style scoped>
.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
}

.dot {
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background-color: #cbcbcb;
  margin: 0 1px;
  animation: bounce 0.5s infinite alternate;
}

.dot3 {
  animation-delay: -0.4s;
}

.dot2 {
  animation-delay: -0.2s;
}

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-5px);
  }
}

</style>