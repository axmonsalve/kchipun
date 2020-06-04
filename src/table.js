import React, { useState } from "react"
import styled from "styled-components"
import Token from './token'

const TableStyled = styled.div`

  display: grid;
  position: relative;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;

  & div:nth-of-type(3) {
    grid-column: span 2;
  }

  .line {
    display: ${({ playing }) => !playing ? 'block' : 'none'};
    height: 14px;
    background: rgba(0, 0, 0, .25);
    position: absolute;
    left: 60px;
    right: 60px;
    top: 60px;

    &:before {
    content: '';
    height: 14px;
    background: rgba(0, 0, 0, .25);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform: rotate(60deg);
    transform-origin: left top;
    }

    &:after {
    content: '';
    height: 14px;
    background: rgba(0, 0, 0, .25);
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    transform: rotate(-60deg);
    transform-origin: right top;
    }
  }

  .in-game {
    text-align: center;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;

const Table = () => {

  const [score, setScore] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [pick, setPick] = useState('rock');
  const onClick = name => {
    console.log(name);
    setPlaying(true);
    setPick(name);
  };
  return (
    <TableStyled playing={playing}>
      <span className="line"></span>
      {
        !playing ?
          (<>
            <Token name="paper" onClick={onClick} />
            <Token name="scissors" onClick={onClick} />
            <Token name="rock" onClick={onClick} />
          </>) : (
            <>
              <div className="in-game">
                <Token name={pick} />
                <p>You Picked</p>
              </div>
              <div className="in-game">
                <Token />
                <p>The house picked</p>
              </div>
            </>
          )
      }
    </TableStyled>
  );
}

export default Table;