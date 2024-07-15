import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'; //retrives data once c# brings it back
import { User } from './user.class'; // imports user class

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  baseurl: string = "http://localhost:5000/api/users";

  constructor(
    private http: HttpClient
  ) { }

  list(): Observable<User[]> { //observable is similar to Task in c# the square brackets after User means there is a list
    return this.http.get(`${this.baseurl}`) as Observable<User[]>; //get is the http method then you tell it what url to use 
                                                                    //in this case its baseurl 
                                                                    //Observable<User[]> when the data is returned from c# its passed into the observable<User[]>
                                                                    //then when its called in the by the component i.e html 
    // `$` backtick lets you do interpolated string
  }
  // get(id: number): Observable<User> {
  //   return this.http.get(`${this.baseurl}/${id}`) as Observable<User>;
  // }
  
  //user create

  //user change
  
  //user delete
}
