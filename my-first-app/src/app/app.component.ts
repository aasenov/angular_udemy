import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-first-app';
  displayDetails = false;
  buttonClicks = [];
  incrVal = 0;

  onDisplayDetails() {
    this.displayDetails = !this.displayDetails;
    this.buttonClicks.push(new
      Date()
      .toLocaleTimeString()
      .concat(" Details ")
      .concat(this.displayDetails
        ? "shown"
        : "hidden")
    )
    ;
  }
}
