import React, { useContext } from "react"
import styled from "styled-components"
import { ScoreContext } from './App'

const ScoreStyled = styled.div`
  background: #fff;
  text-align: center;
  padding: 10px;
  border-radius: 8px;
  width: 80px;
  small{
    color: #2A45C2;
    text-transform: uppercase;
    font-size: 10px;
    letter-spacing: 2px;
  }
  p{
    color: #565468;
    font-size: 40px;
    margin: 0;
    font-weight: 700;
    letter-spacing:-2px;
    position: relative;
    left: -2px;
  }
`;

const Score = () => {
  const { score } = useContext(ScoreContext);
  return (
    <ScoreStyled>
      <small>Score</small>
      <p>{score}</p>
    </ScoreStyled>
  );
}

export default Score;