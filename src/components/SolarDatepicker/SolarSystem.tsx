import * as React from 'react';
import styled from 'styled-components';

import { background, monthDays } from './constant';
import { RotatorProps, SolarSystemProps } from './type';
import { isLeapYear } from './util';

const Wrapper = styled.div`
  position: relative;
  padding: 32px 40px;
  background-color: ${background};
  border-radius: 3px;
`;

const Rotator = styled.div<RotatorProps>`
  position: relative;
  width: 180px;
  height: 180px;
  cursor: grab;
  border: 1px dashed hsl(222, 19%, 30%);
  border-radius: 1000px;
  transform: rotate(${props => props.alpha}deg);
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
      filter: blur(8px);
    }

    10% {
      filter: blur(9px);
    }

    20% {
      filter: blur(10px);
    }

    30% {
      filter: blur(11px);
    }

    40% {
      filter: blur(12px);
    }

    50% {
      filter: blur(13px);
    }

    60% {
      filter: blur(12px);
    }

    70% {
      filter: blur(11px);
    }

    80% {
      filter: blur(10px);
    }

    90% {
      filter: blur(9px);
    }

    100% {
      filter: blur(8px);
    }
  }

  z-index: 0;
  transform: translate(-50%, -50%) scale(1.5);
  animation: sun-blur 4000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
`;

const Earth = styled.div`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(50%, -50%);
  background-color: hsl(209, 100%, 89%);
  border-radius: 1000px;
`;

export const SolarSystem: React.FC<SolarSystemProps> = ({ date }) => {
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  // calculate number of days since Jan 1
  let numOfDays = 0;
  for (let i = 0; i < month; i++) {
    if (i === 1 && isLeapYear(year)) {
      numOfDays += 28;
    } else {
      numOfDays += monthDays[i];
    }
  }
  numOfDays += day;

  return (
    <Wrapper>
      <Rotator alpha={numOfDays}>
        <Earth />
      </Rotator>
      <Sun />
      <SunGlow />
    </Wrapper>
  );
};
