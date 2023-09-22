import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  registeredCourse = '';
  registerCourse(courseName: string) {
    this.registeredCourse = `Congratulations you have successfully registered for ${courseName}`;
  }
}
