import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { IndexComponent } from './index/index.component';
import { EncriptarComponent } from './encriptar/encriptar.component';
import { DesencriptarComponent } from './desencriptar/desencriptar.component';

export const routes: Routes = [
{ path: '', component: LoginComponent }, 
  { path: 'registro', component: RegistroComponent },
  { path: 'index', component: IndexComponent },
  { path: 'encriptar', component: EncriptarComponent },
  { path: 'desencriptar', component: DesencriptarComponent },
];
