import { defineComponent,ref,watch} from "vue";
import { NModal,NIcon } from "naive-ui";
import { Close } from "@vicons/ionicons5";
import '../style/Dialog.less'




export default defineComponent((props:{show:boolean,options?: any[]},{slots,emit,expose})=>{
    const self_show=ref(props.show)
    watch(()=>props.show,(v)=> {
      self_show.value = v
      init()
    })
    watch(()=>self_show.value,(v)=> emit('update:show',v))
    // const self_model = ref({})
    // const self_options = ref([])
    function init(){
        
    }
    

    function close(){
      self_show.value=false
    }

    expose({
      close,
      init
    } as {
      close: () => void,
      init: () => void
    })
  return () => 
    (<>
        <NModal v-model:show={self_show.value} display-directive="show">
          <div class="dialog_main">
            <div class="dialog_main_header">
              <div>{'未定义'}</div>
              <div class="dialog_main_close" onClick={close}>
                <NIcon>
                  <Close/>
                </NIcon>
              </div>
            </div>
            <div class="dialog_main_content">
              {{
                default: slots.default
              }}
            </div>
            <div class="dialog_main_footer"></div>
          </div>
        </NModal>
      </>)
},{
  name:'Dialog',
  emits:['update:show'],
  
  props:{
    show:{
      type:Boolean,
      default: () => false
    },
    options:{
      type: Array,
      default: () =>  [],
    },

    
  } 
})

