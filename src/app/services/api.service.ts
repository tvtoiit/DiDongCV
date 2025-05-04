import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private apiUrl = 'http://localhost:8888/api/v1'; // Đặt URL của backend 

  constructor(private http: HttpClient) { }

  // Ví dụ hàm để GET dữ liệu từ backend
  getData(endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${endpoint}`);
  }

  // Ví dụ POST dữ liệu tới backend
  postData(endpoint: string, payload: any, options?: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/${endpoint}`, payload, options);
  }  
  
  // Delete dữ liệu
  deleteData(endpoint: string, id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${endpoint}/${id}`);
  }

  // getData từ bên ngoài
  private apiUrlPublic = 'https://provinces.open-api.vn/api';
  dataPublic (endpoint: string): Observable<any> {
    return this.http.get(`${this.apiUrlPublic}/${endpoint}`)
  }

}
