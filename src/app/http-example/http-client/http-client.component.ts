import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { ProductDataService } from '../product-data.service';
import { Product } from '../product';

@Component({
  selector: 'app-http-client',
  templateUrl: './http-client.component.html',
  styleUrls: ['./http-client.component.css']
})
export class HttpClientComponent implements OnInit, OnDestroy {
  private productDataSubscription: Subscription;
  productsData:Product[] = [];

  constructor(private productDataService: ProductDataService) { }

  ngOnInit() {
    this.productDataSubscription = this.productDataService.getAllProducts().subscribe(response => {
      console.log(response);
      if(response.status ==='SUCCESS'){
        this.productsData = response.data;
      }
    })
  }

  ngOnDestroy(): void {
    if(this.productDataSubscription){
      this.productDataSubscription.unsubscribe();
    }
  }
}
