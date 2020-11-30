import React from 'react';
import Routes from './routes';

import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import Alert from './components/Alert';
import './styles/global.css';

const optionAlert = {
  position: positions.BOTTOM_CENTER,
  timeout: 5000,
  offset: '30px',
  transition: transitions.SCALE 
}

function App() {
  return (
    <AlertProvider template={Alert} {...optionAlert}>
      <Routes />
    </AlertProvider>
  );
}

export default App;