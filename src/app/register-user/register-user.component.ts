import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ParteService } from '../services/parte/parte.service'; 

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {
  public formParent: FormGroup = new FormGroup({});


  constructor(private appService: ParteService ,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    this.initFormParent ();
  }
  initFormParent (): void{
    this.formParent=this.formBuilder.group({
      id         : new FormControl(null),
      nombre:        new FormControl(null, Validators.compose([Validators.required] )),
      descripcion :        new FormControl(null, Validators.compose([Validators.required])),
    });
  }  
  createUser(){
    if (this.formParent.valid){
    this.appService.seveParte(this.formParent.value).subscribe(()=>this.onResetForm());
    }
  }
  onResetForm(){
    
    this.formParent.reset();
    
  }
  get nombre(){ return this.formParent.get('nombre')}
  get descripcion(){ return this.formParent.get('descripcion')}
}
