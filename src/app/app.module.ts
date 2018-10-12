import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ButtonComponent } from './components/button/button.component';
import { InputComponent } from './components/input/input.component';
import { SelectComponent } from './components/select/select.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library} from '@fortawesome/fontawesome-svg-core';
// tslint:disable-next-line:max-line-length
import { faTh, faThList, faMapMarkedAlt, faPlus, faFilter, faStar, faSignInAlt, faSignOutAlt, faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faTh, faThList, faMapMarkedAlt, faPlus, faFilter, faStar, faSignInAlt, faSignOutAlt, faSearch);

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ButtonComponent,
    InputComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
