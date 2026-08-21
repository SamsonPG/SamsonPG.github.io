/**
 * Click-to-load YouTube embed — same pattern as the sibling Try-family
 * sites' YouTubeFacade component. Renders a self-hosted thumbnail (no
 * third-party request on page load) and only creates the
 * youtube-nocookie.com iframe after a real click.
 *
 * Container aspect follows the thumbnail’s natural size unless
 * data-aspect-locked="true" is set: landscape → full-width stage;
 * portrait → narrow phone frame. Iframe always fills the sized box.
 */
(function () {
  function fitFacade(box, img) {
    if (box.getAttribute('data-aspect-locked') === 'true') return;
    var w = img.naturalWidth;
    var h = img.naturalHeight;
    if (!w || !h) return;
    var widescreen = w >= h;
    box.style.aspectRatio = w + '/' + h;
    box.setAttribute('data-yt-shape', widescreen ? 'landscape' : 'portrait');
  }

  document.querySelectorAll('[data-yt-facade]').forEach(function (box) {
    var videoId = box.getAttribute('data-video-id');
    var playBtn = box.querySelector('.yt-facade-play');
    var img = box.querySelector('img');

    if (img) {
      if (img.complete) fitFacade(box, img);
      else
        img.addEventListener(
          'load',
          function () {
            fitFacade(box, img);
          },
          { once: true },
        );
    }

    if (!playBtn) return;
    playBtn.addEventListener(
      'click',
      function () {
        if (!videoId) return;
        var iframe = document.createElement('iframe');
        var separator = videoId.indexOf('?') === -1 ? '?' : '&';
        iframe.src = 'https://www.youtube-nocookie.com/embed/' + videoId + separator + 'autoplay=1&rel=0';
        iframe.title = (img && img.alt) || 'YouTube video';
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.style.border = '0';
        iframe.style.position = 'absolute';
        iframe.style.inset = '0';
        iframe.style.width = '100%';
        iframe.style.height = '100%';
        box.replaceChildren(iframe);
      },
      { once: true },
    );
  });
})();
