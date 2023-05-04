import { ActionProps, InitialState } from "@/data/interfaces";

const reducer = (state: InitialState, action: ActionProps) => {
  const { type, payload } = action;
  switch (type) {
    case reducer_types.SET_BREADCRUMBS:
      return { ...state, breadcrumbs: payload };
    case reducer_types.SET_FILELIST:
      return { ...state, fileList: payload };
    case reducer_types.SET_FOLDERLIST:
      return { ...state, folderList: payload };
    default:
      return state;
  }
};

export default reducer;

export const reducer_types = {
  SET_BREADCRUMBS: "SET_BREADCRUMBS",
  SET_FILELIST: "SET_FILELIST",
  SET_FOLDERLIST: "SET_FOLDERLIST",
};
