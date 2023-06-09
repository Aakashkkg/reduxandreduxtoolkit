import { createStore } from "redux";
import rootreducer from "./reducer";
const Store = createStore(rootreducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
export default Store;