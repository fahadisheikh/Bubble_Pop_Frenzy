// src/js/tutorial/TutorialOverlay.js
// First-run tutorial overlay for Bubble Pop Frenzy
// Shows 3 panels explaining core mechanics, then never appears again

const STORAGE_KEY = 'bpf_tutorial_seen';

const PANELS = [
  {
    title: 'Tap bubbles to pop them! 💥',
    body: 'Every pop earns you points!',
    animClass: 'bubble-bounce',
    visual: 'regular'
  },
  {
    title: 'Avoid the dark bubbles! ☠️',
    body: 'They cost you points and time!',
    animClass: 'bubble-shake',
    visual: 'dark'
  },
  {
    title: '3 exciting modes to master!',
    body: 'Start with Classic for the full experience.',
    animClass: 'modes-preview',
    visual: 'modes'
  }
];

export class TutorialOverlay {
  constructor() {
    this._overlay = null;
    this._currentPanel = 0;
    this._resolvePromise = null;
    this._touchStartX = 0;
  }

  shouldShow() {
    return localStorage.getItem(STORAGE_KEY) !== 'true';
  }

  markSeen() {
    localStorage.setItem(STORAGE_KEY, 'true');
  }

  /**
   * Show the tutorial overlay.
   * @returns {Promise} Resolves when the tutorial is dismissed.
   */
  show() {
    return new Promise((resolve) => {
      this._resolvePromise = resolve;
      this._currentPanel = 0;
      this._buildOverlay();
      document.body.appendChild(this._overlay);
      // Trigger entrance animation on next frame
      requestAnimationFrame(() => {
        this._overlay.classList.add('tutorial-visible');
      });
    });
  }

  _dismiss() {
    if (!this._overlay) return;
    this._overlay.classList.remove('tutorial-visible');
    this._overlay.classList.add('tutorial-exit');
    setTimeout(() => {
      if (this._overlay && this._overlay.parentNode) {
        this._overlay.parentNode.removeChild(this._overlay);
      }
      this._overlay = null;
      if (this._resolvePromise) {
        this._resolvePromise();
        this._resolvePromise = null;
      }
    }, 400);
  }

  _goToPanel(index) {
    this._currentPanel = index;
    this._renderPanel();
  }

  _buildOverlay() {
    const overlay = document.createElement('div');
    overlay.className = 'tutorial-overlay';
    overlay.setAttribute('role', 'dialog');
    overlay.setAttribute('aria-modal', 'true');
    overlay.setAttribute('aria-label', 'How to play tutorial');

    this._overlay = overlay;
    this._renderPanel();

    // Tap anywhere on panel area advances to next
    overlay.addEventListener('pointerdown', (e) => {
      this._touchStartX = e.clientX;
    });
    overlay.addEventListener('pointerup', (e) => {
      const dx = e.clientX - this._touchStartX;
      // Only advance if it was a tap (not a swipe) on the panel body (not on buttons)
      if (Math.abs(dx) < 20 && !e.target.closest('button')) {
        this._advance();
      }
    });

    // Basic swipe support
    overlay.addEventListener('touchstart', (e) => {
      this._touchStartX = e.touches[0].clientX;
    }, { passive: true });
    overlay.addEventListener('touchend', (e) => {
      const dx = e.changedTouches[0].clientX - this._touchStartX;
      if (dx < -40) this._advance();          // swipe left → next
      if (dx > 40 && this._currentPanel > 0) this._goToPanel(this._currentPanel - 1); // swipe right → prev
    }, { passive: true });
  }

  _renderPanel() {
    if (!this._overlay) return;
    this._overlay.innerHTML = '';

    const panel = PANELS[this._currentPanel];
    const isLast = this._currentPanel === PANELS.length - 1;

    // Skip button
    const skipBtn = document.createElement('button');
    skipBtn.className = 'tutorial-skip';
    skipBtn.textContent = 'Skip';
    skipBtn.setAttribute('aria-label', 'Skip tutorial');
    skipBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this._dismiss();
    });

    // Panel card
    const card = document.createElement('div');
    card.className = 'tutorial-card';

    // Visual area
    const visual = document.createElement('div');
    visual.className = 'tutorial-visual';
    visual.appendChild(this._buildVisual(panel.visual, panel.animClass));

    // Text
    const title = document.createElement('h2');
    title.className = 'tutorial-title';
    title.textContent = panel.title;

    const body = document.createElement('p');
    body.className = 'tutorial-body';
    body.textContent = panel.body;

    // Dots indicator
    const dots = document.createElement('div');
    dots.className = 'tutorial-dots';
    PANELS.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.className = 'tutorial-dot' + (i === this._currentPanel ? ' active' : '');
      dots.appendChild(dot);
    });

    // Next / finish button
    const nextBtn = document.createElement('button');
    nextBtn.className = 'tutorial-next-btn';
    nextBtn.textContent = isLast ? "Let's Pop! 🎉" : 'Next →';
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      this._advance();
    });

    card.appendChild(visual);
    card.appendChild(title);
    card.appendChild(body);
    card.appendChild(dots);
    card.appendChild(nextBtn);

    this._overlay.appendChild(skipBtn);
    this._overlay.appendChild(card);
  }

  _advance() {
    if (this._currentPanel < PANELS.length - 1) {
      this._goToPanel(this._currentPanel + 1);
    } else {
      this._dismiss();
    }
  }

  _buildVisual(type, animClass) {
    const container = document.createElement('div');
    container.className = `tutorial-anim ${animClass}`;

    if (type === 'regular') {
      const bubble = document.createElement('div');
      bubble.className = 'tut-bubble tut-bubble-regular';
      container.appendChild(bubble);
    } else if (type === 'dark') {
      const bubble = document.createElement('div');
      bubble.className = 'tut-bubble tut-bubble-dark';
      bubble.textContent = '☠️';
      container.appendChild(bubble);
    } else if (type === 'modes') {
      const icons = [
        { label: 'Classic', color: '#4FC3F7' },
        { label: 'Survival', color: '#EF5350' },
        { label: 'Colour Rush', color: '#AB47BC' }
      ];
      icons.forEach(({ label, color }) => {
        const wrap = document.createElement('div');
        wrap.className = 'tut-mode-icon';
        const dot = document.createElement('div');
        dot.className = 'tut-mode-dot';
        dot.style.background = color;
        const lbl = document.createElement('span');
        lbl.className = 'tut-mode-label';
        lbl.textContent = label;
        wrap.appendChild(dot);
        wrap.appendChild(lbl);
        container.appendChild(wrap);
      });
    }

    return container;
  }
}
