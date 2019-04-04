import { Component, OnInit, OnChanges, ViewChild, TemplateRef, ElementRef, NgZone, Renderer2 } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-show-time',
  templateUrl: './show-time.component.html',
  styleUrls: ['./show-time.component.css'],
  providers: [DatePipe]
})
export class ShowTimeComponent implements OnInit, OnChanges {
  @ViewChild('time') public myTime: ElementRef;

  public currentTime:Date = new Date();



  constructor(private zone:NgZone, private renderer: Renderer2, public datepipe: DatePipe) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.renderer.setProperty(this.myTime.nativeElement,'textContent', this.time);
      },1)
    })
   }

  ngOnInit() {
  }

  ngOnChanges() {

  }

  get time() {
    let cTime = this.datepipe.transform(Date.now(), 'HH:mm:ss');
    return cTime;
  }

  get cTime() {
    return this.currentTime;
  }

}
