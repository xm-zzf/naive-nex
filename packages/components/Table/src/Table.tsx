import { defineComponent, watch, ref } from "vue";
import type { PropType } from 'vue'
import { useRoute } from 'vue-router'
import { NDataTable, NEmpty} from 'naive-ui'
import dayjs from 'dayjs'
import type {DataTableColumn ,PaginationProps} from 'naive-ui'
import { isJson } from '@/utils/tool'
import { ellipsis } from '@/utils/table'


export default defineComponent((props,{})=>{
  console.log(useRoute);
  
const route = {fullPath:''} || useRoute()
    const self_columns = ref<DataTableColumn[]>([])

    function self_summary(pageData: any) {
      if (!props.summaryColumns) return
      return [props.selectColumns, ...props.columns, props.oprColumns]?.reduce(
        (o, n) => {
          if (n?.key)
            o[n.key] = props.summaryColumns?.(pageData)?.[n.key] || { value: null }
          return o
        },
        {}
      )
    }

    const FilterKey = 'filter_key'

    // function setHeadFilter(val = {}) {
    //   window.localStorage.setItem(FilterKey, JSON.stringify(val))
    // }

    function getHeadFilter() {
      const str = window.localStorage.getItem(FilterKey)
      return isJson(str as string) ? JSON.parse(str as string) : {}
    }

    const getFilterAll = ref(getHeadFilter())
    const headDefault = ref([])

    const scrollX = ref(0)


    watch(
      () => props.columns,
      () => {
        init()
      },
      {
        immediate: true
      }
    )

    watch(
      () => props.oprColumns,
      (v) => {
        console.log('oprColumns', v)
      }
    )

    function init() {
      headDefault.value =
        getFilterAll.value?.[route?.fullPath] ||
        props.columns?.map((v:any, i:number) => v?.key  || dayjs().valueOf() + i)
      const arr = props.isFilter
        ? props.columns.filter((item:any) => headDefault.value?.includes(item?.key as never))
        : [...props.columns]
      if (props.selectColumns)
        arr.unshift({ key: 'selectKey', ...props.selectColumns })
      if (props.oprColumns) arr.push(props.oprColumns)
      let scrollNum = 0
      self_columns.value = arr.map((obj:any) => {
        const v :any  = {
          align: 'center',
          width: 120,
          ...obj,
          ellipsis: typeof obj?.ellipsis === 'boolean' && !obj?.ellipsis
            ? obj?.ellipsis
            : typeof obj?.ellipsis === 'object'
              ? {
                ...ellipsis,
                ...obj?.ellipsis
              }
              : { 
                ...ellipsis
              },
          'ellipsis-component': 'ellipsis' || 'performant-ellipsis'
        }
        scrollNum += v?.width
          ? parseInt(v?.width)
          : null || (v?.title?.length||0) * v.length + 30 || 0
        return v
      }) as any
      scrollX.value = scrollNum
      console.log('计算')
    }

     // function filterButton() {
    //   return (
    //     <NButton type="info" onClick={() => filterHandle()}>
    //       {{
    //         default: () => '筛选字段',
    //         icon: () => <Funnel />
    //       }}
    //     </NButton>
    //   )
    // }

    // function filterHandle() {
    //   const f = $dialog.info({
    //     ...dialogDefaultOption,
    //     closable: false,

    //     style: {
    //       width: '500px'
    //     },
    //     content: () => (
    //       <FilterDialog
    //         filterItem={props.columns}
    //         selectItem={headDefault.value}
    //         defaultItem={props.defaultColumns}
    //         onSubmit={(v) => {
    //           getFilterAll.value[route.fullPath] = v
    //           setHeadFilter(getFilterAll.value as {})
    //           init()
    //           f.destroy()
    //         }}
    //       />
    //     )
    //   })
    // }

  return () => (
      <>
        <NDataTable
          {...(props)}
          data={props.data}
          columns={self_columns.value}
          scroll-x="scrollX"
          summary={props.summaryColumns ? self_summary : undefined}
          summary-placement="bottom"
          pagination={props.pagination}
          row-props={() => ({ style: { height: '60px' } })}
          flex-height
          remote
          virtual-scroll={props.data.length > 1000}
          style="flex: 1"
        >
          {{
            empty: () => (
              <slot name="empty">
                <NEmpty>{props.emptyText}</NEmpty>
              </slot>
            )
          }}
        </NDataTable>

      </>
    )
},{
  name: 'Table',
  props: {
    columns: {
      type: Array as PropType<DataTableColumn[]>,
      default: () => [
        {
          title:'序号',
          key:'id'
        },
        {
          title:'标题',
          key: 'title'
        },
        {
          title:'描述',
          key: 'desc'
        },
        {
          title: '内容',
          key:'content'
        }
      ]
    },
    data: {
      type: Array as PropType<any>,
      default: () => []
    },
    summaryColumns: {
      type: [null, Function] as PropType<any>,
      default: () => null
    },
    oprColumns: {
      type: [Object, null] as PropType<any>,
      default: () => null
    },
    defaultColumns: {
      type: [Object, null] as PropType<any>,
      default: () => null
    },
    selectColumns: {
      type: [Object, null] as PropType<any>,
      default: () => null
    },
    emptyText: {
      type: String,
      default: () => '没有数据'
    },
    emptyIcon: {
      type: String,
      default: () => ''
    },
    isFilter: {
      type: Boolean,
      default: () => false
    },
    pagination: {
      type: [] as PropType<PaginationProps>,
      default: undefined
    },
  },
})