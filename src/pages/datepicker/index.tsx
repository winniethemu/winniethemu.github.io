import * as React from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import SolarDatepicker from './components/SolarDatepicker';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: hsl(274deg 16% 8%);
    height: 100%;
  }
`;

const DatepickerPage: React.FC = () => {
  return (
    <React.Fragment>
      <GlobalStyle />
      <SolarDatepicker />
    </React.Fragment>
  );
};

export default DatepickerPage;