import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rapidcar';

  blur:boolean = false

  toggleBlur($event:any) {
    this.blur = $event
    console.log($event)
  }
}
