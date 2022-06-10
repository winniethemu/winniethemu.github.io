import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import { SolarSystem } from './SolarSystem';
import { formatDate } from './util';

const Wrapper = styled.figure`
  width: 260px;
  margin: 0 auto;
`;

const DateField = styled.figcaption`
  color: #F6F6F9;
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: #272C39;
  border-radius: 3px;
`;

export const SolarDatepicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  return (
    <Wrapper>
      <DateField>{formatDate(date)}</DateField>
      <SolarSystem date={date} />
    </Wrapper>
  );
};
