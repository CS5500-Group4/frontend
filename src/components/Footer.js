import React from 'react'
import styled from "styled-components";

const Footer = () => {
    return (
        <Wrapper>
            <p>San Jose, California, USA</p>
            <p>Copyright © 2022 All Rights Reserved</p>
        </Wrapper>
    );
}

const Wrapper = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    position: absolute;
    bottom: 0;

    @media screen and (max-height: 100vh) {
        position: relative;
    }

`

export default Footer