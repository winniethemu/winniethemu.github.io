import * as React from 'react';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { background } from '../constant';
import { RotatorProps, SolarSystemProps } from '../type';
import { angleToDate, dateToAngle, formatDate } from '../util';

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
  transform-origin: center;
  transform: rotate(${props => props.angle}deg);
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
  left: 0;
  transform: translate(-50%, -50%);
  background-color: hsl(209, 100%, 89%);
  border-radius: 1000px;
`;

const SolarSystem: React.FC<SolarSystemProps> = ({ date, handleDatepick }) => {
  const [active, setActive] = useState(false);
  const [center, setCenter] = useState({ x: 0, y: 0 });
  const [currAngle, setCurrAngle] = useState(0);
  const [startAngle, setStartAngle] = useState(0);
  const [endAngle, setEndAngle] = useState(0);
  const rotatorDiv = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const rect = rotatorDiv.current!.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    setCenter({ x: centerX, y: centerY });
    // Calculate initial position
    setCurrAngle(dateToAngle(date));
  }, [date]);

  const deslectAll = () => {
    if (window.getSelection) {
      window.getSelection()?.removeAllRanges();
    }
  };

  const getPositionFromCenter = (e: React.MouseEvent) => {
    return {
      x: e.clientX - center.x!,
      y: -(e.clientY - center.y!)
    };
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    e.stopPropagation();
    const position = getPositionFromCenter(e);
    const angle = 180 - Math.atan2(position.y, position.x) * (180 / Math.PI);
    setStartAngle(angle);
    setActive(true);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    deslectAll();
    e.stopPropagation();
    if (active) {
      const newCurrAngle = currAngle + (endAngle - startAngle);
      handleDatepick(angleToDate(newCurrAngle));
      setActive(false);
      setCurrAngle(newCurrAngle);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (active) {
      const position = getPositionFromCenter(e);
      const angle = 180 - Math.atan2(position.y, position.x) * (180 / Math.PI);
      const future = currAngle + (endAngle - startAngle);
      setEndAngle(angle);
      rotatorDiv.current!.style.transform = `
        rotate(${future}deg)
      `;
      const field = document.getElementById('date-field');
      if (field) {
        field.innerText = formatDate(angleToDate(future));
      }
    }
  };

  return (
    <Wrapper>
      <Rotator
        angle={currAngle}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        ref={rotatorDiv}
      >
        <Earth />
      </Rotator>
      <Sun />
      <SunGlow />
    </Wrapper>
  );
};

export default SolarSystem;