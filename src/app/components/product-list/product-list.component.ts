import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { FavoriteService } from 'src/app/service/favorite.service';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent implements OnInit {
  products: any[] = [];

  constructor(
    private productService: ProductService,
    private favoriteService: FavoriteService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  addToFavorites(product: any): void {
    this.favoriteService.favorites$.subscribe((currentFavorites) => {
      if (!currentFavorites.includes(product.id)) {
        const newFavorites = [...currentFavorites, product.id];
        this.favoriteService.updateFavorites(newFavorites);
      }
    });
  }

  addToCart(product: any): void {
    this.cartService.cart$.subscribe((currentCart) => {
      const newCart = [...currentCart, product.id];
      this.cartService.updateCart(newCart);
    });
  }
}
