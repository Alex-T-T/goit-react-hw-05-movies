import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled('div')`
    display: flex;
    justify-content: center;
    padding: 30px;
    margin-bottom: 20px;
    font-size: 20px;
    color: #010101;
    border-radius: 8px;
    border-bottom: 2px solid blue;
    background: #fffc00;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom right, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom right, #ffffff, #fffc00); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`
export const NavItem = styled(NavLink)`
    width: 120px;
    text-align: center;
    margin-bottom: 5px;
    border: 2px solid blue;
    border-radius: 8px;
    background: #fffc00;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to left, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to left, #ffffff, #fffc00);

    &.active {
        background: linear-gradient(to right, #1488cc, #2b32b2);
        color: #fff;
    }
    :hover:not(.active),
    :focus-visible:not(.active) {
        color: red;
        background: #fffc00;  /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #ffffff, #fffc00);  /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #ffffff, #fffc00);
        transform: scale(1.02);
    }
`
export const Wrapper = styled('div')`
display: flex;
flex-direction: column;
margin-left: 30px;
`

export const Title = styled('h2')`
margin-bottom: 10px;
`

export const Text = styled('p')`
margin-bottom: 10px;
`

export const AdditionalLinks = styled('ul')`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 30px;
    margin-bottom: 20px;
    border-radius: 8px;
    border-bottom: 2px solid blue;
`