import styled from "styled-components"
const Start = ({toggle}) => {
  return (
    <>
    <Container>
        <img src="/images/dices 1.png" alt="" srcset="" />
        <Startdiv className="start">
            <h1>Dice Game</h1>
            <Button onClick={toggle}>Play Now</Button>
        </Startdiv>
    </Container>
    </>
  )
}

export default Start

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: space-around;
`
const Startdiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    h1{
        min-width:400px ;
        font-size:  90px;
        font-weight: 700;
        color: #000;
        white-space: nowrap;
    }
`
const Button = styled.button`
    min-width: 220px;
    min-height: 50px;
    background-color: #000;
    color: #fff;
    border-radius: 5px;
    border: 1px solid transparent;
    padding: 10px 18px;
    gap: 10px;
    font-size: 20px;
    font-weight: 600;
    font-family: "Poppins",sans-serif;
    cursor: pointer;
    transition: 0.5s all ease-in-out;
    &:hover{
        background-color: #fff;
        color: #000;
        border: 1px solid #000;
        transition: 0.5s all ease-in-out;
    }
`