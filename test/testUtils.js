export const findByTestArr =(wrapper,val)=>{
    return wrapper.find(`[data-test='${val}']`)
}
