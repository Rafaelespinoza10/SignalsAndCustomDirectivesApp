import { NgModule, signal } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';
import { CounterPagesComponent } from './pages/counter-pages/counter-pages.component';
import { UserInfoPageComponent } from './pages/user-info-page/user-info-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

const routes: Routes = [
  {
      path: '',
      component: SignalsLayoutComponent,
      children: [
        {path: 'counter', component: CounterPagesComponent},
        {path: 'user-info', component: UserInfoPageComponent},
        {path: 'properties', component: PropertiesPageComponent},
        {path: '**', redirectTo: 'counter'}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SignalsRoutingModule { }
