import { StopsFilterActionType } from "./stopsFilter.action-types";

export function updateSelectedStopsFilters(stops: number[]) {
  return {
    type: StopsFilterActionType.UPDATE_SELECTED_STOPS,
    payload: stops,
  };
}
