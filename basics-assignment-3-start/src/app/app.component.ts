import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayDetails = false;
  clickNumber = 0;
  clickLogs = [];

  toggleDetails() {
    this.displayDetails = !this.displayDetails;
    this.clickLogs.push("button clicked #" + ++this.clickNumber + ": "  + new Date());
  }

  getBgColor(i: number) {
    return i >= 4 ? 'blue' : '';
  }
}
