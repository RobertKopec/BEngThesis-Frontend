import {AdvertModel} from './advert.model';

export class FavouriteModel {
  constructor(
    public favouriteId: number,
    public tradeAdvert: AdvertModel,
  ) {
  }
}
