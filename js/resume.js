/**
 * Focus on what the client cares about most, implied by the location hash.
 */
function changeFocus() {
  var discipline = location.hash.substring(1);
  document.body.className = (discipline.length > 0) ? 'focus-on-' + discipline : '';
}

window.onhashchange = changeFocus;
window.onload = changeFocus;
