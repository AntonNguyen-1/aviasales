import { TicketActionType } from "./ticket.action-types";
import { Ticket } from "./types/types";

export function addItems(items: Ticket[]) {
  return {
    type: TicketActionType.ADD_ITEMS,
    payload: items,
  };
}
