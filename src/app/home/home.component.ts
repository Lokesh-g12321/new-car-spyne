import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  products = [
    { id: 1, name: "BMW", avail: "Available", image: "/assets/bmw.jpeg", price: "$4000" },
    { id: 2, name: "Bentley", avail: "Not Available", image: "/assets/bently.jpeg", price: "$35000" },
    { id: 3, name: "Bugatti", avail: "Available", image: "/assets/bugatti.jpeg", price: "$40000" },
    { id: 4, name: "Tesla", avail: "Available", image: "/assets/tesla.jpeg", price: "$30000" },
    { id: 5, name: "Ford", avail: "Not Available", image: "/assets/ford.jpeg", price: "$20000" },
    { id: 6, name: "Audi", avail: "Available", image: "/assets/audi.jpeg", price: "$35000" },
  ];

  newProduct: any = { name: '', price: '', avail: 'Available', image: '' };
  editMode = false;
  editIndex: number | null = null;

  // Split products into rows of specified size
  splitProducts(products: any[], size: number) {
    const rows = [];
    for (let i = 0; i < products.length; i += size) {
      rows.push(products.slice(i, i + size));
    }
    return rows;
  }

  addOrUpdateProduct() {
    if (this.editMode && this.editIndex !== null) {
      this.products[this.editIndex] = { ...this.newProduct };
      this.editMode = false;
      this.editIndex = null;
    } else {
      const id = this.products.length ? Math.max(...this.products.map(p => p.id)) + 1 : 1;
      this.products.push({ id, ...this.newProduct });
    }
    this.newProduct = { name: '', price: '', avail: 'Available', image: '' };
  }

  removeProduct(index: number) {
    this.products.splice(index, 1);
  }

  editProduct(product: any, index: number) {
    this.newProduct = { ...product };
    this.editMode = true;
    this.editIndex = index;
  }
}
