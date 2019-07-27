import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { MateriaListaComponent } from '../materia-lista/materia-lista.component';
// import { MateriaInterface } from 'src/app/clases/Materia';

@Component({
  selector: 'app-modal-encuesta',
  templateUrl: './modal-encuesta.component.html',
  styleUrls: ['./modal-encuesta.component.scss']
})
export class ModalEncuestaComponent {

  // private materia: MateriaInterface;

  // constructor(public dialogRef: MatDialogRef<MateriaListaComponent>,
  //   @Inject(MAT_DIALOG_DATA) public _materia: MateriaInterface) {
  //   this.materia = _materia["materia"];
  // }

  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}