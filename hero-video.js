(function () {
  var CLIP_SEC = 3;
  var DEFAULT_START = 1;

  document.querySelectorAll('.hero-card-video').forEach(function (video) {
    var start = parseFloat(video.dataset.start);
    if (Number.isNaN(start)) start = DEFAULT_START;
    var end = start + CLIP_SEC;

    function seekToStart() {
      if (video.duration && start >= video.duration) {
        start = Math.max(0, video.duration - CLIP_SEC);
        end = start + CLIP_SEC;
      }
      video.currentTime = start;
    }

    function loopClip() {
      if (video.currentTime >= end - 0.05 || video.currentTime < start - 0.1) {
        seekToStart();
      }
    }

    video.addEventListener('timeupdate', loopClip);

    function initPlay() {
      seekToStart();
      video.play().catch(function () {});
    }

    video.addEventListener('loadedmetadata', initPlay);
    if (video.readyState >= 1) initPlay();

    document.addEventListener('visibilitychange', function () {
      if (!document.hidden) initPlay();
    });
  });
})();
