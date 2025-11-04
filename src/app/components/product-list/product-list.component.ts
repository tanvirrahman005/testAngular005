import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit{

  constructor(private router: Router, private productService: ProductService){}

  products: Product[] = [];
  
  ngOnInit(): void {
  //  this.products = this.productService.getProducts();
    this.loadProduct();
  }

  loadProduct(){
    this.productService.getProducts().subscribe((value) => {
    this.products = value;
  });
  }

  deleteProduct(arg0: any) {
   this.productService.deleteProduct(arg0).subscribe(() => {this.loadProduct()});

  }

  

  


}
