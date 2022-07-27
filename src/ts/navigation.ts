document.getElementById("avatar").setAttribute("src", localStorage.getItem("avatar"));
document.querySelector("#logout").addEventListener("click", (e) => {
    document.cookie = "";
    window.setTimeout(function() {
        localStorage.clear();
        window.location.href = '/';
    }, 200);
    e.preventDefault();
});