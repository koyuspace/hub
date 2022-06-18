let username = localStorage.getItem("username").replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
const emojis = JSON.parse(localStorage.getItem("emojis"));
emojis.forEach(emoji => {
    username = username.replaceAll(`:${emoji.shortcode}: `, "").replaceAll(` :${emoji.shortcode}: `, "").replaceAll(`:${emoji.shortcode}:`, "").replaceAll(` :${emoji.shortcode}:`, "");
});
username = username+"%%%";
username = username.replaceAll(" ", "").replaceAll("%%%", "");
document.getElementById("name").innerHTML = username;