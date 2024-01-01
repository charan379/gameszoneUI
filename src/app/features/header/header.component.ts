import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showNav: boolean = false;

  navLinks: { path: string, name: string, order?: number }[] = [
    { path: "/login", name: "Login", order: 10 },
    { path: "/home", name: "Home", order: 1 },
    { path: "/new-booking", name: "New Booking", order: 2 },
    { path: "/dashboard", name: "Dashboard", order: 3 },
    { path: "/dashboard/games", name: "Manage Games", order: 4 },
    { path: "/dashboard/slots", name: "Manage Slots", order: 5 },
    { path: "/dashboard/bookings", name: "Manage Bookings", order: 6 }]


  handleHamClick() {
    console.log(this.navLinks)
    this.showNav = !this.showNav;
  }
}
