import "../lib/jquery-3.4.1.min.js";

export function getTemplate(name) {
  return $.get(`templates/${name}.html`);
}
