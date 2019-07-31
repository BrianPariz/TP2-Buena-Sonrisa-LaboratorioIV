import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { NotificationsService } from 'angular2-notifications';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { EstadoTurno } from 'src/app/clases/Turno';
import { Especialidad, Perfil } from 'src/app/clases/Usuario';
import { TurnosClientesInterface } from 'src/app/clases/TurnosClientes';

@Component({
  selector: 'app-turnos-estadistica',
  templateUrl: './turnos-estadistica.component.html',
  styleUrls: ['./turnos-estadistica.component.scss']
})
export class TurnosEstadisticaComponent implements OnInit {

  turnos;
  usuarios;
  turnosClientes: TurnosClientesInterface[];
  turnosRecepcionistas: TurnosClientesInterface[];
  panelOpenState = false;
  fechaDesdeForm = new FormControl('', [Validators.required]);
  fechaHastaForm = new FormControl('', [Validators.required]);
  resultTurnosCount = "Ingrese dos fechas";

  countDen = 0;
  countDer = 0;
  countPsi = 0;
  countOnc = 0;
  countDenCancel = 0;
  countDerCancel = 0;
  countPsiCancel = 0;
  countOncCancel = 0;

  constructor(private ns: NotificationsService, private dataApi: DataApiService) { }

  ngOnInit() {
    this.dataApi.TraerTodos("turnos").subscribe(turnos => {
      if (turnos) {
        this.turnos = turnos;
        this.cargarTurnosLists();
      }
    });

    this.dataApi.TraerTodos("usuarios").subscribe(usuarios => {
      if (usuarios) {
        this.usuarios = usuarios;
        this.cargarClientesLists();
        this.cargarRecepcionistasLists();
      }
    });
  }

  buscarTurnos() {
    var fechaDesde = this.fechaDesdeForm.value;
    var fechaHasta = this.fechaHastaForm.value;

    if (fechaDesde > fechaHasta) {
      this.ns.alert("Fecha desde no puede ser mayor que fecha hasta");
      return;
    }

    var turnosList;
    turnosList = this.turnos.filter(x => x.Fecha.toDate() >= fechaDesde && x.Fecha.toDate() <= fechaHasta);
    this.resultTurnosCount = "Cantidad de turnos entre las fechas dadas: " + turnosList.length;
  }

  cargarTurnosLists() {
    this.countDen = this.turnos.filter(x => x.Especialidad == Especialidad.Odontologia).length;
    this.countDer = this.turnos.filter(x => x.Especialidad == Especialidad.Dermatologia).length;
    this.countPsi = this.turnos.filter(x => x.Especialidad == Especialidad.Psicologia).length;
    this.countOnc = this.turnos.filter(x => x.Especialidad == Especialidad.Oncologia).length;

    this.countDenCancel = this.turnos.filter(x => x.Especialidad == Especialidad.Odontologia && x.Estado == EstadoTurno.Cancelado).length;
    this.countDerCancel = this.turnos.filter(x => x.Especialidad == Especialidad.Dermatologia && x.Estado == EstadoTurno.Cancelado).length;
    this.countPsiCancel = this.turnos.filter(x => x.Especialidad == Especialidad.Psicologia && x.Estado == EstadoTurno.Cancelado).length;
    this.countOncCancel = this.turnos.filter(x => x.Especialidad == Especialidad.Oncologia && x.Estado == EstadoTurno.Cancelado).length;
  }

  cargarClientesLists() {
    this.turnosClientes = [];

    this.usuarios.forEach(element => {
      if (element.Perfil == Perfil.Cliente) {
        let turnosCount = this.turnos.filter(x => x.CreadoPorCliente && x.NombreCliente == element.Nombre).length;
        let turno = {
          Nombre: element.Nombre,
          CountTurnos: turnosCount
        }
        this.turnosClientes.push(turno);
      }
    });
  }

  cargarRecepcionistasLists() {
    this.turnosRecepcionistas = [];

    this.usuarios.forEach(element => {
      if (element.Perfil == Perfil.Recepcionista) {
        let turnosCount = this.turnos.filter(x => !x.CreadoPorCliente && x.NombreRecepcionista == element.Nombre).length;
        let turno = {
          Nombre: element.Nombre,
          CountTurnos: turnosCount
        }
        this.turnosRecepcionistas.push(turno);
      }
    });
  }
}
