import { Component, EventEmitter, inject, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user.service';
import { CommonModule } from '@angular/common';
import { EventManagerPlugin } from '@angular/platform-browser';

@Component({
  selector: 'app-register',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  formularioRegister: FormGroup;
  usersService = inject(UserService);

  constructor(private form: FormBuilder){
    this.formularioRegister = this.form.group({
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required]],
      name: ['', [Validators.required]],
    })
  }

  @Output() registerUserEvent = new EventEmitter<void>();

  hasError(controlName:string, errorType:string){
    return this.formularioRegister.get(controlName)?.hasError(errorType) && this.formularioRegister.get(controlName)?.touched;
  }

  registerUser(){
    if(this.formularioRegister.invalid){
      this.formularioRegister.markAllAsTouched();
      return;
    }

    const registerData = this.formularioRegister.value;
    this.usersService.registerUser(registerData).subscribe();
  }
}
