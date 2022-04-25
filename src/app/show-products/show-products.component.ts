import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { TieneService } from '../services/tiene/tiene.service';
import { MotorService } from '../services/motor/motor.service';




@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  motores: any[]=[];
  partes: any[]=[];
  constructor(private appService: TieneService, private motorService:MotorService) { }

  ngOnInit(): void {
    this.listMotor();
  }

  listMotor (){
    this.motorService.getMotor().subscribe((data:any)=>{
      this.motores =data;
    })
  }
   listPartes (id :any){
    this.appService.getTiene(id).subscribe((data:any)=>{
      console.log(data);
      this.partes =data;
    })
  }

}
