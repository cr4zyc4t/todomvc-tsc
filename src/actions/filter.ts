import { Action } from "redux";

export interface FilterPayload {
  filter: string;
}

export interface FilterAction extends Action<string> {
  payload: FilterPayload;
}

export const CHANGE_FILTER = 'CHANGE_FILTER';
export const changeFilter = (filter: string) => ({
  type: CHANGE_FILTER,
  payload: {
    filter,
  }
});