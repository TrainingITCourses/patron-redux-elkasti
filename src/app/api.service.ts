import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { enCampo } from './lanzamientos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  public getLaunches$ = (): Observable<any[]> => {
    return this.http.get('http://localhost:4200/assets/launchlibrary.json')
      .pipe(
        map((res: any) => res.launches)
      );
  }

  public getData$ = (campo: enCampo): Observable<any[]> => {

    let url = '';
    let tipo = 'types';
    switch (campo) {
      case enCampo.mision:
        url = 'http://localhost:4200/assets/launchmissions.json';
        break;
      case enCampo.agencia:
        url = 'http://localhost:4200/assets/launchagencies.json';
        tipo = 'agencies';
        break;
      case enCampo.estado:
        url = 'http://localhost:4200/assets/launchstatus.json';
        break;
    }

    return this.http.get(url)
      .pipe(
        map((res: any) => res[tipo])
      );

  }
}
