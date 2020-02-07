import {UserModel} from './user.model';

export class AdvertModel {
  constructor(
    public title: string,
    public description: string,
    public category: string,
    public state: string,
    public price: string,
    public address: string,
    public picture: string,
    public personal: boolean,
    public shipment: boolean,
    public number: string,
    public user: UserModel,
    public createDate: Date
  ) {
  }
}
