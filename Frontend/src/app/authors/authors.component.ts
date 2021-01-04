import { Component, OnInit } from '@angular/core';
import { ProductService } from '../productservice.service';
import {AuthService} from '../auth.service';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {
  pageTitle: string = 'Authors';

  products=[{
    title :'',
    year:'',
    genre:'',
    
    image:''}]
  
  
  constructor(private router:Router,private productService: ProductService,public _auth:AuthService){   
    
  }
  ngOnInit(): void{
    this.productService.getAuthors().subscribe((data)=>{
      this.products=JSON.parse(JSON.stringify(data));
  })
  }
 
  editProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['updateauthor']);

  }
  readProduct(product:any)
  {
    localStorage.setItem("editProductId", product._id.toString());
    this.router.navigate(['author']);

  }
  deleteAuthor(product:any)
  {
    this.productService.deleteAuthor(product._id)
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
this.router.navigate(['/addauthor'])
}

}
