import React, {Component} from 'react';
import './Header.scss';
class Header extends Component {
    render() {
        let list = '';
        return <div>
            <header><h1>Pokedex</h1></header>
            <nav className="nav-bar">
                <ul className="menu">{list}</ul>
            </nav>
        </div>
    }
}

export default Header;