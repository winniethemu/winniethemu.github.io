import * as React from 'react';
import { useState } from 'react';
import styled from 'styled-components';

import SolarSystem from './SolarSystem';
import { formatDate } from '../util';

const Wrapper = styled.figure`
  width: 260px;
  margin: 40px auto;
`;

const DateField = styled.figcaption`
  color: #F6F6F9;
  font-size: 16px;
  font-family: monospace;
  padding: 12px 16px;
  margin-bottom: 8px;
  background-color: #272C39;
  border-radius: 3px;
`;

const SolarDatepicker: React.FC = () => {
  const [date, setDate] = useState(new Date());

  const handleDatepick = (value: Date) => {
    setDate(value);
  }

  return (
    <Wrapper>
      <DateField id="date-field">{formatDate(date)}</DateField>
      <SolarSystem date={date} handleDatepick={handleDatepick}/>
    </Wrapper>
  );
};

export default SolarDatepicker;