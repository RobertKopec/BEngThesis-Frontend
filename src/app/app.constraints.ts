// create-advert
// tslint:disable:max-line-length

export class Constrains {

  // create-advert
  // advert-details

  public static title = 'Podaj nagówek ogłoszenia';
  public static descriptionText = 'Uzupełnij opis ogłoszenia';
  public static categoryText = 'Kategoria';
  public static categories = [{
    text: 'Wybierz kategorię',
    value: ''
  }, {
    text: 'Elektronika',
    value: 'Electronic'
  }, {
    text: 'Sztuka i zbiory',
    value: 'Art'
  }, {
    text: 'Zwierzęta',
    value: 'Animal'
  }, {
    text: 'Dom i ogród',
    value: 'Home'
  }, {
    text: 'Moda',
    value: 'Fashion'
  }, {
    text: 'Dzieci',
    value: 'Child'
  }, {
    text: 'Zdrowie i uroda',
    value: 'Health'
  }, {
    text: 'Kultura i rozrywka',
    value: 'Culture'
  }, {
    text: 'Sport i hobby',
    value: 'Sport'
  }, {
    text: 'Motryzacja',
    value: 'Motorization'
  }];
  public static stateText = 'Stan';
  public static states = [{
    text: 'Wybierz stan',
    value: ''
  }, {
    text: 'Nowe',
    value: 'new'
  }, {
    text: 'Używane',
    value: 'used'
  }, {
    text: 'Uszkodzone',
    value: 'damaged'
  }];
  public static priceText = 'Cena';
  public static cityText = 'Miasto';
  public static pictureText = 'Dodaj zdjęcia';
  public static deliveryOptions = 'Opcje dostawy:';
  public static personalText = 'Odbiór osobisty';
  public static shipmentText = 'Możliwa wysyłka';
  public static telNumberText = 'Telefon';
  public static submit = 'Zatwierdź';


  // advert
  public static details = 'Szczegóły';

  // filter
  public static localization = 'Opcje lokalizacji';
  public static rangeText = 'W promieniu';

  // footer
  public static text = 'Designed by ';
  public static author = 'Robert Kopeć';

  // login, register

  public static logInButton = 'Zaloguj się!';
  public static signUpButton = 'Zarejestruj się!';
  public static goToSignUp = 'Rejestracja';
  public static signUpTitle = 'Rejestracja użytkownika';
  public static loginTitle = 'Logowanie';
  public static goToLogIn = 'Logowanie';

  public static loginText = 'Login';
  public static passwordText = 'Hasło';
  public static emailText = 'E-mail';
  public static usernameText = 'Imię';

  // Navbar
  public static createAdvertTitle = 'Dodaj nowe ogłoszenie';


  // validation messages
  public static invalidLogin = 'Login nie może być pusty i musi zawierać wielka literę oraz minimum 5 znaków.';
  public static invalidPassword = 'Hasło nie może być puste i musi zawierać cyfrę oraz wielka literę.';
  public static invalidEmail = 'Podaj prawidłowy adres e-mail.';
  public static invalidUserName = 'Imię powinno zawierać tylko litery.';
  public static invalidCity = 'Miasto nie może być pusty.';
  public static invalidTelNumber = 'Nieprawidłowy numer telefonu.';
  public static invalidCredentials = 'Niepoprawne dane logowania, pole nie może być puste.';
  public static invalidTitle = 'Nagłówek nie może być pusty.';
  public static invalidDescription = 'Opis ogłoszenia nie może być pusty.';
  public static invalidPrice = 'Cena powinna zawierać tylko cyfry.';
  public static invalidCategory = 'Prosze wybrać kategorię przedmiotu.';
  public static invalidState = 'Prosze wybrać stan przedmiotu.';
  public static invalidPhoto = 'Prosze dodać zdjęcie.';

  // validator patterns
  public static onlyLetters = '^[a-zA-Z]+$';
  public static onlyDigits = '^[0-9\\.]+$';
  public static phoneNumber = '^[0-9\\+\\(\\)]+$';
  public static passwordValidation = '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[^\' \']{7,}$';
  public static loginValidation = '^(?=.*[A-Z])(?=.*[a-z])[^\' \']{5,}$';

}


