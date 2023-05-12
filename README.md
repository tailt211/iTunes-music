### Project iTunes Music

This project is a web application using ReactJS, Redux, and Tailwind CSS.

### Installation

1. Install the dependencies by running the following command:

npm install

2. Start the project by running the following command:

npm start

### Usage

After installing and starting the project, you can access the web application on your browser using the link http://localhost:3000/

### Project Structure

This project is divided into the following directories:

- src: contain the source code of the application
  - assets: contains pictures and icons
  - component: contains the React component
  - redux: contain Redux state management
    - service.js: file to communication with an API and fetching data
    - slice.js: file defines a slice of the Redux store and the actions
    - thunk.js: fil define a thunk, used for asynchronous actions such as making an API call
    - store.js: defines the Redux store
  - app.jsx: The main component
  - indix.js: The main file to start the application

### Technologies Used

- ReactJS
- Redux
- Tailwin CSS

### Note

- In this project, I use the default search term value is "eminem" to fetch default data.
