export class Constrains {

  // create-advert, advert-details

  public static advertTitleText = 'Nagówek ogłoszenia';
  public static descriptionText = 'Opis ogłoszenia';
  public static categoryText = 'Kategoria';
  public static categories = [{
    text: 'Wybierz kategorię',
    value: ''
  }, {
    text: 'Elektronika',
    value: 'Elektronika'
  }, {
    text: 'Sztuka i zbiory',
    value: 'Sztuka i zbiory'
  }, {
    text: 'Zwierzęta',
    value: 'Zwierzęta'
  }, {
    text: 'Dom i ogród',
    value: 'Dom i ogród'
  }, {
    text: 'Moda',
    value: 'Moda'
  }, {
    text: 'Dzieci',
    value: 'Dzieci'
  }, {
    text: 'Zdrowie i uroda',
    value: 'Zdrowie i uroda'
  }, {
    text: 'Kultura i rozrywka',
    value: 'Kultura i rozrywka'
  }, {
    text: 'Sport i hobby',
    value: 'Sport i hobby'
  }, {
    text: 'Motryzacja',
    value: 'Motryzacja'
  }];
  public static stateText = 'Stan';
  public static statesText = [{
    text: 'Wybierz stan',
    value: ''
  }, {
    text: 'Nowe',
    value: 'Nowe'
  }, {
    text: 'Używane',
    value: 'Używane'
  }, {
    text: 'Uszkodzone',
    value: 'Uszkodzone'
  }];

  public static noAdverts = 'Brak ogłoszeń spełniajacych kryteria!';
  public static priceText = 'Cena';
  public static cityText = 'Miasto';
  public static pictureText = 'Dodaj zdjęcia';
  public static deliveryOptionsText = 'Opcje dostawy:';
  public static personalText = 'Odbiór osobisty';
  public static shipmentText = 'Możliwa wysyłka';
  public static telNumberText = 'Telefon';
  public static submitText = 'Zatwierdź';
  public static tagText = 'Tagi:';
  public static addTagText = 'Dodaj tag';

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
  public static createAdvert = 'Dodaj nowe ogłoszenie';


  // validation messages
  public static invalidLogin = 'Login nie może być pusty i musi zawierać wielka literę oraz minimum 5 znaków.';
  public static invalidPassword = 'Hasło nie może być puste i musi zawierać cyfrę oraz wielka literę oraz minimum 7 znaków.';
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
  public static invalidPicture = 'Prosze dodać zdjęcie.';

  // validator patterns
  public static onlyLetters = '^[a-zA-Z]+$';
  public static onlyDigits = '^[0-9\\.]+$';
  public static phoneNumber = '^[0-9\\+\\(\\)]+$';
  public static passwordValidation = '^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[^\' \']{7,}$';
  public static loginValidation = '^(?=.*[A-Z])(?=.*[a-z])[^\' \']{5,}$';

}


