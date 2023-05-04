import WindowBar from "@/components/windowBar";
import initial_state from "@/context/initialState";
import reducer, { reducer_types } from "@/context/reducer";
import { preload } from "@/data/constants";
import { InitialState } from "@/data/interfaces";
import { useReducer } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

function App() {
  const [state, setState] = useReducer(reducer, initial_state);
  const nav = useNavigate();

  const dispatch = (type: string, payload: any) => setState({ type, payload });

  function handleNavigateHome() {
    dispatch(reducer_types.SET_FILELIST, []);
    dispatch(reducer_types.SET_FOLDERLIST, []);
    dispatch(reducer_types.SET_BREADCRUMBS, []);
  }

  const handleReadDir = async (b: string[]) => {
    let newPath = await preload.joinPath(b);
    let res = await preload.readDirectory(newPath);
    if (res) {
      dispatch(reducer_types.SET_FILELIST, res.files);
      dispatch(reducer_types.SET_FOLDERLIST, res.folders);
      dispatch(reducer_types.SET_BREADCRUMBS, b);
    }
  };

  const handleNavigateForward = async (path: string) => {
    let b = [...state.breadcrumbs, path];
    handleReadDir(b);
  };

  const handleNavigateBack = async (val: string | false) => {
    let b: string[] = [];
    if (val) {
      b = state.breadcrumbs.slice(0, state.breadcrumbs.indexOf(val) + 1);
    } else {
      b = state.breadcrumbs.slice(0, -1);
    }
    if (b.length > 0) {
      handleReadDir(b);
      return;
    }
    handleNavigateHome();
  };

  return (
    <div>
      <WindowBar />
      <Outlet
        context={{
          ...state,
          dispatch,
          nav,
          handleNavigateForward,
          handleNavigateBack,
          handleNavigateHome,
        }}
      />
    </div>
  );
}

export const useAppContext = () => useOutletContext<InitialState>();
export default App;
