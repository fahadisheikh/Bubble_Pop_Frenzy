// src/js/ui/MuteButton.js
// Mute/unmute toggle button — persists via audioManager / localStorage

export class MuteButton {
  /**
   * @param {HTMLElement} container - Element to append the button into
   * @param {import('../audio/AudioManager.js').AudioManager} audioManager
   */
  constructor(container, audioManager) {
    this.audioManager = audioManager;

    this.button = document.createElement('button');
    this.button.className = 'mute-btn';
    this.button.setAttribute('aria-label', 'Toggle mute');

    this._updateIcon();

    container.appendChild(this.button);

    this.button.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      this._toggle();
    });

    this.button.addEventListener('click', (e) => {
      e.preventDefault();
      this._toggle();
    });
  }

  _toggle() {
    this.audioManager.setMuted(!this.audioManager.isMuted());
    this._updateIcon();
  }

  _updateIcon() {
    const muted = this.audioManager.isMuted();
    this.button.textContent = muted ? '🔇' : '🔊';
    this.button.setAttribute('aria-label', muted ? 'Unmute' : 'Mute');
  }

  /** Show button */
  show() {
    this.button.classList.remove('hidden');
  }

  /** Hide button */
  hide() {
    this.button.classList.add('hidden');
  }
}
