import { Component, OnInit } from '@angular/core';

import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
 
    pageTitle: string = 'Books';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = true;
  
    products=[{
      title :'',
      author:'',
      genre:'',
      
      image:''}]
    
    toggleImage(): void{
      this.showImage = !this.showImage;
    }
    constructor(private router:Router,private productService: ProductService,public _auth:AuthService){   
      
    }
    ngOnInit(): void{
      this.productService.getProducts().subscribe((data)=>{
        this.products=JSON.parse(JSON.stringify(data));
    })
    }
   
    editProduct(product:any)
    {
      localStorage.setItem("editProductId", product._id.toString());
      this.router.navigate(['update']);
  
    }
    readProduct(product:any)
    {
      localStorage.setItem("editProductId", product._id.toString());
      this.router.navigate(['book']);
  
    }
    deleteProduct(product:any)
    {
      this.productService.deleteProduct(product._id)
        .subscribe((data) => {
          this.products = this.products.filter(p => p !== product);
        })
    
  
    }
    logoutUser()
{
  localStorage.removeItem('token')
  this.router.navigate(['/products'])
}
loggedUser()
{
this.router.navigate(['/addbook'])
}
}

  
    
