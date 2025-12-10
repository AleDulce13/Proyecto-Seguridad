import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class CryptoService {

  key = '123_XD';

  // ENCRIPTAR
  encryptAES(text: string): string {
    return CryptoJS.AES.encrypt(text, this.key).toString();
  }

  // DESENCRIPTAR
  decryptAES(cipher: string): string {
    let bytes = CryptoJS.AES.decrypt(cipher, this.key);
    return bytes.toString(CryptoJS.enc.Utf8);
  }
}
