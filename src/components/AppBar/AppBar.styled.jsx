import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Header = styled('header')`
    display: flex;
    justify-content: space-evenly;
    border-radius: 8px;
    border-bottom: 2px solid blue;
    font-size: 32px;
    color: #010101;
    margin-bottom: 20px;
    
`

export const NavItem = styled(NavLink)`
    display: flex;
    align-items: center;
    padding: 8px;
    border-radius: 4px;
    text-decoration: none;
    color: #000;

    &.active {
        background: linear-gradient(to right, #1488cc, #2b32b2);
        color: #fff;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: red;
    }
`
export const Text = styled('p')`
    margin-left: 5px; 
`