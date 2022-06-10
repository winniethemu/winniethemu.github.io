import * as React from 'react';
import styled from 'styled-components';

import { background } from './constant';
import { RotatorProps, SolarSystemProps } from './type';

const Wrapper = styled.div`
  position: relative;
  padding: 32px 40px;
  background-color: ${background};
  border-radius: 3px;
`;

const Rotator = styled.div<RotatorProps>`
  width: 180px;
  height: 180px;
  border: 1px dashed hsl(222, 19%, 30%);
  border-radius: 1000px;
`;

const Sun = styled.div`
  width: 40px;
  height: 40px;
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  transform: translate(-50%, -50%);
  background-color: hsl(39, 95%, 76%);
  border-radius: 1000px;
`;

const BlurrySun = styled(Sun)`
  z-index: 0;
  filter: blur(4px);
  transform: translate(-50%, -50%) scale(1.3);
`;

export const SolarSystem: React.FC<SolarSystemProps> = ({ date }) => {
  const degree = 1;
  return (
    <Wrapper>
      <Rotator degree={degree} />
      <Sun />
      <BlurrySun />
    </Wrapper>
  );
};
