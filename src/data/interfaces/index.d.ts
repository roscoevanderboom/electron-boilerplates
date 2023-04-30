import { NavigateFunction } from "react-router-dom";

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
