import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }

  logar(usuarioLogin: UsuarioLogin) : Observable<UsuarioLogin> {

    return this.http.post<UsuarioLogin>('https://oivendaverde.herokuapp.com/usuarios/logar', usuarioLogin)
  }

  cadastrar(usuario: Usuario) : Observable<Usuario> {
    return this.http.post<Usuario>('https://oivendaverde.herokuapp.com/usuarios/cadastrar', usuario)
  }

  btnSair(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token != null){ok = true} return ok
  }

  btnLogin(){
    let ok = false
    let token = localStorage.getItem('token')

    if(token == null){ok = true} return ok
  }

  userAdmin(){
    let ok = false
    let admin = environment.admin

    if(admin == true){ok = true}else{ok = false} return ok
  }
}