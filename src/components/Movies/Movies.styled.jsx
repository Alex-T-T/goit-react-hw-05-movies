import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const NavItem = styled(NavLink)`
display: block;
width: 300px;
padding: 8px;
border-radius: 4px;
text-decoration: none;
color: #000;

    :hover,
    :focus-visible {
        color: #fff;
        background: linear-gradient(to right, #1488cc, #2b32b2);
    }
`