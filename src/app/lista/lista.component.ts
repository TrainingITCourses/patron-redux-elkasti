import { Component, OnInit } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  public launches = this.store.select$();

  constructor(
    private store: StoreService
  ) { }

  ngOnInit() {  }

}
