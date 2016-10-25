import { Component } from '@angular/core';
import { AppService } from './app.service';
import { HttpModule } from '@angular/http';
import 'rxjs/Rx';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    HttpModule,
    AppService
  ]
})
export class AppComponent {
  title = 'app works!';
}
