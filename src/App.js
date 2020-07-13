import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Post from './components/Post/AllPost';
import PostForm from './components/Post/PostForm';
import store from './redux/store/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <PostForm />
          <hr />
          <Post />
        </header>
      </div>
    </Provider>
  );
}

export default App;
