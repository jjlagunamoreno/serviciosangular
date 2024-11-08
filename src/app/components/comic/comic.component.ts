import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Comic } from '../../models/Comic';
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrl: './comic.component.css'
})
export class ComicComponent {
  @Input() comic!: Comic;
  @Output() seleccionarFavorito: EventEmitter<any> = new EventEmitter();
  marcarFavorito() {
    this.seleccionarFavorito.emit(this.comic);
  }
}