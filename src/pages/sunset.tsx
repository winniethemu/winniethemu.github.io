import React, { useState } from 'react';
import styled from 'styled-components';

interface CursorPosition {
  x: number;
  y: number;
}

interface SunProps extends CursorPosition {
  gradient: string;
}

const Wrapper = styled.div`
  height: 100%;
`;

const Sky = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: 0;
  background: -webkit-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
  background: -moz-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
  background: -ms-linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
  background: linear-gradient(bottom, rgba(249, 251, 240, 1) 10%, rgba(215, 253, 254, 1) 20%, rgba(167, 222, 253, 1) 40%, rgba(110, 175, 255, 1) 100%);
`;

const Sun = styled.div<SunProps>`
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: 1;
  background-repeat: no-repeat;   
  background: -webkit-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
  background: -moz-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
  background: -ms-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
`;

const Sunlight = styled.div<SunProps>`
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: 1;
  opacity: ${props => {
    if (typeof window === 'undefined') {
      return 0;
    }
    return 1 - props.y / window.innerHeight;
  }};
  background-repeat: no-repeat;
  background: -webkit-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
  background: -moz-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
  background: -ms-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
`;

const Sunset = styled.div<SunProps>`
  position: absolute;
  width: 100%;
  height: 50%;
  z-index: 1;
  opacity: ${props => {
    if (typeof window === 'undefined') {
      return 0;
    }
    return props.y / window.innerHeight - 0.2
  }};
  background-repeat: no-repeat;
  background: -webkit-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
  background: -moz-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
  background: -ms-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, ${props => props.gradient});
`;

const Sea = styled.div`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 50%;
  z-index: 2;
  background-repeat: no-repeat;
  background: -webkit-linear-gradient(bottom, rgba(0, 25, 45, 1) 0%, rgba(14, 71, 117, 1) 35%, rgba(26, 126, 174, 1) 70%, rgba(62, 168, 220, 1) 100%);
  background: -moz-linear-gradient(bottom, rgba(0, 25, 45, 1) 0%, rgba(14, 71, 117, 1) 35%, rgba(26, 126, 174, 1) 70%, rgba(62, 168, 220, 1) 100%);
  background: -ms-linear-gradient(bottom, rgba(0, 25, 45, 1) 0%, rgba(14, 71, 117, 1) 35%, rgba(26, 126, 174, 1) 70%, rgba(62, 168, 220, 1) 100%);
  background: linear-gradient(bottom, rgba(0, 25, 45, 1) 0%, rgba(14, 71, 117, 1) 35%, rgba(26, 126, 174, 1) 70%, rgba(62, 168, 220, 1) 100%);
`;

const Horizon = styled.div<CursorPosition>`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 50%;
  z-index: 4;
  opacity: ${props => {
    if (typeof window === 'undefined') {
      return 0;
    }
    return props.y <= (window.innerHeight * 0.5) ? 0 : (props.y / window.innerHeight - 0.5)
  }};
  background-repeat: no-repeat;
  background: -webkit-linear-gradient(bottom, rgba(57, 167, 255, 1) 0%, rgba(13, 98, 245, 1) 20%, rgba(0, 11, 22, 0.1) 60%);
  background: -moz-linear-gradient(bottom, rgba(57, 167, 255, 1) 0%, rgba(13, 98, 245, 1) 20%, rgba(0, 11, 22, 0.1) 60%);
  background: -ms-linear-gradient(bottom, rgba(57, 167, 255, 1) 0%, rgba(13, 98, 245, 1) 20%,rgba(0, 11, 22, 0.1) 60%);
  background: linear-gradient(bottom, rgba(57, 167, 255, 1) 0%, rgba(13, 98, 245, 1) 20%, rgba(0, 11, 22, 0.1) 60%);
`;

const NightSky = styled.div<CursorPosition>`
  position: absolute;
  width: 100%;
  height: 50%;
  top: 0;
  left: 0;
  cursor: default;
  background-color: black;
  opacity: ${props => {
    if (typeof window === 'undefined') {
      return 0;
    }
    return props.y <= (window.innerHeight * 0.5) ? 0 : (props.y / window.innerHeight - 0.5)
  }};
  z-index: 3;
`;

const NightSea = styled.div<CursorPosition>`
  position: absolute;
  width: 100%;
  height: 50%;
  bottom: 0;
  left: 0;
  cursor: default;
  background-color: black;
  opacity: ${props => {
    if (typeof window === 'undefined') {
      return 0;
    }
    return props.y / window.innerHeight
  }};
  z-index: 3;
`;

export default function CssSunset() {
  const [cursor, setCursor] = useState<CursorPosition>({ x: 0, y: 0 });
  const [sunGradient, setSunGradient] = useState<string>('');

  const getSunGradient = (pos: CursorPosition): string => {
    if (typeof window === 'undefined') {
      return '';
    }
    return `
      rgba(242, 248, 247, ${pos.y / window.innerHeight}) 0%,
      rgba(249, 249, 28, ${pos.y / window.innerHeight}) 3%,
      rgba(247, 214, 46, ${pos.y / window.innerHeight}) 8%,
      rgba(248, 200, 95, ${pos.y / window.innerHeight}) 12%,
      rgba(201, 165, 132, ${pos.y / window.innerHeight}) 30%,
      rgba(115, 130, 133, ${pos.y / window.innerHeight}) 51%,
      rgba(46, 97, 122, ${pos.y / window.innerHeight}) 85%,
      rgba(24, 75, 106, ${pos.y / window.innerHeight}) 100%
    `;
  };

  const sunlightGradient = `
    rgba(252, 255, 251, 0.9) 0%,
    rgba(253, 250, 219, 0.4) 30%,
    rgba(226, 219, 197, 0.01) 70%,
    rgba(226, 219, 197, 0.0) 70%,
    rgba(201, 165, 132, 0) 100%
  `;

  const sunsetGradient = `
    rgba(254, 255, 255, 0.8) 5%,
    rgba(236, 255, 0, 1) 10%,
    rgba(253, 50, 41, 1) 25%,
    rgba(243, 0, 0, 1) 40%,
    rgba(93, 0, 0, 1) 100%
  `;

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const pos = { x: e.clientX, y: e.clientY };
    setSunGradient(getSunGradient(pos));
    setCursor(pos);
  };

  return (
    <Wrapper onMouseMove={handleMouseMove}>
      <Sky />
      <NightSky x={cursor.x} y={cursor.y} />

      <Sun x={cursor.x} y={cursor.y} gradient={sunGradient} />
      <Sunlight x={cursor.x} y={cursor.y} gradient={sunlightGradient} />
      <Sunset x={cursor.x} y={cursor.y} gradient={sunsetGradient} />

      <Horizon x={cursor.x} y={cursor.y} />

      <Sea />
      <NightSea x={cursor.x} y={cursor.y} />
    </Wrapper>
  );
}

export async function getStaticProps() {
  return {
    props: {},
  }
}