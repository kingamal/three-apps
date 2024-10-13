# Projekt Vue 3: Aplikacje do przetwarzania tekstu, walidacji PESEL i zarządzania użytkownikami

## Spis treści

- [Opis](#opis)
- [Wymagania](#wymagania)
- [Instalacja](#instalacja)
- [Uruchamianie projektu](#uruchamianie-projektu)

## Opis

To jest projekt stworzony w Vue 3, który zawiera trzy aplikacje:

1. **Aplikacja do przetwarzania tekstu** - pozwala na wgranie pliku tekstowego, przestawiając litery w każdym wyrazie (z wyjątkiem pierwszej i ostatniej litery).

2. **Walidator PESEL** - umożliwia użytkownikom wprowadzenie numeru PESEL i sprawdzenie jego poprawności.

3. **Aplikacja do zarządzania użytkownikami** - korzysta z API dostępnego pod adresem [Gorest](https://gorest.co.in/) do wyświetlania, edytowania i wyszukiwania użytkowników.

## Wymagania

- Node.js (12.x lub nowszy)
- Vue CLI (4.x lub nowszy)
- Zainstalowane pakiety: Axios, Vue Router, Dotenv, Jest

## Instalacja

1. Sklonuj repozytorium na swój komputer:

```
git clone https://github.com/kingamal/three-apps.git
```

2. Przejdź do katalogu projektu:

```
cd vue-project
```

3. Zainstaluj wymagane pakiety

```
npm install
```

lub

```
yarn install
```

4. Utwórz plik .env w katalogu głównym projektu i dodaj token API

```
VUE_APP_GOREST_TOKEN=your_gorest_api_token_here
```

## Uruchamianie projektu

1. Uruchom serwer lokalny

```
npm run serve
```

2. Otwórz przeglądarkę i przejdź pod adres

```
http://localhost:8080/shuffle-text #Aplikacja do tasowania tekstu
http://localhost:8080/pesel #Aplikacja do walidacji PESEL
http://localhost:8080/api #Aplikacja korzystająca z API
```
