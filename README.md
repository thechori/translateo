# Translateo

Mobile application for easily storing English/Pinyin pairs using the Ionic V3 mobile framework and Angular 4.

## Gettings Started

- Grab this mobile app source code, as well as the ~~[API source code](https://github.com/thechori/translateo-api)~~ [API source code](https://github.com/thechori/translateo-api) (*warning: this is currently a private repo*)
- Spin up the ~~translateo-api~~ **tiirbo-api** node server locally
```
  $ nodemon
```
- Create the `.env` file at the root of the **tiirbo-api** project and ensure it is configured with the proper database information
- Spin up the Ionic mobile app locally
```
  $ ionic serve
```
- Learn Mandarin like a boss

## TODO

- [x] Complete user interface
- [ ] Login functionality
- [x] Design app icon
- [ ] Upload to App Store
- [x] Upgrate to Ionic 3 and Angular 4
- [ ] Lock down API

## Release Notes

### v1.0.0 (current)

This version contains the basic functionality for the application and include the follow core feature implementations:

  - Ionic 3 & Angular 4
  - API integration
  - Camera access
  - Deeplinking
  - SQLite local storage
