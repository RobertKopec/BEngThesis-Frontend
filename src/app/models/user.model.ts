export class UserModel {
  constructor(
    public login: string,
    public password: string,
    public email: string,
    public userName: string,
    public address: string,
    public telNumber: number) {
  }
}
