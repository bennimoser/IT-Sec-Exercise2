import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Order } from 'src/app/models/Order';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = "http://localhost:3000/orders/"

  constructor(private http: HttpClient) { }

  public async getOrder(url:string) : Promise<Order[]>{
    try{
      const response = await this.http.get(this.apiUrl + url).toPromise() as Order[];
      return response;
    }
    catch(e){
      console.error(e);
    }
    return null!;
  }
}
