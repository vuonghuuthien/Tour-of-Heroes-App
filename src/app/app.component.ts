import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tour of heroes';
  evilTitle = 'Template <script>alert("evil never sleeps")</script> Syntax';
  color = 'red';
}
   