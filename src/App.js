import React from "react";
import styled from "styled-components";

const Container = styled.div`
    background-color: #fff;
    width: 50%;
    height: 100vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const SectionHeader = styled.div`
    width: 77%;
    height: 18%;
    margin: 7% 0 3% 0;
    padding: 1% 3%;
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

const GameGrid = styled(GameGridWrapper)`
    background-color: #fff;
    border: 3px solid #bfb1f8;
    border-radius: 5px;
    width: 100%;
    height: 100%;
    position: relative;
    top: -2%;
    left: -2%;
`;

const Test = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ButtonsSection = styled.div`
    width: 58%;
    display: flex;
    justify-content: space-between;
`;

const Test2 = styled.div`
    padding-top: 5%;
    display: flex;
    justify-content: space-between;
`;

function App() {
    return (
        <div>
            <Container>
                <SectionHeader>
                    <Test>
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
                    </Test>
                    <Test2>
                        <Text>
                            Zagraj w 2048<br></br> Połącz numery i dostań się do płytki 2048
                        </Text>
                        <Button>
                            <strong>New game!</strong>
                            <PinkSquare></PinkSquare>
                        </Button>
                    </Test2>
                </SectionHeader>
                <GameGridWrapper>
                    <GameGrid />
                </GameGridWrapper>
            </Container>
        </div>
    );
}
export default App;
