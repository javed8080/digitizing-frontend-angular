import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Orders } from '../../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private _http: any = null;
  private url: any = null;

  constructor(private http: HttpClient) {
    this._http = http;
    this.url = "YOUR_API_ENDPOINT";
  }

  public insert(data: any): Observable<any> {
    const bearerToken = 'YOUR_BEARER_TOKEN';
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json'
    });

    return this.http.post<any>(`${this.url}`, data, { headers });
  }


  public patch(id: number, data: any): Observable<any> {
    //  Bearer token
    const bearerToken = 'YOUR_BEARER_TOKEN';

    // Set the Authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.patch<any>(`${this.url}`, data, { headers });
  }


  public update(id: number, data: any): Observable<any> {
    // Bearer token
    const bearerToken = 'YOUR_BEARER_TOKEN';

    // Set the Authorization header with the Bearer token
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${bearerToken}`,
      'Content-Type': 'application/json'
    });
    return this.http.put<any>(`${this.url}`, data, { headers });
  }

  public get(type: string, id: any): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.url}/assets/data/ecommerce/products.json`);
  }

  public getAll(type: string): Observable<Orders[]> {
    return this.http.get<Orders[]>(`${this.url}/assets/data/ecommerce/products.json`);
  }

}