import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-empleados-estadistica',
  templateUrl: './empleados-estadistica.component.html',
  styleUrls: ['./empleados-estadistica.component.scss']
})
export class EmpleadosEstadisticaComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }

  displayedColumns: string[] = ['Empleado', 'Dia', 'Horario'];
  columnsToDisplay: string[] = this.displayedColumns.slice();
  data;

  ngOnInit() {
    this.dataApi.TraerTodos('logs')
      .subscribe(logs => {
        this.data = new MatTableDataSource(logs);
      });
  }
}
