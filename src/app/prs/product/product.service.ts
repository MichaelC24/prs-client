import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "./product.class";


@Injectable({
    providedIn: 'root'
  })
  export class ProductService {
    
    baseurl: string = "http://localhost:5000/api/products";
  
    constructor(
      private http: HttpClient
    ) { }

    list(): Observable<Product[]> { //observable is similar to Task in c# the square brackets after User means there is a list
      return this.http.get(`${this.baseurl}`) as Observable<Product[]>; //get is the http method then you tell it what url to use 
                                                                      //in this case its baseurl 
                                                                      //Observable<User[]> when the data is returned from c# its passed into the observable<User[]>
                                                                      //then when its called in the by the component i.e html 
      // `$` backtick lets you do interpolated string
    }
    get(id: number): Observable<Product> { //the Observable<User> is the type of data that the method has to return
      return this.http.get(`${this.baseurl}/${id}`) as Observable<Product>;
    }
    //user create
    create(user: Product): Observable<Product> {
       return this.http.post(`${this.baseurl}`,user) as Observable<Product>;
       
    }
  
    //user change
    change(user: Product): Observable<any> { // type any is because the methods in c# dont return any data so any lets that happen without throwing an error
      return this.http.put(`${this.baseurl}/${user.id}`,user) as Observable<any>;
    }
    //user remove
    remove(id: number): Observable<any> {
      return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
    }
  
  }  