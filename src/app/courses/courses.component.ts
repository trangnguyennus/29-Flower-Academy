import { Component, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses-services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  courses = [];
  errorMsg:string;

  constructor(private employeeService:CoursesService) { }

  ngOnInit() {
      this.employeeService.getEmployees()
          .subscribe(data => this.courses = data,
                     error => this.errorMsg = error);
  }

}
