import $ from "jquery";

function getPeople() {
    const isMobile = window.matchMedia("only screen and (max-width: 800px)").matches;
    if (!isMobile) {
        $.get("https://fedi.koyu.space/api/v1/timelines/tag/koyuwallpaper?only_media=true", (data) => {
            let currentPic;
            let hasPic = false;
            data.forEach(e => {
                if (e.media_attachments[0].type == "image" && !hasPic) {
                    currentPic = e.media_attachments[0].url;
                    hasPic = true;
                }
            });
            let image = new Image();
            image.src = currentPic;
            image.onload = (() => {
                $("body").attr("style", `background: #223 url(${image.src}) no-repeat center center fixed;`);
            });
        });
    } else {
        $("body").removeAttr("style");
    }
}

getPeople();

window.setInterval(getPeople, 1000);