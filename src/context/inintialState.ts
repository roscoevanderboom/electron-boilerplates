import { InitialState } from "@/data/interfaces";

const initial_state = {
  loading: false,
  nav: () => (null),
  dispatch: (type: string, payload: any) => null,
};

export default initial_state;
