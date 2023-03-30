import { Reducer } from 'redux';
import { Action, LikeState } from "../Interface/likeRedux.interface";

const initialLikeState: LikeState = {
    likeArr: []
};

const likeReducer: Reducer<LikeState, Action> = (state = initialLikeState, action) => {
    switch (action.type) {
      case "ADDLIKE":
        return {likeArr: [ ...state.likeArr, action.payload] }
      default:
        return state;
    }
  };


export { likeReducer };
