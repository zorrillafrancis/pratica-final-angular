export interface response {
    value: any;
    succeeded: boolean;
    message: string;
    error: string;
}

export interface productos {
    id: number;
    descripcion: string;
    monto: number;
}

export interface Operacion {
    id: number;
    tipo: number | null;
    conceptoId: number;
    fecha: Date;
    descripcion: string;
    cantidad: number;
    monto: number;
}

export interface Consulta {
    id: number;
    tipo: number | null;
    conceptoId: number;
    fecha: Date;
    descripcion: string;
    concepto: string;
    cantidad: number;
    monto: number;
}

export interface ConsultaDTO {
    tipo: number | null;
    fecha: string;
    monto: number;
}