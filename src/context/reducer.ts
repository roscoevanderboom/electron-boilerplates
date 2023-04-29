import { ActionProps, InitialState } from "@/data/interfaces";

const reducer = (state: InitialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case reducer_types.SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
};

export default reducer;

export const reducer_types = {
  SET_LOADING: "SET_LOADING",
};
