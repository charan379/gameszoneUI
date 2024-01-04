import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './features/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorsDirective } from './directives/form/form-errors.directive';
import { HeaderComponent } from './features/header/header.component';
import { AdminDashboardComponent } from './features/admin-dashboard/admin-dashboard.component';
import { GamesComponent } from './features/admin-dashboard/games/games.component';
import { SlotsComponent } from './features/admin-dashboard/slots/slots.component';
import { BookingsComponent } from './features/admin-dashboard/bookings/bookings.component';
import { NewbookingComponent } from './features/newbooking/newbooking.component';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { SortPipe } from './pipes/sort/sort.pipe';
import { FilterPipe } from './pipes/filter/filter.pipe';
import { authInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormErrorsDirective,
    HeaderComponent,
    AdminDashboardComponent,
    GamesComponent,
    SlotsComponent,
    BookingsComponent,
    NewbookingComponent,
    SortPipe,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    SpinnerComponent,
  ],
  providers: [provideHttpClient(withInterceptors([authInterceptor]))],
  bootstrap: [AppComponent]
})
export class AppModule { }
