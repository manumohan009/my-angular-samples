import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

  @Input() public messageFromParentToChild2;
  @Input() public messageFromChild1;
  @Output() messageToParent = new EventEmitter();

  public child2Name = 'Jaya';
  public message;

  constructor() { }

  ngOnInit() {
  }

  sendMessageToChild1(msg){
    console.log('In sendMessageToChild1()');
    console.log(msg,"msg");
    this.messageToParent.emit(msg);
  }

}
