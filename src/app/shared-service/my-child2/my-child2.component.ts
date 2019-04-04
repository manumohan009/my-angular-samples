import { Component, OnInit, OnDestroy } from '@angular/core';
import { MessageService } from '../message.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-my-child2',
  templateUrl: './my-child2.component.html',
  styleUrls: ['./my-child2.component.css']
})
export class MyChild2Component implements OnInit, OnDestroy {
  message:string;
  subscription:Subscription;
  constructor(private messageService:MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
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

  sendMessage(){
    this.messageService.sendMessage('Message update from child 2');
  }

  clearMessage(){
    this.messageService.clearMessage();
  }

}
