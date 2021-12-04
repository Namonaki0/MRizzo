export default `

<div class="videos-wrapper">

    <h1>Videos</h1>
    
    <video
  id="vid1"
  class="video-js vjs-default-skin"
  controls
  preload="auto"
  width="90%"
  height="264"
  poster="MY_VIDEO_POSTER.jpg"
  data-setup="{"techOrder": ["youtube"], "sources": [{ "type": "video/youtube", "src": "https://www.youtube.com/embed/CkflepnHbhI"}], "youtube": { "iv_load_policy": 1 }}"
>

</video>

    <div class="main-video">
          
    </div>

    <div class="video-library-streaming">
       
    </div>

        <div class="video-library-other">
          <p>content</p>
        </div>
       
    </div>
</div>



    
    `;

//? MEDIA PLAYER
// Load the IFrame Player API code asynchronously.
// var tag = document.createElement("script");
// tag.src = "https://www.youtube.com/player_api";
// var firstScriptTag = document.getElementsByTagName("script")[0];
// firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// // Replace the 'ytplayer' element with an <iframe> and
// // YouTube player after the API code downloads.
// var player;
// var playlist;
// function onYouTubePlayerAPIReady() {
//   player = new YT.Player("ytplayer", {
//     height: "360",
//     width: "640",
//     videoId: "M7lc1UVf-VE",
//   });
//   playlist = new YT.Player("ytplaylist", {
//     height: "360",
//     width: "640",
//     listType: "playlist",
//   });
// }
