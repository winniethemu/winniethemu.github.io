import React, { useState } from 'react';
import styled from 'styled-components';

interface CursorProps {
  x: number;
  y: number;
}

const Wrapper = styled.div`
  height: 100%;
`;

const Sky = styled.div`
  width: 100%;
  height: 50%;
  position: absolute;
  z-index: 0;
  background: -webkit-linear-gradient(bottom, rgba(249,251,240,1) 10%, rgba(215,253,254,1) 20%, rgba(167,222,253,1) 40%, rgba(110,175,255,1) 100%); 
  background: -moz-linear-gradient(bottom, rgba(249,251,240,1) 10%, rgba(215,253,254,1) 20%, rgba(167,222,253,1) 40%, rgba(110,175,255,1) 100%); 
  background: -ms-linear-gradient(bottom, rgba(249,251,240,1) 10%, rgba(215,253,254,1) 20%, rgba(167,222,253,1) 40%, rgba(110,175,255,1) 100%); 
  background: linear-gradient(bottom, rgba(249,251,240,1) 10%, rgba(215,253,254,1) 20%, rgba(167,222,253,1) 40%, rgba(110,175,255,1) 100%); 
`;

const Sun = styled.div<CursorProps>`
  width: 100%;
  height: 50%;
  position: absolute;
  z-index: 1;
  background-repeat: no-repeat;   
  background: -webkit-radial-gradient(${props => `${props.x}px ${props.y}px`}, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%);
  background: -moz-radial-gradient(center, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%);
  background: -ms-radial-gradient(center, circle, rgba(242,248,247,1) 0%,rgba(249,249,28,1) 3%,rgba(247,214,46,1) 8%, rgba(248,200,95,1) 12%,rgba(201,165,132,1) 30%,rgba(115,130,133,1) 51%,rgba(46,97,122,1) 85%,rgba(24,75,106,1) 100%);
`;

const Sea = styled.div`
  height: 50%;
  width: 100%;
  position: absolute;
  top: 50%;
  z-index: 2;
  background: -webkit-linear-gradient(bottom, rgba(0,25,45,1) 0%,rgba(14,71,117,1) 35%, rgba(26,126,174,1) 70%, rgba(62,168,220,1) 100%); 
  background: -moz-linear-gradient(bottom, rgba(0,25,45,1) 0%,rgba(14,71,117,1) 35%, rgba(26,126,174,1) 70%, rgba(62,168,220,1) 100%); 
  background: -ms-linear-gradient(bottom, rgba(0,25,45,1) 0%,rgba(14,71,117,1) 35%, rgba(26,126,174,1) 70%, rgba(62,168,220,1) 100%); 
  background: linear-gradient(bottom, rgba(0,25,45,1) 0%,rgba(14,71,117,1) 35%, rgba(26,126,174,1) 70%, rgba(62,168,220,1) 100%); 
`;

const SunsetPage: React.FC = () => {
  const [cursor, setCursor] = useState<CursorProps>({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    setCursor({ x: e.clientX, y: e.clientY });
  };

  return (
    <Wrapper onMouseMove={handleMouseMove}>
      <Sky></Sky>
      <Sun x={cursor.x} y={cursor.y}></Sun>
      <Sea></Sea>
    </Wrapper>
  );
};

export default SunsetPage;