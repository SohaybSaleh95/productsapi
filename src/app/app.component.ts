import { Component } from '@angular/core';
import { HttpService } from './services/http/http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(http: HttpService){
    http.get("/categories/list.php").subscribe((data) => {
      console.log(data);
    });
  }
}
