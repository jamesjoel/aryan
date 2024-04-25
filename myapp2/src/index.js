
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId='1020525891421-4am5bijf8mb4kca2ifkncfo5kio5beo6.apps.googleusercontent.com'>

  <BrowserRouter>
    <App />
  </BrowserRouter>
  </GoogleOAuthProvider>
);

