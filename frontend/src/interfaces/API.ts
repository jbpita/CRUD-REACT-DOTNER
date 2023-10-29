// Generated by https://quicktype.io

export interface APIResponse<T> {
    succeeded: boolean;
    message:   string;
    data:      T;
    errors:    Errors;
}

export interface PageTable<T> {
    items:      T[];
    totalCount: number;
    pageNumber: number;
    pageSize:   number;
}

export interface Cargo {
    createdAt:         string;
    updatedAt:         string;
    deletedAt:         string;
    id:                number;
    codigo:            string;
    nombre:            string;
    activo:            boolean;
    idUsuarioCreacion: number;
}

export interface Departamento {
    createdAt:         string;
    updatedAt:         string;
    deletedAt:         string;
    id:                number;
    codigo:            string;
    nombre:            string;
    activo:            boolean;
    idUsuarioCreacion: number;
}

export interface Errors {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
}


export interface Usuario {
    createdAt:       string;
    updatedAt:       string;
    deletedAt:       string;
    id:              number;
    usuario:         string;
    primerNombre:    string;
    segundoNombre:   string;
    primerApellido:  string;
    segundoApellido: string;
    correo:          string;
    idCargo:         number;
    idDepartamento:  number;
    departamento:    Departamento;
    cargo:           Cargo;
}


// API REQUEST

export interface APIRequestCargos {
    pageNumber: number;
    pageSize:   number;
    search:     string;
}