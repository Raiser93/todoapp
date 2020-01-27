import { Action } from '@ngrx/store';

export const SET_FILTER = '[Filter] Set filtro';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFiltroActions implements Action {

    readonly type = SET_FILTER;

    constructor(public filtro: filtrosValidos) {}

}

export type acciones = SetFiltroActions;
