import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventAddformComponent } from './event-addform.component';

describe('EventAddformComponent', () => {
  let component: EventAddformComponent;
  let fixture: ComponentFixture<EventAddformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventAddformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventAddformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
