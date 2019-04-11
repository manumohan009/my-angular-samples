import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css']
})
export class MyHomeComponent implements OnInit, OnDestroy  {

  message: any;
  subscription: Subscription;

  constructor(private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe( message => {
      console.log(message);
      if(message != undefined){
        this.message = message['text'];
      }
    })
   }

  ngOnInit() {
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
