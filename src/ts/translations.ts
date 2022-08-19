import $ from 'jquery';

if (navigator.language.split("-")[0] === "de") {
    $("#home").html("Startseite");
    $("#apps").html("Apps");
    $("#donate").html("Spenden");
    $("#donatetext").html("Spenden");
    $("#login").html("Anmelden");
    $("#register").html("Registrieren");
    $("#myaccount").html("Mein Konto");
    $("#ourservices").html("Unsere Dienste:");
    $("#services").html("Dienste");
    $("#servicestitle").html("Dienste");
    $("#header").html("Internetdienste für dich und deine Freunde");
    $("#tagline").html("koyu.space ist ein globales Netzwerk von talentierten Menschen, die dir Internetdienste anbieten. Alles, was wir tun, ist kostenlos und Open-Source-Software.");
    $("#privacy").html("Datenschutz");
    $("#more").html("Communityrichtlinien");
    $("#attribution").html("Foto von");
    $("#submission").html("Du kannst dein eigenes Foto <a href=\"mailto:support@koyu.space?subject=Frontpage%20photo%20submission&body=Hi%2C%0A%0AI%20want%20to%20submit%20the%20photo%20I%20made%20for%20the%20front%20page.%20You%20can%20find%20it%20in%20the%20attachments.%20For%20attribution%20my%20website%20is%20here%3A%20%5Byour%20website%20here%5D.%0A%0AThanks!\">hier</a> einreichen.");
    $("#made-possible").html("koyu.space wird durch diese netten Leute ermöglicht:");
    $("#admin").html("Administrator*in");
    $("#mod").html("Moderator*in");
    $("#donator").html("Spender*in");
    $("#infrastructure").html("Infrastruktur");
    $("#learnmore .button").html("Mehr erfahren");
    $("#guidelines").html("Community-Richtlinien");
    $("#annual").html("Aktuell jährliches Spendenziel:");
    $("#dstart").html("Wie möchtest du bezahlen?");
}
