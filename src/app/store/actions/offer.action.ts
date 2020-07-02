import { Action } from '@ngrx/store';
import { Offer } from 'src/app/models/offer.model';

export const LOAD_OFFERS = '[Offer] Load Offer';
export const LOAD_OFFERS_SUCCESS = '[Offer] LOAD_OFFER_SUCCESS';
export const LOAD_OFFERS_FAIL = '[Offer] LOAD_OFFER_FAIL';

export class LoadOffers implements Action {
 readonly type = LOAD_OFFERS;
}

export class LoadOffersSuccess implements Action {
 readonly type = LOAD_OFFERS_SUCCESS;
 constructor(public payload: Offer[]) { }
}

export class LoadOffersFail implements Action {
 readonly type = LOAD_OFFERS_FAIL;
 constructor(public payload: any) { }
}

export type OfferActions =
 LoadOffers |
 LoadOffersSuccess |
 LoadOffersFail;
