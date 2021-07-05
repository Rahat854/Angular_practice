import { CourseService } from "./courses.service";
import { Component } from "@angular/core";

@Component({
  selector: 'courses',
  template: `
  <!-- <h2>{{ title }}</h2>
  <div (click) = "onDivClicked()">
  <button (click) = "onSave($event)">Add</button>
  </div> -->
  <!-- <input [(ngModel)]="Email" (keyup.enter)="onKeyUp()" /> -->
  <!-- {{course.title | uppercase |lowercase}} <br>
  {{course.student| number}}<br>
  {{course.rating | number: '1.1-1'}} <br>
  {{course.price| currency:'BDT ':true:'3.1-1'}}<br>
  {{course.releaseDate| date: 'shortDate'}} -->
  {{text | summary: 10}}
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
  // Email = "me@gmail.com"
  // onKeyUp() {
  //     console.log(this.Email)
  // }
  // course = {
  //   title: "The Complete Angular Course",
  //   rating: 4.9745,
  //   student: 30123,
  //   price : 190.95,
  //   releaseDate : new Date(2016, 3, 1)
  // }
  text = `Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
  `
}
