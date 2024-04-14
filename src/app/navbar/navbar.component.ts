import { Component, EventEmitter, Output } from '@angular/core';
import { navLinks } from './navLinks';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  nav = false
  @Output() navEvent = new EventEmitter<boolean>()

  toggleNav() {
    this.nav = !this.nav
    this.navEvent.emit(this.nav)

  }

  navLinks = navLinks
}
