export default `

    <h1>Videos</h1>

    <div class="main-video">
          <iframe id="ytplayer" type="text/html" width="95%" height="360"
  src="https://www.youtube.com/embed/ECsDpg-OK3U"
  frameborder="0"></iframe>
    </div>

    <div class="video-library-streaming">
       
    </div>

        <div class="video-library-other">
          <p>content</p>
        </div>
       
    </div>



    
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
