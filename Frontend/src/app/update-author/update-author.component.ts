import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../productservice.service';
import { FormControl, Validators } from '@angular/forms';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-update-author',
  templateUrl: './update-author.component.html',
  styleUrls: ['./update-author.component.css']
})
export class UpdateAuthorComponent implements OnInit {
  name= new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z ]*$/)]);
  genre = new FormControl("", [Validators.required,Validators.pattern(/^[A-Za-z ]*$/)]);
  year= new FormControl("", [Validators.required,Validators.pattern(/^([0-9]{4})-([0-9]{4})+$/)]);

  pageTitle: string = 'Update Author';
  productItem= {
    title :'',
    year:'',
    genre:'',
    image:''
    }
 
  constructor(private router:Router,private productService:ProductService,public _auth:AuthService) { }

  ngOnInit(): void {
    let productId = localStorage.getItem("editProductId");
    this.productService.getAuthor(productId).subscribe((data)=>{
      this.productItem=JSON.parse(JSON.stringify(data));
  })
  }
  editAuthor()
  {    
    this.productService.editAuthor(this.productItem);   
    alert("Success");
    this.router.navigate(['/authors']);
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
