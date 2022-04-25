import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ParteService {
  private API_SERVER ="http://localhost:8080/parte/"
  constructor(private httpclient: HttpClient) { }
  
  public getParte(){
    return this.httpclient.get(this.API_SERVER+'get/')
  }
  
  public seveParte( parte:any):Observable<any>{
    return this.httpclient.post(this.API_SERVER+'set/', parte)
  }
}
