import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MotorService {
  private API_SERVER ="http://localhost:8080/motor/"

  constructor(private httpclient: HttpClient) { }

  public saveMotor( motor:any):Observable<any>{
    return this.httpclient.post(this.API_SERVER+'set/', motor)
  }

  public getMotor() {
    return this.httpclient.get(this.API_SERVER+'get/')
  }

}
