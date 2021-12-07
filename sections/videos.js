export default `

<div class="videos-wrapper">

    <h1>Videos</h1>
    


    <div class="main-video">

     <section class="videos">
        <iframe width="95%" height="315" src="https://www.youtube.com/embed/ECsDpg-OK3U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>

          
    </div>

    <div class="video-library-streaming">

        <section class="videos-playlist">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLZDs0akd6CkwHzetjWFKMWDnLolVuT47_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </section>
       
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
