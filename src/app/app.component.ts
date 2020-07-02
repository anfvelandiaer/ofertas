import { Component } from '@angular/core';
import { Offer } from './models/offer.model';
import { Characteristics } from './models/characteristics.model';
import { ProductOfferingPrices } from './models/productOfferingPrices.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'offers';
  public offer: Offer;
  public characteristics: Characteristics[];
  public productOfferingPrices: ProductOfferingPrices[]

  public getOffer( offer: Offer) {
    this.characteristics = offer.versions[0].characteristics;
    this.productOfferingPrices = offer.versions[0].productOfferingPrices;
  }
}
