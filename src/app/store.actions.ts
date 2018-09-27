export enum ActionTypes {
  iniciar,
  cambiarCriterio,
  filtrar
}
export interface Action {
  readonly type: ActionTypes;
  readonly payload?: any;
}

export class Iniciar implements Action {
  public type = ActionTypes.iniciar;
  constructor(public readonly payload?: any) { }
}
export class CambiarCriterio implements Action {
  public type = ActionTypes.cambiarCriterio;
  constructor(public readonly payload?: any) { }
}

export class Filtrar implements Action {
  public type = ActionTypes.filtrar;
  constructor(public readonly payload?: any) { }
}

export type Actions = Iniciar | CambiarCriterio | Filtrar;
