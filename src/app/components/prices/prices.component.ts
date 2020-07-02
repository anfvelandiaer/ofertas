import { Component, OnInit, Input } from '@angular/core';
import { ProductOfferingPrices } from 'src/app/models/productOfferingPrices.model';


@Component({
  selector: 'app-prices',
  templateUrl: './prices.component.html',
  styleUrls: ['./prices.component.scss']
})
export class PricesComponent implements OnInit {

  @Input() public productOfferingPrices: ProductOfferingPrices[];

  constructor() {
    this.productOfferingPrices = [];
   }

  ngOnInit(): void {
  }

}
