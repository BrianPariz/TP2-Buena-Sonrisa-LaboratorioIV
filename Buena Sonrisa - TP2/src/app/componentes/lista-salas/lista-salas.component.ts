import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { MatTableDataSource } from '@angular/material';
import { SalaInterface, EstadoSala } from 'src/app/clases/Sala';

@Component({
  selector: 'app-lista-salas',
  templateUrl: './lista-salas.component.html',
  styleUrls: ['./lista-salas.component.scss']
})
export class ListaSalasComponent implements OnInit {

  private displayedColumns: string[] = ['Codigo', 'Estado', 'Ocupar'];
  private salas: SalaInterface[];
  private dataSource;

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.dataApi.TraerTodos('salas')
      .subscribe(salas => {
        this.salas = salas;
        this.dataSource = new MatTableDataSource(this.salas);
      });
  }

  ocupar(id) {
    let sala = this.salas.filter(x => x.id == id)[0];

    if (sala) {
      sala.Estado = EstadoSala.Ocupada;
      this.dataApi.ModificarUno(sala, 'salas');
      this.salas.find(x => x.id == id).Estado = EstadoSala.Ocupada;
    }
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}