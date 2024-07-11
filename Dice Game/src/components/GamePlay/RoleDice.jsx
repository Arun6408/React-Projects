import styled from "styled-components";
import { useState } from "react";

const RoleDice = ({ currentDice, RollDice, setTotalScore, setShowRules,showRules }) => {
  return (
    <DiceContainer>
      <div>
        <img onClick={RollDice} src={`/images/dice_${currentDice}.png`} alt={`Dice showing ${currentDice}`} />
      </div>
      <p>Click on Dice to Roll</p>
      <ButtonContainer onClick={() => setTotalScore(0)}>Reset Score</ButtonContainer>
      <OutlineBtn onClick={() => setShowRules((prev)=>!prev)}>{showRules?"Hide":"Show"} Rules</OutlineBtn>
      {
        showRules ? 
      <RuleBox>
        <h1>How to Play Dice Game</h1>
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>after click on  dice  if selected number is equal to dice number you will get same point as dice </p>
        <p>if you get wrong guess then  2 point will be dedcuted </p>
      </RuleBox>:""
      }
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p{
    font-weight: 500;
    font-size: 20px ;
  }
`;

const ButtonContainer = styled.button`
  all: unset;
  min-width: 220px;
  height: 40px;
  border-radius: 8px;
  border: 1px solid black;
  font-weight: 700;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  cursor: pointer;
  color: black;
  background-color: white;
  transition: 0.3s all ease-in-out;

  &:hover {
    color: white;
    background-color: black;
    transition: 0.3s all ease-in-out;
  }
`;

const OutlineBtn = styled(ButtonContainer)`
  color: white;
  background-color: black;

  &:hover {
    color: black;
    background-color: white;
  }
`;

const RuleBox= styled.div`
background-color: #FBF1F1;
  padding: 10px 20px;
  h1{
    font-size: 22px;
    font-weight: 700;
    margin-bottom: 10px;
  }
  p{
    margin-left:5px;
    font-size: 16px;
  }
`