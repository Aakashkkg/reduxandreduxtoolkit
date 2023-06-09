const inital = 0
const Addsub = (state=inital,action)=>{
switch(action.type){
case "inc" : return state+action.pay
case "dec": return state-action.pay
default : return state
}
}
export default Addsub;