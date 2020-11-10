import { Injectable } from '@angular/core';
import { Item } from './item-model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  private _myItems: Item[] = [];

  constructor(private http: HttpClient) {

    this.http.get('http://localhost:3000/restaurants').subscribe(
      success => this.saveRetrievData(success),
      error => console.log(error)
    );

  }

  private saveRetrievData(success) {
    success.forEach( item => {
      this.myItems.push(new Item().setJson(item))
    });

    // this.myItems.forEach(value => {
    //   value.location = this.getCurrentLocation(value.location);
    //   console.log(value.location);
    // });

    console.log(this.myItems);
  }

  public get myItems(): Item[] {
    return this._myItems;
  }

  public set myItems(value: Item[]) {
    this._myItems = value;
  }

  getCurrentLocation(locat: string) {
    let coordinate = locat.split('/');
    // let googleApiQuery = 'https://maps.googleapis.com/maps/api/geocode/json?latlng='
    //   + coordinate[0] + ',' + coordinate[1]
    //   + '&key=AIzaSyD1kctvR2ZFAuZ0wZlCgWKlpOOz4J6RMK0';


    let geocoder = new google.maps.Geocoder();

    let latlng = new google.maps.LatLng(Number(coordinate[0]), Number(coordinate[1]));

    let res;
    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results);
        res = results[0].formatted_address;
        this.
        console.log(res)
        // if(results[0]) {
        //   $('#address_current').text(results[0].formatted_address);
        // } else {
        //   alert('No results found');
        // }
      } else {
        var error = {
          'ZERO_RESULTS': 'Kunde inte hitta adress'
        };

        // alert('Geocoder failed due to: ' + status);
        // $('#address_new').html('<span class="color-red">' + error[status] + '</span>');
      }
    });

    // console.log(googleApiQuery);
    console.log("Return value " + res);
    // return res;
  }
}
