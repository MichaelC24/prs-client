import { Component } from '@angular/core';
import { Menu } from '../menu.class';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  menus = [
    new Menu("Home", "/home"),
    new Menu("Users","/user/list"),
    new Menu("Vendors","/vendor/list"),
    new Menu("About", "/about"),
    new Menu("Login", "user/login")
  ]
}
