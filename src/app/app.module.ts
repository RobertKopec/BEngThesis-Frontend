import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';
import { CategoriesComponent } from './components/categories/categories.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
// tslint:disable-next-line:max-line-length
import {faTh, faThList, faMapMarkedAlt, faPlus, faFilter, faSignInAlt, faSignOutAlt, faSearch, faGamepad, faCar, faHome, faTshirt, faChild, faSpa, faPaw, faLaptop, faVolleyballBall} from '@fortawesome/free-solid-svg-icons';
import {faImages, faStar} from '@fortawesome/free-regular-svg-icons';
// tslint:disable-next-line:max-line-length
library.add(faTh, faThList, faMapMarkedAlt, faPlus, faFilter, faStar, faSignInAlt, faSignOutAlt, faSearch, faGamepad, faCar, faHome, faTshirt, faSpa, faChild, faPaw, faImages, faLaptop, faVolleyballBall);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent,
    CategoriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
