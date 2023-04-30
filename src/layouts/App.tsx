import { useReducer } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";
import WindowBar from "src/components/WindowBar";
import initial_state from "src/context/inintialState";
import reducer from "src/context/reducer";
import { InitialState } from "src/data/interfaces";

function App() {
  const [state, setState] = useReducer(reducer, initial_state);
  const nav = useNavigate();

  const dispatch = (type: string, payload: any) => setState({ type, payload });

  return (
    <>
      <WindowBar />
      <Outlet context={{ ...state, dispatch, nav }} />
    </>
  );
}

export const useAppContext = () => useOutletContext<InitialState>();
export default App;

