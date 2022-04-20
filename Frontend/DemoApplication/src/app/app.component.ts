import { Component } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {

  public title = "Demo-Applikation"

  public menubaritems: MenuItem[] = new Array<MenuItem>();


  public ngOnInit(): void {
    this.LoadItems();
  }

  public LoadItems(){
    const items = [
        {
          label : "Bestellung",
          icon : 'pi pi-shopping-cart',
          routerLink : '/order'
        }
    ];

    this.menubaritems = items;
  }
}
