import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  username: string ='';

  isUsernameEmpty() {
    if (this.username.length == 0) {
      return true;
    }
  }

  resetUsername() {
    this.username = '';
  }
}
