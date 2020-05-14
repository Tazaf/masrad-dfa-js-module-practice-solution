import "../lib/jquery-3.4.1.min.js";

import { getTemplate } from "./templates.js";
import { getAlignmentClass } from "./alignment.js";
import { getCurrentTime } from "./utils.js";

/**
 * Removes a message from the page, if a "trash" button is clicked
 */
export function removeMessage() {
  // 'this' still represent the clicked button
  // So we can reuse the same code as before.
  $(this).closest("div.col-8").remove();
}

/**
 * Creates a new message on the page, when the "send" button is clicked
 * @param {Event} event The event that triggers the call
 */
export function createNewMessage(event) {
  // Getting the "New message" value
  const $message = $("#message");
  const msgValue = $message.val();
  if (msgValue === "") {
    $message.addClass("is-invalid");
  } else {
    getTemplate("new-message")
      .then($)
      .then(($template) => renderNewMessage($template, msgValue));
  }
  event.preventDefault();
}

function renderNewMessage($template, content) {
  const $message = $("#message");
  // Get the correct alignment
  const alignment = getAlignmentClass($message);

  // Insert the value in the tempalte
  $("div.msg-content", $template).text(content);
  $("small.text-info", $template).text(getCurrentTime());
  if (alignment) $template.addClass(alignment);

  // Add the template to the page
  $("#dialog").find("div.row").append($template);
  $message.val("");
}
