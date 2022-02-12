import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input() product?: any;
  @Output() favoriteProduct =new EventEmitter<number>();

  constructor() { }
  
  getProductId(productId:number){
    this.favoriteProduct.emit(productId)
  }

  ngOnInit(): void {
  }

}
