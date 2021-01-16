import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AdvertModel} from './models/advert.model';
import {UserModel} from './models/user.model';
import {MessageModel} from './models/messageModel';

@Injectable()
export class AppService {
  public filteredAdverts: AdvertModel[];
  public loggedUser: string;

  public user: UserModel;
  public userChanged = new Subject<UserModel>();

  public message: MessageModel = {text: '', type: ''};
  public messageChanged = new Subject<MessageModel>();

  public adverts: AdvertModel[];
  public advertsChanged = new Subject<AdvertModel[]>();

  constructor(private http: HttpClient) {
  }

  getAdverts() {
    this.http.get('http://localhost:8080/api/tradeAdvert/all', {observe: 'response'}).subscribe(
      data => {
        if (data.status === 200) {
          this.adverts = data.body as AdvertModel[];
          this.filteredAdverts = this.adverts;
          console.log(this.adverts);
        } else {
          this.adverts = [] as AdvertModel[];
        }
        this.advertsChanged.next(this.adverts);
      },
      err => {
        this.message = {text: 'Błąd podczas łączenia z serwerem, spróbuj później!', type: 'ERROR'};
        this.messageChanged.next(this.message);
      }
    );
  }

  createAdvert(advert) {
    this.http.post('http://localhost:8080/api/tradeAdvert/add', advert, {observe: 'response'}).subscribe(
      data => {
        if (data.status === 201) {
          this.getAdverts();
        }
      },
      err => {
        this.message = {text: 'Błąd podczas dodawania ogłoszenia, spróbuj później!', type: 'ERROR'};
        this.messageChanged.next(this.message);
      }
    );
  }

  signUp(user) {
    this.http.post('http://localhost:8080/api/user/add', user).subscribe(
      (response: Response) => {
        this.message = {text: 'Zarejestrowano!', type: 'SUCCESS'};
      },
      err => {
        if (err.status === 400) {
          this.message = {text: 'Proszę podać login i hasło!', type: 'ERROR'};
        } else if (err.status === 409) {
          this.message = {text: 'Taki użytkownik już istnieje!', type: 'ERROR'};
        } else {
          this.message = {text: 'Błąd podczas łączenia z serwerem, spróbuj później!', type: 'ERROR'};
        }
        this.messageChanged.next(this.message);
      }
    );
  }

  signIn(login, pass) {
    this.http.post('http://localhost:8080/api/user/', {
      name: login,
      password: pass
    }).subscribe(
      data => {
        this.user = data as UserModel;
        this.userChanged.next(this.user);
      },
      err => {
        if (err.status === 403) {
          this.message = {text: 'Niepoprawne dane użytkownika, zaloguj się ponownie!', type: 'ERROR'};
        } else {
          this.message = {text: 'Błąd podczas łączenia z serwerem, spróbuj później!', type: 'ERROR'};
        }
        this.messageChanged.next(this.message);
      }
    );
  }

  // removeAdvert

  // filtrowanie
  // usówanie ogłoszen
  // dodanie do ulubionych
  // usuniecie do ulubionych
  // admin usówanie userow

  // setAlert(alertMessage: string) {
  //   this.alertMessage += alertMessage;
  //   this.alertMessageChanged.next(this.alertMessage);
  // }

  // this.filteredAdverts = data as AdvertModel[];
}
