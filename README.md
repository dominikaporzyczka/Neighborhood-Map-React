# Neighborhood Map (React)

My app 'Neighborhood Map' is the application showing the best places in Wroclaw to spending time.


## To build this app I used:

* react-google-map - React.js Google Maps integration component. It provides a set of React components wrapping the underlying Google Maps JavaScript API v3 instances. To find out more visit [react-google-map](https://github.com/tomchentw/react-google-maps)
* Foresquare API - I used it to provide additional information about each location in InfoWindows. Foursquare contains database of more than 105 million places (visit [FourSquare](https://developer.foursquare.com/))


## Installation

### How to run the project in development mode:
1) Clone or download repository
2) Open in your text editor
3) Run 'npm install' commend in the console to install all dependencies
4) Run 'npm start' to start the development server
5) Then open http://localhost:3000/ to see your app

* The Service Worker is available in production build.

### How to run the project in production mode:
1) Clone or download repository
2) Open in your text editor
3) Run 'npm install' commend in the console to install all dependencies
4) To create a production build, use 'npm run build'
5) When the build folder will be ready to be deployed, you may serve it with a static server with commands:
    npm install -g serve
    serve -s build
6) Then visit http://localhost:5000/


## Important files in project

* MarkersData.js - contains data about locations for markers
* PlacesAPI.js - contains getMarkerInfo() function which get data about location from Foursquare API

Components:
* App.js - main component containing whole app
* Map.js - initialzes Google Map
* Search.js - contains sidebar with form for search and list of locations
* CustomMarker.js - renders marker with infowindow
* InfoAboutLocation.js - contains content for infowidow
