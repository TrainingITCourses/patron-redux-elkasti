import { Actions, ActionTypes } from './store.actions';
import { enCampo } from './lanzamientos';

export function reducer(state: any, action: Actions): any {
  let result = [...state];
  switch (action.type) {
    case ActionTypes.filtrar:
      if (action.payload && action.payload.valor) {
        switch (action.payload.campo) {
          case enCampo.mision:
            result = result.filter(
              launch => launch.missions && launch.missions.some(elem => elem.id === action.payload.valor)
            );
            break;
          case enCampo.agencia:
            result = result.filter(
              launch => launch.rocket && launch.rocket.agencies && launch.rocket.agencies.some(elem => elem.id === action.payload.valor)
            );
            break;
          case enCampo.estado:
            result = result.filter(
              launch => launch.status === action.payload.valor
            );
            break;
        }
      }
  }
  return result;
}
