import { Component, EventEmitter, input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  imports: [],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  course = input<Course>();
  @Output() courseSelected = new EventEmitter<string>();

  constructor() {}

  ngOnInit(): void {}

  onCourseViewd() {
    this.courseSelected.emit(this.course().description);
  }
}
