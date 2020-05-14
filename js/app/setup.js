import "../lib/jquery-3.4.1.min.js";

import { removeMessage, createNewMessage } from "./messages.js";
import { changeAlignment } from "./alignment.js";
import { switchListItem } from "./dialogs.js";

export default function setup() {
  /* --- EVENTS DECLARATION --- */

  // Feature : "Remove message"
  $("#dialog").on("click", "button", removeMessage);

  // Feature : "Add new message"
  $("#send-btn").click(createNewMessage);

  // Feature : "Change message alignment"
  $("button", $("#align-btns")).click(changeAlignment);

  // Feature : "Select discussion item"
  $("a.list-group-item").click(switchListItem);
}
