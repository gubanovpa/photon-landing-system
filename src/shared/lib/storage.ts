export function getStoredValue<T>(key: string, fallback: T): T {
  try {
    const rawValue = window.localStorage.getItem(key);

    if (!rawValue) {
      return fallback;
    }

    return JSON.parse(rawValue) as T;
  } catch {
    return fallback;
  }
}

export function setStoredValue<T>(key: string, value: T) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    return;
  }
}

export function removeStoredValue(key: string) {
  try {
    window.localStorage.removeItem(key);
  } catch {
    return;
  }
}
