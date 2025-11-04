import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit{


  // id: string | null = null;
  id: any = null;
  // name: string| null = null;
  product!: Product | undefined;

  constructor(private route: ActivatedRoute, private productService: ProductService) {
    // this.name = this.route.snapshot.paramMap.get('name');
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    if(this.id){
      // this.product = this.productService.getProductById(parseInt(this.id));
      this.productService.getProductById(this.id).subscribe((value) => {
        this.product = value;
      });
    }
  }


}
