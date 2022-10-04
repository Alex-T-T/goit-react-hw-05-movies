import { ImHome } from "react-icons/im";
import { BiMoviePlay } from 'react-icons/bi';
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const navItems = [
    { href: 'home', text: 'Home', icon: ImHome, },
    { href: 'movies', text: 'Movies', icon: BiMoviePlay, }
]

const NavItem = styled(NavLink)`
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
        color: #000;
    }
`


const AppBar = () => {

    return (
        <header
            style={{
        
        display: 'flex',
        borderBottom: '2px solid black',
        fontSize: 24,
        color: '#010101'
      }}>
            {navItems.map(({ href, text, icon: Icon }) => <NavItem to={href} key={href}><Icon size={18}/>{ text}</NavItem> )}
        </header>
    )
}

export default AppBar