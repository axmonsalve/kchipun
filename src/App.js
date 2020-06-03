import React from 'react';
import Header from './header';
import './App.css';
import styled from 'styled-components';
import Wrapper from './wrapper';

const AppStyled = styled.main`
  background: #111f43;
  min-height: 100vh;
  padding: 2em;
  background: rgb(34,193,195);
  background: radial-gradient(circle at top, #1F3757 0%, #131537 100%);
  body{
  font-family: 'Barlow Semi Condensed', sans-serif;
  }
`;

function App() {
  return (
    <AppStyled>
      <Wrapper>
        <Header />
      </Wrapper>
    </AppStyled>
  );
}

export default App;
