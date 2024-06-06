import { DialogOptions } from "naive-ui"

export const dialogDefaultOption:DialogOptions = {
  showIcon: false,
  autoFocus: false,
  negativeButtonProps: {
    style: {
      minWidth: '80px'
    }
  }  as any,
  positiveButtonProps: {
    style: {
      minWidth: '80px'
    }
  } as any,
  contentClass:'dialog_main_content',
  titleClass:'dialog_main_header',
  class:'dialog_main',
  actionClass:'dialog_main_footer',
}
