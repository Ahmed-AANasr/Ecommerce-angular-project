import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productlist = [
    {
      "id": 1,
      "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      "price": 109.95,
      "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      "category": "men's clothing",
      "image": "https://images.unsplash.com/photo-1491933382434-500287f9b54b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YXBwbGUlMjBwcm9kdWN0fGVufDB8fDB8fA%3D%3D&w=1000&q=80",
      "rating": {
        "rate": 3.9,
        "count": 120
      }
    },
    {
      "id": 2,
      "title": "Mens Casual Premium Slim Fit T-Shirts ",
      "price": 22.3,
      "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
      "category": "men's clothing",
      "image": "https://www.apple.com/v/product-red/s/images/meta/og_world_aids__cyxrlm50ra0y_day.png?202111292349",
      "rating": {
        "rate": 4.1,
        "count": 259
      }
    },
  ]
  
  private favoriteList:any[] = []

  getAllFavoriteList(){
    return this.favoriteList;
  }
  addToFavorite(productId:number){
    let product = this.productlist.find((x)=>{
      return x.id == productId
    })
    this.favoriteList.push(product)
  }
  constructor() { }
  getAllProducts() {
    return this.productlist;
  }
  
  addProduct(product:any){
    this.productlist.push(product);
  }
}

