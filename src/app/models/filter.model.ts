export class FilterModel {
  constructor(
    public search: string,
    public category: string,
    public states: string[],
    public price: number[],
    public personal: boolean,
    public shipment: boolean,
    public city: string,
    public tags: string[],
  ) {
  }
}
