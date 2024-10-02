import { Injectable } from '@angular/core';
import { Products, ColorFilter } from '../../../shared/model/e-commerce/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
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




  public get(type: string, id: any): Observable<Products[]> {
    return this.http.get<Products[]>(`${this.url}/assets/data/ecommerce/products.json`);
  }


  public getAll(type: string): Observable<Products[]> {
    return this.http.get<Products[]>(this.url+'/assets/data/ecommerce/products.json');
  }

}
