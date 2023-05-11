import { Electron } from "electron";
import { NavigateFunction } from "react-router-dom";

declare global {
  interface Window {
    electron: Electron;
  }
}

export interface ActionProps {
  payload: any;
  type: string;
}

export interface InitialState {
  loading: boolean;
  leftDrawer: boolean;
  nav: NavigateFunction;
  dispatch: Dispatch;
  toggleTheme: () => void;
  toggleDrawer: () => void;
}

export type Dispatch = (type: string, payload: any) => void;

export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Function ? T[P] : DeepPartial<T[P]>;
};

