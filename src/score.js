import React from "react"
import styled from "styled-components"

const ScoreStyled = styled.div`
  background: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  small{
    color: #2A45C2;
    text-transform: uppercase;
    font-size: 10px;
  }
  p{
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    letter-spacing:-5px;
  }
`;

const Score = () => {
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>12</p>
    </ScoreStyled>
  );
}

export default Score;