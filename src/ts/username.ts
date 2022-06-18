window.setTimeout(() => {
    let username = localStorage.getItem("username")
    try {
        username = username.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    } catch (e) {}
    if (username === null) {
        username = window.location.href.split("?acc=")[1];
    } else {
        const emojis = JSON.parse(localStorage.getItem("emojis"));
        emojis.forEach(emoji => {
            username = username.replaceAll(`:${emoji.shortcode}: `, "").replaceAll(` :${emoji.shortcode}: `, "").replaceAll(`:${emoji.shortcode}:`, "").replaceAll(` :${emoji.shortcode}:`, "");
        });
        username = username+"%%%";
        username = username.replaceAll(" ", "").replaceAll("%%%", "");
    }
    document.getElementById("name").innerHTML = username;
}, 20);