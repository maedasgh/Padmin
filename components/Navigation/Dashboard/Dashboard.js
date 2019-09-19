import React from 'react';
import Aux from '../../../hoc/Auxs/Auxs';
import styled from "styled-components";

const sidedrawer = styled.div`
    height: 56px;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #D7BDE2;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    box-sizing: border-box;
    z-index: 90;
`;
const sideDrawer = () => {

    return (
        <Aux>
            <div>
                <nav>
                </nav>
            </div>
        </Aux>
    );
};

export default sideDrawer;