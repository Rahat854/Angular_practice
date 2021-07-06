import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})
export class FavoriteComponent implements OnInit {
 @Input('isFav') isFavorite: boolean = false
 @Output('change') click = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  onClick() {
    this.isFavorite = !this.isFavorite
    this.click.emit({newValue: this.isFavorite})
  }

}
export interface FavChangedEventArgs{
  newValue : boolean
}
