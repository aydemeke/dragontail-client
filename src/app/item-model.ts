export class Item {
  private _name: string;
  private _type: string;
  private _phone: string;
  private _location: string;

  constructor(name?: string, type?: string, phone?: string, location?: string) {
    this._name = name;
    this._type = type;
    this._phone = phone;
    this._location = location;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    this._name = value;
  }

  public get type(): string {
    return this._type;
  }

  public set type(value: string) {
    this._type = value;
  }

  public get phone(): string {
    return this._phone;
  }

  public set phone(value: string) {
    this._phone = value;
  }

  public get location() {
    return this._location;
  }

  public set location(value: string) {
    this._location = value;
  }

  public setJson(json: any): this {
    if (json == null) {
      console.error('ItemModel.setJson: got null json.');
      return this;
    }
    this._name = json.Name;
    this._type = json.Type;
    this._phone = json.Phone;
    this._location = json.Location;
    return this;
  }

  /**
   * method for getting adreess from google map.
   * */
  getCurrentLocation(locat: string) {
    let coordinate = locat.split('/');
    let geocoder = new google.maps.Geocoder();
    let latlng = new google.maps.LatLng(Number(coordinate[0]), Number(coordinate[1]));

    geocoder.geocode({'location': latlng}, function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        console.log(results);
          this._location = results[0].formatted_address;
      }else {
        console.log('Geocoder failed due to: ' + status);
      }
    });
  }

}
