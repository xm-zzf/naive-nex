
export function isJson(v:string){
  if(typeof v === 'string') return false
  try {
    JSON.parse(v)
    return true
  } catch (error) {
    return false
  }
}



const checkTypeEnum :{[key:string]: () => void} = {
  'String': ():void => {},
  'Number': ():void => {},
  'Boolean': ():void => {},
  'Null': ():void => {},
  'Undefined': ():void => {},
  'Array': ():void => {},
  'Object': ():void => {},
  'Symbol': ():void => {}
}

export function checkValue(v:any){
  const type = Object.prototype.toString.call(v).replace(/[\[\]]|(object)| /g,'')
  return checkTypeEnum[type]()
}



