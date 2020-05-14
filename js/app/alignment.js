import "../lib/jquery-3.4.1.min.js";

/**
 * Change the alignment of the "New message" textarea,
 * when an alignment button is clicked
 *
 * @param {Event} event The event that triggered the call
 */
export function changeAlignment(event) {
  // Change the active state when a button is clicked
  $("button", $("#align-btns")).removeClass("active");
  $(this).addClass("active").blur();
  // React to the adequate clicked button
  if ($("i", this).hasClass("fa-align-right")) {
    $("#message").removeClass("text-left text-center").addClass("text-right");
  } else if ($("i", this).hasClass("fa-align-center")) {
    $("#message").removeClass("text-right text-left").addClass("text-center");
  } else {
    $("#message").removeClass("text-right text-center");
  }
  // Prevent the default submit behavior
  event.preventDefault();
}

/**
 * Get the alignment class name applied to the given element.
 * If it's the default alignement (left), returns null.
 *
 * @param {Object} $ele A jQuery element
 */
export function getAlignmentClass($ele) {
  if ($ele.hasClass("text-right")) {
    return "text-right";
  } else if ($ele.hasClass("text-center")) {
    return "text-center";
  } else {
    return null;
  }
}
