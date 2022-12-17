$(function () {
  $(window).on("beforeunload", function () {
    return "";
  });
});

let docTitle = document.title;
window.addEventListener("blur", () => {
  document.title = "Come here please :( ";
});
window.addEventListener("focus", () => {
  document.title = docTitle;
});

function beli() {
  alert("are you really sure?");
}
