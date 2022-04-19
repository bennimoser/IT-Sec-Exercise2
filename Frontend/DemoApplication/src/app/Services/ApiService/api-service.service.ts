import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private readonly apiUrl = "http://10.0.0.49/"

  constructor(private http: HttpClient) { }

  public async getOrder(url:string) : Promise<any>{
    try{
      const response = await this.http.get(this.apiUrl + url).toPromise() as any;
      return response;
    }
    catch(e){
      console.error(e);
    }
  }
}
