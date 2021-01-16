export class UserModel {
  constructor(
    public login: string,
    public password: string,
    public email: string,
    public userName: string,
    public city: string,
    public telNumber: string) {
  }
}
