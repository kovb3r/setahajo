import { Component } from '@angular/core';
import { EventEmitter, Output } from '@angular/core';
import { Cruise } from '../models/cruise.model';
import { Input } from '@angular/core';

@Component({ selector: 'app-cruise-detail', templateUrl: './cruise-detail.component.html' })
export class CruiseDetailComponent {
  @Input() cruise!: Cruise;
  @Output() book = new EventEmitter<void>();
}
