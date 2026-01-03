/* ------------------------------------------- */
function toggleAccordion(contentId, iconId, headerClass) {
  const content = document.getElementById(contentId);
  const icon = document.getElementById(iconId);
  const header = document.querySelector(`.${headerClass}`);

  if (!content || !icon || !header) return;

  if (content.classList.contains("boxitemshow")) {
    content.classList.remove("boxitemshow");
    content.classList.add("boxitemshowclose");
    icon.src = "./assets/img/add.png";
  } else {
    content.classList.add("boxitemshow");
    content.classList.remove("boxitemshowclose");
    icon.src = "./assets/img/minus-square.png";
  }

  header.classList.toggle("borderbotm");
  header.classList.toggle("borderselected");
}
/* ------------------------------------------- */

function toggleSmall(el) {
  const next = el.nextElementSibling;
  if (next) {
    next.classList.toggle("d-none");
    next.classList.toggle("d-flex");
  }
}
/* ------------------------------------------- */
