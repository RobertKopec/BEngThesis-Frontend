import {FavouriteModel} from './favourite.model';

export class UserModel {
  constructor(
    public userId: number,
    public password: string,
    public email: string,
    public userName: string,
    public city: string,
    public telNumber: string,
    public role: string,
    public favourites: FavouriteModel[],
  ) {
  }
}
