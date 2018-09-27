import { Component, OnInit } from '@angular/core';
import { Iniciar } from '../store.actions';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-lanzamientos',
  templateUrl: './lanzamientos.component.html',
  styleUrls: ['./lanzamientos.component.css']
})
export class LanzamientosComponent implements OnInit {


  constructor(
    private store: StoreService
  ) { }


  ngOnInit() {

    this.store.dispatch(new Iniciar());

  }

}
