import { Component, OnInit } from '@angular/core';
import { ProductService } from './../_servies/product.service';

@Component({
  selector: 'app-favorite-product',
  templateUrl: './favorite-product.component.html',
  styleUrls: ['./favorite-product.component.css']
})
export class FavoriteProductComponent implements OnInit {

  favoriteList:any[] = [];

  constructor(private ProductService:ProductService) { }

  ngOnInit(): void {
    this.favoriteList = this.ProductService.getAllFavoriteList();
  }

}
