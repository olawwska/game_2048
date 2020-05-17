import React from "react";
import styled from "styled-components";
import Container from "./Components/Container";

const HeaderSection = styled.div`
    width: 77%;
    height: 18%;
    margin: 7% 0 3% 0;
    padding: 1% 3%;
`;

const ScoreSection = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Logo = styled.h1`
    font-size: 8rem;
    line-height: 6.6rem;
    font-style: italic;
    color: rgba(0, 0, 0, 0.72);
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    margin: 0;
`;

const Text = styled.h2`
    font-size: 1.7rem;
    font-weight: 300;
    margin: 0;
`;

const Button = styled.button`
    width: 14rem;
    border: 2px solid black;
    border-radius: 5px;
    font-size: 1.7rem;
    line-height: 2.1rem;
    position: relative;
`;

const PinkSquare = styled.div`
    background: rgba(243, 134, 134, 0.2);
    width: 77%;
    height: 120%;
    position: absolute;
    top: -7%;
    left: 10%;
`;

const ButtonsSection = styled.div`
    width: 58%;
    display: flex;
    justify-content: space-between;
`;

const GameSection = styled.div`
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
`;

const GameGridWrapper = styled.div`
    background-color: #fff;
    border: 3px solid #bfb1f8;
    border-radius: 5px;
    width: 77%;
    height: 69%;
    position: relative;
    top: 2%;
    left: 2%;
`;

const GameGrid = styled.div`
    background-color: #fff;
    border: 3px solid #bfb1f8;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: relative;
    top: -2%;
    left: -2%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    padding: 1%;
`;

const Element = styled.div`
    width: 90%;
    height: 90%;
    font-size: 5.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: rgba(0, 0, 0, 0.8);
    background-color: #f1edff;
    border-radius: 5%;
    align-self: center;
    justify-self: center;
`;

function Root() {
    return (
        <div>
            <Container>
                <HeaderSection>
                    <ScoreSection>
                        <Logo>2048</Logo>
                        <ButtonsSection>
                            <Button>
                                Your score <br></br>
                                <strong>2644</strong>
                                <PinkSquare></PinkSquare>
                            </Button>
                            <Button>
                                Best score <br></br>
                                <strong>2644</strong>
                                <PinkSquare></PinkSquare>
                            </Button>
                        </ButtonsSection>
                    </ScoreSection>
                    <GameSection>
                        <Text>
                            Zagraj w 2048<br></br> Połącz numery i dostań się do płytki 2048!
                        </Text>
                        <Button>
                            <strong>New game!</strong>
                            <PinkSquare></PinkSquare>
                        </Button>
                    </GameSection>
                </HeaderSection>
                <GameGridWrapper>
                    <GameGrid>
                        <Element>2</Element>
                        <Element>8</Element>
                        <Element>2</Element>
                        <Element>64</Element>
                        <Element>8</Element>
                        <Element>32</Element>
                        <Element>32</Element>
                        <Element>16</Element>
                        <Element>4</Element>
                        <Element>4</Element>
                        <Element>2</Element>
                        <Element>256</Element>
                        <Element>64</Element>
                        <Element>16</Element>
                        <Element>2</Element>
                        <Element>32</Element>
                    </GameGrid>
                </GameGridWrapper>
            </Container>
        </div>
    );
}
export default Root;
