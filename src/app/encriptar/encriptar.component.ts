import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-encriptar',
  standalone: true,
  imports: [FormsModule,CommonModule,  HeaderComponent,CommonModule],
  templateUrl: './encriptar.component.html',
  styleUrl: './encriptar.component.css'
})
export class EncriptarComponent {

  texto = '';
  resultado = '';
  error = '';

  constructor(private crypto: CryptoService) {}

  encriptar() {
    this.error = '';
    this.resultado = '';

    if (!this.texto.trim()) {
      this.error = 'Escribe un texto antes de encriptar.';
      return;
    }

    this.resultado = this.crypto.encryptAES(this.texto);
  }

}
