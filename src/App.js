import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import Header from './header';
import './App.css';
import Wrapper from './wrapper';
import Table from './table';
import Rules from './rules';

export const ScoreContext = createContext();

const AppStyled = styled.main`
  background: #111f43;
  min-height: 100vh;
  /* background: rgb(34,193,195); */
  background: radial-gradient(circle at top, #1F3757 0%, #131537 100%);
  color: #fff;
  font-family: 'Barlow Semi Condensed', sans-serif;

  .app-content {
    padding: 2em;
    box-sizing: border-box;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

function App() {

  const [score, setScore] = useState(0);
  return (
    <ScoreContext.Provider value={{
      score,
      setScore,
    }}>
      <AppStyled>
        <Wrapper>
          <div className="app-content">
            <Header />
            <Table />
            <Rules />
          </div>
        </Wrapper>
      </AppStyled>
    </ScoreContext.Provider>
  );
}

export default App;
