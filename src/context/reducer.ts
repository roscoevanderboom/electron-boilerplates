import { ActionProps, InitialState } from "@/data/interfaces";

const reducer = (state: InitialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case reducer_types.SET_LOADING:
      return { ...state, loading: payload };
    case reducer_types.SET_LEFT_DRAWER:
      return { ...state, leftDrawer: payload };
    default:
      return state;
  }
};

export default reducer;

export const reducer_types = {
  SET_LOADING: "SET_LOADING",
  SET_LEFT_DRAWER: "SET_LEFT_DRAWER",
};
