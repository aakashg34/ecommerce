import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { Observable } from 'rxjs';
import { Products } from '../service/product.service';
 
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Products[] = [];
  cartTotal :number =0;
  constructor(
    private cartService: CartService
  ) {}
  ngOnInit(): void {
    this.cartService.getCartItems(1).subscribe(
      (items: Products[]) => {
        this.cartItems = items;
      });

      this.getTotal();
  }
 
  getTotal(): void {
    this.cartService.getCartTotal().subscribe(
      (total: number) => {
        this.cartTotal = total;
        console.log('Cart Total:', this.cartTotal); // Optional: Log to check if data is received
      },
      (error) => {
        console.error('Error fetching cart total:', error);
      }
    );
  }
 
  checkout() {
    alert('Order placed');
    // this.cartService.removeFromCart();
    // this.cartItems = null
  }
}
