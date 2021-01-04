import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { AuthGuard } from './auth.guard';
import { ProductsComponent } from './products/products.component'
import { NewProductComponent } from './newproduct/newproduct.component';
import {LoginComponent} from './login/login.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { BooksComponent } from './books/books.component';
import { BookComponent } from './book/book.component';
import { AuthorsComponent } from './authors/authors.component';
import { NewauthorComponent } from './newauthor/newauthor.component';
import { AuthorComponent } from './author/author.component';
import { UpdateAuthorComponent } from './update-author/update-author.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: '/products',
    pathMatch: 'full'
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'books',
    component: BooksComponent
  },
  {
    path: 'book',
    component: BookComponent
  },
  {
    path: 'author',
    component: AuthorComponent
  },
  {
    path: 'authors',
    component: AuthorsComponent
  },
  {path:'addbook', 
  canActivate: [AuthGuard],
  component: NewProductComponent,
},
{path:'addauthor', 
  canActivate: [AuthGuard],
  component: NewauthorComponent,
},
{
  path:'update',
  component:UpdateProductComponent
},
{
  path:'updateauthor',
  component:UpdateAuthorComponent
}
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
