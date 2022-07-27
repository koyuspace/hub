document.getElementById("avatar").setAttribute("src", localStorage.getItem("avatar"));
document.querySelector("#logout").addEventListener("click", (e) => {
    document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });
    window.setTimeout(function() {
        localStorage.clear();
        window.location.href = '/';
    }, 200);
    e.preventDefault();
});