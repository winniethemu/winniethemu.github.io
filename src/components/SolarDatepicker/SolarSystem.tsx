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

const SunGlow = styled(Sun)`
  @keyframes sun-blur {
    0% {
      filter: blur(2px);
    }

    15% {
      filter: blur(4px);
    }

    30% {
      filter: blur(6px);
    }

    50% {
      filter: blur(8px);
    }

    70% {
      filter: blur(6px);
    }

    85% {
      filter: blur(4px);
    }

    100% {
      filter: blur(2px);
    }
  }

  z-index: 0;
  transform: translate(-50%, -50%) scale(1.1);
  animation: sun-blur 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

export const SolarSystem: React.FC<SolarSystemProps> = ({ date }) => {
  const degree = 1;
  return (
    <Wrapper>
      <Rotator degree={degree} />
      <Sun />
      <SunGlow />
    </Wrapper>
  );
};
