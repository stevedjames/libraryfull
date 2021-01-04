import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../productservice.service';
import { FormControl, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';
@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {
  pageTitle: string = 'Update Book';
  name= new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z ]*$/)]);
  genre = new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z ]*$/)]);
  title= new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z0-9 ]*$/)]);

  productItem= {
    title :'',
    author:'',
    genre:'',
    image:''
    }
 
  constructor(private router:Router,private productService:ProductService,public _auth:AuthService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.productService.getProduct(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  editProduct()
  {    
    this.productService.editProduct(this.productItem);   
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
