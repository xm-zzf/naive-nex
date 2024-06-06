import {defineComponent,SlotsType } from "vue";

import '../style/Main.less'
export default defineComponent((_,{slots})=>{

  return () => (
     <div class="main_wrap w-full h-full flex flex-col">
        <div class="">{slots.head()}</div>
        <div class="flex-1">
          {slots.default()}
        </div>
        <div class="">
          {slots.footer()}
        </div>
      </div>
  )
},{
  name: "Main",
  slots: Object as SlotsType<{
    default: () => Node,
    footer: () => Node,
    head: () => Node
  }>,
  
  
})