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
    font-size: 18px;
    text-transform: uppercase;
    line-height: 17px;
    font-weight: 700;
    margin: 0;
  }

  @media screen and (min-width: 768px) {
    padding: 24px;
    h1 {
      font-size: 36px;
      line-height: .9;
    }
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
