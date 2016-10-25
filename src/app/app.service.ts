import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions }    from '@angular/http';
import { Observable }                                 from 'rxjs/Observable';

@Injectable()
export class AppService {

url = "app/data/horses.json";

  constructor(private _http: Http) { }
horses: any;

getHorses() {
 return this._http.get(this.url)
  .map((response: Response) => <any>response.json())
  .subscribe(
              data => { this.horses = data },
              err => {console.log(err)},
              () => {console.log("done.")}
            );
}


}
