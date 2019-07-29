import { EncuestaInterface } from './Encuesta';

export enum EstadoTurno {
    Pendiente = 'Pendiente',
    Cancelado = 'Cancelado',
    Finalizado = 'Finalizado'
}

export interface TurnoInterface {
    UidCliente: string;
    NombreCliente: string;
    UidEspecialista: string;
    NombreEspecialista: string;
    Fecha: Date;
    Estado: EstadoTurno;
    Encuesta: EncuestaInterface;
    ObservacionesEspecialista: string;
    Sala: string;
    SalaId: string;
}