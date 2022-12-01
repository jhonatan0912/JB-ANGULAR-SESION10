import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
  // si es true, nos permite ingresar a la direccion, sino nos redirecciona la ruta base {/}
  isUserLoggedIn() {
    return false
  }
}
