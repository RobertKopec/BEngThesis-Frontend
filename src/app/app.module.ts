import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';


import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {FilterComponent} from './components/filter/filter.component';
import {FooterComponent} from './components/footer/footer.component';
import {PhotoComponent} from './components/photo/photo.component';
import {LoginComponent} from './components/login/login.component';
import {CreateAdvertComponent} from './components/create-advert/create-advert.component';
import {AdvertsComponent} from './components/adverts/adverts.component';
import {AdvertDetailsComponent} from './components/advert-details/advert-details.component';
import {SignUpComponent} from './components/sign-up/sign-up.component';

import {AppService} from './app.service';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
// tslint:disable-next-line:max-line-length
import {
  faBars,
  faCar,
  faCheck,
  faChild,
  faEdit,
  faFilter,
  faGamepad,
  faHome,
  faInfoCircle,
  faLaptop,
  faMapMarkedAlt,
  faPaw,
  faPlus,
  faSearch,
  faSignInAlt,
  faSignOutAlt,
  faSpa,
  faStar,
  faTh,
  faThList,
  faTimes,
  faTshirt,
  faUser,
  faUserCheck,
  faUserEdit,
  faUserPlus,
  faUsers,
  faVolleyballBall,
} from '@fortawesome/free-solid-svg-icons';
// @ts-ignore
import {faAddressCard, faIdCard, faImages, faTimesCircle} from '@fortawesome/free-regular-svg-icons';
import {AlertComponent} from './components/alert/alert.component';
import {FavouriteComponent} from './components/favourite/favourite.component';
import {UserPanelComponent} from './components/user-panel/user-panel.component';
import {AdminPanelComponent} from './components/admin-panel/admin-panel.component';

// tslint:disable-next-line:max-line-length
library.add(faTh, faThList, faMapMarkedAlt, faPlus, faFilter, faStar, faSignInAlt, faSignOutAlt, faSearch, faGamepad, faCar, faHome, faTshirt, faSpa, faChild, faPaw, faImages, faLaptop, faVolleyballBall, faBars, faTimes, faAddressCard, faUser, faCheck, faUserPlus, faUserCheck, faUsers, faInfoCircle, faTimesCircle, faUserEdit, faEdit, faIdCard);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CategoriesComponent,
    FilterComponent,
    FooterComponent,
    PhotoComponent,
    LoginComponent,
    CreateAdvertComponent,
    AdvertsComponent,
    AdvertDetailsComponent,
    SignUpComponent,
    AlertComponent,
    FavouriteComponent,
    UserPanelComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [AppService, AlertComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
