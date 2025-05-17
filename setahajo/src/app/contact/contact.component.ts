import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({ selector: 'app-contact', templateUrl: './contact.component.html' })
export class ContactComponent {
  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    message: new FormControl('', Validators.required)
  });
  send() {
    console.log(this.contactForm.value);
  }
}