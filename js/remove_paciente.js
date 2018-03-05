var table = document.querySelector("table");
var thead = document.querySelector("thead");

thead.addEventListener("dblclick", function (ev) {
    ev.stopPropagation();
})
table.addEventListener("dblclick", function (element) {
    element.target.parentNode.classList.add("fade-out");
    setTimeout(() => {
        element.target.parentNode.remove();
    }, 500);
});