import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule

interface Product {
  name: string;
  price: string;
  description: string;
  category: string;
  rating: string;
  imageUrl: string;
}

@Component({
  standalone: true,
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css'],
  imports: [CommonModule] // Add CommonModule here
})
export class ProductCatalogComponent implements OnInit {

  products: Product[] = [];  // This will hold the products fetched from the backend
  currentPage = 1;
  itemsPerPage = 6;

  constructor() { }

  ngOnInit(): void {
    this.fetchProducts();  // Fetch products when the component initializes
  }

  fetchProducts(): void {
    // This should be replaced with a real backend call
    // this.products = [
    //   {
    //     name: 'Tomato',
    //     price: '$5',
    //     description: 'Fresh tomatoes',
    //     category: 'Vegetables',
    //     rating: '4.5',
    //     imageUrl: 'url_to_image'
    //   },
    //   // Add more product objects here...
    // ];
  }

  get paginatedProducts(): Product[] {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    return this.products.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage * this.itemsPerPage < this.products.length) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
}
