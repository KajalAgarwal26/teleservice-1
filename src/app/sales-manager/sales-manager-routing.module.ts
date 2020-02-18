import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SalesManagerComponent } from './components/sales-manager/sales-manager.component';
import { AuthGuardService as AuthGuard } from '../../app/shared/services/auth-guard.service';
import { BookingComponent } from './components/booking/booking.component';
const routes: Routes = [{path: 'manager', component: SalesManagerComponent, canActivate: [AuthGuard]},
{path: 'book', component: BookingComponent, canActivate: [AuthGuard]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesManagerRoutingModule { }
