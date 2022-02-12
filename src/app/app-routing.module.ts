import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoriteProductComponent } from './favorite-product/favorite-product.component';
import { LoginFromComponent } from './login-from/login-from.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductListComponent } from './product-list/product-list.component';
import { UsersComponent } from './users/users.component';

const routes: Routes = [
  {path:"productForm",component:ProductFormComponent},
  {path:"users",component:UsersComponent},
  {path:"productList",component:ProductListComponent},
  {path:"loginform",component:LoginFromComponent},
  {path:'',redirectTo:'loginform',pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
