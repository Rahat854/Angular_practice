import { CourseService } from "./courses.service";
import { Component } from "@angular/core";
@Component({
  selector: 'courses',
  template: `
  <!-- <h2>{{ title }}</h2>
  <div (click) = "onDivClicked()">
  <button (click) = "onSave($event)">Add</button>
  </div> -->
  <input (keyup.enter) = "onKeyUp()" />
  `
})
export class CoursesComponent {
  // title = "List of courses"
  // colSpan = 2
  // isActive = true
  // onDivClicked() {
  //   console.log('Div is clicked')
  // }
  // onSave($event: any) {
  //   $event.stopPropagation()
  //   console.log('Button is clicked',$event)
  // }
  // //Logic for calling an HTTP service
  onKeyUp() {
      console.log('enter was pressed')
  }
}
