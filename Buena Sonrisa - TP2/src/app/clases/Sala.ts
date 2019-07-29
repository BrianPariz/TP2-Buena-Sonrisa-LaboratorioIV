export enum EstadoSala {
    Libre = "Libre",
    Ocupada = "Ocupada",
}

export interface SalaInterface {
    id: string;
    Codigo: string;
    Estado: EstadoSala;
}