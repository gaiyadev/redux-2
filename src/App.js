import React from 'react';
import './App.css';
import Post from './components/Post/AllPost';
import PostForm from './components/Post/PostForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PostForm />
        <Post />
      </header>
    </div>
  );
}

export default App;
