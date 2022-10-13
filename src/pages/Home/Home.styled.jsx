import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled('main')`
text-align: center;
margin-left: auto;
margin-right: auto;
border-radius: 8px;
border-bottom: 2px solid blue;
`


export const NavItem = styled(NavLink)`
display: block;
width: 300px;
padding: 8px;
border-radius: 8px;
text-decoration: none;
color: #000;

    :hover,
    :focus-visible {
        color: #fff;
        background: linear-gradient(to right, #1488cc, #2b32b2);
    }
`