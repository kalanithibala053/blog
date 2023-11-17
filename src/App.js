import React, { useState } from 'react';
import Home from './home';
import Register from './register';
import Login from './login';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('register');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'home':
        return <Home />;
      case 'login':
        return <Login />;
      case 'register':
        return <Register />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {activeComponent === 'home' ? (
            <button onClick={() => setActiveComponent('home')}>home</button>
          ) : (
            <>
              <button onClick={() => setActiveComponent('home')}>home</button>
              <button onClick={() => setActiveComponent('register')}>register</button>
              <button onClick={() => setActiveComponent('login')}>login</button>
            </>
          )}
        </div>
        {renderComponent()}
      </header>
    </div>
  );
}

export default App;
