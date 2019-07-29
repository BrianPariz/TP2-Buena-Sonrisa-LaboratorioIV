import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailModel: string;
  passwordModel: string;

  constructor(private usuarioService: UsuarioService, private router: Router, private ns: NotificationsService) {
    this.emailModel = "";
    this.passwordModel = "";
  }

  ngOnInit() { }

  Logearse() {
    this.usuarioService.LogearUsuario(this.emailModel, this.passwordModel);
  }

  testAdmin() {
    this.emailModel = "brianpariz@hotmail.com";
    this.passwordModel = "olaquetal";
  }

  testRecepcionista() {
    this.emailModel = "pedro@gmail.com";
    this.passwordModel = "olaquetal";
  }

  testCliente() {
    this.emailModel = "rodo@gmail.com";
    this.passwordModel = "olaquetal";
  }

  testEspecialista() {
    this.emailModel = "adolfo@gmail.com";
    this.passwordModel = "olaquetal";
  }

}
