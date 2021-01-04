import { Injectable } from '@angular/core';
import {HttpClient ,HttpResponse} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  item= {
    title :'',
    author:'',
    genre:'',
    image:''
    }
    
  constructor( private http:HttpClient) { }
  getProduct(id:any){
    return this.http.get("https://steve-backendlibrary.herokuapp.com/"+id);
  }
  getAuthor(id:any){
    return this.http.get("https://steve-backendlibrary.herokuapp.com/author/"+id);
  }
  getProducts(){
    return this.http.get("https://steve-backendlibrary.herokuapp.com/products");
  }
  
  getAuthors(){
    return this.http.get("https://steve-backendlibrary.herokuapp.com/authors");
  }
  newProduct(item:any)
  {   
    return this.http.post("https://steve-backendlibrary.herokuapp.com/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  newAuthor(item:any)
  {   
    return this.http.post("https://steve-backendlibrary.herokuapp.com/author/insert",{"product":item})
    .subscribe(data =>{console.log(data)})
  }
  deleteProduct(id:any)
  {

    return this.http.delete("https://steve-backendlibrary.herokuapp.com/remove/"+id)

  }
  deleteAuthor(id:any)
  {

    return this.http.delete("https://steve-backendlibrary.herokuapp.com/author/remove/"+id)

  }
  editProduct(product:any)
  {
    console.log('client update')
    return this.http.put("https://steve-backendlibrary.herokuapp.com/update",product)
    .subscribe(data =>{console.log(data)})
  }
  editAuthor(product:any)
  {
    console.log('client update')
    return this.http.put("https://steve-backendlibrary.herokuapp.com/author/update",product)
    .subscribe(data =>{console.log(data)})
  }
}
