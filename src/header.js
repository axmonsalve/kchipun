import React from 'react';
import styled from 'styled-components';
import Score from './score';

const HeaderStyled = styled.div`
  border: 3px solid rgba( 255,255,255, .29);
  color: #fff;
  padding: 23px;
  border-radius: .5em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1{
    font-size: 21px;
    text-transform: uppercase;
    line-height: 17px;
    font-weight: 700;
  }
`;

const header = () => {
  return (
    <HeaderStyled>
      <h1>K- <br /> CHI- <br />PUN!</h1>
      <Score />
    </HeaderStyled>

  )
}

export default header
