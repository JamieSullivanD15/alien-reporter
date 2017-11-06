import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Sighting } from '../../models/sighting-model';

const URL = 'http://www.mocky.io/v2/59f7760a2f0000ab1d55864e';

/*
  Data provider to acquire data from api and assign it to an array.
  Has getter and setter functions as well as a function to format
  date and time of sighting objects.
*/

@Injectable()
export class DataProvider {

  private alienSightings: Array<Sighting> = [];

  constructor(
    public http: Http
  ) {
    // Upon startup, invoke JSON endpoint and assign data to alienSightings array
    this.getData();
  }

  // Setter
  public setSightings(alienSightings: any) {
    this.alienSightings = alienSightings;
  }

  // Getter
  public getSightings() {
    return this.alienSightings;
  }

  /*
    Call JSON endpoint from URL constant,
    if successful assign data and format date and time of alienSightings,
    if unsuccesful log error.
  */
  getData() {
    return this.http.get(URL)
      .subscribe(
        data => {
          this.alienSightings.push(data.json()),
          this.formatDateAndTime()
        },
        error => {
          console.log(error)
        }
      );
  }

  /*
    Date and time are formatted by splitting timestamp into 2 elements,
    date is the first element, time is the second.
    Date is again split into 3 elements and then reorganised to display in the format of dd/mm/yyy.
    Time is split into 2 elements and the first element is assigned.
    This is done for every object in alienSightings array.
  */
  formatDateAndTime() {
    var splitDate: any;

    for (let i = 0; i < this.alienSightings.length; i++) {
      this.alienSightings[i].time = this.alienSightings[i].lastChangedDate.split('T')[1].split('+')[0];
      this.alienSightings[i].date = this.alienSightings[i].lastChangedDate.split('T')[0];
      splitDate = this.alienSightings[i].date.split('-');
      this.alienSightings[i].date = splitDate[2] + '/' + splitDate[1] + '/' + splitDate[0];
    }
  }

}
