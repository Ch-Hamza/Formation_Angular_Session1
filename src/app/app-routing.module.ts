import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PhoneComponent } from './phone/phone.component';

const routes: Routes = [
  {path: 'home', component : HomeComponent},
  {path: 'phones', component : PhoneComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
