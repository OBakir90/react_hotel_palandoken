import React from 'react';
import Routes from './Routes'
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyle';
import { theme } from './styles/Theme'
import { BookingProvider } from './context/BookingContext'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <BookingProvider>
        <Routes />
      </BookingProvider>
    </ThemeProvider>
  );
}

export default App;
