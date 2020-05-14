import "../lib/jquery-3.4.1.min.js";

/**
 * Switch the selected list item, when a discussion list item is clicked.
 */
export function switchListItem() {
  // Change the active state to the clicked item
  $("a.list-group-item.active").removeClass("active");
  // Add the 'active' class to the clicked list item
  $(this).addClass("active");
  // Clear the unread notification for the clicked item
  $("span.badge", this).text("");
}
