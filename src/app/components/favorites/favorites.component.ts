import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  private favoritesSubject = new BehaviorSubject<string[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  getFavorites(): string[] {
    return this.favoritesSubject.value;
  }

  updateFavorites(favorites: string[]): void {
    this.favoritesSubject.next(favorites);
  }
}
