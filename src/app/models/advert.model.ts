import {UserModel} from './user.model';

export class AdvertModel {
  constructor(
    public title: string,
    public description: string,
    public price: number,
    public createDate: Date,
    public category: string,
    public telNumber: string,
    public city: string,
    public state: string,
    public picture: string,
    public personal: boolean,
    public shipment: boolean,
    public tags: string,
    public user: UserModel,
  ) {
  }
}
