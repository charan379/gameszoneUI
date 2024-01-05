import { Component, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { Params, Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  showNav: boolean = false;

  loggedIn: boolean = false;

  dropdown: boolean = false;

  navLinks: { path: string, name: string, order?: number, condition?: boolean, params?: Params }[] = [
    { path: "/login", name: "Login", order: 10, condition: !this.loggedIn }
  ];

  constructor(private loginService: LoginService, private router: Router) {

  }


  ngOnInit(): void {
    this.loginService.statusUpdate.subscribe((status) => {

      this.loggedIn = status;

      this.navLinks = [
        { path: "/login", name: "Login", order: 10, condition: !this.loggedIn },
        { path: "/home", name: "Home", order: 10, condition: this.loggedIn },
        { path: "/new-booking", name: "New Booking", order: 2, condition: this.loggedIn },
        { path: "/dashboard", name: "Dashboard", order: 3, condition: this.loggedIn },
        { path: "/dashboard/games/34", name: "Manage Games", order: 4, condition: this.loggedIn },
        { path: "/dashboard/slots", name: "Manage Slots", order: 5, condition: this.loggedIn },
        { path: "/dashboard/bookings", name: "Manage Bookings", order: 6, condition: this.loggedIn }]
    })
  }

  handleHamClick() {
    this.showNav = !this.showNav;
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login'], { queryParams: { callback: location.href } });
  }

  toggleDropdown() {
    this.dropdown = !this.dropdown;
  }
}
