# Balneário Camboriú Explorer Project

This project contains the source code for a front-end application to show touristic places
from Balneário Camboriú in the state of Santa Catarina - Brazil. 

**Note**: This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Architecture
### Project Structure
```
|-- public                  // Source code for public files
|-- src                     // App Source code (React)
    |-- drivers             // Driver for external API's communication
    |-- map                 // Google Maps component
    |-- menu                // Side menu component
    |-- picSlider           // Slider component for pictures
    |-- place               // Component for place marker and infoView
    |-- app.css             // Stylesheet for the app component
    |-- app.js              // This is the application main component
    |-- index.js            // Application entry point file
    |-- reducers.js         // Combines all application reducers
|-- .gitignore
|-- package-lock.json       
|-- package.json
```

### Technologies
The following technologies were used in this project. You can find out more about them by following the links.

* [React](https://reactjs.org/)
* [React-Redux](https://redux.js.org/basics/usage-with-react)
* [React Strap](https://reactstrap.github.io/)
* [React Google Maps](https://github.com/tomchentw/react-google-maps)

## External API's

| API        | Feature           | Link  |
| ------------- |:-------------| -----:|
| **Google Maps API**     | The Google Maps API is used for map rendering and place markers. | [Link](https://developers.google.com/maps/documentation/) |
| **Flicker API**     | The Flicker API is used to find images related with each place marker. | [Link](https://www.flickr.com/services/api/) |

## Getting Started 

1) Please, **clone** this repository from github:
```
git clone https://github.com/thiagothalison1/projeto_mapa_bairro.git
```

2) Install the project's dependencies:
```
cd projeto_mapa_bairro
npm install
```

3) Run the app in development mode:
```
npm start
```
**Note**: The application will automatically start on http://localhost:3000/.

## Links

[Available Scripts](docs/REACT_SCRIPTS.md)

## License

This project is distributed under [MIT License](https://opensource.org/licenses/MIT)