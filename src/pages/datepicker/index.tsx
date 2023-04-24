import * as React from 'react';
import Head from 'next/head';
import styled, { createGlobalStyle } from 'styled-components';

import SolarDatepicker from './components/SolarDatepicker';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: hsl(274deg 16% 8%);
    height: 100%;
  }
`;

const Datepicker: React.FC = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Solar Datepicker</title>
      </Head>
      <GlobalStyle />
      <SolarDatepicker />
    </React.Fragment>
  );
};

export default Datepicker;