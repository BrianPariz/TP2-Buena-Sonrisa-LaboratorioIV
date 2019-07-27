import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { TurnoInterface, EstadoTurno } from 'src/app/clases/Turno';
import { MatTableDataSource } from '@angular/material';
import { UsuarioService } from 'src/app/servicios/Usuario.service';
import { map } from 'rxjs/operators';
import { Perfil } from 'src/app/clases/Usuario';

@Component({
  selector: 'app-turno-lista',
  templateUrl: './turno-lista.component.html',
  styleUrls: ['./turno-lista.component.scss']
})
export class TurnoListaComponent implements OnInit {

  private columsCliente: string[] = ['NombreEspecialista', 'Fecha', 'Estado', 'Encuesta'];
  private columsRecepcionista: string[] = ['NombreEspecialista', 'NombreCliente', 'Fecha', 'Estado', 'CancelarTurno'];
  private columsEspecialista: string[] = ['NombreCliente', 'Fecha', 'Estado', 'FinalizarTurno'];

  private perfil;
  private turnos: TurnoInterface[];
  private dataSource = new MatTableDataSource(this.turnos);
  private noData = this.dataSource.connect().pipe(map((data: any[]) => data.length === 0));

  constructor(private dataApi: DataApiService, private usuarioService: UsuarioService) {
    this.perfil = this.usuarioService.usuario.Perfil;
  }

  ngOnInit() {
    this.dataApi.TraerTodos('turnos')
      .subscribe(turnos => {
        if (this.perfil == Perfil.Cliente)
          this.turnos = turnos.filter(x => x.UidCliente == this.usuarioService.usuario.Uid);
        else if (this.perfil == Perfil.Recepcionista)
          this.turnos = turnos;
        else if (this.perfil == Perfil.Especialista)
          this.turnos = turnos.filter(x => x.UidEspecialista == this.usuarioService.usuario.Uid);;

        this.dataSource = new MatTableDataSource(this.turnos);
        this.noData = this.dataSource.connect().pipe(map((data: any[]) => data.length === 0));
      });
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  cancelarTurno(turno) {
    turno.Estado = EstadoTurno.Cancelado;
    this.dataApi.ModificarUno(turno, 'turnos');
  }

  finalizarTurno(turno) {
    //modal
  }
}
