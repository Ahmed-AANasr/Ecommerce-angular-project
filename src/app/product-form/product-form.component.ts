import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from './../_servies/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  addProductForm = new FormGroup(
    {
      id: new FormControl(0),
      productName: new FormControl('',[Validators.required,Validators.minLength(5)]),
      productDescription: new FormControl('',[Validators.required,Validators.minLength(5)]),
      productPrice: new FormControl(0,Validators.required),
      productImage: new FormControl('',Validators.required),
    } 
  )
  get productName(){
    return this.addProductForm.get("productName") as FormControl
  }
  get productDescription(){
    return this.addProductForm.get("productDescription") as FormControl
  }
  get productPrice(){
    return this.addProductForm.get("productPrice") as FormControl
  } 
  get productImage(){
    return this.addProductForm.get("productImage") as FormControl
  }
  
  onSubmit(){
    let product= {id:60,title:this.productName.value,price:this.productPrice.value,description:this.productDescription.value,image:this.productImage.value};
    this.productService.addProduct(product);
    this.router.navigate(['/productList']);
  }


  constructor(private productService:ProductService, private router:Router) { }

  ngOnInit(): void {
  }

}
