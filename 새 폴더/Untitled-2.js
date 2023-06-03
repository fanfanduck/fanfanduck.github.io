const pages = document.querySelector("#pages");
const page1 = document.querySelector("#about_me");
const page2 = document.querySelector("#gallery");
const page3 = document.querySelector("#schedule");


function showPage() {
  const hash = window.location.hash;

  for (const child of pages.children) {
    child.style.display = "none";
  }

  if (hash === "#about_me") {
    page1.style.display = "block";
  } else if (hash === "#gallery") {
    page2.style.display = "block";
  } else if (hash === "#schedule") {
    page3.style.display = "";
  }
}
window.addEventListener("hashchange", showPage);

showPage();