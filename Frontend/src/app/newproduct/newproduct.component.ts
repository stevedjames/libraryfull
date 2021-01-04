import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productmodel';
import { FormControl, Validators } from '@angular/forms';
import { ProductService } from '../productservice.service'
import {AuthService} from '../auth.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-newproduct',
  templateUrl: './newproduct.component.html',
  styleUrls: ['./newproduct.component.css']
})
export class NewProductComponent implements OnInit {

  constructor(private productService: ProductService,private router: Router,public _auth:AuthService){  } 
  pageTitle: string = 'Add new Book';
  name= new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z ]*$/)]);
  title= new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z0-9 ]*$/)]);
  productItem= {
     title :'',
     author:'',
     genre:'',
     image:''}
 // productItem: IProduct;
  ngOnInit() {
  }
  AddProduct()
  {    
    this.productService.newProduct(this.productItem);
    console.log("Called");    
    alert("Success");
    this.router.navigate(['/books']);
  }


logoutUser()
{
  localStorage.removeItem('token')
  this.router.navigate(['/products'])
}
loggedUser()
{
this.router.navigate(['/add'])
}
}


