import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { User } from '../models/user.model';
import { ColaboradoresComponent } from "../colaboradores/colaboradores.component";
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from '../register/register.component';
@Component({
  selector: 'app-usuario',
  imports: [CommonModule, ColaboradoresComponent, FormsModule, RegisterComponent],
  templateUrl: './usuario.component.html',
  styleUrl: './usuario.component.css',
  standalone: true
})
export class UsuarioComponent {

  foto: string;
  mostrardata: boolean;

  usuario: User = {
    _id: '1',
    name: "Toni",
    age: 40,
    email: "toni.oller@gmail.com",
  };

  constructor() {
    this.foto = "https://github.com/tonioller.png";
    this.mostrardata = false;
  }

  mostrardatos(){
    this.mostrardata = true;
  }

  getName(Name: string){
    this.usuario.name = Name;
  }

}
