import { Input, Output, EventEmitter, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lazy-child',
  templateUrl: './lazy-child.component.html',
  styleUrls: ['./lazy-child.component.css']
})
export class LazyChildComponent implements OnInit {

  @Input() nombre: string;
  @Input() vocacion: string;
  eliminado = false;

  @Output() eliminarHijo = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
  }
  
obtenerEstilo(){
  return this.eliminado ? 'line-through' : '';
  
}

  cambiarEstado(eliminar: boolean) {
    this.eliminarHijo.emit(eliminar);
    this.eliminado = eliminar;
  }

}
