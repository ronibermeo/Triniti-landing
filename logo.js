(function () {
  if (typeof lottie === 'undefined') return;

  document.querySelectorAll('.logo-lottie').forEach(function (el) {
    if (el.dataset.lottieInit) return;
    el.dataset.lottieInit = '1';

    lottie.loadAnimation({
      container: el,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: 'assets/loader-cat.json',
    });
  });
})();
