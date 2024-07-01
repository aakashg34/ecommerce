import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../service/cart.service';
import { Observable } from 'rxjs';
import { ProductService, Products } from '../service/product.service';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';
import { OrderService } from '../service/order.service';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

 
@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,MatIconModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartItems: Products[] = [];
  cartTotal :number =0;
  userId: number | null = 0;
  address: string = '';
  formattedPrice ?: string;

  constructor(
    private cartService: CartService,
    private authService : AuthService,
    private userService : UserService,
    private orderService : OrderService,
    private productService : ProductService,
    private router : Router
  ) {}
  ngOnInit(): void {
    // this.cartService.getCartItems(1).subscribe(
    //   (items: Products[]) => {
    //     this.cartItems = items;
    //   });

      // this.getTotal();
    const storedUserId = localStorage.getItem('userId');
    this.userId = storedUserId ? parseInt(storedUserId, 10) : null;
    this.loadCartItems();
    this.subscribeToCartTotal();
    // this.userService.getUserById(parseInt(this.userId, 10)).subscribe(user => {
    //   this.address = user.address;
    // });

    this.address = this.userService.getAddress()
  
  }
 
  // getTotal(): void {
  //   this.cartService.getCartTotal().subscribe(
  //     (total: number) => {
  //       this.cartTotal = total;
  //       console.log('Cart Total:', this.cartTotal); // Optional: Log to check if data is received
  //     },
  //     (error) => {
  //       console.error('Error fetching cart total:', error);
  //     }
  //   );
  // }

  private loadCartItems(): void {
   
    if(this.userId != null){
    this.cartService.getCartItems(this.userId).subscribe(
      (items: Products[]) => {
        console.log(items)
        this.cartItems = items;
        this.cartService['cartItems'] = items; // Ensuring the cartService has the latest items
        this.cartService['updateCartTotal']();  // Recalculate the cart total
      },
      (error) => {
        console.error('Error loading cart items:', error);
      }
    );
  }
  }
  private subscribeToCartTotal(): void {
    this.cartService.getCartTotal().subscribe(
      (total: number) => {
        this.cartTotal = (total);
        this.formattedPrice = this.formatPriceINR(this.cartTotal)
        console.log('Cart Total:', this.cartTotal); // Optional: Log to check if data is received
      },
      (error) => {
        console.error('Error fetching cart total:', error);
      }
    );
  }
  removeFromCart(product: Products): void {
    if(this.userId !== null) {
    this.cartService.removeFromCart(this.userId, product);
    // Remove item from cartItems array
    this.cartItems = this.cartItems.filter(cartItem => cartItem.id !== product.id);
    this.updateCartTotal();
    // this.isInCart(product)
    }else {
      console.error('User ID is null, cannot add to product')
    }
  }
  updateCartTotal(): void {
    this.cartTotal = this.cartItems.reduce((total, item) => total + item.price, 0);
    this.formattedPrice = this.formatPriceINR(this.cartTotal)
  }

 
  checkout() {
    // alert('Order placed');
    const userId = localStorage.getItem('userId');
    if (userId) {
      const orderRequest = {
        userId: parseInt(userId, 10),
        totalOrderAmount: this.cartTotal,
        address: this.address
      }
      this.orderService.placeOrder(orderRequest).subscribe(() => {
        this.cartService.clearCart(orderRequest.userId).subscribe(() => {
          this.cartItems = []; // Clear local cart items array
          this.cartTotal = 0; // Reset cart total
          alert('Order placed successfully!');
          this.router.navigate(['/catalog']); // Navigate to catalog or any other page
        });
    
      });

        
    
    }
    // this.cartService.removeFromCart();
    // this.cartItems = null

    // const userId = localStorage.getItem('userId');
    // if (userId) {
      
    //   };
      
    //   this.orderService.placeOrder(orderRequest).subscribe(() => {
    //     this.cartService.clearCart(parseInt(userId, 10)).subscribe(() => {
    //       this.cartItems = [];
    //       this.cartTotal = 0;
    //       alert('Order placed successfully!');
    //       this.router.navigate(['/product-catalog'], { queryParams: { orderPlaced: true } });
    //     });
    //   });
    // }
  }
  logout(): void {
    this.authService.logout();
  }
  goBack(): void {
    this.router.navigate(['/catalog']); // Adjust the route as needed
  }

  formatPriceINR(price: number): string {
    return price.toLocaleString('en-IN', {
      maximumFractionDigits: 0, // Adjust as needed, 0 for no decimal places
    });
  }

}
