import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css']
})
export class Child1Component implements OnInit {
  public child1Name = 'Manu';
  public msg = 'Hello';
  public message='Initial value';

  @Input() public messageFromParentToChild1;
  @Input() public messageFromChild2;
@Output() messageToChild2 = new EventEmitter();

  userName: string = '';
  userPhone: string = '';

  constructor() { }

  ngOnInit() {
  }

  sendMessageToChild2(msg){
    console.log('In sendMessageToChild2()');
    console.log(msg,"msg");
    this.messageToChild2.emit(msg);
  }

  // onNameChange () {
  //   this.nameEvent.emit(this.userName);
  // }

  // onPhoneChange () {
  //   this.phoneEvent.emit(this.userPhone);
  // }

  sendMessage(){
    console.log('In sendMessage()');
    this.message = 'Shiva';
  }
}
