import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import { AppProvider } from './context/AppContext.tsx';
import 'leaflet/dist/leaflet.css';
import { SocketProvider } from './context/SocketContex.tsx';


export const authService = "https://tomato1-auth-1.onrender.com";
export const restaurantService = "https://restaurant-service-j7qx.onrender.com";
export const utilsService = "https://utils-service-d6be.onrender.com";
export const realtimeService = "https://realtime-service-zykr.onrender.com";
export const riderService = "https://rider-service-2k9d.onrender.com";
export const adminService = "https://admin-service-ik1r.onrender.com";




createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="820565666490-qmeo100b0q4dpv3e3dl91rf64a851kjn.apps.googleusercontent.com">
      <AppProvider> 
        <SocketProvider>
          <App />
        </SocketProvider>
      </AppProvider>
    </GoogleOAuthProvider>
  </StrictMode>,
)
