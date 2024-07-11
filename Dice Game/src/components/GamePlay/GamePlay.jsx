
import { useState } from "react";
import styled from "styled-components";
import RoleDice from "./RoleDice";

const GamePlay = () => {
    const arrNums = [1, 2, 3, 4, 5, 6];
    const [selectedNum, setSelectedNum] = useState();
    const [showErrorMessage, setShowErrorMessage] = useState(false);
    const [totalScore, setTotalScore] = useState(0);
    const [showRules, setShowRules] = useState(true);
    const [currentDice, setCurrentDice] = useState(1);

    const handleClick = (num) => {
        setShowErrorMessage(false);
        setSelectedNum(num);
    };
    const RollDice = () => {
        if (selectedNum === undefined) {
            setShowErrorMessage(true);
            return;
        }
        setShowErrorMessage(false);
        const randomNumber = Math.floor(Math.random() * 6) + 1;
        setCurrentDice(randomNumber);

        if (selectedNum === randomNumber) {
            setTotalScore((prev) => prev + selectedNum);
        } else {
            setTotalScore((prev) => prev - 1);
        }
        setSelectedNum(undefined);
    };

    return (
        <Main>
            <GameHeader>
                <Scoring>
                    <h1>{totalScore}</h1>
                    <p>Total Score</p>
                </Scoring>
                <NumberPick>
                    {showErrorMessage && (
                        <ErrorMessage>
                            <p>You didn't select any number</p>
                        </ErrorMessage>
                    )}
                    <Numbers>
                        {arrNums.map((num, i) => (
                            <Box
                                key={num}
                                isSelected={num === selectedNum}
                                onClick={() => handleClick(num)}
                            >
                                {num}
                            </Box>
                        ))}
                    </Numbers>
                    <SelectText>Select Number</SelectText>
                </NumberPick>
            </GameHeader>
            <RoleDice
                currentDice={currentDice}
                RollDice={RollDice}
                setTotalScore={setTotalScore}
                setShowRules={setShowRules}
                showRules={showRules}
            />
        </Main>
    );
};

export default GamePlay;

const Main = styled.main`
    max-width: 1280px;
`;

const GameHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    gap: 300px;
`;

const Scoring = styled.div`
  h1 {
    font-size: 100px;
    font-weight: 700;
    line-height: 100px;
  }
  p {
    font-weight: 500;
  }
`;

const NumberPick = styled.div`
  /* styles for NumberPick */
`;

const ErrorMessage = styled.div`
    p{
        font-weight: 500;
        font-size: 20px;
        color: red;
    }
`;

const Numbers = styled.div`
  display: flex;
  button {
    /* button styles */
  } 
`;

const Box = styled.button`
    all: unset;
    width: 40px;
    height: 40px;
    border: 1px solid black;
    color: ${(props) => (props.isSelected ? "white" : "black")};
    background-color: ${(props) => (props.isSelected ? "black" : "white")};
    font-weight: 700;
    font-size: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px;
    cursor: pointer;    
`;

const SelectText = styled.div`
    text-align: right;
    font-weight: 500;
`;

const Game = styled.div`
  /* styles for Game */
`;
