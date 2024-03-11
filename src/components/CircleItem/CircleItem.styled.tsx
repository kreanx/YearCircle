import styled from "styled-components";

export const Circle = styled.div<{ top: number; left: number }>`
  width: 6px;
  height: 6px;
  left: ${({left}) => left + 'px'};
  top: ${({top}) => top + 'px'};
  position: absolute;
  background: #42567A;
  border-radius: 100%;
`
