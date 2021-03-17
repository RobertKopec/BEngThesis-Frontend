import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {AdvertModel} from './models/advert.model';
import {UserModel} from './models/user.model';
import {MessageModel} from './models/messageModel';
import {FilterModel} from './models/filter.model';
import {FavouriteModel} from './models/favourite.model';

@Injectable()
export class AppService {

  public loggedUserName: string;

  public filter: FilterModel = new FilterModel('', '', [], [], false, false, '', []);

  public user: UserModel;
  public userChanged = new Subject<UserModel>();

  public message: MessageModel = {text: '', type: ''};
  public messageChanged = new Subject<MessageModel>();

  public adverts: AdvertModel[];
  public advertsChanged = new Subject<AdvertModel[]>();

  public filteredAdverts: AdvertModel[];
  public filteredAdvertsChanged = new Subject<AdvertModel[]>();

  constructor(private http: HttpClient) {
  }

  getAdverts() {
    this.http.get('http://localhost:8080/api/tradeAdvert/all', {observe: 'response'}).subscribe(
      data => {
        if (data.status === 200) {
          this.adverts = data.body as AdvertModel[];
          console.log(this.adverts);
        } else {
          this.adverts = [] as AdvertModel[];
        }
        this.filteredAdverts = this.adverts;
        this.advertsChanged.next(this.adverts);
        this.filteredAdvertsChanged.next(this.filteredAdverts);
      },
      () => {
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
      () => {
        this.message = {text: 'Błąd podczas dodawania ogłoszenia, spróbuj później!', type: 'ERROR'};
        this.messageChanged.next(this.message);
      }
    );
  }

  signUp(user) {
    this.http.post('http://localhost:8080/api/user/add', user).subscribe(
      () => {
        this.message = {text: 'Zarejestrowano!', type: 'SUCCESS'};
        this.signIn(user.login, user.password);
      },
      err => {
        if (err.status === 409) {
          this.message = {text: 'Taki użytkownik już istnieje!', type: 'ERROR'};
        } else {
          this.message = {text: 'Błąd podczas łączenia z serwerem, spróbuj później!', type: 'ERROR'};
        }
        this.messageChanged.next(this.message);
      }
    );
  }

  signIn(login, pass) {
    this.http.post('http://localhost:8080/api/user/login', {
      login,
      password: pass
    }).subscribe(
      data => {
        this.user = data as UserModel;
        this.userChanged.next(this.user);
        this.loggedUserName = this.user.userName;
        console.log(this.user);
      },
      err => {
        if (err.status === 403) {

        } else {
          this.message = {text: 'Błąd podczas łączenia z serwerem, spróbuj później!', type: 'ERROR'};
        }
        this.messageChanged.next(this.message);
      }
    );
  }

  getFavouriteAdverts(userId) {
    this.http.get('http://localhost:8080/api/favourite/' + userId, {observe: 'response'}).subscribe(
      data => {
        if (data.status === 200) {
          this.user.favourites = data.body as FavouriteModel[];
          console.log(this.user.favourites);
        } else {
          this.user.favourites = [] as FavouriteModel[];
        }
        this.userChanged.next(this.user);
      },
      err => {
        if (err.status === 404) {
          this.message = {text: 'Nie znaleziono żadnych ulubionych ogłoszeń!', type: 'ERROR'};
        } else {
          this.message = {text: 'Błąd podczas łączenia z serwerem, spróbuj później!', type: 'ERROR'};
        }
        this.messageChanged.next(this.message);
      }
    );
  }

  addFavouriteAdvert(userId, advertId) {
    this.http.post('http://localhost:8080/api/favourite/add/' + userId + '/' + advertId, {observe: 'response'}).subscribe(
      () => {
        this.getFavouriteAdverts(userId);
      },
      err => {
        if (err.status === 409) {
          this.message = {text: 'Taka pozycja znajuje sie już w ulubionych!', type: 'ERROR'};
        } else {
          this.message = {text: 'Błąd podczas łączenia z serwerem, spróbuj później!', type: 'ERROR'};
        }
        this.messageChanged.next(this.message);
      }
    );
  }

  removeFavouriteAdvert(userId, advertId) {
    this.http.request('delete', 'http://localhost:8080/api/favourite/remove/' + userId + '/' + advertId, {observe: 'response'}).subscribe(
      () => {
        this.getFavouriteAdverts(userId);
      },
      err => {
        if (err.status === 404) {
          this.message = {text: 'Nie znaleziono żądanej pozycji!', type: 'ERROR'};
        } else {
          this.message = {text: 'Błąd podczas łączenia z serwerem, spróbuj później!', type: 'ERROR'};
        }
        this.messageChanged.next(this.message);
      }
    );
  }

  addToFavourites(advertId: number) {
    this.addFavouriteAdvert(this.user.userId, advertId);
  }

  removeFavourites(advertId: number) {
    this.removeFavouriteAdvert(this.user.userId, advertId);
  }

  isFavourite(advertId: number): boolean {
    for (const favourites of this.user.favourites) {
      if (favourites.tradeAdvert.tradeAdvertId === advertId)
        return true;
    }
    return false;
  }

  filterReset() {
    this.filter = new FilterModel('', '', [], [], false, false, '', []);
    this.filteredAdverts = this.adverts;
    this.filteredAdvertsChanged.next(this.filteredAdverts);
  }

  filterAdverts() {
    this.filteredAdverts = [];
    const regexSearch = new RegExp(this.filter.search, 'i');
    const regexCategory = new RegExp(this.filter.category, 'i');
    const regexCity = new RegExp(this.filter.city, 'i');

    for (const tag of this.filter.tags) {
      if (tag === undefined || tag === '') {
        this.filter.tags.splice(this.filter.tags.indexOf(tag), 1);
      }
    }

    for (const advert of this.adverts) {
      if (regexSearch.test(advert.title) && regexCategory.test(advert.category) && regexCity.test(advert.city) &&
        this.filterByState(advert.state) && this.filterByDelivery(advert.shipment, advert.personal) &&
        this.filterByPrice(advert.price) && this.filterByTags(advert.tags)
      ) {
        this.filteredAdverts.push(advert);
      }
    }
    this.filteredAdvertsChanged.next(this.filteredAdverts);
  }

  private filterByState(advertState: string): boolean {
    if (this.filter.states !== undefined && this.filter.states.length > 0) {
      let isAdvertValid = false;
      for (const state of this.filter.states) {
        if (state === advertState)
          isAdvertValid = true;
      }
      return isAdvertValid;
    } else {
      return true;
    }
  }

  private filterByPrice(advertPrice: number): boolean {
    if (this.filter.price !== undefined && this.filter.price.length > 0) {
      if (this.filter.price[0] === this.filter.price[1]) {
        return this.filter.price[0] != null && this.filter.price[1] != null ? this.filter.price[0] === advertPrice : true;
      } else {
        if (this.filter.price[0] == null)
          return advertPrice <= this.filter.price[1];
        else if (this.filter.price[1] == null)
          return advertPrice >= this.filter.price[0];
        else {
          const min = Math.min(this.filter.price[0], this.filter.price[1]);
          const max = Math.max(this.filter.price[0], this.filter.price[1]);
          return min <= advertPrice && advertPrice <= max;
        }
      }
    } else {
      return true;
    }
  }

  private filterByDelivery(advertShipment, advertPersonal): boolean {
    if (this.filter.shipment === this.filter.personal) {
      return true;
    } else {
      return (this.filter.shipment === advertShipment && this.filter.shipment === true) ||
        (this.filter.personal === advertPersonal && this.filter.personal === true);
    }
  }

  private filterByTags(advertTags: string): boolean {
    if (this.filter.tags !== undefined && this.filter.tags.length > 0) {
      let isAdvertValid = false;
      for (const tag of this.filter.tags) {
        if (advertTags.includes(tag))
          isAdvertValid = true;
      }
      return isAdvertValid;
    } else {
      return true;
    }
  }

  // dodanie do ulubionych
  // usuniecie do ulubionych

  // widoki kafelek i list
  // removeAdvert
  // user usówanie ogłoszen, edycja usera, edycja ogłoszenia
  // admin usówanie i edycja userow i ogłoszeń

  // setAlert(alertMessage: string) {
  //   this.alertMessage += alertMessage;
  //   this.alertMessageChanged.next(this.alertMessage);
  // }
}
