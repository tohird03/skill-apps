import { createStore } from "redux";
import { likeReducer } from "./Reducer";

const LikeStore = createStore(likeReducer)

export { LikeStore }