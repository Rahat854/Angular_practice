import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
 @Input('isFav') isFavorite: boolean = false
 @Output() change = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isFavorite = !this.isFavorite
    this.change.emit()
  }

}
