import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css', '../app.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _appService: AppService) { }


  getHorses() {
    console.log(this._appService.horses);
    
  }


  ngOnInit() {
    // this._appService.getHorses();
  }

}
