import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioInterface, Perfil } from 'src/app/clases/Usuario';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { TurnoInterface, EstadoTurno } from 'src/app/clases/Turno';
import { UsuarioService } from 'src/app/servicios/Usuario.service';

@Component({
  selector: 'app-turno-creacion',
  templateUrl: './turno-creacion.component.html',
  styleUrls: ['./turno-creacion.component.scss']
})
export class TurnoCreacionComponent implements OnInit {

  minDate = new Date(Date.now());
  especialistas: UsuarioInterface[];
  clientes: UsuarioInterface[];
  mostrar = true;
  private perfil;
  private user;

  fechaForm = new FormControl('', [Validators.required]);
  especialistaForm = new FormControl('', Validators.required);
  clienteForm = new FormControl('', Validators.required);

  constructor(private fb: FormBuilder, private dataApi: DataApiService, private usuarioService: UsuarioService) {
    this.perfil = this.usuarioService.usuario.Perfil;
    this.user = this.usuarioService.usuario;
  }

  ngOnInit() {
    this.especialistas = [];
    this.clientes = [];

    if (this.perfil == Perfil.Cliente) {
      this.clienteForm.setValue(this.user);
    }

    this.TraerClientes();
  }

  CrearTurno() {
    debugger;
    let especialista = this.especialistaForm.value;
    let cliente = this.clienteForm.value;

    let turno: TurnoInterface = {
      UidCliente: cliente.Uid,
      NombreCliente: cliente.Nombre,
      UidEspecialista: especialista.Uid,
      NombreEspecialista: especialista.Nombre,
      Fecha: this.fechaForm.value,
      Estado: EstadoTurno.Pendiente
    }

    this.dataApi.AgregarUno(turno, 'turnos');
  }

  TraerClientes() {
    this.dataApi.TraerTodos('usuarios').subscribe(usuarios => {
      this.clientes = usuarios.filter(x => x.Perfil == Perfil.Cliente && x.Activo);
    });
  }

  // countDuplicates(original) {
  //   const uniqueItems = new Set();
  //   const duplicates = new Set();
  //   for (const value of original) {
  //     if (uniqueItems.has(value)) {
  //       duplicates.add(value);
  //       uniqueItems.delete(value);
  //     } else {
  //       uniqueItems.add(value);
  //     }
  //   }
  //   return duplicates.size;
  // }

  TraerEspecialistasPorFecha() {
    this.especialistaForm.setValue(null);
    this.dataApi.TraerTodos('usuarios').subscribe(usuarios => {
      this.especialistas = usuarios.filter(x => x.Perfil == Perfil.Especialista && x.Activo);
    });

    //TODO TERMINAR ESTO
    // this.dataApi.TraerTodos('turnos')
    //   .subscribe(turnos => {
    //     var auxEspecialistas = [];
    //     var auxTurnos = [];
    //     var countTurnosSameDate;
    //     this.especialistas.forEach((especialista) => {
    //       auxTurnos = turnos.filter(x => x.UidEspecialista == especialista.Uid);

    //       if (auxTurnos.length < 2)
    //         auxEspecialistas.push(especialista);
    //     });

    //     this.especialistas = auxEspecialistas;
    //   });
  }
}