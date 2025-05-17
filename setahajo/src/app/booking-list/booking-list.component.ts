import { Component } from '@angular/core';
import { Booking } from '../models/booking.model';

@Component({ selector: 'app-booking-list', templateUrl: './booking-list.component.html' })
export class BookingListComponent {
  bookings: Booking[] = [
    { id: 1, cruiseId: 1, customerName: 'Teszt Elek', email: 'teszt@example.com', guests: 2, bookedAt: new Date() }
  ];
}
