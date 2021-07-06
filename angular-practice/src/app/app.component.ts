import { Component } from '@angular/core';
import { FavChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  post = {
    title: "Title",
    isFavorite : true
  }
  onFavoriteChanged(eventArgs: FavChangedEventArgs) {
    console.log("favorite changed", eventArgs)
  }
}
