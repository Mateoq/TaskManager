import React from 'react';
import NextApp from 'next/app';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../styles/GlobalStyles';
import theme from '../styles/theme';

class App extends NextApp {
  render() {
    console.log(this.props);
    const { Component, pageProps } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles/>
          <Component {...pageProps}/>
        </>
      </ThemeProvider>
    );
  }
}

export default App;
