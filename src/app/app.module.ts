import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FilterComponent } from './components/filter/filter.component';
import { FooterComponent } from './components/footer/footer.component';
import { PhotoComponent } from './components/photo/photo.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';

// tslint:disable-next-line:max-line-length
import {
  faTh,
  faThList,
  faMapMarkedAlt,
  faPlus,
  faFilter,
  faSignInAlt,
  faSignOutAlt,
  faSearch,
  faGamepad,
  faCar,
  faHome,
  faTshirt,
  faChild,
  faSpa,
  faPaw,
  faLaptop,
  faVolleyballBall,
  faBars, faTimes, faUser, faCheck
} from '@fortawesome/free-solid-svg-icons';
import {faAddressCard, faImages, faStar} from '@fortawesome/free-regular-svg-icons';
import { LoginComponent } from './components/login/login.component';
import { CreateAdvertComponent } from './components/create-advert/create-advert.component';

// tslint:disable-next-line:max-line-length
library.add(faTh, faThList, faMapMarkedAlt, faPlus, faFilter, faStar, faSignInAlt, faSignOutAlt, faSearch, faGamepad, faCar, faHome, faTshirt, faSpa, faChild, faPaw, faImages, faLaptop, faVolleyballBall, faBars, faTimes, faAddressCard, faUser, faCheck);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    CategoriesComponent,
    FilterComponent,
    FooterComponent,
    PhotoComponent,
    LoginComponent,
    CreateAdvertComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
