import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  setItem<T = unknown>(key: string, value: T): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  getItem<T = unknown>(key: string, parse = false): T | null {
    const value = localStorage.getItem(key);
    if (value) {
      return parse ? JSON.parse(value) : value;
    }
    return null;
  }
}
