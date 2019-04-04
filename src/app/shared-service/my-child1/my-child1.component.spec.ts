import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyChild1Component } from './my-child1.component';

describe('MyChild1Component', () => {
  let component: MyChild1Component;
  let fixture: ComponentFixture<MyChild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyChild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyChild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
