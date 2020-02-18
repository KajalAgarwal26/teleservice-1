import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../shared/services/http.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.sass']
})
export class BookingComponent implements OnInit {

  public eventList: Array<any>;
  public flagger: boolean;
  constructor(private http: HttpService) {
    this.eventList = [];
    this.flagger = false;
   }

  ngOnInit() {
    this.getAllAvailableSlots();
  }

  // gets all the available slots
  public getAllAvailableSlots() {
    this.eventList = [];
    this.http.getRequest('slots/' + localStorage.getItem('userid')).subscribe((event: any) => {
      event.forEach((data: any) => {
        data.subSlots.forEach((slot) => {
          slot.eventName = data.evenName;
          this.eventList.push(slot);
        });
    });
    });
  }

  // does booking
  public doBooking(adAgencyName: string, slotId: string): void {
    this.flagger = true;
    this.http.postRequest('/bookings', [{adAgencyName, slotId, userId: localStorage.getItem('userid')}]).subscribe((data) => {
      swal.fire('Booking done succesfully');
      this.getAllAvailableSlots();
      this.flagger = false;
    }, (except) => {
      swal.fire('Something went wrong');
    });
  }

}
