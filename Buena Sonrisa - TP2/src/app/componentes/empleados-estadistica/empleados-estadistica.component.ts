import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/servicios/DataApi.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-empleados-estadistica',
  templateUrl: './empleados-estadistica.component.html',
  styleUrls: ['./empleados-estadistica.component.scss']
})
export class EmpleadosEstadisticaComponent implements OnInit {

  private displayedColumns: string[] = ['Nombre', 'Nombre', 'Email'];
  private empleadosEst;
  private dataSource;

  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.dataApi.TraerTodos('estEmpleados')
      .subscribe(estempl => {
        this.empleadosEst = estempl;
        this.dataSource = new MatTableDataSource(this.empleadosEst);
      });
  }
}
