import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Constants } from './constants';

const httpOptions = {
  headers: new HttpHeaders({
    // 'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http:HttpClient) { }

  getAllProducts():Observable<any>{
    let url = Constants.BASE_URL + 'api/products';
    console.log('url', url);
    return this.http.get(url, httpOptions);
  }
}
