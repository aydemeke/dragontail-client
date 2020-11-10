import {Component, Input, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() name: string;
  @Input() type: string;
  @Input() phone: string;
  @Input() location: string;

  constructor() { }

  ngOnInit(): void {
  }

}
