import { Characteristics } from './characteristics.model';
import { ProductOfferingPrices } from './productOfferingPrices.model';

export interface Ver {
 characteristics: Characteristics[];
 id: string;
 name: string;
 productOfferingPrices: ProductOfferingPrices[];
}