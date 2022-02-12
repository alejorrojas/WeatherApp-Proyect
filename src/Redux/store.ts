import { createStore, applyMiddleware, Store, AnyAction } from "redux";
import thunk from "redux-thunk";
import { ciudades } from "./Interfaces";
import rootReducer from "./reducer";

const store: Store<ciudades[], AnyAction> = createStore(rootReducer, applyMiddleware(thunk));

export default store