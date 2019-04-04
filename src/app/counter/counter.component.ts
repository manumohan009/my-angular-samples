import { Component, OnInit, OnChanges, ViewChild, ElementRef, NgZone, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit, OnChanges {

  public count: number = 0;
  @ViewChild('counter')
  public myCounter: ElementRef;

  constructor(private zone: NgZone, private renderer: Renderer2) {
    this.zone.runOutsideAngular(() => {
      setInterval(() => {
        this.renderer.setProperty(this.myCounter.nativeElement, 'textContent', ++this.count);
      }, 1);
    });
  }

  ngOnInit() {
  }

  ngOnChanges() {

  }

}
