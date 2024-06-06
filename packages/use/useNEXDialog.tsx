import { dialogDefaultOption } from "@/utils/dialog"
import {ref,computed,unref,type Ref,type CSSProperties, VNode} from 'vue'
import {NForm,createDiscreteApi,type DialogProviderInst,type DialogOptions, DialogReactive, FormValidationError } from 'naive-ui'

import {NEXFormItem} from '@/components/FormItem/index.ts'  

export interface IUseNEXDialogProps {
    title?: string;
    options?: any[];
    labelField?: string;
    isNo?: boolean;
    formProps?: Record<string,any>;
    interfaceFn?: ((data: any, opr: IUseNEXDialog) => void) | null;
    valueData?: any;
    isRead?: boolean;
    action?: ((data:{d:DialogReactive| null,formRef:Ref<null>,data:Ref<{}>}) => VNode) | null;
    style?: CSSProperties;
  }

export interface IUseNEXDialog {
  close: () => void;
  hideLoading: () => void;
}
export interface IUseNEXDialogOption {
  label: string
  key: string 
  way: ['']
  props: {
    [key: string]: any
  }
  text?:string,
  
}

export interface IUseNEXDialogOptions {

}



export function useNEXDialog({
    title = '',
    options = [],
    labelField = 'label',
    isNo = true,
    formProps = {},
    interfaceFn = null,
    valueData = null,
    isRead = false,
    action = null,
    style = {}
  }:IUseNEXDialogProps,
  dialogProps:  DialogOptions | null = null ) {
  const dialog:DialogProviderInst = '$dialog' in window?  window.$dialog as DialogProviderInst :  createDiscreteApi(
  ['dialog']
).dialog

const model = ref({ ...valueData })
  const readButton = computed(() =>
    isRead
      ? null
      : action
      ? {
          action: () => action && action?.({ d, formRef, data: model.value })
        }
      : {
          positiveText: '确定',
          onPositiveClick: () => {
            formRef.value?.validate((err:FormValidationError[]) => {
              if (!err) {
                d!.loading = true
                interfaceFn &&
                  interfaceFn(model.value, {
                    close: () => d!.destroy(),
                    hideLoading: () => (d!.loading = false)
                  })
              }
            })
            return false
          }
        }
  )
let d:DialogReactive| null =  null;
  
  const formRef = ref()

  console.log('触发')
  const rules = initRules({
    options,
    model,
    labelField,
    formOpr: {
      formRef,
      resetForm: () => formRef?.value?.restoreValidation()
    }
  })
  function initDialog(){
    if(d)  d.destroy();
      d = dialog.create({
      type: 'info',
      ...dialogDefaultOption,
      title,
      style: {
        width: '500px'
      },
      content: () => (
        <NForm
          ref={(v) => (formRef.value = v)}
          model={model.value}
          rules={isRead ? {} : rules.value}
          label-placement="left"
          label-width="100px"
          require-mark-placement="right-hanging"
          class={isRead ? 'dialog-content' : 'dialog-main'}
          style={{
            minHeight: isNo ? 'unset' : null
          }}
          {...formProps}
        >
          <NEXFormItem
            v-model:value={model.value}
            d={d}
            formRef={formRef}
            option={options}
            labelField={labelField}
            isRead={isRead}
            style={style}
          />
        </NForm>
      ),
      ...readButton.value,
      ...dialogProps
    }) as DialogReactive
  }
  return {
    show: () => initDialog(),
    close: () => d?.destroy(),
    hideLoading: () => (d!.loading = false)
  }
} 


export interface IInitRule {
  options: any[];
  model: Ref<any>;
  labelField?: string;
  formOpr?: {
    formRef: Ref<any>;
    resetForm: () => void;
  } | {};  
}


function initRules({ options = [], model, labelField = 'label', formOpr = {} }:IInitRule) {
  return computed(
    () =>
      options?.reduce((o, { fields, ...n }) => {
        if (Array.isArray(n?.key)) {
          n.key.forEach((v:string) => {
            o[String(v)] = {
              required: n?.required
                ? typeof n?.required === 'function'
                  ? n?.required(unref(model), { ...formOpr })
                  : n?.required
                : false,
              message: n?.message || `请选择${n?.[labelField]}`,
              fields
            }
          })
        } else {
          o[n?.key] = n?.rule
            ? typeof n?.rule !== 'function'
              ? n?.rule
              : n?.rule(unref(model), { ...formOpr })
            : fields
            ? {
                required: n?.required
                  ? typeof n?.required === 'function'
                    ? n?.required(unref(model), { ...formOpr })
                    : n?.required
                  : false,
                message: n?.message || `请${n?.options?.length ? '选择' : '输入'}${n?.[labelField]}`,
                fields
              }
            : {
                required: n?.required
                  ? typeof n?.required === 'function'
                    ? n?.required(unref(model), { ...formOpr })
                    : n?.required
                  : false,
                message: n?.message || `请${n?.options?.length ? '选择' : '输入'}${n?.[labelField]}`
              }
        }

        return o
      }, {}) || {}
  )
}
