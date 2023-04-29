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
  nav: NavigateFunction;
  dispatch: Dispatch;
}

export type Dispatch = (type: string, payload: any) => void;
