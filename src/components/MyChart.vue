<template>
  <div v-show="show">
    <div class="flex justify-end" @click="hideChart">
      <custom-button @click="hideChart" :is-sucsess="false">Close</custom-button>
    </div>
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import customButton from "@/components/UI/CustomButton.vue";


export default {
  components:{customButton},
  methods:{
    hideChart(){
      this.$emit('update:show', false)
    }
  },
  props:{
    show: {
      type: Boolean,
      required: true,
    },
    controllers:{
      type: Array,
      required: true
    }
  },
  mounted() {

    const ctx = document.getElementById('myChart');
    Chart.register(ChartDataLabels);

      new Chart(ctx, {
      type: 'bar',
      data: {
        datasets: [{
          label: 'Added',
          data: [7, 19, 5, 12, 14, 8, 19, 2],
          // this dataset is drawn below
          order: 2,
          backgroundColor: '#5374bb'
        }, {
          label: 'Version',
          data: [2.7, 2.8, 3.1, 3.2, 3.3, 3.8, 4.2, 5.0],
          type: 'line',
          // this dataset is drawn on top
          order: 1,
          borderColor: '#7acb6e',
          borderWidth: 8,
          pointRadius: 15,
          pointBorderColor: 'rgb(255, 255, 255)',
          pointBorderWidth:2,
          pointBorderRadius: 2,
          pointStyle: 'rectRounded',
          backgroundColor: '#7acb6e',
          datalabels: {
            display: true,
            color: 'white'
          }
        }],
        labels: ['January', 'February', 'March', 'April', 'May', 'june', 'Jule', 'August']
      },
      options: {
        plugins: {
          datalabels: {
            display: false,
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            max: 20
          },
          x:{

          }
        }
      }
    });

}}
</script>

<style>


</style>