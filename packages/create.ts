
import type {App} from 'vue'
import * as components from './components'


export interface ComponentCreate {
  install:  (app: App ) => void
}

type ComponentType = any
interface CreateOptions {
  components?: ComponentType[],
  componentPrfix?: string
}
export function create({
  components =[],
  componentPrfix = 'NEX'
}: CreateOptions = {}): ComponentCreate{
  const installTargets: App[] = []

  function registry(app:App,name:string,component:ComponentType){

   const registed =  app.component(componentPrfix + name)
   if(!registed)
    app.component(componentPrfix + name,component)
  }

  function install(app: App) : void {
    if(installTargets.includes(app)) return
    installTargets.push(app)
    components.forEach(component =>{
      const {name,alias} = component
      registry(app,name,component)
      if(alias) alias.forEach((aliasName:string) =>registry(app,aliasName,component))
    })
  } 
  return {
    install
  }
}


const naive = create({
  components: Object.keys(components).map(
    (key) => components[key as keyof typeof components]
  )
})


export default naive
export const install = naive.install