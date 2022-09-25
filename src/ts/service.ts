import $ from "jquery";

function getUsers() {
    const userIcon = '<svg viewBox="0 0 1920 1792" style="width:12pt;" astro-icon="fa:group"><path fill="currentColor" d="M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353 6 0 43.5 21t97.5 42.5T384 597q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5 62-81 85.5-53.5T602 960q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181T384 0t181 75 75 181zm704 384q0 159-112.5 271.5T960 1024 688.5 911.5 576 640t112.5-271.5T960 256t271.5 112.5T1344 640zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z"></path></svg>';
    $.get("https://fedi.koyu.space/api/v1/instance", (data) => {
        $("#fedicount").html(userIcon+" "+data.stats.user_count);
    });
    $.get("https://matrix-client.matrix.org/_matrix/client/unstable/im.nheko.summary/rooms/%23koyu.space%3Amozilla.org/summary?via=mozilla.org&_cacheBuster=4066431321001660", (data) => {
        $("#matrixcount").html(userIcon+" "+data.num_joined_members);
    });
    $.get("https://xmpp.koyu.space/api/connected_users_number", (data) => {
        $("#xmppcount").html(userIcon+" "+data.num_sessions);
    })
    $.get("https://api.mcsrvstat.us/2/zecircle.xyz", (data) => {
        $("#zecirclecount").html(userIcon+" "+data.players.online);
    });
    $.get("https://stream.koyu.space/api/status", (data) => {
        $("#streamcount").html(userIcon+" "+data.viewerCount);
    })
    $.post("https://events.koyu.space/graphiql", { query: "query { events { total } }" }, (data) => {
        $("#eventscount").html(userIcon+" "+data.data.events.total);
    });
    $("#mailcount").html(userIcon+" 2");
}

getUsers();
window.setInterval(getUsers, 3000);