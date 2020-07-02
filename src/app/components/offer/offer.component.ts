import { Component, OnInit, Renderer2, Version, Output, EventEmitter } from '@angular/core';
import { Offer } from 'src/app/models/offer.model';
import { Store } from '@ngrx/store';
import * as fromStore from '../../store';
import { Ver } from 'src/app/models/versions.model';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  @Output ('offer') public setOffer = new EventEmitter<Offer>()
  public showList: boolean;
  public offers: Offer[];
  public actualOffer: any;
  public numberOffer = 0;
  public versions: Ver;

  constructor(
    private store: Store<fromStore.AppState>,
    private renderer: Renderer2
  ) {
    this.offers = [];
    this.actualOffer = {};
    this.versions = { characteristics: [], id: '', name: '', productOfferingPrices: []};
    this.showList = false;
   }

   /* Method to set actual offer */
  public getActualOffer (id: string, number: number): void{ 
    this.numberOffer = number;
    this.store.select(fromStore.getOfferById(id))
      .subscribe(response => {
        this.actualOffer = response;
        this.versions = this.actualOffer.versions[0]
      });
    this.showList = false;
    this.setOffer.emit(this.actualOffer);
  }

  public desplegable() {
    this.showList = !this.showList;
  }

  ngOnInit(): void {
    this.store.dispatch(new fromStore.LoadOffers());

    this.store.select(fromStore.getOffers) 
      .subscribe(response => {
        this.offers = response;
        console.log(response)
      });
  }

}
