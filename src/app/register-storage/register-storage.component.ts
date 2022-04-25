import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AppService } from '../app.service';
import { MotorService } from '../services/motor/motor.service';
import { ParteService } from '../services/parte/parte.service';
import { TieneService } from '../services/tiene/tiene.service';

@Component({
  selector: 'app-register-storage',
  templateUrl: './register-storage.component.html',
  styleUrls: ['./register-storage.component.css']
})
export class RegisterStorageComponent implements OnInit {
  public formParent: FormGroup = new FormGroup({});
  motores: any[]=[];
  partes: any[]=[];

  constructor(private appService: TieneService, private serviceMotor : MotorService, private serviceParte: ParteService, private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initFormParent ();
    this.listMotor();
    this.listParte();
  }

  createStorage (){
    if (this.formParent.valid){
    this.appService.seveTiene(this.formParent.value).subscribe(()=>this.onResetForm());
    }
  }
  initFormParent (): void{
    this.formParent=this.formBuilder.group({
      id         :        new FormControl(null),
      cantidad:        new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[0-9]+$/)] )),
      motor :        new FormControl(null, Validators.compose([Validators.required])),
      parte :   new FormControl(null, Validators.compose([Validators.required])),
    });
  }

  onResetForm(){
    this.formParent.reset();
    this.listMotor();
    this.listParte();
  }
  listMotor (){
    this.serviceMotor.getMotor().subscribe((data:any)=>{
      this.motores =data;
    })
  }
  listParte (){
    this.serviceParte.getParte().subscribe((data:any)=>{
      this.partes =data;
    })
  }

  get cantidad(){ return this.formParent.get('cantidad')}
  get parte(){ return this.formParent.get('parte')}
  get motor(){ return this.formParent.get('motor')}

}
