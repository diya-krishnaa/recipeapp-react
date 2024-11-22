import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux'; // Import the Provider
import './index.css';
import App from './App.jsx';
import store from './redux/store'; // Import the store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* Wrap App inside Provider */}
      <App />
    </Provider>
  </StrictMode>,
);
