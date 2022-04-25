import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { TieneService } from '../services/tiene/tiene.service';
import { MotorService } from '../services/motor/motor.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';




@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.css']
})
export class ShowProductsComponent implements OnInit {
  motores: any[]=[];
  partes: any[]=[];
  constructor(private appService: TieneService, private motorService:MotorService, private modal:NgbModal) { }

  ngOnInit(): void {
    this.listMotor();
  }

  listMotor (){
    this.motorService.getMotor().subscribe((data:any)=>{
      this.motores =data;
    })
  }
   listPartes (id :any){
     console.log("hola")
    this.appService.getTiene(id).subscribe((data:any)=>{
      console.log(data);
      this.partes =data;
    })
  }

  open(contenido:any, id:any){
    this.listPartes(id)
    this.modal.open(contenido,{size:'xl'})
  }

}
