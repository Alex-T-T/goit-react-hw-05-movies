import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled('main')`
display: flex;
flex-direction: column;
align-items: center;
text-align: center;
margin-left: auto;
margin-right: auto;
width: 100%;
height: 100%;
`

export const NavItem = styled(NavLink)`
display: block;
width: 300px;
padding: 8px;
border-radius: 4px;
text-decoration: none;
color: #000;

    :hover,
    :focus-visible {
        background: linear-gradient(to right, #1488cc, #2b32b2);
        color: #fff;
    }
`

export const DefaultDiv = styled('div')`
position: relative;
color: blue;
font-size: 64px;
width: 100%;
height: 100vh;
`

export const Text = styled('p')`
font-size: 36px;
position: absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
`

export const Img = styled('img')`
width: 100%;
height: 100vh;
`