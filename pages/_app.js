import 'bootstrap/dist/css/bootstrap.css';
import 'react-datepicker/dist/react-datepicker.css';
import 'react-toastify/dist/ReactToastify.css';
import '@/styles/main.scss';

import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <Component {...pageProps} />
    </UserProvider>
  );
}
