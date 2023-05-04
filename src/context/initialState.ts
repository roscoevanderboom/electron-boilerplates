import { InitialState } from "@/data/interfaces";

const initial_state: InitialState = {
  breadcrumbs: [],
  fileList: [],
  folderList: [],
  nav: () => null,
  dispatch: (_type: string, _payload: any) => null,
  handleNavigateForward: (_path: string) => null,
  handleNavigateBack: (_val: string | false) => null,
  handleNavigateHome: () => null,
};

export default initial_state;
