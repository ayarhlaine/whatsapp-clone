import React from 'react';
import './App.scss';
import Sidebar from './Sidebar/Sidebar';
import { useStateValue } from './Provider';
import Chat from './Chat/Chat';
import WelcomeScreen from './WelcomeScreen/WelcomeScreen';

function App() {
  const [{selectedUser}, ] = useStateValue();
  return (
    <div className="app">
      <div className="app_body">
        <Sidebar />
        {
          selectedUser ?
          <Chat />
          :
          <WelcomeScreen />
        }
        {/* Chat */}
      </div>
    </div>
  );
}

export default App;
