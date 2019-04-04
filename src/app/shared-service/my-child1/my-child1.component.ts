import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-child1',
  templateUrl: './my-child1.component.html',
  styleUrls: ['./my-child1.component.css']
})
export class MyChild1Component implements OnInit, OnDestroy {
  message;
  subscription: Subscription;
  constructor(private messageService:MessageService) {

   }

  ngOnInit() {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      if(message != undefined){
        this.message = message['text'];
      }
    })
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  sendMessage(){
    this.messageService.sendMessage('Message update from child 1');
  }

  clearMessage(){
    this.messageService.clearMessage();
  }

}
