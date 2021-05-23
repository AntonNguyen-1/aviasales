import { TicketActionType } from "./ticket.action-types";
import { Ticket } from "./types/types";

type TicketAction = {
  type: TicketActionType;
  payload: Ticket[];
};

const defaultState: Ticket[] = [];

export function ticketReducer(state = defaultState, action: TicketAction) {
  switch (action.type) {
    case TicketActionType.ADD_ITEMS: {
      return state.concat(action.payload);
    }
    default: {
      return state;
    }
  }
}
