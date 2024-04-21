<template>
  <div class="w-full">
    <table class="w-full">
      <thead>
        <tr class="border-b-[1px] border-base-300">
          <td>
            <div id="test" class="resizable flex justify-between min-w-[50px] " >
              <div class="flex gap-2 items-center">
                <input class="checkbox checkbox-success" @change="selectAll" v-model="isAllSelected" type="checkbox">
                <h1>Select all</h1>
              </div>
              <div class="resize1 flex items-center w-5 justify-end resize-x overflow-auto"><div class="hover:bg-primary w-0.5 h-[15px] bg-neutral-content self-center getPurple"></div></div>
            </div>
          </td>
          <td>
            <div class="resizable flex justify-between min-w-[100px]">
              <h1>Added</h1>
              <div class="resize1 flex items-center w-5 justify-end resize-x overflow-auto"><div class="hover:bg-primary w-0.5 h-[15px] bg-neutral-content self-center getPurple"></div></div>
            </div>
          </td>
          <td>
            <div class="resizable flex justify-between min-w-[100px]">
              <h1>IP adress</h1>
              <div class="resize1 flex items-center w-5 justify-end resize-x overflow-auto"><div class="hover:bg-primary w-0.5 h-[15px] bg-neutral-content self-center getPurple"></div></div>
            </div>
          </td>
          <td>
            <div class="resizable flex justify-between min-w-[100px]">
              <h1>MAC - adress</h1>
              <div class="resize1 flex items-center w-5 justify-end resize-x overflow-auto"><div class="hover:bg-primary w-0.5 h-[15px] bg-neutral-content self-center getPurple"></div></div>
            </div>
          </td>
          <td>
            <div class="resizable flex justify-between min-w-[100px]">
              <h1>Status</h1>
              <div class="resize1 flex items-center w-5 justify-end resize-x overflow-auto"><div class="hover:bg-primary w-0.5 h-[15px] bg-neutral-content self-center getPurple"></div></div>
            </div>
          </td>
          <td>
            <div class="flex justify-between min-w-[100px]">
              <h1>Version</h1>
            </div>
          </td>
        </tr>
      </thead>
      <tbody>
        <tr :class="{'bg-base-300':(elem.id%2==0)}" v-for="elem in controllers" v-bind:key="elem.id">
          <td><input class="checkbox" type="checkbox" v-model="elem.isChecked"></td>
          <td>{{elem.added}}</td>
          <td>{{ elem.address }}</td>
          <td>{{ elem.mac }}</td>
          <td><status-custom :value="elem.status"></status-custom></td>
          <td>{{ elem.version }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>

import StatusCustom from "@/components/UI/StatusCustom.vue";

export default {
  components: {StatusCustom},
  data(){
    return{
      isAllSelected: false,
      controllers: [
        {
          isChecked: false,
          id: 1,
          added: '2024-01-01',
          address: '192.63.1.1',
          mac: '00-B0-D0-63-C2-26',
          status: 'Error',
          version: '1.0'
        },
        {
          isChecked: false,
          id: 2,
          added: '2024-01-01',
          address: '192.63.1.1',
          mac: '00-B0-D0-63-C2-26',
          status: 'Succeed',
          version: '1.0'
        },
        {
          isChecked: false,
          id: 3,
          added: '2024-01-01',
          address: '192.63.1.1',
          mac: '00-B0-D0-63-C2-26',
          status: 'Empty',
          version: '1.0'
        },
        {
          isChecked: false,
          id: 4,
          added: '2024-01-01',
          address: '192.63.1.1',
          mac: '00-B0-D0-63-C2-26',
          status: 'Loading',
          version: '1.0'
        },
        {
          isChecked: false,
          id: 5,
          added: '2024-01-01',
          address: '192.63.1.1',
          mac: '00-B0-D0-63-C2-26',
          status: 'Error',
          version: '1.0'
        },
        {
          isChecked: false,
          id: 6,
          added: '2024-01-01',
          address: '192.63.1.1',
          mac: '00-B0-D0-63-C2-26',
          status: 'Succeed',
          version: '1.0'
        },
      ]
    }
  },
  methods:{
    selectAll(){
      let controllers = this.controllers
      if (this.isAllSelected){
        for (let i = 0; i < controllers.length; i++){
          controllers[i].isChecked = true;
        }
      } else{
        for (let i = 0; i < controllers.length; i++){
          controllers[i].isChecked = false;
        }
      }
    }
  }


}
</script >

<style>
.resizable{
  margin-right: 10px;
}
table{
  overflow: auto;
  font-size: 14px;
}
.getPurple{
  transition: all ease 0.3s;
}
.resize1:hover .getPurple{
  width: 4px;
  height: 20px;
  background: oklch(0.458 0.236 292.594);
}
td{
  padding: 12px 16px;
}
.resize1 {
  resize: both; /* Включаем возможность изменения размера по горизонтали и вертикали */
}

.resize1::-webkit-resizer {
  width: 1px; /* Устанавливаем ширину ползунка в 1 пиксель */
  height: 1px; /* Устанавливаем высоту ползунка в 1 пиксель */
  background-color: transparent; /* Делаем ползунок невидимым */
}






</style>