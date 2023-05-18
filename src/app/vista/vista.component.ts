import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})
export class VistaComponent implements OnInit {

  lista : any[]=[] ;
  constructor( private categoriaList: ServiceService) { }

  ngOnInit(): void {

    this.categoriaList.getCategorias()
    .subscribe( lista => this.lista = lista); 
    console.log(this.lista);
  }

}
