window.onload = function init() {
    document.body.style.margin = "0px";

    var div = document.createElement("div");
    div.style.width = $(window).width;
    div.style.height = $(window).height;
    div.style.background = "red";
    div.style.color = "white";
    div.innerHTML = "Hello";

    document.body.appendChild(div);
}