import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import AppRouter from './AppRoute.jsx';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './redux/store.js';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Toaster position="top-right" reverseOrder={false} />
        <AppRouter />
      </Provider>
    </BrowserRouter>
  </StrictMode>,
);
