import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { OfferService } from 'src/app/services/offer.service';
import { Observable, of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import * as fromOfferActions from '../actions/offer.action';

@Injectable()
export class OfferEffects {
 constructor(private actions$: Actions, private offerService: OfferService) { }

 @Effect()
 loadOffers$: Observable<Action> = this.actions$.pipe(
  ofType(fromOfferActions.LOAD_OFFERS),
  switchMap(() => this.offerService.getOffers()
   .pipe(
    map(response => {
     return new fromOfferActions.LoadOffersSuccess(response);
    },
     catchError(error => of(new fromOfferActions.LoadOffersFail(error)))
    )
   )
  )
 );

}
