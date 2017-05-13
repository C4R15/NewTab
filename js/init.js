$(document).ready(function hideElements() {
  $(".twitch-dd").hide();
  $(".yt-dd").hide();
})

function showLinksTwitch() {
  $(".yt-dd").fadeOut().delay(700);
  $(".twitch-dd").fadeIn();
}

function showLinksYt() {
  $(".twitch-dd").fadeOut().delay(700);
  $(".yt-dd").fadeIn();
}
