import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class AppService {

  user;
  adverts;
  filteredAdverts;

  public alertMessage = '';
  public loggedUser: string;

  alertMessageChanged = new Subject<string>();

  constructor(private http: HttpClient) {}

  setAlert(alertMessage: string) {
    this.alertMessage += alertMessage;
    this.alertMessageChanged.next(this.alertMessage);
  }

  createAdvert(title, description, price, createDate, category, number, address, state, picture, personal, shipment, user) {
    const advert = {
      title: title,
      description: description,
      price : price,
      createDate: createDate,
      category: category,
      number: number,
      address: address,
      state: state,
      picture: picture,
      personal: personal,
      shipment: shipment,
      user: user
    };

    this.http.post('http://localhost:8080/api/tradeAdvert/add', advert).subscribe(
      (response: Response) => {
        console.log(response);
        this.getAdverts();
      },
      error => console.error(error)
    );
  }

  signUp(user) {
    // const user = {
    //   login: login,
    //   password: password,
    //   name : name,
    //   number: number,
    //   mail: mail,
    //   address: address
    // };

    this.http.post('http://localhost:8080/api/user/add', user).subscribe(
      (response: Response) => {
        console.log(response);
      },
      error => console.error(error)
    );
  }

  signIn(login: string) {
    this.http.get('http://localhost:8080/api/user/' + login).subscribe(
      data => {
        if (data !== null && data !== undefined) {
          this.user = data;
          console.log(this.user);
        }
      },
      error => console.error(error)
    );
  }

  getAdverts() {
    this.http.get('http://localhost:8080/api/tradeAdvert/all').subscribe(
      data => {
        if (data !== null && data !== undefined) {
          this.adverts = data;
          this.filteredAdverts = data;
          console.log(this.adverts);
        }
      },
      error => console.error(error)
    );
  }
}
