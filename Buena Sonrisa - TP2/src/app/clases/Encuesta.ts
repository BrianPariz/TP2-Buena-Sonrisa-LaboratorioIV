export enum EstadoTurno {
    "Muy mala" = 1,
    "Mala" = 2,
    "Normal" = 3,
    "Buena" = 4,
    "Muy buena" = 5
}

export interface EncuestaInterface {
    NombreCliente: string;
    UidCliente: string;
    NombreEspecialista: string;
    UidEspecialista: string;
    Puntuacion: EstadoTurno;
    Opinion: string;
}