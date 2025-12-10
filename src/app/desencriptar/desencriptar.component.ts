import { Component } from '@angular/core';
import { CryptoService } from '../services/crypto.service';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-desencriptar',
  standalone: true,
  imports: [ HeaderComponent, FormsModule,CommonModule ],
  templateUrl: './desencriptar.component.html',
  styleUrl: './desencriptar.component.css'
})
export class DesencriptarComponent {

   cipher = '';
  resultado = '';
  error = '';

  constructor(private crypto: CryptoService) {}

  desencriptar() {
    this.error = '';
    this.resultado = '';

    if (!this.cipher.trim()) {
      this.error = 'Debe escribir un texto encriptado.';
      return;
    }

    try {
      const des = this.crypto.decryptAES(this.cipher);

      if (!des) {
        this.error = 'El texto encriptado no es válido o no existe.';
        return;
      }

      this.resultado = des;

    } catch (e) {
      this.error = 'El texto encriptado no es válido.';
    }
  }

}
