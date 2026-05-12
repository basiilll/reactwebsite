const STORAGE_PREFIX = 'northline-cart:'

export function loadJson(key, fallback) {
  try {
    const raw = localStorage.getItem(STORAGE_PREFIX + key)
    if (!raw) return fallback
    return JSON.parse(raw)
  } catch {
    return fallback
  }
}

export function saveJson(key, value) {
  localStorage.setItem(STORAGE_PREFIX + key, JSON.stringify(value))
}
