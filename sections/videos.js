export default `

    <h1>Videos</h1>

    <iframe id="ytplayer" type="text/html" width="95%" height="360"
  src="https://www.youtube.com/embed/ECsDpg-OK3U"
  frameborder="0"></iframe>

    <iframe id="playlist" type="text/html" width="90%" height="50%"
  src="https://www.youtube.com/embed/videoseries?list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_"
  frameborder="0" class="html5-video-player ytp-exp-bottom-control-flexbox ytp-title-enable-channel-logo ytp-embed ytp-embed-playlist ytp-embed-overlays-autohide ytp-mobile ytp-embed-mobile-exp unstarted-mode ytp-hide-controls ytp-large-width-mode ytp-small-mode ytp-touch-mode ytp-menu-shown"></iframe>


    
    `;

//? MEDIA PLAYER
// Load the IFrame Player API code asynchronously.
var tag = document.createElement("script");
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;
var playlist;
function onYouTubePlayerAPIReady() {
  player = new YT.Player("ytplayer", {
    height: "360",
    width: "640",
    videoId: "M7lc1UVf-VE",
  });
  playlist = new YT.Player("ytplaylist", {
    height: "360",
    width: "640",
    listType: "playlist",
  });
}
