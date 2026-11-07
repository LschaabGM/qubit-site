/* Testimonial slider: one quote at a time.
   Progressive enhancement: without this script the page simply shows all quotes stacked, so nothing is lost.

   Rules it follows (W3C carousel guidance + WCAG 2.2.2 "Pause, Stop, Hide"):
   - Auto-advance only on desktop and only if the person has NOT asked for reduced motion.
   - Time on each quote depends on its length (about 3 words per second), so long quotes can be read.
   - Stops while the mouse is over it, and stops for good once someone uses the keyboard in it or the arrows.
   - A visible Pause / Play button (icon), with a text label for screen readers.
   - Never auto-advances on phones. */
(function () {
  var root = document.querySelector('[data-quote-slider]');
  if (!root) return;

  var slides = Array.prototype.slice.call(root.querySelectorAll('.quote-slide'));
  if (slides.length < 2) return;

  var track = root.querySelector('.quote-slider__track');
  var controls = root.querySelector('[data-controls]');
  var prevBtn = root.querySelector('[data-prev]');
  var nextBtn = root.querySelector('[data-next]');
  var pauseBtn = root.querySelector('[data-pause]');

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var wideScreen = window.matchMedia('(min-width: 1024px)');

  var current = 0;
  var timer = null;
  var stoppedByUser = false;   // pressed Pause, used the arrows, or moved into it with the keyboard
  var mouseInside = false;

  function autoplayAllowed() { return wideScreen.matches && !reduceMotion.matches; }
  function isRunning() { return autoplayAllowed() && !stoppedByUser && !mouseInside && !document.hidden; }

  // Show slide number n (wraps around at both ends)
  function show(n) {
    current = (n + slides.length) % slides.length;
    slides.forEach(function (slide, k) {
      slide.classList.toggle('is-active', k === current);
      slide.setAttribute('aria-hidden', k === current ? 'false' : 'true');
    });
  }

  // Reading time: 5 s + 0.33 s per word, never more than 20 s
  function readingTime() {
    var words = slides[current].textContent.trim().split(/\s+/).length;
    return Math.min(20000, 5000 + words * 330);
  }

  function schedule() {
    clearTimeout(timer);
    if (!isRunning()) return;
    timer = setTimeout(function () { show(current + 1); schedule(); }, readingTime());
  }

  // Keeps the Pause button, the live region and the timer in sync with the current state
  function refresh() {
    var auto = autoplayAllowed();
    pauseBtn.hidden = !auto;                                   // no auto-advance = nothing to pause
    pauseBtn.classList.toggle('is-paused', stoppedByUser);        // CSS swaps the pause icon for the play icon
    pauseBtn.setAttribute('aria-label', stoppedByUser ? 'Reanudar el cambio automático de testimonios' : 'Pausar el cambio automático de testimonios');
    track.setAttribute('aria-live', isRunning() ? 'off' : 'polite');   // announce changes only when the person is the one changing them
    schedule();
  }

  function go(n) { stoppedByUser = true; show(n); refresh(); }

  prevBtn.addEventListener('click', function () { go(current - 1); });
  nextBtn.addEventListener('click', function () { go(current + 1); });
  pauseBtn.addEventListener('click', function () { stoppedByUser = !stoppedByUser; refresh(); });

  root.addEventListener('mouseenter', function () { mouseInside = true; refresh(); });
  root.addEventListener('mouseleave', function () { mouseInside = false; refresh(); });
  // Keyboard focus enters -> stop for good (the person can press Resume)
  root.addEventListener('focusin', function () { if (!stoppedByUser) { stoppedByUser = true; refresh(); } });

  // Left / right arrow keys also move between quotes when focus is inside the slider
  root.addEventListener('keydown', function (ev) {
    if (ev.key === 'ArrowLeft') { go(current - 1); }
    if (ev.key === 'ArrowRight') { go(current + 1); }
  });

  // Swipe on touch screens
  var startX = null;
  track.addEventListener('touchstart', function (ev) { startX = ev.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', function (ev) {
    if (startX === null) return;
    var dx = ev.changedTouches[0].clientX - startX;
    startX = null;
    if (Math.abs(dx) > 50) { go(dx < 0 ? current + 1 : current - 1); }
  }, { passive: true });

  // Pause while the tab is in the background; react if the window or the motion setting changes
  document.addEventListener('visibilitychange', refresh);
  wideScreen.addEventListener('change', refresh);
  reduceMotion.addEventListener('change', refresh);

  root.classList.add('is-enhanced');
  controls.hidden = false;
  show(0);
  refresh();
})();
