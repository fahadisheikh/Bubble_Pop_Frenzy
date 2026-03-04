// src/js/audio/sounds.config.js
// Maps sound keys to file paths and Howler options

export const SOUND_CONFIG = {
  // --- Classic / Survival shared SFX ---
  pop_normal: {
    src: ['/sounds/pop_normal.mp3'],
    volume: 0.8,
  },
  pop_soft: {
    src: ['/sounds/pop_soft.mp3'],
    volume: 0.6,
  },
  pop_double: {
    src: ['/sounds/pop_double.mp3'],
    volume: 0.85,
  },
  penalty: {
    src: ['/sounds/penalty.mp3'],
    volume: 0.7,
  },
  miss: {
    src: ['/sounds/miss.mp3'],
    volume: 0.5,
  },
  countdown_beep: {
    src: ['/sounds/countdown_beep.mp3'],
    volume: 0.9,
  },
  countdown_go: {
    src: ['/sounds/countdown_go.mp3'],
    volume: 1.0,
  },
  game_over_jingle: {
    src: ['/sounds/game_over_jingle.mp3'],
    volume: 0.9,
  },

  // --- Survival-only SFX ---
  time_bonus: {
    src: ['/sounds/time_bonus.mp3'],
    volume: 0.7,
  },
  urgency_alert: {
    src: ['/sounds/urgency_alert.mp3'],
    volume: 0.8,
  },

  // --- Colour Rush SFX ---
  cr_correct: {
    src: ['/sounds/cr_correct.mp3'],
    volume: 0.8,
  },
  cr_wrong: {
    src: ['/sounds/cr_wrong.mp3'],
    volume: 0.7,
  },
  cr_color_change: {
    src: ['/sounds/cr_color_change.mp3'],
    volume: 0.7,
  },
  cr_combo_3: {
    src: ['/sounds/cr_combo_start.mp3'],
    volume: 0.8,
  },
  cr_combo_5: {
    src: ['/sounds/cr_combo_start.mp3'],
    volume: 0.9,
  },
  cr_combo_10: {
    src: ['/sounds/cr_combo_max.mp3'],
    volume: 1.0,
  },
  cr_combo_break: {
    src: ['/sounds/penalty.mp3'],
    volume: 0.7,
  },
  cr_perfect: {
    src: ['/sounds/cr_perfect.mp3'],
    volume: 1.0,
  },
  cr_urgency: {
    src: ['/sounds/urgency_alert.mp3'],
    volume: 0.6,
  },
};
