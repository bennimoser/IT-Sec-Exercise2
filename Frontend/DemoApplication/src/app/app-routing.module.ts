import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OrderComponent } from './Components/order/order.component';

const routes: Routes = [
  {path:'', component:HomeComponent},
  {path: 'order', component: OrderComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
