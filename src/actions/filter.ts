import { Action } from "redux";

export interface FilterPayload {
  filter: string;
}

export interface FilterAction extends Action<"change-filter"> {
  payload: FilterPayload;
}

export function changeFilter(filter: string): FilterAction {
  return ({
    type: "change-filter",
    payload: {
      filter,
    },
  });
} 