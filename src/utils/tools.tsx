



// 获取对象，所有keys集合的value
export const pick = (obj:any, keys: any[]) => {
    let r:any = {}
    keys.forEach(key => {
      r[key] = obj[key]
    })
    return r
}


// 浅克隆
export const lowClone = (obj: any) =>{
    let cloneObj = Object.create(obj);
    for(let key in obj){
        cloneObj[key] = obj[key];
    }
    return cloneObj
}


// 深克隆
export const deepClone = (obj: any) => {
    let cloneObj;
    if(null === obj || typeof obj !== 'object') return obj;
    if(obj instanceof Date){
        cloneObj = new Date(obj);
        return cloneObj;
    }
    if(obj instanceof Object){
        return lowClone(obj);
    }

}


// 防抖
export const debounce = (fn: any, delay:number = 200) => {
    let timer: any | null = null;
    return function(this: any, ...arg : any) {
        if(timer) clearTimeout(timer)
        timer = setTimeout(() => {
            fn.applay(this, arg)
        },delay)
    }
}
// 截流
export const throttle = (fn: any, delay:number = 200) => {
    let wait: boolean = false;
    return function(this: any, ...arg : any) {
        if(!wait){
            wait = true;
            setTimeout(() => {
                fn.call(this, arg)
                wait = false
            },delay)
        }
    }
}