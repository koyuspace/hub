import $ from "jquery";

function getUsers() {
    const userIcon = '<svg viewBox="0 0 1920 1792" style="width:12pt;" astro-icon="fa:group"><path fill="currentColor" d="M593 896q-162 5-265 128H194q-82 0-138-40.5T0 865q0-353 124-353 6 0 43.5 21t97.5 42.5T384 597q67 0 133-23-5 37-5 66 0 139 81 256zm1071 637q0 120-73 189.5t-194 69.5H523q-121 0-194-69.5T256 1533q0-53 3.5-103.5t14-109T300 1212t43-97.5 62-81 85.5-53.5T602 960q10 0 43 21.5t73 48 107 48 135 21.5 135-21.5 107-48 73-48 43-21.5q61 0 111.5 20t85.5 53.5 62 81 43 97.5 26.5 108.5 14 109 3.5 103.5zM640 256q0 106-75 181t-181 75-181-75-75-181 75-181T384 0t181 75 75 181zm704 384q0 159-112.5 271.5T960 1024 688.5 911.5 576 640t112.5-271.5T960 256t271.5 112.5T1344 640zm576 225q0 78-56 118.5t-138 40.5h-134q-103-123-265-128 81-117 81-256 0-29-5-66 66 23 133 23 59 0 119-21.5t97.5-42.5 43.5-21q124 0 124 353zm-128-609q0 106-75 181t-181 75-181-75-75-181 75-181 181-75 181 75 75 181z"></path></svg>';
    const calendarIcon = '<svg viewBox="0 0 1664 1792" style="width:12pt;" astro-icon="fa:calendar"><path fill="currentColor" d="M128 1664h288v-288H128v288zm352 0h320v-288H480v288zm-352-352h288V992H128v320zm352 0h320V992H480v320zM128 928h288V640H128v288zm736 736h320v-288H864v288zM480 928h320V640H480v288zm768 736h288v-288h-288v288zm-384-352h320V992H864v320zM512 448V160q0-13-9.5-22.5T480 128h-64q-13 0-22.5 9.5T384 160v288q0 13 9.5 22.5T416 480h64q13 0 22.5-9.5T512 448zm736 864h288V992h-288v320zM864 928h320V640H864v288zm384 0h288V640h-288v288zm32-480V160q0-13-9.5-22.5T1248 128h-64q-13 0-22.5 9.5T1152 160v288q0 13 9.5 22.5t22.5 9.5h64q13 0 22.5-9.5t9.5-22.5zm384-64v1280q0 52-38 90t-90 38H128q-52 0-90-38t-38-90V384q0-52 38-90t90-38h128v-96q0-66 47-113T416 0h64q66 0 113 47t47 113v96h384v-96q0-66 47-113t113-47h64q66 0 113 47t47 113v96h128q52 0 90 38t38 90z"></path></svg>';
    const mobilizonIcon = '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" preserveAspectRatio="xMidYMid meet" viewBox="0 0 48 48"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M27.82 7.67c-.08 2.87-.63 3.55-3.66 3.54c-2.88 0-4-.62-3.94-3.48c0-2.65.78-3.1 3.72-3.15c3.12-.04 3.95.67 3.88 3.09ZM36 29.16c.05 8.66-4.83 14.54-12.18 14.42c-6.53-.09-11.82-5-11.82-14.42s4.46-14 11.94-14.29S36 20.15 36 29.16Z"/><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" d="M29.28 29.29c0 6-1.49 9.31-5.4 9.29c-3.49 0-5.11-3.4-5.13-9.28c0-6.18 2-9.19 5.23-9.29c3-.1 5.35 2.74 5.31 9.28Z"/></svg>';
    $.get("https://sns.koyu.space/api/v1/instance", (data) => {
        $("#fedicount").html(userIcon+" "+data.stats.user_count);
    });
    $.get("https://matrix-client.matrix.org/_matrix/client/unstable/im.nheko.summary/rooms/%23koyu.space%3Amozilla.org/summary?via=mozilla.org&_cacheBuster=4066431321001660", (data) => {
        $("#matrixcount").html(userIcon+" "+data.num_joined_members);
    });
    $.get("https://xmpp.koyu.space/api/connected_users_number", (data) => {
        $("#xmppcount").html(userIcon+" "+data.num_sessions);
    });
    $.get("https://api.mcsrvstat.us/2/zecircle.xyz", (data) => {
        $("#zecirclecount").html(userIcon+" "+data.players.online);
    });
    $.get("https://stream.koyu.space/api/status", (data) => {
        $("#streamcount").html(userIcon+" "+data.viewerCount);
    });
    $.post("https://events.koyu.space/graphiql", { query: "query { events { total } }" }, (data) => {
        $("a[title='koyu.space Events']").html(mobilizonIcon);
        $("#eventscount").html(calendarIcon+" "+data.data.events.total);
    });
    $("#mailcount").html(userIcon+" 2");
    $("#cloudcount").html(userIcon+" 1");
}

getUsers();
window.setInterval(getUsers, 3000);