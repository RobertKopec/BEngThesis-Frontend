import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

@Injectable()
export class AppService {

  user: object;
  loggedUser: string;

  constructor(private http: HttpClient) {}

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
      },
      error => console.error(error)
    );
  }
}
