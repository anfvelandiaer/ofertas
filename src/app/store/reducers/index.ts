import * as fromOfferReducer from './app.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export interface AppState {
 offers: fromOfferReducer.OfferState;
}

export const reducers = {
 offers: fromOfferReducer.reducer
};

export const getState = (state) => state;

export const getOfferState = createFeatureSelector<any>('offers');
export const getOffers = createSelector(getOfferState, fromOfferReducer.getOffer);

/* Selector for find offer by Id */
export const getOfferById = (id: string) => createSelector(getOffers, (offers) => {
 if (offers) {
  const offerFound = offers.find(offer => {
   return offer.id === id;
  })

  return offerFound || {};
 } else {
  return {};
 }
})