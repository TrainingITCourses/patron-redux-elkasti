import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Actions, ActionTypes } from './store.actions';
import { reducer } from './store.reducer';
import { ApiService } from './api.service';
import { enCampo } from './lanzamientos';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private launches: any[];

  private filteredLaunches: any[];
  private filteredLaunches$ = new Subject<any[]>();

  private lista: any[];
  private lista$ = new Subject<any[]>();


  constructor(
    private api: ApiService,
  ) { }

  public dispatch = (action: Actions) => {
    switch (action.type) {
      case ActionTypes.iniciar:

        this.api.getLaunches$().subscribe(
          (res: any[]) => {
            this.launches = res;
            this.filteredLaunches = res;
            this.filteredLaunches$.next(this.getfilteredLaunchesSnapshot());
          }
        );

        break;
      case ActionTypes.cambiarCriterio:
        switch (action.payload.campo) {
          case enCampo.ninguno:
            break;
          default:
            this.api.getData$(action.payload.campo).subscribe(
              res => {
                this.lista = res;
                this.lista$.next(this.getListaSnapshot());
              }
            );
            break;
        }
        this.filteredLaunches = this.launches;
        this.filteredLaunches$.next(this.getfilteredLaunchesSnapshot());

        break;
      case ActionTypes.filtrar:
        this.filteredLaunches = reducer(this.launches, action);
        this.filteredLaunches$.next(this.getfilteredLaunchesSnapshot());
        break;
    }
  }

  public getfilteredLaunchesSnapshot = (): any[] => {
    return [...this.filteredLaunches];
  }

  public getListaSnapshot = (): any[] => {
    return [...this.lista];
  }

  public select$ = () => this.filteredLaunches$.asObservable();
  public selectLista$ = () => this.lista$.asObservable();


}
