import React from 'react';
import ReactDOM from 'react-dom/client';

import { AppRoot } from '@vkontakte/vkui';

import '@vkontakte/vkui/dist/vkui.css';
import './index.css';

import AudioCell from './components/audio-cell';

const App = () => {
  return (
    <AppRoot>
      <div className='container'>
        <AudioCell />
      </div>
    </AppRoot>
  );
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
