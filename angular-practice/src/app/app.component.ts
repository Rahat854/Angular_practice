import { Component } from '@angular/core';
import { FavChangedEventArgs } from './favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  courses = [
    {
      id: 1, name: 'course1'
    },
    {
      id: 2, name: 'course2'
    },
    {
      id: 3, name: 'course3'
    }
  ]
  onAdd() {
    this.courses.push({id:4, name: 'course4'})
  }
  onRemove(course: any) {
    let index  = this.courses.indexOf(course)
    this.courses.splice(index, 1)
  }
  onChange(course: any) {
    course.name = 'Updated'
  }
}

