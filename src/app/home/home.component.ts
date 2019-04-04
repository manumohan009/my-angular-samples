import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
// import 'rxjs/add/observable/interval';
// import 'rxjs/add/operator/startWith';
// import 'rxjs/add/operator/switchMap';
import { Observable, interval } from 'rxjs';
import { map, switchMap, startWith } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() products$: Observable<any>;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.products$ = interval(1000).pipe(
      switchMap(() => this.api.getProducts())
      // map(res => res.results)
    )
    console.log(this.products$);

    // this.products$ = Observable
    // .interval(1000)
    // .startWith(0).switchMap(() => this.api.getProducts());




    // const result = interval(5000).pipe(
    //   switchMap(() => this._authHttp.get(url)),
    //   map(res => res.results)
    //   )
  }
}
