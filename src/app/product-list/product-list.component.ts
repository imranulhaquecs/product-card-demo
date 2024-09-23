import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { name: 'Smartphone', price: '$499.99', description: 'A high-end smartphone with a great camera.', category: 'Electronics' },
    { name: 'Jeans', price: '$59.99', description: 'Comfortable denim jeans in multiple sizes.', category: 'Clothing' },
    { name: 'Headphones', price: '$199.99', description: 'Noise-cancelling wireless headphones.', category: 'Electronics' },
    { name: 'T-Shirt', price: '$19.99', description: 'A casual t-shirt in various colors.', category: 'Clothing' },
    { name: 'Wristwatch', price: '$89.99', description: 'Stylish wristwatch with a leather band.', category: 'Accessories' }
  ];

  selectedCategory = 'All Products';
  searchTerm = '';

  get filteredProducts() {
    return this.products.filter(product => {
      const matchesCategory = this.selectedCategory === 'All Products' || product.category === this.selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  onCategoryChange(event: any) {
    this.selectedCategory = event.target.value;
  }

  onSearchChange(event: any) {
    this.searchTerm = event.target.value;
  }
}
