import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Offer } from '../models/offer.model';

@Injectable({
  providedIn: 'root'
})
export class OfferService {
  constructor(private http: HttpClient) { }

  public getOffers(): Observable<Offer[]>{
    console.log("asdfasdfasf")
    return this.http.get<Offer[]>('./assets/ofertas.json');
  }
}
