import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumeHttpComponent } from './consume-http.component';

describe('ConsumeHttpComponent', () => {
  let component: ConsumeHttpComponent;
  let fixture: ComponentFixture<ConsumeHttpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumeHttpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumeHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
