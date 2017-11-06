import { Component, ViewChild } from '@angular/core';
import { NavController, reorderArray, IonicPage } from 'ionic-angular';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Sighting } from '../../models/sighting-model';
import { DataProvider } from '../../providers/data/data';

/*
  Main Component of application.
  Holds all data to be displayed as well as
  navigation functions and data provider.
*/

@IonicPage({
  name: 'SightingsPage',
  segment: 'sightings'
})
@Component({
  selector: 'page-sightings',
  templateUrl: 'sightings.html'
})
export class SightingsPage {

  alienSightings: Array<Sighting> = [];
  sighting = {} as Sighting;
  editing: boolean = false;
  viewing: boolean = false;
  reorderButton: string = 'Reorder';

  constructor(
    public navCtrl: NavController,
    public http: Http,
    private dataProvider: DataProvider
  ) {
    // Upon startup, assign alienSightings the data returned from dataProvider.
    this.alienSightings = this.dataProvider.getSightings();
  }

  /*
    When the item is dragged and dropped into the new position, the (ionItemReorder) event is emitted.
    This event provides the initial index (from) and the new index (to) of the reordered item.
    For example, if the first item is dragged to the fifth position, the event will emit {from: 0, to: 4}
  */
  reorderItem(indexes) {
    this.sighting.form = reorderArray(this.sighting.form, indexes);
  }

  /*
    Toggles between sighting list and sighting object details.
    Passes an index of clicked item and assigns the sighting to be viewed by
    pulling corresponding object from alienSightings array.
  */
  toggleView(index: number) {
    this.sighting = this.alienSightings[index];
    this.viewing = !this.viewing;
  }

  /*
    Toggles the reorder button on and off.
    If button is active it allows the the form elements in a sighting object to be reordered
    by dragging and dropping.
  */
  toggleReorder() {
    this.editing = !this.editing;
    this.editing ? this.reorderButton = 'Done' : this.reorderButton = 'Reorder';
  }

  // Navigation function that returns to sighting list and resets the reorder button to default value.
  back() {
    this.editing = false;
    this.editing ? this.reorderButton = 'Done' : this.reorderButton = 'Reorder';
    this.viewing = !this.viewing;
  }

}
