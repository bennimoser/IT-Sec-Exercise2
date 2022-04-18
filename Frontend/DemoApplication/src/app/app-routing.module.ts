import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';
import { ProfileComponent } from './Components/profile/profile.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'order', component: OrderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
