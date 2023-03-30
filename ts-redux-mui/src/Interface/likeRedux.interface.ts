interface LikeState {
  likeArr: {}[];
}

interface Action {
  type: string;
  payload: object;
}


export type { LikeState, Action }