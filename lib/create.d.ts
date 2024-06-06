import { App } from 'vue';

export interface ComponentCreate {
    install: (app: App) => void;
}
type ComponentType = any;
interface CreateOptions {
    components?: ComponentType[];
    componentPrfix?: string;
}
export declare function create({ components, componentPrfix }?: CreateOptions): ComponentCreate;
declare const naive: ComponentCreate;
export default naive;
export declare const install: (app: App) => void;
