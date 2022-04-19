import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { OrderedArticle } from 'src/app/models/OrderedArticle';
import { ApiService } from 'src/app/Services/ApiService/api-service.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.sass']
})
export class OrderComponent implements OnInit {
  public header = "Bestellung ";

  public date = new Date();

  public overallprice! : number;

  public overallamount! : number;

  public orderedArticles! : OrderedArticle[];

  public dataloaded! : boolean;

  public ordernumberForm = new FormGroup({
    ordernumber: new FormControl('',{updateOn:'blur', validators: Validators.required})
  });

  constructor(public pipe: DatePipe, private apiservice: ApiService) {
    this.overallprice = 0;
    this.overallamount = 0;
    this.dataloaded = false;
   }

  ngOnInit(): void {
     this.orderedArticles = new Array<OrderedArticle>();
     const items = [{
      articlenumber: "123879",
      onsale: true,
      productname: "TEST Produkt ABC",
      amount: 4,
      price: 24
     },
     {
      articlenumber: "737293",
      onsale: false,
      productname: "TEST Produkt DEF",
      amount: 20,
      price: 240
     },
     {
      articlenumber: "204750",
      onsale: false,
      productname: "TEST Produkt GHI",
      amount: 1,
      price: 81
     },
     {
      articlenumber: "162942",
      onsale: false,
      productname: "TEST Produkt JKL",
      amount: 2,
      price: 45
     }];

    items.forEach(element => {
      this.overallamount = element.amount + this.overallamount;
      this.overallprice = element.price + this.overallprice;
    });

    this.orderedArticles = items;
  }

  async getOrder(){
    let ordernumber = this.ordernumberForm.controls['ordernumber'].value;
    this.header = this.header + "#"+ ordernumber;
    var response = this.apiservice.getOrder("getOrder/" + ordernumber);
    this.dataloaded = true;
  }

}
