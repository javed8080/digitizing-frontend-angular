import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Quote } from '../../model/quote.model';

export interface ApiResponse<T> {
  data: T;
  status: string;
  message: string;
}

@Injectable({
  providedIn: 'root'
})

export class QuoteService {
  private _http: any = null;
  private url: any = null;

  constructor(private http: HttpClient) {
    this._http = http;
    this.url = `${environment.apiUrl}/quote`;
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

  public get(type: string, id: any): Observable<Quote[]> {
    return this.http.get<Quote[]>(`${this.url}/${type}/${id}`);
  }

  public getAll(type: string , params:any): Observable<Quote[]> {
    return this.http.get<Quote[]>(`${this.url}/type/${type}`,{params});
  }


  getAlls(type: string): Observable<ApiResponse<Quote[]>> {
    return this.http.get<ApiResponse<Quote[]>>(`${this.url}/${type}`)
      .pipe(
        catchError(error => {
          console.error(`Error fetching ${type}:`, error);
          throw error; // Re-throw the error for further handling
        })
      );
  }

  // getRandomQuote(): Observable<Quote> {
  //   return this.http.get<ApiResponse<Quote>>(this.apiUrl)
  //     .pipe(
  //       map(response => response.data),
  //       catchError(error => {
  //         console.error('Error fetching quote:', error);
  //         throw error; // Re-throw the error for further handling
  //       })
  //     );
  // }

}
