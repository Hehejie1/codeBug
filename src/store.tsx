import { createStore } from "redux";
import rootReduer from "./reducers"

let store = createStore(rootReduer);

export default store;