import { TicketActionType } from "./ticket.action-types";
import { Ticket } from "./types/types";

export function addItems(items: Ticket[]) {
  return {
    type: TicketActionType.ADD_ITEMS,
    payload: items,
  };
}

export function updateItems(items: Ticket[]) {
  return {
    type: TicketActionType.UPDATE_ITEMS,
    payload: items,
  };
}
