import * as fromOfferActions from '../actions/offer.action';
import { Offer } from 'src/app/models/offer.model';

export interface OfferState {
 data: Offer[];
 loaded: boolean;
 loading: boolean;
 error: string;
}

export const initialState: OfferState = {
 data: [],
 loaded: false,
 loading: false,
 error: '',
};


export function reducer(state = initialState, action: fromOfferActions.OfferActions) {

 switch (action.type) {
  case fromOfferActions.LOAD_OFFERS: {
   return {
    ...state,
    loading: true
   };
  }

  case fromOfferActions.LOAD_OFFERS_SUCCESS: {
   const data = action.payload;
   return {
    ...state,
    loading: false,
    loaded: true,
    data
   };
  }

  case fromOfferActions.LOAD_OFFERS_FAIL: {
   return {
    ...state,
    loading: false,
    loaded: false,
    error: action.payload
   };
  }

  default: {
   return state;
  }
 }
}

export const getOffer = (state: OfferState) => state.data;
export const getOfferLoaded = (state: OfferState) => state.loaded;
export const getOfferLoading = (state: OfferState) => state.loading;
export const getOfferError = (state: OfferState) => state.error;
