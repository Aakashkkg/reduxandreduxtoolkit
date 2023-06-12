import { combineReducers } from "redux";
import Addsub from "./Addsub";
import Divmul from "./Divmul";
import Todoapp from "./Todo";

const rootreducer = combineReducers({
    Addsub,Divmul,Todoapp
})


export default rootreducer