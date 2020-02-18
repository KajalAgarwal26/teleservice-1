import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingComponent } from './booking.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpService } from 'src/app/shared/services/http.service';
import { of } from 'rxjs';

describe('BookingComponent', () => {
  let component: BookingComponent;
  let fixture: ComponentFixture<BookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ BookingComponent ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get available slots', () => {
    const service = TestBed.get(HttpService);
    const spy = spyOn(service, 'getRequest').and.returnValue(of([{evenName: '', subSlots: [{slotId: ''}]}]));
    component.getAllAvailableSlots();
    expect(component.eventList.length).toBe(1);
  });

  it('should do booking', () => {
    component.flagger = true;
    const service = TestBed.get(HttpService);
    const spy = spyOn(service, 'postRequest').and.returnValue(of([]));
    component.doBooking('1', '2');
    expect(component.flagger).toBeFalsy();
  });

});
