import initial_state from "@/context/inintialState";
import reducer, { reducer_types } from "@/context/reducer";
import { DeepPartial, InitialState } from "@/data/interfaces";
import StyleProvider from "@/providers/StyleProvider";
import { ColorScheme } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import { Notifications } from "@mantine/notifications";
import { useReducer } from "react";
import { Outlet, useNavigate, useOutletContext } from "react-router-dom";

function App() {
  const [state, setState] = useReducer(reducer, initial_state);
  const [colorScheme, setUserTheme] = useLocalStorage<
    DeepPartial<ColorScheme> | undefined
  >({
    key: "theme",
    defaultValue: "light",
  });
  const nav = useNavigate();

  const dispatch = (type: string, payload: any) => setState({ type, payload });

  // Update storedStyles with new values
  const toggleTheme = () => {
    setUserTheme(colorScheme === "light" ? "dark" : "light");
  };

  const toggleDrawer = () => {
    dispatch(reducer_types.SET_LEFT_DRAWER, !state.leftDrawer)
  }

  return (
    <div className="app-wrapper">
      <StyleProvider colorScheme={colorScheme}>
        <Notifications position="top-center" zIndex={2077} autoClose={3000} />
        <Outlet context={{ ...state, dispatch, nav, toggleTheme, toggleDrawer }} />
      </StyleProvider>
    </div>
  );
}

export const useAppContext = () => useOutletContext<InitialState>();
export default App;
