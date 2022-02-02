function Load() {
    var i = setTimeout(showPage, 300);
}

function showPage() {
    document.getElementById("loader").style.display = "none";
    document.getElementById("main").style.display = "block";
}
