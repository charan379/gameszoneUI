import { Component } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {

  showContent: boolean = false;


  toggleDropdown() {
    this.showContent = !this.showContent;
  }

}
