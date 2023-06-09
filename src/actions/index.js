export const add = (e)=>{

return {
    type:"inc",
    pay: e
}

}

export const sub = (e)=>{
    return {
        type:"dec",
        pay: e
    }
}