import React, { useState, useContext } from "react"
import styled from "styled-components"
import Token from './token'
import { WhiteButton } from './button'
import { ScoreContext } from './App'

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

  .results {
    text-align: center;
    text-transform: uppercase;
  }
`;
const elements = [
  'paper',
  'scissors',
  'rock',
];
const Table = () => {

  const { score, setScore } = useContext(ScoreContext);
  const [results, setResults] = useState('');
  const [housePick, setHousePick] = useState('default');
  const [playing, setPlaying] = useState(false);
  const [pick, setPick] = useState('');

  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }


  function launchHousePick() {
    return new Promise((resolve, reject) => {
      let pick;
      const interval = setInterval(() => {
        pick = elements[getRandomInt(0, 3)];
        setHousePick(pick);
      }, 15);
      setTimeout(() => {
        clearInterval(interval);
        resolve(pick);
      }, 2000);
    })
  }


  async function onClick(name) {
    setPlaying(true);
    setPick(name);
    const house = await launchHousePick();
    const results = playWithBot(name, house);
    setResults(results);
    if (results === 'win') {
      setScore(score + 1);
    }
  };

  function playWithBot(pick, housePick) {
    if (housePick === pick) {
      return 'draw'
    }
    if (pick === 'paper') {
      if (housePick === 'scissors') {
        return 'lose'
      }
      if (housePick === 'rock') {
        return 'win'
      }
    }
    if (pick === 'scissors') {
      if (housePick === 'paper') {
        return 'win'
      }
      if (housePick === 'rock') {
        return 'lose'
      }
    }
    if (pick === 'rock') {
      if (housePick === 'paper') {
        return 'lose'
      }
      if (housePick === 'scissors') {
        return 'win'
      }
    }
  }

  const handleTryAgain = () => {
    setPlaying(false);
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
                <Token name={housePick} />
                <p>The house picked</p>
              </div>
              <div className="results">
                <h2>You {results}</h2>
                <WhiteButton onClick={handleTryAgain}>
                  Try Again
                </WhiteButton>
              </div>
            </>
          )
      }
    </TableStyled>
  );
}

export default Table;