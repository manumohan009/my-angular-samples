import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as socketIo from 'socket.io-client';
import { Observable, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  observer: Observer<any>;

  getProducts() {
    const socket = socketIo('http://localhost:3000/');
    socket.on('data', response => {
      return this.observer.next(response.data);
    });
    return this.createObservable();
  }

  createObservable() {
    return new Observable(observer => this.observer = observer);
  }

  getUsers() {
    return this.http.get('https://reqres.in/api/users?page=2');
  }
  // getProducts() {
  //   return this.http.get('http://localhost:3000/api/products');
  // }
}
