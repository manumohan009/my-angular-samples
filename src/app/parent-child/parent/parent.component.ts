import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  public parentName = 'Mohan';
  public message = 'AUM';
  public messageFromChild1;
  public messageFromChild2;

  public userName = '';
  public userPhone = '';

  nameEventHander($event: any) {
    this.userName = $event;
  }

  phoneEventHander($event: any) {
    this.userPhone = $event;
  }

  constructor() { }

  ngOnInit() {
  }

  onReceiveMessageFromChild1(msg){
    this.messageFromChild1 = msg;
  }

  onReceiveMessageFromChild2(msg){
    this.messageFromChild2 = msg;
  }

}
