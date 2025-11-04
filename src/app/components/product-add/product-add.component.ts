import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent implements OnInit{

  product!: FormGroup;
  // id: string | null = null;
  id: any = null;
  
  constructor(private router: Router, private fb: FormBuilder, private productService: ProductService, private acRoute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.acRoute.snapshot.paramMap.get('id');
        this.product = this.fb. group({
        // id: [, [Validators.required]],
        name:['', [Validators.required]],
        price:[0, [Validators.required]],
        category:['', [Validators.required]],
        image:['', [Validators.required]]
        });

    if(this.id ){
      // const pro = this.productService.getProductById(parseInt(this.id));
      this.productService.getProductById(this.id).subscribe((value) => {
        this.product.patchValue(value);
        // this.product = this.fb.group({
        //   id: [value.id, [Validators.required]],
        //   name: [value.name, [Validators.required]],
        //   price: [value.price, [Validators.required]],
        //   category: [value.category, [Validators.required]],
        //   image: [value.category, [Validators.required]]
        // });
        
      })

      // if(pro){
      //   this.product = this.fb. group({
      //   id: [pro.id, [Validators.required]],
      //   name:[pro.name, [Validators.required]],
      //   price:[pro.price, [Validators.required]],
      //   category:[pro.category, [Validators.required]],
      //   image:[pro.image, [Validators.required]]
      //   });
      // }

    }
    // else{
    //     this.product = this.fb. group({
    //     id: [, [Validators.required]],
    //     name:['', [Validators.required]],
    //     price:[0, [Validators.required]],
    //     category:['', [Validators.required]],
    //     image:['', [Validators.required]]
    //     });
    // }
    
  }

  save(){
    console.log(this.product.value);
    // this.productService.addProduct(this.product.value);
    if(this.id){
      this.productService.updateProduct(this.id, this.product.value).subscribe();
    }else{
      this.productService.addProduct(this.product.value).subscribe();
    }

    this.router.navigate(['/productList']);
  }



}
