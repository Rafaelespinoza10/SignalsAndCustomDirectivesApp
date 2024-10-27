import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignalsRoutingModule } from './signals-routing.module';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { RouterModule } from '@angular/router';
import { CounterPagesComponent } from './pages/counter-pages/counter-pages.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';


@NgModule({
  declarations: [

    SignalsLayoutComponent,
      CounterPagesComponent,
      UserInfoPageComponent,
      PropertiesPageComponent,
      SideMenuComponent,
  ],
  imports: [
    CommonModule,
    SignalsRoutingModule,
    RouterModule,
  ],
  exports:[
    SideMenuComponent,
    SignalsLayoutComponent, 
  ]
})
export class SignalsModule { }
