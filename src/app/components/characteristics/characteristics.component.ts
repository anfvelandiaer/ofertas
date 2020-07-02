import { Component, OnInit, Input } from '@angular/core';
import { Characteristics } from 'src/app/models/characteristics.model';


@Component({
  selector: 'app-characteristics',
  templateUrl: './characteristics.component.html',
  styleUrls: ['./characteristics.component.scss']
})
export class CharacteristicsComponent implements OnInit {

  @Input() public characteristics: Characteristics[];

  constructor() {
    this.characteristics = [];
  }

  ngOnInit(): void {
  }

}
