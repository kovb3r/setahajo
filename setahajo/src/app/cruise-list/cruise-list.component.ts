import { Component } from '@angular/core';
import { Cruise } from '../models/cruise.model';
import { EventEmitter, Output } from '@angular/core';

@Component({ selector: 'app-cruise-list', templateUrl: './cruise-list.component.html' })
export class CruiseListComponent {
  @Output() selectCruise = new EventEmitter<Cruise>();
  cruises: Cruise[] = [
    { id: 1, name: 'Duna Esti', description: 'Esti körút a Dunán', date: new Date(), durationHours: 2, price: 8500 },
    { id: 2, name: 'Naplemente túra', description: 'Romantikus út', date: new Date(), durationHours: 3, price: 10500 }
  ];
  onSelect(cruise: Cruise) {
    this.selectCruise.emit(cruise);
  }
}
