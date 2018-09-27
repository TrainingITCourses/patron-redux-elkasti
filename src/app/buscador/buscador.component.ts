import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';
import { CambiarCriterio, Filtrar } from '../store.actions';
import { CriterioBusqueda } from '../lanzamientos';

@Component({
    selector: 'app-buscador',
    templateUrl: './buscador.component.html',
    styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

    public lista = this.store.selectLista$();

    criterio: CriterioBusqueda = new CriterioBusqueda();

    constructor(
        private store: StoreService
    ) { }

    ngOnInit() {
    }

    campo(event: any) {

        this.criterio.campo = Number(event.target.value);
        this.store.dispatch(new CambiarCriterio(this.criterio));
    }

    buscar(event: any) {

        this.criterio.valor = Number(event.target.value);
        this.store.dispatch(new Filtrar(this.criterio));

    }


}
