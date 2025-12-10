import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [ ReactiveFormsModule,FormsModule],
  templateUrl: './registro.component.html',
  styleUrl: './registro.component.css'
})
export class RegistroComponent {
  showPassword1 = false;
  showPassword2 = false;
  registroForm!: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registroForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      contraseña: ['', Validators.required],
      confirmar: ['', Validators.required]
    });
  }

  togglePassword1() {
    this.showPassword1 = !this.showPassword1;
  }

  togglePassword2() {
    this.showPassword2 = !this.showPassword2;
  }

  registrar() {

    if (this.registroForm.invalid) {
      alert("Completa todos los campos.");
      return;
    }

    if (this.registroForm.value.contraseña !== this.registroForm.value.confirmar) {
      alert("Las contraseñas no coinciden.");
      return;
    }

    const datos = {
      nombre: this.registroForm.value.nombre,
      correo: this.registroForm.value.correo,
      password: this.registroForm.value.contraseña
    };

    this.http.post("https://localhost:7075/api/User/registrar", datos)
      .subscribe({
        next: (res) => {
          alert("Usuario registrado correctamente.");
        },
        error: (err) => {
          alert("Error al registrar.");
          console.error(err);
        }
      });

  }

}
