<script>
document.getElementById("avatar").setAttribute("src", localStorage.getItem("avatar"));
document.querySelector("#logout").addEventListener("click", (e) => {
    localStorage.clear();
    window.location.href = '/';
    e.preventDefault();
});
</script>

<template>
    <nav>
        <ul>
            <li><a href="/"><i class="fa fa-home" aria-hidden="true" /></a></li>
            <div class="right">
                <li class="except"><a href="https://koyu.space/settings/profile" target="_blank"><img id="avatar" height="36"></a></li>
                <li><a href="#" id="logout"><i class="fa fa-sign-out" aria-hidden="true" /></a></li>
            </div>
        </ul>
    </nav>
</template>