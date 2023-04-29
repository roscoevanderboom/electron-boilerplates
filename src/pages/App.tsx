import WindowBar from "@/components/windowBar";
import initial_state from "@/context/inintialState";
import reducer from "@/context/reducer";
import { InitialState } from "@/data/interfaces";
import { useReducer } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

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
