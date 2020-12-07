import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UsuarioLogin} from '../model/UsuarioLogin'
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuarioLogin: UsuarioLogin = new UsuarioLogin()

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit() {  
  }
  
  entrar(){
    this.authService.logar(this.usuarioLogin).subscribe((resp: UsuarioLogin)=> {
      this.usuarioLogin = resp
      localStorage.setItem('token', this.usuarioLogin.token)
      this.router.navigate(['/home'])      
    })
  }
}
