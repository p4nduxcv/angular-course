import { Component, EventEmitter, input, OnInit, Output } from "@angular/core";
import { Course } from "../model/course";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@Component({
  selector: "course-card",
  imports: [BrowserAnimationsModule],
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
})
export class CourseCardComponent implements OnInit {
  course = input<Course>();
  index = input();
  @Output() courseSelected = new EventEmitter<string>();

  startDate = new Date(2000, 0, 1);

  constructor() {}

  ngOnInit(): void {}

  onCourseViewd() {
    this.courseSelected.emit(this.course().description);
  }

  cardClasses() {
    return {
      beginner: this.course().category == "BEGINNER",
    };
  }
}
