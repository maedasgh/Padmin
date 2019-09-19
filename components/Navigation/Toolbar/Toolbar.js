import React from 'react';
import styled from "styled-components";
import DrawerToggle from '../Dashboard/DrawerToggle/DrawerToggle';

const Toolbar = styled.header`
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
const Pages =styled.h6`
    Color:black;
    font: italic small-caps bold 25px/2 cursive;
    padding:100px;
    
`;

const Search = styled.form`
  width: 100%;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  background-color: white;
  background-image: url('searchicon.png');
  background-position: 10px 10px; 
  background-repeat: no-repeat;
  padding: 12px 20px 12px 40px;
`;

const toolbar = () => (
    <Toolbar>
        <Pages>Pages</Pages>
        <Search>
            <input
                type="text" placeholder="Search.."
            />
        </Search>
    </Toolbar>
);

export default toolbar;