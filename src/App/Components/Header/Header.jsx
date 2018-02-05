import React, {Component} from 'react';
// import '../ColorVariables.scss';
import './Header.scss';
import auth from '../Utilities/Authenticate';
class Header extends Component {
    render() {
        let list = '';
        let data = auth.getData();
        console.log('data', data);
        return <div>
            <header><h1>Pokedex</h1></header>
            <nav className="nav-bar">
                <ul className="menu">{list}</ul>
            </nav>
        </div>
    }
}

export default Header;