import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CruiseListComponent } from './cruise-list/cruise-list.component';
import { BookingListComponent } from './booking-list/booking-list.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', component: CruiseListComponent },
  { path: 'my-bookings', component: BookingListComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
