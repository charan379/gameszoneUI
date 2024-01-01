import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './features/login/login.component';
import { NewbookingComponent } from './features/newbooking/newbooking.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { GamesComponent } from './features/admin-dashboard/games/games.component';
import { SlotsComponent } from './features/admin-dashboard/slots/slots.component';
import { BookingsComponent } from './features/admin-dashboard/bookings/bookings.component';
import { authGuard } from './auth.guard';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: "new-booking", component: NewbookingComponent, canActivate: [authGuard] },
  {
    path: "dashboard", canActivate: [authGuard],
    children: [
      { path: "", component: AdminDashboardComponent, pathMatch: "full" },
      { path: "games/:id", component: GamesComponent },
      { path: "slots", component: SlotsComponent },
      { path: "bookings", component: BookingsComponent }
    ],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
