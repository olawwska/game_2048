import React from "react";
import styled from "styled-components";

function MyContainer() {
    return (
        <>
            <div className="container"></div>
        </>
    );
}

const Container = styled(MyContainer)`
    margin: 300px;
    width: 300px;
    height: 300px;
    background-color: gray;
`;

export default Container;
