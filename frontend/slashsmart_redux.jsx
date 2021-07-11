import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store'
import {fetchFriends, addFriend, deleteFriend} from './actions/friend_actions' 

document.addEventListener('DOMContentLoaded',()=>{
     let store;
  if (window.currentUser) {
    const preloadedState = {
      session: { id: window.currentUser.id },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    window.addFriend = addFriend;
    window.deleteFriend = deleteFriend;
    window.fetchFriends = fetchFriends;
    delete window.currentUser;
  } else {
    store = configureStore();
  }
    const root = document.getElementById("root");
    window.store = store;
    ReactDOM.render(<Root store={store}/>, root)
})