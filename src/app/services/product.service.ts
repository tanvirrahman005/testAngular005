import { Injectable } from '@angular/core';
import { Product } from '../models/model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private apiUrl = 'http://localhost:3000/products';

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]>{
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product>{
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
    // return this.http.get<Product>(this.apiUrl + "/" + id);
  }

  addProduct(product: Product): Observable<Product>{
    return this.http.post<Product>(this.apiUrl, product);
  }

  updateProduct(id: number, product: Product): Observable<Product>{
    return this.http.put<Product>(`${this.apiUrl}/${id}`, product);
  }

  deleteProduct(id: number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }









  // constructor() { }

  // private productList: Product[] = [
  //   {
  //     id: 1,
  //     name: 'Gaming Mouse',
  //     price: 1499,
  //     category: 'Accessories',
  //     image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167'
  //   },
  //   {
  //     id: 2,
  //     name: 'Mechanical Keyboard',
  //     price: 4999,
  //     category: 'Accessories',
  //     image: 'https://images.unsplash.com/photo-1587202372775-e229f172b3c6'
  //   },
  //   {
  //     id: 3,
  //     name: 'Ultra HD Monitor',
  //     price: 15999,
  //     category: 'Display',
  //     image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3'
  //   }
  // ];

  // getProducts(): Product[]{
  //   return [...this.productList];
  // }

  // getProductById(id: number): Product | undefined{
  //   return this.productList.find(a => a.id === id);
  // }

  // addProduct(product: Omit<Product, 'id'>): void{
  //   const newId = this.productList.length > 0 ? Math.max(...this.productList.map(p => p.id)) + 1 : 1;

  //   const newProduct: Product = {
  //     id: newId,
  //     name: product.name,
  //     price: product.price,
  //     category: product.category,
  //     image: product.image
  //   };

  //   this.productList.push(newProduct);
    
  // }

  // updateProduct(id: number, updatedDate: Partial<Product>): boolean{
  //   const index = this.productList.findIndex(p => p.id === id);
  //   if(index !== -1){
  //     this.productList[index] = {...this.productList[index], ...updatedDate}  // this.productList[index] = updatedDate as Product;
  //     return true;
  //   }
  //   return false;
  // }

  // deleteProduct(id: number): boolean{
  //   const index = this.productList.findIndex(p => p.id === id);
  //   if(index !== -1){
  //     this.productList.splice(index, 1);
  //   }
  //   return false;
  // }




}
