import React, { useState } from "react"
import styled from "styled-components"
import Button from "./button";

const RulesStyled = styled.div`
  text-align: center;

  h2 {
    color: #3b4262;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: -2px;
    margin-bottom: 1em;
  }

  .rules-overlay {
    background: white;
    padding: 4em 0;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
  }

  .close-button {
    margin-top: 2em;
  }
`;


const Rules = () => {

  const [visible, setVisible] = useState(false);

  const handleToggle = () => {
    setVisible(!visible);
  };

  return (
    <RulesStyled>
      {(visible) && (
        <div className="rules-overlay">
          <h2>Reglas</h2>
          <img src="./images/image-rules.svg" alt="Game Rules" />
          <img onClick={handleToggle} src="./images/icon-close.svg" alt="Close game rules" className="close-button" />
        </div>
      )}
      <Button onClick={handleToggle}>
        Rules
      </Button>
    </RulesStyled>
  );
}

export default Rules;