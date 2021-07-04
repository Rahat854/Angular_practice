import { CourseService } from "./courses.service";
import { Component } from "@angular/core";
@Component({
  selector: 'courses',
  template: `
  <h2>{{ title }}</h2>
  <button class = "btn btn-primary">Add</button>
  `
})
export class CoursesComponent {
  title = "List of courses"
  colSpan = 2
  //Logic for calling an HTTP service
}
