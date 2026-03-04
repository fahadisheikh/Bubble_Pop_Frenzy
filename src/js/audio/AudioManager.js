// src/js/audio/AudioManager.js
// Singleton audio service — wraps Howler.js
// Follows the same service pattern as scoringService

import { Howl, Howler } from 'howler';
import { SOUND_CONFIG } from './sounds.config.js';

class AudioManager {
  constructor() {
    this._sounds = {};
    this._muted = localStorage.getItem('bpf_muted') === 'true';
    this._initialized = false;
  }

  /**
   * Initialize audio — must be called on first user interaction (mobile autoplay).
   * Idempotent: safe to call multiple times.
   */
  init() {
    if (this._initialized) return;

    Object.entries(SOUND_CONFIG).forEach(([key, config]) => {
      try {
        this._sounds[key] = new Howl({
          ...config,
          onloaderror: (_id, err) => {
            console.warn(`[AudioManager] Failed to load sound "${key}":`, err);
          },
        });
      } catch (err) {
        console.warn(`[AudioManager] Could not create Howl for "${key}":`, err);
      }
    });

    // Apply persisted mute state immediately
    Howler.mute(this._muted);

    this._initialized = true;
    console.log('[AudioManager] Initialized', Object.keys(this._sounds).length, 'sounds. Muted:', this._muted);
  }

  /**
   * Resume Howler's AudioContext — required on iOS/Android after user gesture.
   */
  resumeContext() {
    try {
      if (Howler.ctx && Howler.ctx.state === 'suspended') {
        Howler.ctx.resume();
      }
    } catch (err) {
      // Ignore — not all browsers expose Howler.ctx
    }
  }

  /**
   * Play a registered sound by key.
   * @param {string} key - Sound key from sounds.config.js
   */
  play(key) {
    if (this._muted) return;
    if (!this._initialized) return;

    const sound = this._sounds[key];
    if (sound) {
      try {
        sound.play();
      } catch (err) {
        console.warn(`[AudioManager] Error playing "${key}":`, err);
      }
    } else {
      console.warn(`[AudioManager] Unknown sound key: "${key}"`);
    }
  }

  /**
   * Toggle or explicitly set the global mute state.
   * Persists to localStorage.
   * @param {boolean} muted
   */
  setMuted(muted) {
    this._muted = muted;
    Howler.mute(muted);
    localStorage.setItem('bpf_muted', String(muted));
  }

  /**
   * @returns {boolean} Current mute state
   */
  isMuted() {
    return this._muted;
  }

  /**
   * Set master volume (0–1).
   * @param {number} vol
   */
  setVolume(vol) {
    Howler.volume(Math.max(0, Math.min(1, vol)));
  }
}

// Export singleton
export const audioManager = new AudioManager();
