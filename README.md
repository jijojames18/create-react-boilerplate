# create-react-boilerplate
Boilerplate for creating react apps  

The files in this repository can be used as a starting point for building React Apps quickly. It can be used for building React apps that uses React Router for navigation, Redux for storing the state and Redux Sagas for handling side effects. Styling can be done using either styled components as well as using SASS. It also includes util for connecting to firebase which can be extended to query the firestore database.  

## Project structure
```
src
├── assets
├── firebase
│   └── firebase.util.js
├── redux
│   ├── root-reducer.js
│   ├── root-saga.js
|   ├── store.js
|   └── <subsection>
|       ├── <subsection>.reducers.js
|       ├── <subsection>.sagas.js
│       └── <subsection>.actions.js
├── components
│   ├── spinner (Loading spinner)
│   ├── with-spinner (Loading spinner HOC)
│   ├── error-boundary (Error boundary - Displays an error image and message)
|   └── <new_component>
├── pages
|   └── <page>
├── App.js
└── index.js
```

## Environment Variables
The following environment variables needs to be set

Variable | Description |
------|-------------|
REACT_APP_FIREBASE_CONFIG | Firebase JSON config |
REACT_APP_PERSIST_KEY | Key in which the browser persists the redux store data |

* Bootstrap a react project by using [Create React App](https://github.com/facebook/create-react-app).
* Install additional dependencies  
``
npm install axios firebase node-sass react-redux react-router-dom redux redux-logger redux-persist redux-saga reselect styled-components --save
``
* Copy the files in this project to the folder containing the new app code
* Copy/Rename `.env.example` and `.env` and modify its content with the correct configuration values
* Run the project
