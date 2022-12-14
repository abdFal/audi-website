$(function () {
  $(window).on("beforeunload", function () {
    return "";
  });
});

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Sini dong :( ";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

function beli() {
  alert("emang cukup uangnya?");
}
