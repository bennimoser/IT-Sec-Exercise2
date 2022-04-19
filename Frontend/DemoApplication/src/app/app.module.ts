import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MenubarModule } from 'primeng/menubar'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './Components/profile/profile.component';
import { OrderComponent } from './Components/order/order.component';
import { ApiService } from './Services/ApiService/api-service.service';
import { HomeComponent } from './Components/home/home.component';
import { CardModule } from 'primeng/card'
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    OrderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    CardModule
  ],
  providers: [ApiService, DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
