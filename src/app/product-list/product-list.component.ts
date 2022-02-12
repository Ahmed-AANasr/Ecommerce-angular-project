import { Component, OnInit } from '@angular/core';
import { ProductService } from './../_servies/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor(private productServies:ProductService) { }

  products?:any[];

  addToFaveList(productId:number){
    this.productServies.addToFavorite(productId);
  } 

  ngOnInit(): void {
    this.products = this.productServies.getAllProducts();
  }

}
