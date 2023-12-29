import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Lobby from './components/Lobby.js';
import CodeBlock from './components/CodeBlock.js';
import MyPage from './components/MyPage.js'; 
import './App.css'; 
import './components/Lobby.css'; 
import './components/CodeBlock.css'; 

const App = () => {
  return (
      <div className='App'>
          <Router>
              <Routes>
                  <Route path="/" element={<Lobby />} />
                  <Route path="/codeblock/:codeBlockTitle" element={<CodeBlock />} />
                  <Route path="/editor" element={<MyPage />} /> {/* New route for MyPage */}
              </Routes>
          </Router>
      </div> 
  );
}

export default App;



