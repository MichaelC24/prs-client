import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //retrives data once c# brings it back
import { User } from './user.class'; // imports user class
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseurl: string = "http://localhost:5000/api/users";

  constructor(
    private http: HttpClient
  ) { }

  //login
  login (username: string, password: string): Observable<User> {  
    return this.http.get(`${this.baseurl}/${username}/${username}`) as Observable<User>;
  }

  list(): Observable<User[]> { //observable is similar to Task in c# the square brackets after User means there is a list
    return this.http.get(`${this.baseurl}`) as Observable<User[]>; //get is the http method then you tell it what url to use 
                                                                    //in this case its baseurl 
                                                                    //Observable<User[]> when the data is returned from c# its passed into the observable<User[]>
                                                                    //then when its called in the by the component i.e html 
    // `$` backtick lets you do interpolated string
  }
  get(id: number): Observable<User> { //the Observable<User> is the type of data that the method has to return
    return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  }
  //user create
  create(user: User): Observable<User> {
     return this.http.post(`${this.baseurl}`,user) as Observable<User>;
     
  }

  //user change
  change(user: User): Observable<any> { // type any is because the methods in c# dont return any data so any lets that happen without throwing an error
    return this.http.put(`${this.baseurl}/${user.id}`,user) as Observable<any>;
  }
  //user remove
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>;
  }
}
