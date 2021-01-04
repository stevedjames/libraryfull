import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from '../auth.service';
import { ProductService } from '../productservice.service';
@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css']
})
export class AuthorComponent implements OnInit {

  pageTitle: string = 'Author';
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
