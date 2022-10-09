import { ImHome } from "react-icons/im";
import { BiMoviePlay } from 'react-icons/bi';
import { Header, NavItem, Text } from "./AppBar.styled";


const navItems = [
    { href: '/', text: 'Home', icon: ImHome, },
    { href: 'movies', text: 'Movies', icon: BiMoviePlay, }
]

const AppBar = () => {

    return (
        <Header>
            {navItems.map(({ href, text, icon: Icon }) => <li key={href}><NavItem to={href} end><Icon size={24}/><Text>{ text}</Text></NavItem></li> )}
        </Header>
    )
}

export default AppBar