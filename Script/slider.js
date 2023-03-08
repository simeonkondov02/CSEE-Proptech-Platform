function nextImage() {
  switchImage(1);

  //manageVideos(1);
}

function previousImage() {
  switchImage(-1);

  //manageVideos(-1);
}

function switchImage(action) {
  var currentImageIndex;
  var images = document.getElementsByClassName("image_item");

  for (var i = 0; i < images.length; i++) {
    if (images[i].classList.contains("current_image")) {
      currentImageIndex = images[i];
    }
  }

  for (var i = 0; i < images.length; i++) {
    images[i].classList.remove("current_image");
  }

  for (var i = 0; i < images.length; i++) {
    if (images[i] == currentImageIndex) {
      if (action == 1 && i + 1  == images.length) {
        images[0].classList.add("current_image");
      }
      else if (action == -1 && i + 1  == 1) {
        images[0].classList.add("current_image");
      }
      else if (i < images.length) {
        images[i + action].classList.add("current_image");
      }
    }
  }
}

var videos = new Array("video_0", "video_1", "video_2", "video_3", "video_4", "video_5", "video_6", "video_7", "video_8", "video_9");
var currentIndex = 0;

function manageVideos(action) {
  if (action == 1) {
    if (currentIndex >= videos.length - 1) {
      currentIndex = 0;
    } else {
      currentIndex++;
    }

    for (var i = 0; i < videos.length; i++) {
      if (i == currentIndex) {
        playVideo(i);
      } else {
        pauseVideo(i);
      }
    }
  } else if (action == -1) {
    if (currentIndex <= 0) {
      currentIndex = videos.length;
    } else {
      currentIndex--;
    }

    for (var i = 0; i < videos.length; i++) {
      if (i == currentIndex) {
        playVideo(i);
      } else {
        pauseVideo(i);
      }
    }
  }
}

function playVideo(index) {
  var videoPlayer = document.getElementById(videos[index]);
  videoPlayer.currentTime = 0;
  videoPlayer.play();
  videoPlayer.firstChild.nodeValue = 'Pause';
}

function pauseVideo(index) {
  var videoPlayer = document.getElementById(videos[index]);
  videoPlayer.pause();
  videoPlayer.firstChild.nodeValue = 'Play';
}
