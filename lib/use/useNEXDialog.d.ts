import { DialogOptions, DialogReactive } from 'naive-ui';
import { Ref, CSSProperties, VNode } from 'vue';

export interface IUseNEXDialogProps {
    title?: string;
    options?: any[];
    labelField?: string;
    isNo?: boolean;
    formProps?: Record<string, any>;
    interfaceFn?: ((data: any, opr: IUseNEXDialog) => void) | null;
    valueData?: any;
    isRead?: boolean;
    action?: ((data: {
        d: DialogReactive | null;
        formRef: Ref<null>;
        data: Ref<{}>;
    }) => VNode) | null;
    style?: CSSProperties;
}
export interface IUseNEXDialog {
    close: () => void;
    hideLoading: () => void;
}
export declare function useNEXDialog({ title, options, labelField, isNo, formProps, interfaceFn, valueData, isRead, action, style }: IUseNEXDialogProps, dialogProps?: DialogOptions | null): {
    show: () => void;
    close: () => void | undefined;
    hideLoading: () => boolean;
};
export interface IInitRule {
    options: any[];
    model: Ref<any>;
    labelField?: string;
    formOpr?: {
        formRef: Ref<any>;
        resetForm: () => void;
    } | {};
}
