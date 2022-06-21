import $ from 'jquery';

$.each($("#avatars a"), function(index, element) {
    var upper = this;
    $.get("https://koyu.space/api/v1/accounts/"+$(element).attr("acctid"), function(data) {
        if (!data.avatar_static.includes("/avatars/original/missing.png")) {
            upper.innerHTML = "<img class=\""+upper.children[0].className+"\" src=\""+data.avatar_static+"\" alt=\"@"+data.acct+"\">";
        } else {
            upper.style = "display:none;";
        }
    });
});