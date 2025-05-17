import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OnInit } from '@angular/core';


@Component({ selector: 'app-booking-form', templateUrl: './booking-form.component.html' })
export class BookingFormComponent implements OnInit {
  bookingForm!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit() {
    this.bookingForm = this.fb.group({
      customerName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      guests: [1, Validators.required]
    });
  }
  submit() {
    if (this.bookingForm.valid) {
      console.log(this.bookingForm.value);
    }
  }
}