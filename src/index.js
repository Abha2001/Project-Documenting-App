import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore,applyMiddleware,compose} from 'redux'
import rootReducer from './store/reducer/rootReducer'
import {Provider, useSelector} from 'react-redux'
import thunk from 'redux-thunk'
import { reduxFirestore,getFirestore,createFirestoreInstance } from 'redux-firestore'
import {getFirebase, ReactReduxFirebaseProvider, isLoaded} from 'react-redux-firebase'
import fbConfig from './config/fbConfig'
import firebase from 'firebase/app'


const store=createStore(rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebase,fbConfig),
  )
  );

  const config={
    userProfile:'User',
    useFirestoreForProfile:true
  };

  const rrfProps={
    firebase,
    config, 
    dispatch:store.dispatch,
    createFirestoreInstance,
  }

  function AuthIsLoaded ({children}){
    const auth=useSelector(state=>state.firebase.auth)
    if (!isLoaded(auth)) 
    return <div className="center">Loading...</div>
    return children
  } 

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><ReactReduxFirebaseProvider{...rrfProps}><AuthIsLoaded><App /></AuthIsLoaded></ReactReduxFirebaseProvider></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
