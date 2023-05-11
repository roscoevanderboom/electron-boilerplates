import { InitialState } from "@/data/interfaces";

const initial_state: InitialState = {
  loading: false,
  leftDrawer: false,
  nav: () => null,
  dispatch: (_te: string, _p: any) => null,
  toggleTheme: () => null,
  toggleDrawer: () => null,
};

export default initial_state;
