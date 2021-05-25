import { StopsFilterActionType } from "./stopsFilter.action-types";

type StopsFilterAction = {
  type: StopsFilterActionType;
  payload: number[];
};

const defaultState = {
  selectedStops: [0, 1, 2, 3],
};

export function stopsFilterReducer(
  state = defaultState,
  action: StopsFilterAction
) {
  switch (action.type) {
    case StopsFilterActionType.UPDATE_SELECTED_STOPS: {
      return { ...state, selectedStops: action.payload };
    }
    default: {
      return state;
    }
  }
}
