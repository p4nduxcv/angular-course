import { Component, ViewChild } from "@angular/core";
import { COURSES } from "../db-data";
import { CourseCardComponent } from "./course-card/course-card.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  // coreCourse = COURSES[0];
  // rxjsCourse = COURSES[1];
  // ngrxCourse = COURSES[2];
  // courses = [...COURSES];
  courses = COURSES;

  @ViewChild(CourseCardComponent) card: CourseCardComponent;

  onCourseSelected(e: any) {
    console.log("epa", e);
    console.log(this.card);
  }
}
