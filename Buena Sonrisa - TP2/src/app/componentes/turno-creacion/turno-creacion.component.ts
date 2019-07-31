import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { UsuarioInterface, Perfil } from 'src/app/clases/Usuario';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { TurnoInterface, EstadoTurno } from 'src/app/clases/Turno';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { NotificationsService } from 'angular2-notifications';
import Swal from "sweetalert2";
import { take } from 'rxjs/operators';

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

  constructor(private fb: FormBuilder, private dataApi: DataApiService, private usuarioService: UsuarioService, private ns: NotificationsService) {
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
    this.dataApi.TraerTodos('consultorios').pipe(take(1)).subscribe(consultorios => {

      let consultorio = consultorios[Math.floor((Math.random() * 5))];
      let especialista = this.especialistaForm.value;
      let cliente = this.clienteForm.value;
      let creadoCliente = true;
      let UidRecepcionista = null;
      let NombreRecepcionista = null;

      if (this.perfil != Perfil.Cliente) {
        creadoCliente = false;
        UidRecepcionista = this.user.Uid;
        NombreRecepcionista = this.user.Nombre;
      }

      let turno: TurnoInterface = {
        UidCliente: cliente.Uid,
        NombreCliente: cliente.Nombre,
        UidEspecialista: especialista.Uid,
        NombreEspecialista: especialista.Nombre,
        Especialidad: especialista.Especialidad,
        Fecha: this.fechaForm.value,
        Estado: EstadoTurno.Pendiente,
        Encuesta: null,
        ObservacionesEspecialista: "",
        Consultorio: consultorio.Codigo,
        ConsultorioId: consultorio.id,
        CreadoPorCliente: creadoCliente,
        UidRecepcionista: UidRecepcionista,
        NombreRecepcionista: NombreRecepcionista
      }

      this.dataApi.AgregarUno(turno, 'turnos');

      Swal.fire(
        'Se creó el turno con éxito!',
        `El turno será el día ${turno.Fecha.toLocaleDateString()} en el consultorio: ${turno.Consultorio}.`,
        'success'
      )
    });
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