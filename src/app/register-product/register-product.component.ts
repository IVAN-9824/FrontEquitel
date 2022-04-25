import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MotorService } from '../services/motor/motor.service';





@Component({
  selector: 'app-register-product',
  templateUrl: './register-product.component.html',
  styleUrls: ['./register-product.component.css']
})

export class RegisterProductComponent implements OnInit {

  motores: any[]=[];
  public formParent: FormGroup = new FormGroup({});
  pattern: any ;
  ok: boolean =false;
  
  constructor(private appService: MotorService, private formBuilder:FormBuilder) {
  
   }
  

  ngOnInit(): void {
    this.initFormParent();
    
  }
  leerForm () : void{
    if (this.formParent.valid){
    this.appService.saveMotor(this.formParent.value).subscribe(()=>this.onResetForm());
    }
  }

  initFormParent (): void{
  this.formParent=this.formBuilder.group({
    ref         :        new FormControl(null, Validators.compose([Validators.required] )),
    potencia:        new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[0-9]+$/)] )),
    descripcion :        new FormControl(null, Validators.compose([Validators.required])),
    valorImportacion :   new FormControl(null, Validators.compose([Validators.required,Validators.pattern(/^[0-9]+$/)])),
   })
  }

  onResetForm(){
    this.formParent.reset()
  }

 
  
  

  get ref(){ return this.formParent.get('ref')}
  get potencia(){ return this.formParent.get('potencia')}
  get descripcion(){ return this.formParent.get('descripcion')}
  get valorImportacion(){ return this.formParent.get('valorImportacion')}
  


 
  

}


