import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormErrorsDirective } from './directives/form/form-errors.directive';
import { AdminGamesComponent } from './admin-games/admin-games.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FormErrorsDirective,
    AdminGamesComponent,],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
