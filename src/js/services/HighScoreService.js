// src/js/services/HighScoreService.js
// Persists per-mode high scores in localStorage

const STORAGE_KEY = 'bpf_highscores';
const DEFAULT_SCORES = { classic: 0, survival: 0, colourrush: 0 };

class HighScoreService {
  constructor() {
    this._scores = this._load();
  }

  _load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? { ...DEFAULT_SCORES, ...JSON.parse(raw) } : { ...DEFAULT_SCORES };
    } catch {
      return { ...DEFAULT_SCORES };
    }
  }

  _save() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(this._scores));
  }

  getHighScore(modeKey) {
    return this._scores[modeKey] ?? 0;
  }

  saveScore(modeKey, score) {
    const previous = this._scores[modeKey] ?? 0;
    const isNew = score > previous;
    if (isNew) {
      this._scores[modeKey] = score;
      this._save();
    }
    return { isNewHighScore: isNew, previousBest: previous };
  }

  getAllScores() {
    return { ...this._scores };
  }

  clearScores() {
    this._scores = { ...DEFAULT_SCORES };
    this._save();
  }
}

export const highScoreService = new HighScoreService();
