import { Component, signal } from '@angular/core';
import { MenuItems } from '../../interfaces/sidemenu-interface';

@Component({
  selector: 'components-side-menu',
  templateUrl: './side-menu.component.html',
  styles: ``
})
export class SideMenuComponent {


  //signals
  public menuItems = signal<MenuItems[]>([
       { title : 'Counter', route: 'counter'},
        { title : 'User', route: 'user-info'},
        { title : 'Properties', route: 'properties'},

  ]);

  // public menuItem: MenuItems[] = [
  //     { title : 'Counter', route: 'counter'},
  //     { title : 'User', route: 'user-info'},
  //     { title : 'Properties', route: 'properties'},
  // ];
}
