document.getElementById("avatar").setAttribute("src", localStorage.getItem("avatar"));
document.querySelector("#logout").addEventListener("click", (e) => {
    document.cookie = "";
    localStorage.clear();
    window.location.href = '/';
    e.preventDefault();
});