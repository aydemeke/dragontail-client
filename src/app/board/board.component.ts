import {Component, OnInit, ViewChild} from '@angular/core';
import { Item } from '../item-model';
import { ItemsService } from '../items.service';
import {} from 'googlemaps';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  private _Items: Item[];
  private _searchInput: string;

  constructor(private _itemsService: ItemsService) {
    this.Items = _itemsService.myItems;
  }

  public get Items(): Item[] {
    return this._Items;
  }
  public set Items(value: Item[]) {
    this._Items = value;
  }

  get searchInput(): string {
    return this._searchInput;
  }

  set searchInput(value: string) {
    this._searchInput = value;
  }

  ngOnInit(): void {
  }
}
