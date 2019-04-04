import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, interval } from 'rxjs';

@Component({
  selector: 'app-consume-http',
  templateUrl: './consume-http.component.html',
  styleUrls: ['./consume-http.component.css']
})
export class ConsumeHttpComponent implements OnInit {

  @Input() users$: Observable<any>;

  constructor(private api: ApiService) { }

  ngOnInit() {

  }

}
