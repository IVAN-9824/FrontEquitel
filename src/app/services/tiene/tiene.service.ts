import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TieneService {
  private API_SERVER ="http://localhost:8080/tiene/"
  constructor(private httpclient: HttpClient) { }

  public seveTiene( tiene:any):Observable<any>{
    return this.httpclient.post(this.API_SERVER+'set/', tiene)
  }
  public getTiene( id :any){
    return this.httpclient.get(this.API_SERVER+'get/'+id+'/')
  }
  }

