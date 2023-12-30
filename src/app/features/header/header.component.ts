import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  showNav: boolean = false;

  handleHamClick() {
    this.showNav = !this.showNav;
  }
}
