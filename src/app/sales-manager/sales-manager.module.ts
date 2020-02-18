import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesManagerRoutingModule } from './sales-manager-routing.module';
import { SalesManagerComponent } from './components/sales-manager/sales-manager.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingComponent } from './components/booking/booking.component';

@NgModule({
  declarations: [SalesManagerComponent, BookingComponent],
  imports: [
    CommonModule,
    SalesManagerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SalesManagerModule { }
