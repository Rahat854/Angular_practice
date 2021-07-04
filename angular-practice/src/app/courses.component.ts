import { CourseService } from "./courses.service";
import { Component } from "@angular/core";
@Component({
  selector: 'courses',
  template: `
  <h2>{{ title }}</h2>
  <img src = "{{imageUrl}}"/>
  <table>
    <tr>
      <td [attr.colSpan] = "colSpan"></td>
    </tr>
  </table>
  `
})
export class CoursesComponent {
  title = "List of courses"
  imageUrl = "https://images.pexels.com/photos/5391353/pexels-photo-5391353.jpeg?cs=srgb&dl=pexels-antonio-prado-5391353.jpg&fm=jpg"
  colSpan = 2
  //Logic for calling an HTTP service
}
