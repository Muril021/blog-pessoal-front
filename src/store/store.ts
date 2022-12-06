import { createStore } from "redux";
import { clicksReducer } from "./clicks/clicksReducer";

const store = createStore(clicksReducer);

export { store };