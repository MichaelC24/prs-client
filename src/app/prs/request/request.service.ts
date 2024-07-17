import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Request } from "./request.class";
import { observableToBeFn } from "rxjs/internal/testing/TestScheduler";

@Injectable({
    providedIn: 'root'
})
export class RequestService {
    baseurl = "http://localhost:5000/api/requests";

    constructor(
        private http: HttpClient


    ){}

    list(): Observable<Request[]> { //get all
        return this.http.get(`${this.baseurl}`) as Observable<Request[]>
    }
    get(id: number): Observable<Request> { //get by primary id
        return this.http.get(`${this.baseurl}/${id}`) as Observable<Request>
    }
    change(request: Request): Observable<any> { //get by primary id
        return this.http.put(`${this.baseurl}/${request.id}`,request) as Observable<any>
    }
    
    create(request: Request): Observable<any> { //get by primary id
        return this.http.post(`${this.baseurl}/create`,request) as Observable<any>
    }
    remove(id: number): Observable<any> { //get by primary id
        return this.http.delete(`${this.baseurl}/${id}`) as Observable<any>
    }
    listReviews(id: number): Observable<Request[]> {
        return this.http.get(`${this.baseurl}/reviews/${id}`) as Observable<Request[]>
    }
    listStatus(status: string): Observable<Request[]> {
        return this.http.get(`${this.baseurl}/status/${status}`) as Observable<Request[]>
    }
    review(request: Request): Observable<any> {
        return this.http.put(`${this.baseurl}/review/${request.id}`, request) as Observable<any>
    }
    approve( request: Request): Observable<any> {
        return this.http.put(`${this.baseurl}/review/${request.id}`,request) as Observable<any>
    }
    reject(request: Request): Observable<any> {
        return this.http.put(`${this.baseurl}/${request.id}`, request) as Observable<any>
    }

}