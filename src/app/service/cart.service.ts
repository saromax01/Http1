import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FavoriteService {
  getFavorites() {
    throw new Error('Method not implemented.');
  }
  private favoritesSubject = new BehaviorSubject<string[]>([]);
  favorites$ = this.favoritesSubject.asObservable();

  updateFavorites(favorites: string[]): void {
    this.favoritesSubject.next(favorites);
  }
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartSubject = new BehaviorSubject<string[]>([]);
  cart$ = this.cartSubject.asObservable();

  updateCart(cart: string[]): void {
    this.cartSubject.next(cart);
  }
}
